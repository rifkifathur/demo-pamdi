import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Avatar, Badge, Button, Card, Col, Row, Space, Tooltip} from "antd";
import { FaBaseball, FaUser, FaUserAstronaut } from "react-icons/fa6";
import { useState } from "react";

const AvatarPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/avatar"}>Avatar</Link> },
  ];
  
  const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
  const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
  const GapList = [4, 3, 2, 1];

  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);

  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
  };

  return (
    <>
      <NBreadcrumb title="Avatar" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Avatar"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar size={64} icon={<FaUser />} />
                <Avatar size="large" icon={<FaUser />} />
                <Avatar icon={<FaUser />} />
                <Avatar size="small" icon={<FaUser />} />
                <Avatar size={14} icon={<FaUser />} />
              </Space>
              <Space wrap size={16}>
                <Avatar shape="square" size={64} icon={<FaUserAstronaut />} />
                <Avatar shape="square" size="large" icon={<FaUserAstronaut />} />
                <Avatar shape="square" icon={<FaUserAstronaut />} />
                <Avatar shape="square" size="small" icon={<FaUserAstronaut />} />
                <Avatar shape="square" size={14} icon={<FaUserAstronaut />} />
              </Space>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Auto Size Avatar"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large">
              {user}
            </Avatar>
            <Button
              size="small"
              style={{ margin: '0 16px', verticalAlign: 'middle' }}
              onClick={changeUser}
            >
              ChangeUser
            </Button>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Type Avatar"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space size={16} wrap>
              <Avatar icon={<FaUser />} />
              <Avatar>U</Avatar>
              <Avatar size={40}>USER</Avatar>
              <Avatar src={url} />
              <Avatar src={<img src={url} alt="avatar" />} />
              <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<FaUser />} />
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
            title="Avatar Group"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Avatar.Group>
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              <a href="https://ant.design">
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              </a>
              <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<FaUser />} />
              </Tooltip>
              <Avatar style={{ backgroundColor: '#1677ff' }} icon={<FaBaseball />} />
            </Avatar.Group>
            <br />
            <br />
            <Avatar.Group shape="square">
              <Avatar style={{ backgroundColor: '#fde3cf' }}>A</Avatar>
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<FaUser />} />
              <Avatar style={{ backgroundColor: '#1677ff' }} icon={<FaBaseball />} />
            </Avatar.Group>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AvatarPage;
