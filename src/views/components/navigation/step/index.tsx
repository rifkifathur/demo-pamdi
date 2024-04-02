import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Steps, theme, message, Popover, Divider } from "antd";
import type { StepsProps } from "antd";
import {
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";

const description = "This is a description.";
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const customDot: StepsProps["progressDot"] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const StepPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Navigation" },
    { title: <Link to={"/components/navigation/step"}>Step</Link> },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <>
      <NBreadcrumb title="Step" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <Card
            className="mb-8"
            title="Basic step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps
              current={1}
              items={[
                {
                  title: "Finished",
                  description,
                },
                {
                  title: "In Progress",
                  description,
                  subTitle: "Left 00:00:08",
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Mini step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps
              size="small"
              current={1}
              items={[
                {
                  title: "Finished",
                },
                {
                  title: "In Progress",
                },
                {
                  title: "Waiting",
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="With icon step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps
              items={[
                {
                  title: "Login",
                  status: "finish",
                  icon: <UserOutlined />,
                },
                {
                  title: "Verification",
                  status: "finish",
                  icon: <SolutionOutlined />,
                },
                {
                  title: "Pay",
                  status: "process",
                  icon: <LoadingOutlined />,
                },
                {
                  title: "Done",
                  status: "wait",
                  icon: <SmileOutlined />,
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Switch step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Card>
          <Card
            className="mb-8"
            title="Vertical step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps
              direction="vertical"
              current={1}
              items={[
                {
                  title: "Finished",
                  description,
                },
                {
                  title: "In Progress",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Error step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps
              current={1}
              status="error"
              items={[
                {
                  title: "Finished",
                  description,
                },
                {
                  title: "In Process",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Dot step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps
              current={1}
              progressDot={customDot}
              items={[
                {
                  title: "Finished",
                  description,
                },
                {
                  title: "In Progress",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Clickable step"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Steps
              current={current}
              onChange={onChange}
              items={[
                {
                  title: "Step 1",
                  description,
                },
                {
                  title: "Step 2",
                  description,
                },
                {
                  title: "Step 3",
                  description,
                },
              ]}
            />

            <Divider />

            <Steps
              current={current}
              onChange={onChange}
              direction="vertical"
              items={[
                {
                  title: "Step 1",
                  description,
                },
                {
                  title: "Step 2",
                  description,
                },
                {
                  title: "Step 3",
                  description,
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StepPage;
