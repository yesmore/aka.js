import { createServer } from 'vite';
import pluginReact from '@vitejs/plugin-react';
import { pluginIndexHtml } from './plugin-aka/indexHtml';
import { pluginConfig } from './plugin-aka/config';
import { PACKAGE_ROOT } from './constants';
import { resolveConfig } from './configParser';

/**
 * 开发阶段使用的 HTTP Server:
 * - Compile the resource, and then return the compiled product to the browser.
 * - Implement the module HMR, and push the update to the browser when the file changes.
 * - Static resource services, such as support for accessing static resources such as images.
 */
export async function createDevServer(
  root: string,
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development');
  // console.log(config);

  return createServer({
    root: PACKAGE_ROOT,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config, restartServer)
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
