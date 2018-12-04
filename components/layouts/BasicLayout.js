import Head from 'next/head';
import Link from 'next/link';
import PageHeader from './PageHeader';
import MenuContext from './MenuContext';
import '../../asserts/styles.less';
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Dropdown,
  Avatar
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default ({ children }) =>
  <div>
    <Head>
      <meta charSet='utf-8' />
      <title>远昊智慧校园</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Layout>
      <PageHeader/>
      <Layout>
        <Sider className="sider" >
          <MenuContext />
        </Sider>
        <Layout className="content-container">
          <div className="page-nav">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Icon type="home" />
                <span>首页</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>我的学校</Breadcrumb.Item>
              <Breadcrumb.Item>人员管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Content className="content" >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
