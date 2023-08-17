import { Button, Layout, Row, Modal } from "antd";
import React, { FC } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";

const Event: FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setOpen(!open)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        open={open}
        footer={null}
        onCancel={() => setOpen(!open)}
      >
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;
