import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Drawer, Radio, Row, Space, DatePicker, Form, Input, Select } from "antd";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from 'antd';

const { Option } = Select;

const DrawerPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Feedback" },
    { title: <Link to={"/components/feedback/drawer"}>Drawer</Link> },
  ];

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer1 = () => {
    setOpen1(true);
  };

  const onClose1 = () => {
    setOpen1(false);
  };

  const showDrawer2 = () => {
    setOpen2(true);
  };

  const onClose2 = () => {
    setOpen2(false);
  };

  const onChange2 = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const showDrawer3 = () => {
    setOpen3(true);
  };

  const onClose3 = () => {
    setOpen3(false);
  };
  return (
    <>
      <NBreadcrumb title="Drawer" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Drawer"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Button type="primary" onClick={showDrawer1}>
              Open
            </Button>
            <Drawer title="Basic Drawer" onClose={onClose1} open={open1}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </Card>
          <Card
            className="mb-8"
            title="Submit form drawer"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Button type="primary" onClick={showDrawer3} icon={<FaPlus />}>
              New account
            </Button>
            <Drawer
              title="Create a new account"
              width={720}
              onClose={onClose3}
              open={open3}
              styles={{
                body: {
                  paddingBottom: 80,
                },
              }}
              extra={
                <Space>
                  <Button onClick={onClose3}>Cancel</Button>
                  <Button onClick={onClose3} type="primary">
                    Submit
                  </Button>
                </Space>
              }
            >
              <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[{ required: true, message: 'Please enter user name' }]}
                    >
                      <Input placeholder="Please enter user name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="url"
                      label="Url"
                      rules={[{ required: true, message: 'Please enter url' }]}
                    >
                      <Input
                        style={{ width: '100%' }}
                        addonBefore="http://"
                        addonAfter=".com"
                        placeholder="Please enter url"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="owner"
                      label="Owner"
                      rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                      <Select placeholder="Please select an owner">
                        <Option value="xiao">Xiaoxiao Fu</Option>
                        <Option value="mao">Maomao Zhou</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="type"
                      label="Type"
                      rules={[{ required: true, message: 'Please choose the type' }]}
                    >
                      <Select placeholder="Please choose the type">
                        <Option value="private">Private</Option>
                        <Option value="public">Public</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="approver"
                      label="Approver"
                      rules={[{ required: true, message: 'Please choose the approver' }]}
                    >
                      <Select placeholder="Please choose the approver">
                        <Option value="jack">Jack Ma</Option>
                        <Option value="tom">Tom Liu</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="dateTime"
                      label="DateTime"
                      rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                      <DatePicker.RangePicker
                        style={{ width: '100%' }}
                        getPopupContainer={(trigger) => trigger.parentElement!}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="description"
                      label="Description"
                      rules={[
                        {
                          required: true,
                          message: 'please enter url description',
                        },
                      ]}
                    >
                      <Input.TextArea rows={4} placeholder="please enter url description" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Drawer>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Position drawer"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space>
              <Radio.Group value={placement} onChange={onChange2}>
                <Radio value="top">top</Radio>
                <Radio value="right">right</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="left">left</Radio>
              </Radio.Group>
              <Button type="primary" onClick={showDrawer2}>
                Open
              </Button>
            </Space>
            <Drawer
              title="Basic Drawer"
              placement={placement}
              closable={false}
              onClose={onClose2}
              open={open2}
              key={placement}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DrawerPage;
