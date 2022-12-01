import { Plugin } from 'vite';
import { readFile } from 'fs/promises';
import { DEFAULT_HTML_PATH, CLIENT_ENTRY_PATH } from '../constants';

// Parse the template.html file to the root url of the app.
export function pluginIndexHtml(): Plugin {
  return {
    name: 'aka:index-html',
    apply: 'serve',
    // Auto inject '<script></script>' tag into the root of the app(template.html).
    // replace  '<script type="module" src="/src/runtime/client-entry.tsx"></script>'
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: `/@fs/${CLIENT_ENTRY_PATH}`
            },
            injectTo: 'body'
          }
        ]
      };
    },
    // parse template.html file and render at root url.
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFile(DEFAULT_HTML_PATH, 'utf-8');

          try {
            // HMR support
            html = await server.transformIndexHtml(
              req.url,
              html,
              req.originalUrl
            );

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
          } catch (e) {
            return next(e);
          }
        });
      };
    }
  };
}
