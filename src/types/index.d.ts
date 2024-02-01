export {};

declare global {
  interface Window {
    _LTracker: any; // 👈️ turn off type checking
  }
}
