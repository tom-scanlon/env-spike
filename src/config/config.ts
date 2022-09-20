import type { Config } from "../types/config";

// Support window.config in TS
declare global {
  interface Window { swConfig: Config; }
}

export function isClientSide() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}

export async function init(): Promise<Config> {
  // Need to split the path like below so webpack understands what we're
  // trying to do: https://github.com/webpack/webpack/issues/6680#issuecomment-370800037
  const { config } = await import("./" + process.env.HOST + ".ts");

  return config;
}

export async function get(): Promise<Config> {
  if (!isClientSide()) {
    const config = await init();
    return config;
  }

  return window.swConfig;
}

/**
 * This is a sample function performing an isomorphic retrieval of a
 * config value.
 */
export async function getIdcta(): Promise<{ url: string }> {
  const config = await get();
  return config.idcta;
}