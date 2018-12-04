import Link from 'next/link';
import {
  Layout,
  Menu,
  Icon,
  Dropdown,
  Avatar
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const topDrop = (
  <Menu>
    <Menu.Item>
      <Icon type="setting" />
      <span>个人信息</span>
    </Menu.Item>
    <Menu.Item>
      <Icon type="logout" />
      <span>退出登录</span>
    </Menu.Item>
  </Menu>
);

export default PageHeader =>
  <Header className="header">
    <div className="logo">
      <Link href="/">
        <a><img src="/static/img/logo.png" alt="远昊智慧校园"/></a>
      </Link>
    </div>
    <div className="fn-fr">
      <Dropdown overlay={topDrop} placement="bottomRight">
        <span className="dropdown-menu"><Avatar size="large" icon="user" />张三2</span>
      </Dropdown>
    </div>
  </Header>
