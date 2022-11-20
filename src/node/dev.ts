import { createServer } from "vite";
import { pluginIndexHtml } from "./plugin-aka/indexHtml";

export function createDevServer(root: string) {
  return createServer({
    root,
    plugins: [pluginIndexHtml()],
  });
}
