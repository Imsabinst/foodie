import React, { useState } from "react";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";

import SideNav from "../navigation";

import "antd/dist/antd.css";
import "./dashboard.css";
import ItmemRoutes from "../routes";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SideNav />
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <div className="site-layout-title">EC2 DEMO</div>
        </Header>
        <Content className="site-layout-content">
          <ItmemRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
