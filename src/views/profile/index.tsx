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
} from "antd";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const ProfilePage = () => {
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
                <Flex wrap="wrap" className="mt-6 md:mt-10 justify-center md:justify-start">
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
          <Card
            title="Profile Details"
            extra={
              <Link to={"/profile/edit"}>
                <Button type="primary">Edit</Button>
              </Link>
            }
          >
            <Row className="mb-4">
              <Col xs={24} lg={8}>
                <span className="text-slate-500/75">Name</span>
              </Col>
              <Col xs={24} lg={8}>
                <span>John Smith</span>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={24} lg={8}>
                <span className="text-slate-500/75">E-mail</span>
              </Col>
              <Col xs={24} lg={8}>
                <span>john.smith@mail.com</span>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={24} lg={8}>
                <span className="text-slate-500/75">Location</span>
              </Col>
              <Col xs={24} lg={8}>
                <span>Indonesia</span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProfilePage;
