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
  username?: string;
  password?: string;
  remember?: string;
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
                    <FaCircleDot className="mr-1" /> Developer
                  </Flex>
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
        <Col className="gutter-row" xs={24} lg={24}>
          <Card title="Profile Details">
            {/* <Row className="mb-4">
              <Col lg={8}>
                <span>Name</span>
              </Col>
              <Col lg={8}>
                <span>John Smith</span>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col lg={8}>
                <span>Job Title</span>
              </Col>
              <Col lg={8}>
                <span>Developer</span>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col lg={8}>
                <span>E-mail</span>
              </Col>
              <Col lg={8}>
                <span>john.smith@mail.com</span>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col lg={8}>
                <span>Location</span>
              </Col>
              <Col lg={8}>
                <span>Indonesia</span>
              </Col>
            </Row>
            <Divider />
            <Flex justify="flex-end">
              <Button className="mx-2" size="large">
                Cancel
              </Button>
              <Button className="mx-2" size="large" type="primary">
                Save
              </Button>
            </Flex> */}
            <Form
              name="basic"
              labelCol={{ span: 2 }}
              wrapperCol={{ span: 8, offset:4 }}
              style={{ backgroundColor:"red" }}
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
              <Divider />
              <Form.Item wrapperCol={{ offset: 20 }}>
                <Button type="primary">
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
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
