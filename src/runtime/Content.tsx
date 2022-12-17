import { useRoutes } from 'react-router-dom';
import { routes } from 'aka:routes';

// 约定式路由
// const routes = [
//   {
//     path: '/guide',
//     element: <Index />
//   },
//   {
//     path: '/guide/a',
//     element: <A />
//   },
//   {
//     path: '/b',
//     element: <B />
//   }
// ];
console.log(routes);

export const Content = () => {
  const routeElement = useRoutes(routes);
  return routeElement;
};
