import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import legacy from "@vitejs/plugin-legacy";
import { fileURLToPath } from "node:url";
import fs from "fs";
const MODULES_MASTER = ["account", "product", "car"];
const readAllFile = (result = [], folder) => {
  if (!folder) return result;
  fs.readdirSync(folder).forEach((file) => {
    const fullPath = `${folder}/${file}`;
    let stats = fs.statSync(fullPath);
    if (stats.isFile()) {
      result.push(fullPath);
    } else {
      readAllFile(result, fullPath);
    }
  });
  return result;
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const modules = env.VITE_MODULES ? env.VITE_MODULES.split(",") : [];
  const filesNeedToExclude = [];
  if (modules.length !== 0) {
    MODULES_MASTER.forEach((_module) => {
      if (!modules.includes(_module)) {
        filesNeedToExclude.push(`src/modules/${_module}`);
      }
    });
  }

  const urlToPath = filesNeedToExclude.map((src) => {
    return fileURLToPath(new URL(src, import.meta.url));
  });
  const fileExclude = [];
  urlToPath.forEach((path) => {
    fileExclude.push(...readAllFile([], path));
  });
  console.log("fileExclude", fileExclude);
  // console.log('filesPathToExclude', filesPathToExclude)
  return {
    plugins: [
      legacy({
        polyfills: ["es.promise.finally"],
        targets: ["defaults"],
      }),
      vue(),
    ],
    resolve: {
      alias: [
        {
          find: "~",
          replacement: path.resolve(__dirname, ""),
        },
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    server: {
      host: "0.0.0.0",
      port: 3002,
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        external: fileExclude,
        input: {
          main: "./index.html",
          // product: "./modules/product/main.ts",
          // account: "./modules/account/main.ts",
        },
      },
    },
  };
});
