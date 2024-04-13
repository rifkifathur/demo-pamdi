import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Avatar, Badge, Button, Card, Col, Row, Space, Switch } from "antd";
import { FaClock, FaMinus, FaPlus, FaQuestion, FaUser } from "react-icons/fa6";
import { useState } from "react";

const ButtonGroup = Button.Group;

const BadgePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/badge"}>Badge</Link> },
  ];

  const [show, setShow] = useState(true);
  const [showDynamic, setShowDynamic] = useState(true);
  const [count, setCount] = useState(5);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };

  const onChange = (checked: boolean) => {
    setShowDynamic(checked);
  };

  return (
    <>
      <NBreadcrumb title="Badge" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Badge"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space size="middle">
              <Badge count={5}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={0} showZero>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={<FaClock style={{ color: '#f5222d' }} />}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Overflow Badge"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space size="large">
              <Badge count={99}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={100}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={99} overflowCount={10}>
                <Avatar shape="square" size="large" />
              </Badge>
              <Badge count={1000} overflowCount={999}>
                <Avatar shape="square" size="large" />
              </Badge>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Dynamic Badge"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Space size="large">
                <Badge count={count}>
                  <Avatar shape="square" size="large" />
                </Badge>
                <ButtonGroup>
                  <Button onClick={decline} icon={<FaMinus />} />
                  <Button onClick={increase} icon={<FaPlus />} />
                  <Button onClick={random} icon={<FaQuestion />} />
                </ButtonGroup>
              </Space>
              <Space size="large">
                <Badge dot={showDynamic}>
                  <Avatar shape="square" size="large" />
                </Badge>
                <Switch onChange={onChange} checked={showDynamic} />
              </Space>
            </Space>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Standalone badge"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space>
              <Switch checked={show} onChange={() => setShow(!show)} />
              <Badge count={show ? 11 : 0} showZero color='#faad14' />
              <Badge count={show ? 25 : 0} />
              <Badge count={show ? <FaClock style={{ color: '#f5222d' }} /> : 0} />
              <Badge
                className="site-badge-count-109"
                count={show ? 109 : 0}
                style={{ backgroundColor: '#52c41a' }}
              />
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Avatar With Badge"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space size={24}>
              <Badge count={1}>
                <Avatar shape="square" icon={<FaUser />} />
              </Badge>
              <Badge dot>
                <Avatar shape="square" icon={<FaUser />} />
              </Badge>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Ribbon Badge"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Badge.Ribbon text="Hippies">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="Hippies" color="pink">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="Hippies" color="red">
                <Card title="Pushes open the window" size="small">
                  and raises the spyglass.
                </Card>
              </Badge.Ribbon>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BadgePage;
