import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Col, Row, Tabs } from "antd";

const ChatPage = () => {
  const breadcrumbItems = [
    { title: <Link to={'/apps/chat'}>Chat</Link> },
  ]
  return (
    <>
      <NBreadcrumb title="Chat" items={breadcrumbItems} />
      <Row>
        <Col>
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          style={{ height: 220 }}
          items={new Array(30).fill(null).map((_, i) => {
            const id = String(i);
            return {
              label: `Tab-${id}`,
              key: id,
              disabled: i === 28,
              children: `Content of tab ${id}`,
            };
          })}
        />
        </Col>
      </Row>
    </>
  );
};

export default ChatPage;
