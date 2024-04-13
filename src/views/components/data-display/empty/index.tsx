import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Empty, Row } from "antd";
import { FaTrash } from "react-icons/fa6";

const EmptyPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/empty"}>Empty</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="Empty" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <Card className="mb-8 w-auto " title="Basic" bordered={false}>
            <Empty />
          </Card>
          <Card className="mb-8 w-auto" title="Choose Image" bordered={false}>
            <Empty image={<FaTrash className="text-[220px]" />} />
          </Card>
          <Card className="mb-8 w-auto" title="Customize" bordered={false}>
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 60 }}
              description={
                <span>
                  Customize <a href="#API">Description</a>
                </span>
              }
            >
              <Button type="primary">Create Now</Button>
            </Empty>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EmptyPage;
