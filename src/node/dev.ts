import { createServer } from 'vite';
import { pluginIndexHtml } from './plugin-aka/indexHtml';
import pluginReact from '@vitejs/plugin-react';
import { PACKAGE_ROOT } from './constants';

/**
 * 开发阶段使用的 HTTP Server:
 * - Compile the resource, and then return the compiled product to the browser.
 * - Implement the module HMR, and push the update to the browser when the file changes.
 * - Static resource services, such as support for accessing static resources such as images.
 */
export function createDevServer(root: string) {
  return createServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
