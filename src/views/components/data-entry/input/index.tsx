import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Input, Select, Space, Cascader, Button } from "antd";
import { FaEye, FaEyeSlash, FaGear, FaUser } from "react-icons/fa6";

const { Option } = Select;
const { TextArea } = Input;
const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const InputPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/input"}>Input</Link> },
  ];  
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <>
      <NBreadcrumb title="Input" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Input placeholder="Basic usage" />
          </Card>
          <Card
            className="mb-8"
            title="Variant Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Input placeholder="Outlined" className="my-2"/>
            <Input placeholder="Filled" variant="filled" className="my-2"/>
            <Input placeholder="Borderless" variant="borderless" className="my-2"/>
          </Card>
          <Card
            className="mb-8"
            title="Textarea Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
          </Card>
          <Card
            className="mb-8"
            title="Password Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Input.Password placeholder="input password" />
              <Input.Password
                placeholder="input password"
                iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
              />
              <Space direction="horizontal">
                <Input.Password
                  placeholder="input password"
                  visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                />
                <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
                  {passwordVisible ? 'Hide' : 'Show'}
                </Button>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Size Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Input size="large" placeholder="large size" prefix={<FaUser />} />
            <br />
            <br />
            <Input placeholder="default size" prefix={<FaUser />} />
            <br />
            <br />
            <Input size="small" placeholder="small size" prefix={<FaUser />} />
          </Card>
          <Card
            className="mb-8"
            title="Pre / Post tab Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
              <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
              <Input addonAfter={<FaGear />} defaultValue="mysite" />
              <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
              <Input
                addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
                defaultValue="mysite"
              />
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="OTP Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <h3>With formatter (Upcase)</h3>
              <Input.OTP formatter={(str) => str.toUpperCase()} />
              <h3>With Disabled</h3>
              <Input.OTP disabled />
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default InputPage;
