import { get } from "../config/config"

export const doSomethingOutSideReact = async () => {
  const environment = await get("environment");
  console.log("HOST ENV VAR OUTSIDE OF A REACT CONTEXT::: ", environment)
};