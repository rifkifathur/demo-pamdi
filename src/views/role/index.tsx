import React from "react";
import { NBreadcrumb, NTable } from "../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Flex, Input, Row } from "antd";
import { FaMagnifyingGlass } from "react-icons/fa6";

const RolePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: <Link to={"/"}>User</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="User" items={breadcrumbItems} />
      <Row className="mt-8">
        <Col span={24}>
          <Card>
            <Flex justify="space-between" align="center" className="mb-3">
              <Input
                className="w-[250px] h-[35px]"
                placeholder="Search"
                prefix={<FaMagnifyingGlass className="site-form-item-icon" />}
              />
              <Button size="large" type="primary" className="m-2">
                Add Role
              </Button>
            </Flex>
            <NTable />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RolePage;
