import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Descriptions, Radio, Row } from "antd";
import type { RadioChangeEvent, DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];

const DescriptionPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/description"}>Description</Link> },
  ];

  const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');

  const onChange = (e: RadioChangeEvent) => {
    console.log('size checked', e.target.value);
    setSize(e.target.value);
  };

  return (
    <>
      <NBreadcrumb title="Description" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <Card className="mb-8 w-auto " title="Basic Description" bordered={false}>
            <Descriptions title="User Info" items={items} />
          </Card>
          <Card className="mb-8 w-auto" title="Border Description" bordered={false}>
            <Descriptions title="User Info" bordered items={items} />
          </Card>
          <Card className="mb-8 w-auto" title="Custom size Description" bordered={false}>
            <Radio.Group onChange={onChange} value={size}>
              <Radio value="default">default</Radio>
              <Radio value="middle">middle</Radio>
              <Radio value="small">small</Radio>
            </Radio.Group>
            <br />
            <br />
            <Descriptions
              bordered
              title="Custom Size"
              size={size}
              extra={<Button type="primary">Edit</Button>}
              items={items}
            />
          </Card>
          <Card className="mb-8 w-auto" title="Vertical Description" bordered={false}>
            <Descriptions title="User Info" layout="vertical" bordered items={items} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DescriptionPage;
