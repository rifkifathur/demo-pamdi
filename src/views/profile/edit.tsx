import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Pagination,
  PaginationProps,
  Image,
  Flex,
  Tabs,
  Button,
  Divider,
  Form,
  Input,
} from "antd";
import { FaCircleDot, FaEnvelope, FaLocationDot } from "react-icons/fa6";

type FieldType = {
  name?: string;
  email?: string;
  location?: string;
};

const EditProfilePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: <Link to={"/profile"}>Profile</Link> },
  ];

  return (
    <>
      <NBreadcrumb items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={24}>
          <Card className="mb-8" bordered={false} style={{ width: "auto" }}>
            <Row>
              <Col className="mx-auto md:mx-0">
                <Image
                  width={180}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
              <Col className="px-4 text-center md:text-left">
                <h2 className="m-0">John smith</h2>
                <Flex wrap="wrap" className="justify-center md:justify-start">
                  <Flex align="center" className="mr-1">
                    <FaLocationDot className="mr-1" /> Indonesia
                  </Flex>
                  <Flex align="center" className="mr-1">
                    <FaEnvelope className="mr-1" /> john.smith@mail.com
                  </Flex>
                </Flex>
                <Flex
                  wrap="wrap"
                  className="mt-6 md:mt-10 justify-center md:justify-start"
                >
                  <Card
                    className="mr-4 my-2"
                    bodyStyle={{ padding: "10px 30px" }}
                  >
                    <Flex align="center" vertical>
                      <span className="text-xl font-bold">20</span>
                      <span className="text-md">post</span>
                    </Flex>
                  </Card>
                  <Card
                    className="mr-4 my-2"
                    bodyStyle={{ padding: "10px 30px" }}
                  >
                    <Flex align="center" vertical>
                      <span className="text-xl font-bold">20</span>
                      <span className="text-md">following</span>
                    </Flex>
                  </Card>
                  <Card
                    className="mr-4 my-2"
                    bodyStyle={{ padding: "10px 30px" }}
                  >
                    <Flex align="center" vertical>
                      <span className="text-xl font-bold">20</span>
                      <span className="text-md">following</span>
                    </Flex>
                  </Card>
                </Flex>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row text-left" xs={24} lg={24}>
          <Card title="Profile Details">
            <Form
              name="basic"
              labelAlign="left"
              labelCol={{ xs: { span: 24 }, md: {span: 24}, lg: { span: 2 } }}
              wrapperCol={{ xs: { span: 24 }, lg: { span: 8, offset: 4 } }}
              // style={{ backgroundColor:"red" }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Name" defaultValue={"John smith"} value={"John smith"}/>
              </Form.Item>

              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" defaultValue={"john.smith@mail.com"} value={"John smith"}/>
              </Form.Item>
              <Form.Item<FieldType>
                label="Location"
                name="location"
                rules={[{ required: true, message: 'Please input your location!' }]}
              >
                <Input placeholder="Location" defaultValue={"Indonesia"} value={"John smith"}/>
              </Form.Item>
              <Divider />
              <Form.Item wrapperCol={{ xs: { offset: 4 }, lg: { offset: 18 } }}>
                <Link to={"/profile"}>
                  <Button className="mx-1" type="primary">
                    Cancel
                  </Button>
                </Link>
                <Button className="mx-1" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EditProfilePage;
