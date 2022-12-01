/**
 * SSR(服务端) 的入口
 */
import { App } from './app';
import { renderToString } from 'react-dom/server';

// For ssr component render
export function render() {
  return renderToString(<App />);
}
