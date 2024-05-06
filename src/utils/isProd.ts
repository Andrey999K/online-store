declare global {
  interface ImportMeta {
    env: {
      MODE: string;
    };
  }
}

export const isProd = (): boolean => {
  return import.meta.env.MODE === "production";
};
