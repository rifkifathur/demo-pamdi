import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Collapse, Row, theme  } from "antd";
import type { CollapseProps } from 'antd';
import type { CSSProperties } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const CollapsePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/collapse"}>Collapse</Link> },
  ];

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  
  return (
    <>
      <NBreadcrumb title="Carousel" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Collapse"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Collapse items={items} defaultActiveKey={['1']} />
          </Card>
          <Card
            className="mb-8"
            title="Borderless"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Accordion"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Collapse accordion items={items} />
          </Card>
          <Card
            className="mb-8"
            title="Custom panel"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              style={{ background: token.colorBgContainer }}
              items={getItems(panelStyle)}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CollapsePage;
