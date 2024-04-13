import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Avatar, Card, Col, Flex, Row, Skeleton, Switch } from "antd";
import { FaCircleDot, FaGear, FaPen } from "react-icons/fa6";

const { Meta } = Card;
const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList: Record<string, React.ReactNode> = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const CardPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/card"}>Card</Link> },
  ];

  const [loading, setLoading] = useState(true);
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');

  
  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };
  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };

  return (
    <>
      <NBreadcrumb title="Card" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <h3>Basic Card</h3>
          <Flex wrap="wrap">
            <Card className="mx-4 my-2" title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card className="mx-4 my-2" size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card className="mx-4 my-2" title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card
              className="mx-4 my-2"
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <div>
              <Switch checked={!loading} onChange={onChange} />
              <Card className="mx-4 my-2" style={{ width: 300, marginTop: 16 }} loading={loading}>
                <Meta
                  avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              <Card
                className="mx-4 my-2"
                style={{ width: 300, marginTop: 16 }}
                actions={[
                  <FaGear key="setting" />,
                  <FaPen key="edit" />,
                  <FaCircleDot key="ellipsis" />,
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Skeleton>
              </Card>
            </div>
            <Card
              className="mx-4 my-2"
              style={{ width: '100%' }}
              title="Card title"
              extra={<a href="#">More</a>}
              tabList={tabList}
              activeTabKey={activeTabKey1}
              onTabChange={onTab1Change}
            >
              {contentList[activeTabKey1]}
            </Card>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default CardPage;
