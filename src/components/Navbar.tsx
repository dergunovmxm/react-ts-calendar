import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";

const Navbar: FC = () => {
  const router = useNavigate();
  const auth = true;
  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>Derga</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={() => console.log("Выход")}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <>
            <div style={{ color: "white" }}>Derga</div>
              <Menu.Item key={1} onClick={() => router(RouteNames.LOGIN)}>
                Логин
              </Menu.Item>
            </>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
