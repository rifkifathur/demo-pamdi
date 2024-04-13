import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Popover, Row, Space, ConfigProvider } from "antd";
import { useState } from "react";

const PopoverPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/popover"}>Popover</Link> },
  ];

  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const buttonWidth = 80;
  const text = <span>Title</span>;

  return (
    <>
      <NBreadcrumb title="Popover" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Popover"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Popover
              content={content}
              title="Title"
            >
              <Button type="primary">Hover me</Button>
            </Popover>

          </Card>
          <Card
            className="mb-8"
            title="Placement"
            bordered={false}
            style={{ width: "auto" }}
          >
            <ConfigProvider
              button={{
                style: { width: buttonWidth, margin: 4 },
              }}
            >
              <div className="demo">
                <div style={{ marginInlineStart: buttonWidth + 4, whiteSpace: 'nowrap' }}>
                  <Popover placement="topLeft" title={text} content={content}>
                    <Button>TL</Button>
                  </Popover>
                  <Popover placement="top" title={text} content={content}>
                    <Button>Top</Button>
                  </Popover>
                  <Popover placement="topRight" title={text} content={content}>
                    <Button>TR</Button>
                  </Popover>
                </div>
                <div style={{ width: buttonWidth, float: 'inline-start' }}>
                  <Popover placement="leftTop" title={text} content={content}>
                    <Button>LT</Button>
                  </Popover>
                  <Popover placement="left" title={text} content={content}>
                    <Button>Left</Button>
                  </Popover>
                  <Popover placement="leftBottom" title={text} content={content}>
                    <Button>LB</Button>
                  </Popover>
                </div>
                <div style={{ width: buttonWidth, marginInlineStart: buttonWidth * 4 + 24 }}>
                  <Popover placement="rightTop" title={text} content={content}>
                    <Button>RT</Button>
                  </Popover>
                  <Popover placement="right" title={text} content={content}>
                    <Button>Right</Button>
                  </Popover>
                  <Popover placement="rightBottom" title={text} content={content}>
                    <Button>RB</Button>
                  </Popover>
                </div>
                <div style={{ marginInlineStart: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                  <Popover placement="bottomLeft" title={text} content={content}>
                    <Button>BL</Button>
                  </Popover>
                  <Popover placement="bottom" title={text} content={content}>
                    <Button>Bottom</Button>
                  </Popover>
                  <Popover placement="bottomRight" title={text} content={content}>
                    <Button>BR</Button>
                  </Popover>
                </div>
              </div>
            </ConfigProvider>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Three ways to trigger"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space wrap>
              <Popover content={content} title="Title" trigger="hover">
                <Button>Hover me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="focus">
                <Button>Focus me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="click">
                <Button>Click me</Button>
              </Popover>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Controlled Close"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Popover
              content={<a onClick={hide}>Close</a>}
              title="Title"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <Button type="primary">Click me</Button>
            </Popover>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PopoverPage;
