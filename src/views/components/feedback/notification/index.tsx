import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Space, Divider, notification, } from "antd";
import React, { useMemo } from "react";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import type { NotificationArgsProps } from 'antd';
import { FaFaceSmile } from "react-icons/fa6";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Context = React.createContext({ name: 'Default' });
const NotificationPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/feedback/notification"}>Notification</Link> },
  ];

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  const openNotificationWithCloseBtn = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
    });
  };

  const openNotificationCustomIcon = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <FaFaceSmile style={{ color: '#108ee9' }} />,
    });
  };

  return (
    <>
      <NBreadcrumb title="Notification" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Notification"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Context.Provider value={contextValue}>
              {contextHolder}
              <Space>
                <Button
                  type="primary"
                  onClick={() => openNotification('topLeft')}
                  icon={<RadiusUpleftOutlined />}
                >
                  topLeft
                </Button>
                <Button
                  type="primary"
                  onClick={() => openNotification('topRight')}
                  icon={<RadiusUprightOutlined />}
                >
                  topRight
                </Button>
              </Space>
              <Divider />
              <Space>
                <Button
                  type="primary"
                  onClick={() => openNotification('bottomLeft')}
                  icon={<RadiusBottomleftOutlined />}
                >
                  bottomLeft
                </Button>
                <Button
                  type="primary"
                  onClick={() => openNotification('bottomRight')}
                  icon={<RadiusBottomrightOutlined />}
                >
                  bottomRight
                </Button>
              </Space>
            </Context.Provider>
          </Card>
          <Card
            className="mb-8"
            title="With Close Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            {contextHolder}
            <Button type="primary" onClick={openNotificationWithCloseBtn}>
              Open the notification box
            </Button>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="With icon"
            bordered={false}
            style={{ width: "auto" }}
          >
            {contextHolder}
            <Space>
              <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
              <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
              <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
              <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Custom icon"
            bordered={false}
            style={{ width: "auto" }}
          >
            {contextHolder}
            <Button type="primary" onClick={openNotificationCustomIcon}>
              Open the notification box
            </Button>
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default NotificationPage;
