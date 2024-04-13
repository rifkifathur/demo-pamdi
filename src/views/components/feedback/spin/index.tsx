import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Flex, Progress, Tooltip, Spin, Alert, Switch } from "antd";
import React, { useState } from "react";
import type { ProgressProps } from 'antd';
import { green, red } from '@ant-design/colors';
import { LoadingOutlined } from '@ant-design/icons';

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

const conicColors: ProgressProps['strokeColor'] = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};

const SpinPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/feedback/spin"}>Spin</Link> },
  ];

  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <NBreadcrumb title="Spin" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Spin />
          </Card>
          <Card
            className="mb-8"
            title="Customize description"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" vertical>
              <Flex gap="small">
                <Spin tip="Loading" size="small">
                  <div className="p-[50px] bg-slate-400 border-[4px]" />
                </Spin>
                <Spin tip="Loading">
                  <div className="p-[50px] bg-slate-400 border-[4px]" />
                </Spin>
                <Spin tip="Loading" size="large">
                  <div className="p-[50px] bg-slate-400 border-[4px]" />
                </Spin>
              </Flex>
              <Spin tip="Loading...">
                <Alert
                  message="Alert message title"
                  description="Further details about the context of this alert."
                  type="info"
                />
              </Spin>
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Custom indicator"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Size"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex align="center" gap="middle">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Progress with succes segmment"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Spin spinning={loading}>
              <Alert
                type="info"
                message="Alert message title"
                description="Further details about the context of this alert."
              />
            </Spin>
            <div style={{ marginTop: 16 }}>
              Loading state：
              <Switch checked={loading} onChange={setLoading} />
            </div>
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default SpinPage;
