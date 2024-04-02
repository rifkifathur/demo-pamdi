import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Tooltip, Radio, Flex } from "antd";
import {
  SearchOutlined,
  DownloadOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import type { ConfigProviderProps } from "antd";

type SizeType = ConfigProviderProps["componentSize"];

const ButtonPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "General" },
    { title: <Link to={"/components/general/button"}>Button</Link> },
  ];
  const [size, setSize] = useState<SizeType>("large");
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <>
      <NBreadcrumb title="Button" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Button type="primary" className="m-2">
              Primary
            </Button>
            <Button className="m-2">Default</Button>
            <Button type="dashed" className="m-2">
              Dashed
            </Button>
            <Button type="text" className="m-2">
              Text
            </Button>
            <Button type="link" className="m-2">
              Link
            </Button>
          </Card>
          <Card
            className="mb-8"
            title="Size Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Radio.Group
              className="mb-3"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <Flex gap="small" align="flex-start" vertical>
              <Flex gap="small" wrap="wrap">
                <Button type="primary" size={size}>
                  Primary
                </Button>
                <Button size={size}>Default</Button>
                <Button type="dashed" size={size}>
                  Dashed
                </Button>
                <Button type="link" size={size}>
                  Link
                </Button>
              </Flex>
              <Flex gap="small" wrap="wrap">
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  size={size}
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DownloadOutlined />}
                  size={size}
                />
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  size={size}
                />
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  size={size}
                >
                  Download
                </Button>
                <Button type="primary" icon={<DownloadOutlined />} size={size}>
                  Download
                </Button>
              </Flex>
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Loading Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" vertical>
              <Flex gap="small" align="center" wrap="wrap">
                <Button type="primary" loading>
                  Loading
                </Button>
                <Button type="primary" size="small" loading>
                  Loading
                </Button>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
              </Flex>
              <Flex gap="small" wrap="wrap">
                <Button
                  type="primary"
                  loading={loadings[0]}
                  onClick={() => enterLoading(0)}
                >
                  Click me!
                </Button>
                <Button
                  type="primary"
                  icon={<PoweroffOutlined />}
                  loading={loadings[1]}
                  onClick={() => enterLoading(1)}
                >
                  Click me!
                </Button>
                <Button
                  type="primary"
                  icon={<PoweroffOutlined />}
                  loading={loadings[2]}
                  onClick={() => enterLoading(2)}
                />
              </Flex>
            </Flex>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Icon Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle" className="m-2">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />} className="m-2">
              Search
            </Button>
            <Tooltip title="search">
              <Button
                shape="circle"
                icon={<SearchOutlined />}
                className="m-2"
              />
            </Tooltip>
            <Button icon={<SearchOutlined />} className="m-2">
              Search
            </Button>
            <Tooltip title="search">
              <Button
                shape="circle"
                icon={<SearchOutlined />}
                className="m-2"
              />
            </Tooltip>
            <Button icon={<SearchOutlined />} className="m-2">
              Search
            </Button>
            <Tooltip title="search">
              <Button
                type="dashed"
                shape="circle"
                icon={<SearchOutlined />}
                className="m-2"
              />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />} className="m-2">
              Search
            </Button>
            <Button
              icon={<SearchOutlined />}
              href="https://www.google.com"
              className="m-2"
            />
          </Card>
          <Card
            className="mb-8"
            title="Disabled Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="small" align="flex-start" vertical>
              <Flex gap="small">
                <Button type="primary">Primary</Button>
                <Button type="primary" disabled>
                  Primary(disabled)
                </Button>
              </Flex>
              <Flex gap="small">
                <Button>Default</Button>
                <Button disabled>Default(disabled)</Button>
              </Flex>
              <Flex gap="small">
                <Button type="link">Link</Button>
                <Button type="link" disabled>
                  Link(disabled)
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ButtonPage;
