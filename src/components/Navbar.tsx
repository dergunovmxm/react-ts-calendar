import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const router = useNavigate();
  const {logout} = useActions()
  const { isAuth, user  } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Привет {user.login}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={() => logout()}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <>
              <div style={{ color: "white" }}>React-Calendar</div>
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
