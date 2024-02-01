import { CategoryTag } from "@/interfaces/image";
import { convertByteToMb } from "@/util/common";
export const MAX_IMAGE = 10;
export const EXTERNAL_LINK = "";
export const LINK_AFTER_COMPLETE = "https://lp.civicpics.jp/area";
export const FILE_SIZE_LIMIT = (10 * 1024 * 1024) as number;
export const FILE_SIZE_LIMIT_DISPLAY =
  convertByteToMb(FILE_SIZE_LIMIT, 0) + "MB";
export const FILE_TYPE_ALLOW = ["image/jpg", "image/jpeg"] as Array<string>;
export const CATEGORY_TAG = {
  INTERSECTION: {
    key: "INTERSECTION",
    displayName: "交差点",
    value: "交差点",
    tags: [
      "歩行者が危険",
      "自動車が危険",
      "自転車が危険",
      "歩車分離式信号",
      "横断歩道かすれ",
    ],
  } as CategoryTag,
  ROADWAY: {
    key: "ROADWAY",
    displayName: "車道",
    value: "車道",
    tags: [
      "歩行者が危険",
      "自動車が危険",
      "自転車が危険",
      "ひび割れ",
      "ポットホール",
      "わだち",
      "路駐",
    ],
  } as CategoryTag,
  SIDEWALK: {
    key: "SIDEWALK",
    displayName: "歩道",
    value: "歩道",
    tags: [
      "歩行者が危険",
      "自転車が危険",
      "ひび割れ",
      "わだち",
      "段差",
      "歩きづらい",
    ],
  } as CategoryTag,
  UTILITY_POLE: {
    key: "UTILITY_POLE",
    displayName: "電柱",
    value: "電柱",
    tags: ["傾き", "汚れ"],
  } as CategoryTag,
  COIN_PARKING: {
    key: "COIN_PARKING",
    displayName: "コインパーキング",
    value: "コインパーキング",
    tags: ["看板", "出入口", "パーキング内"],
  } as CategoryTag,
  CONSTRUCTION: {
    key: "CONSTRUCTION",
    displayName: "工事",
    value: "工事",
    tags: ["道路工事", "水道工事", "ガス工事", "建造物", "看板"],
  } as CategoryTag,
  ROAD_PAINT: {
    key: "ROAD_PAINT",
    displayName: "ロードペイント",
    value: "ロードペイント",
    tags: ["かすれ", "汚れ"],
  } as CategoryTag,
  SIGNAL: {
    key: "SIGNAL",
    displayName: "信号",
    value: "信号",
    tags: ["傾き", "見辛い", "汚れ", "サイクルが悪い"],
  } as CategoryTag,
  PEDESTRIAN_CROSSING: {
    key: "PEDESTRIAN_CROSSING",
    displayName: "横断歩道",
    value: "横断歩道",
    tags: ["かすれ", "汚れ"],
  } as CategoryTag,
  SIGN: {
    key: "SIGN",
    displayName: "標識",
    value: "標識",
    tags: ["傾き", "見辛い", "汚れ"],
  } as CategoryTag,
  SIGNBOARD: {
    key: "SIGNBOARD",
    displayName: "看板",
    value: "看板",
    tags: ["公園", "店舗"],
  } as CategoryTag,
};
export const C_COMPLETE_ANY_KEY: string = "complete_any";
export const MODULES_MASTER = ["account", "product", "car"];
