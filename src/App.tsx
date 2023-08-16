import React, { FC } from "react";
import { Layout } from "antd";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ login: localStorage.getItem("login" || "") } as IUser);
      setIsAuth(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
