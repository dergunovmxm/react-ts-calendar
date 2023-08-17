import { Button, DatePicker, Form, Input, Row } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required("Введите событие")]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Выберите дату" name="date">
        <DatePicker />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
