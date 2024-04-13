import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Flex, Progress, Tooltip } from "antd";
import React from "react";
import type { ProgressProps } from 'antd';
import { green, red } from '@ant-design/colors';

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

const conicColors: ProgressProps['strokeColor'] = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};

const ProgressPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/feedback/progress"}>Progress</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="Progress" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Progress bar"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" vertical>
              <Progress percent={30} />
              <Progress percent={50} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
              <Progress percent={50} showInfo={false} />
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Dashboard"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" wrap="wrap">
              <Progress type="dashboard" percent={75} />
              <Progress type="dashboard" percent={75} gapDegree={30} />
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Stroke Linecap"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex vertical gap="small">
              <Progress strokeLinecap="butt" percent={75} />
              <Flex wrap="wrap" gap="small">
                <Progress strokeLinecap="butt" type="circle" percent={75} />
                <Progress strokeLinecap="butt" type="dashboard" percent={75} />
              </Flex>
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Progress bar with steps"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" vertical>
              <Progress percent={50} steps={3} />
              <Progress percent={30} steps={5} />
              <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
              <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Progress size"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex vertical gap="middle">
              <Flex vertical gap="small" style={{ width: 300 }}>
                <Progress percent={50} />
                <Progress percent={50} size="small" />
                <Progress percent={50} size={[300, 20]} />
              </Flex>
              <Flex align="center" wrap="wrap" gap={30}>
                <Progress type="circle" percent={50} />
                <Progress type="circle" percent={50} size="small" />
                <Progress type="circle" percent={50} size={20} />
              </Flex>
              <Flex align="center" wrap="wrap" gap={30}>
                <Progress type="dashboard" percent={50} />
                <Progress type="dashboard" percent={50} size="small" />
                <Progress type="dashboard" percent={50} size={20} />
              </Flex>
              <Flex align="center" wrap="wrap" gap={30}>
                <Progress steps={3} percent={50} />
                <Progress steps={3} percent={50} size="small" />
                <Progress steps={3} percent={50} size={20} />
                <Progress steps={3} percent={50} size={[20, 30]} />
              </Flex>
            </Flex>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Circle progress"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" wrap="wrap">
              <Progress type="circle" percent={75} />
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} />
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Progress with succes segmment"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" vertical>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} success={{ percent: 30 }} />
              </Tooltip>
              <Flex gap="small" wrap="wrap">
                <Tooltip title="3 done / 3 in progress / 4 to do">
                  <Progress percent={60} success={{ percent: 30 }} type="circle" />
                </Tooltip>
                <Tooltip title="3 done / 3 in progress / 4 to do">
                  <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
                </Tooltip>
              </Flex>
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Custom line gradient"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex vertical gap="middle">
              <Progress percent={99.9} strokeColor={twoColors} />
              <Progress percent={50} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />
              <Flex gap="small" wrap="wrap">
                <Progress type="circle" percent={90} strokeColor={twoColors} />
                <Progress type="circle" percent={100} strokeColor={twoColors} />
                <Progress type="circle" percent={93} strokeColor={conicColors} />
              </Flex>
              <Flex gap="small" wrap="wrap">
                <Progress type="dashboard" percent={90} strokeColor={twoColors} />
                <Progress type="dashboard" percent={100} strokeColor={twoColors} />
                <Progress type="dashboard" percent={93} strokeColor={conicColors} />
              </Flex>
            </Flex>
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default ProgressPage;
