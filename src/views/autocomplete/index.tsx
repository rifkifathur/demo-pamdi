import React, { useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Tooltip, Radio, AutoComplete, Flex } from "antd";
import {
  SearchOutlined,
  DownloadOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import type {  ConfigProviderProps } from "antd";

type SizeType = ConfigProviderProps["componentSize"];

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AutoCompletePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/autocomplete"}>Auto Complete</Link> },
  ];
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);
  const [size, setSize] = useState<SizeType>("large");
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

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
      <NBreadcrumb title="Auto Complete" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Auto Complete"
            bordered={false}
            style={{ width: "auto" }}
          >
            <AutoComplete
              options={options}
              style={{ width: "90%" }}
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
            />
            <br />
            <br />
            <AutoComplete
              value={value}
              options={anotherOptions}
              style={{ width: "90%" }}
              onSelect={onSelect}
              onSearch={(text) => setAnotherOptions(getPanelValue(text))}
              onChange={onChange}
              placeholder="control mode"
            />
          </Card>
          <Card
            className="mb-8"
            title="Size Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            
          </Card>
          <Card
            className="mb-8"
            title="Loading Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Icon Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            
          </Card>
          <Card
            className="mb-8"
            title="Disabled Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AutoCompletePage;
