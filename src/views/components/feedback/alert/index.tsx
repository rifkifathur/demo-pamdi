import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Alert, Card, Col, Row, Space } from "antd";
import { FaX } from "react-icons/fa6";

const AlertPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Feedback" },
    { title: <Link to={"/components/feedback/alert"}>Alert</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="Alert" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Alert"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Alert message="Success Text" type="success" />
          </Card>
          <Card
            className="mb-8"
            title="Closable"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert
                message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                type="warning"
                closable
              />
              <Alert
                message="Error Text"
                description="Error Description Error Description Error Description Error Description Error Description Error Description"
                type="error"
                closable
              />
              <Alert
                message="Error Text"
                description="Error Description Error Description Error Description Error Description Error Description Error Description"
                type="error"
                closable={{
                  'aria-label': 'close',
                  closeIcon: <FaX />,
                }}
              />
            </Space>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="More type"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert message="Success Text" type="success" />
              <Alert message="Info Text" type="info" />
              <Alert message="Warning Text" type="warning" />
              <Alert message="Error Text" type="error" />
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="With Icon"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert message="Success Tips" type="success" showIcon />
              <Alert message="Informational Notes" type="info" showIcon />
              <Alert message="Warning" type="warning" showIcon closable />
              <Alert message="Error" type="error" showIcon />
              <Alert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
              />
              <Alert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
              />
              <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
              />
              <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AlertPage;
