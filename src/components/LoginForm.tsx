import { Form, Input, Button } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const [loginEnter, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const {login} = useActions()
  const submit = () => {
    login(loginEnter, password)
  };
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Логин"
        name="login"
        rules={[rules.required("Введите логин!")]}
      >
        <Input
          value={loginEnter}
          onChange={(event) => setLogin(event.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Введите пароль!")]}
      >
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type={'password'}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
