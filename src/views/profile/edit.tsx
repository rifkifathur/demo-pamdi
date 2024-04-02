import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Image,
  Flex,
  Button,
  Divider,
  Form,
  Input,
  type FormProps,
  message
} from "antd";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

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

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  return (
    <>
      {contextHolder}
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
          <Form
            name="basic"
            labelAlign="left"
            labelCol={{ xs: { span: 24 }, md: { span: 24 }, lg: { span: 2 } }}
            wrapperCol={{ xs: { span: 24 }, lg: { span: 8, offset: 4 } }}
            initialValues={{
              name: "John Smith",
              email: "john.smith@mail.com",
              location: "Indonesia"
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Card
              title="Profile Details"
            // actions={[
            //   <Link to={"/profile"}>
            //     <Button className="mx-1" type="primary">
            //       Cancel
            //     </Button>
            //   </Link>,
            //   <Button className="mx-1" type="primary" htmlType="submit">
            //     Submit
            //   </Button>,
            // ]}
            >
              <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Location"
                name="location"
                rules={[{ required: true, message: 'Please input your location!' }]}
              >
                <Input placeholder="Location" />
              </Form.Item>
              <Divider />
              <Flex justify="end">
                <Link to={"/profile"}>
                  <Button className="mx-1" type="default">
                    Cancel
                  </Button>
                </Link>
                <Button className="mx-1" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Flex>
            </Card>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default EditProfilePage;
