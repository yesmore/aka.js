import { Layout } from '../theme';
import siteData from 'aka:site-data';

export function App() {
  console.log('站点数据:', siteData);
  return <Layout />;
}
