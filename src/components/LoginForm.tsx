import { Form, Input, Button } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const LoginForm: FC = () => {
  const dispatch: any = useDispatch();
  const submit = () => {
    dispatch(AuthActionCreators.login("", ""));
  };
  return (
    <Form onFinish={submit}>
      <Form.Item
        label="Логин"
        name="login"
        rules={[rules.required("Введите логин")]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Введите пароль!")]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
