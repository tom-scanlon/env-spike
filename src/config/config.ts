// Support window.config in TS
declare global {
  interface Window { swConfig: any; }
}

export function isClientSide() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}

export async function init() {
  // Need to split the path like below so webpack understands what we're
  // trying to do: https://github.com/webpack/webpack/issues/6680#issuecomment-370800037
  const { default: config } = await import("./" + process.env.HOST + ".json");

  return config;
}

export async function get(key: string): Promise<unknown> {
  if (!isClientSide()) {
    const config = await init();
    return config[key];
  }

  return window.swConfig[key];
}

/**
 * This is a sample function performing an isomorphic retrieval of a
 * config value.
 */
export async function getIdcta(): Promise<{ url: string }> {
  const idcta = get("idcta") as Promise<{ url: string }>;
  return idcta;
}