export const config = {
  environment: "local",
  idcta: {
    url: process?.env?.IDCTA_URL ?? "http://idcta.local/"
  }
};
