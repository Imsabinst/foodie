import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AppstoreAddOutlined, UnorderedListOutlined } from "@ant-design/icons";

import "./navigation.css";

const SideNav = () => {
  let location = useLocation();
  const [current, setCurrent] = useState(
    location.pathname === "/" || location.pathname === ""
      ? "/dashboard"
      : location.pathname
  );

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  function handleClick(e) {
    setCurrent(e.key);
  }

  return (
    <>
      <Menu
        onClick={handleClick}
        theme="dark"
        mode="inline"
        selectedKeys={[current]}
        style={{ padding: 24 }}
      >
        <Link to={`/`}>
          <Menu.Item key="/main" icon={<UnorderedListOutlined />}>
            Food List
          </Menu.Item>
        </Link>

        <Link to={`/addFood`}>
          <Menu.Item key="/addFood" icon={<AppstoreAddOutlined />}>
            Add Food
          </Menu.Item>
        </Link>
      </Menu>
    </>
  );
};
export default SideNav;
