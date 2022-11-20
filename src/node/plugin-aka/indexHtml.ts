import { Plugin } from "vite";
import { readFile } from "fs/promises";
import { DEFAULT_HTML_PATH } from "../constants";

// Parse the template.html file to the root url of the app.
export function pluginIndexHtml(): Plugin {
  return {
    name: "aka:index-html",
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFile(DEFAULT_HTML_PATH, "utf-8");

          try {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
          } catch (e) {
            return next(e);
          }
        });
      };
    },
  };
}
