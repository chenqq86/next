import Link from 'next/link';
import {
  Menu,
  Icon,
} from 'antd';

const { SubMenu } = Menu;

export default MenuContext =>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      className="menu"
    >
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>工作主页33</span>
      </Menu.Item>
      <SubMenu key="sub2" title={<span><Icon type="laptop" />我的学校</span>}>
        <Menu.Item key="5">基本信息</Menu.Item>
        <Menu.Item key="6">人员管理</Menu.Item>
        <Menu.Item key="7">班级管理</Menu.Item>
        <Menu.Item key="8">部门管理</Menu.Item>
      </SubMenu>
      <Menu.Item key="11">
        <Icon type="pie-chart" />
        <span>我的班级</span>
      </Menu.Item>
      <Menu.Item key="22">
        <Icon type="pie-chart" />
        <span>访客管理</span>
      </Menu.Item>
      <Menu.Item key="33">
        <Icon type="pie-chart" />
        <span>家校沟通</span>
      </Menu.Item>
      <Menu.Item key="44">
        <Icon type="pie-chart" />
        <span>个人中心</span>
      </Menu.Item>
    </Menu>
