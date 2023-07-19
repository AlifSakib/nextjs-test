import { Layout, theme } from 'antd';
import RootLayout from '../../components/layouts/root-layout';
const { Header, Content, Footer } = Layout;
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}