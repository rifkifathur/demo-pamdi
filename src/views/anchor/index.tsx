import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Anchor } from "antd";

const AnchorPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Navigation" },
    { title: <Link to={"/components/navigation/anchor"}>Anchor</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="Anchor" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <Card className="mb-8 w-auto " title="Basic Anchor" bordered={false}>
            <Row className="h-[150px] relative overflow-y-scroll">
              <Col span={16}>
                <div
                  id="part-1"
                  style={{ height: "20vh", background: "rgba(255,0,0,0.02)" }}
                >
                  <h1>PART1</h1>
                </div>
                <div
                  id="part-2"
                  style={{ height: "20vh", background: "rgba(0,255,0,0.02)" }}
                >
                  <h1>PART2</h1>
                </div>
                <div
                  id="part-3"
                  style={{ height: "20vh", background: "rgba(0,0,255,0.02)" }}
                >
                  <h1>PART3</h1>
                </div>
              </Col>
            </Row>
            <Anchor
            className="absolute left-[70%] top-24"
                  items={[
                    {
                      key: "part-1",
                      href: "#part-1",
                      title: "Part 1",
                    },
                    {
                      key: "part-2",
                      href: "#part-2",
                      title: "Part 2",
                    },
                    {
                      key: "part-3",
                      href: "#part-3",
                      title: "Part 3",
                    },
                  ]}
                />
          </Card>
          <Card className="mb-8 w-auto" title="Horizontal Anchor" bordered={false}>
            <div style={{ padding: "20px" }}>
              <Anchor
                direction="horizontal"
                items={[
                  {
                    key: "part-4",
                    href: "#part-4",
                    title: "Part 4",
                  },
                  {
                    key: "part-5",
                    href: "#part-5",
                    title: "Part 5",
                  },
                  {
                    key: "part-6",
                    href: "#part-6",
                    title: "Part 6",
                  },
                ]}
              />
            </div>
            <div className="h-[150px] relative overflow-y-scroll">
              <div
                id="part-4"
                style={{                  
                  height: "20vh",
                  textAlign: "center",
                  background: "rgba(0,255,0,0.02)",
                }}
              />
              <div
                id="part-5"
                style={{                  
                  height: "20vh",
                  textAlign: "center",
                  background: "rgba(0,0,255,0.02)",
                }}
              />
              <div
                id="part-6"
                style={{                  
                  height: "20vh",
                  textAlign: "center",
                  background: "#FFFBE9",
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AnchorPage;
