declare global {
  interface ImportMeta {
    env: {
      MODE: string;
    };
  }
}

const isProd = (): boolean => {
  return import.meta.env.MODE === "production";
};

export default isProd;
