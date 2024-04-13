import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Space, message } from "antd";

const MessagePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Feedback" },
    { title: <Link to={"/components/feedback/message"}>Message</Link> },
  ];

  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const success2 = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
      duration: 10
    });
  };

  const success3 = () => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  return (
    <>
      <NBreadcrumb title="Message" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Message"
            bordered={false}
            style={{ width: "auto" }}
          >
            {contextHolder}
            <Button type="primary" onClick={info}>
              Display normal message
            </Button>
          </Card>
          <Card
            className="mb-8"
            title="Customize duration"
            bordered={false}
            style={{ width: "auto" }}
          >
            {contextHolder}
            <Button onClick={success2}>Customized display duration</Button>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Other types of message"
            bordered={false}
            style={{ width: "auto" }}
          >
            {contextHolder}
            <Space>
              <Button onClick={success}>Success</Button>
              <Button onClick={error}>Error</Button>
              <Button onClick={warning}>Warning</Button>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Loading indicator"
            bordered={false}
            style={{ width: "auto" }}
          >
            {contextHolder}
            <Button onClick={success3}>Display a loading indicator</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MessagePage;
