import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import type { MenuProps } from "antd";
import { Col, Menu, Row } from "antd";
import hanster from "@/assets/hanster.jpg";
import styles from "./styles.module.css";

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Статистика</Link>,
    key: "statistics",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="diagrams/">Графики</Link>,
    key: "diagrams",
    icon: <AppstoreOutlined />,
    disabled: true,
    title: "В разработке",
  },
];

const Layout: React.FC = () => {
  const [current, setCurrent] = useState("statistics");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Row>
        <Col flex={4}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Col>
        <Col className={styles.logo_container} flex={1}>
          <NavLink
            to={"https://www.wildberries.ru/brands/hanster"}
            target="_blank"
          >
            <img className={styles.logo} src={hanster} alt="hanster" />
          </NavLink>
        </Col>
      </Row>
      <Outlet />
    </>
  );
};

export default Layout;
