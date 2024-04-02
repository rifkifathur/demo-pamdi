import React from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Pagination,
  PaginationProps
} from "antd";

const PaginationPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Navigation" },
    { title: <Link to={"/components/navigation/pagination"}>Pagination</Link> },
  ];

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  return (
    <>
      <NBreadcrumb title="Pagination" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Pagination"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Pagination defaultCurrent={1} total={50} />
            <Pagination className="mt-3" defaultCurrent={1} total={50} disabled />
          </Card>
          <Card
            className="mb-8"
            title="Jumper pagination"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Changer pagination"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Pagination defaultCurrent={6} total={500} />
          </Card>
          <Card
            className="mb-8"
            title="Simple pagination"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Pagination simple defaultCurrent={2} total={50} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PaginationPage;
