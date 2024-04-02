import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, AutoComplete, Input, Checkbox } from "antd";
import type { DefaultOptionType } from 'antd/es/select';
import { FaUser } from "react-icons/fa6";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const { TextArea } = Input;
const CheckboxPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/checkbox"}>Checkbox</Link> },
  ];
  const optionsCaseSensitive = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];
  const [value, setValue] = useState('');
  const [options1, setOptions1] = useState<{ value: string }[]>([]);
  const [options2, setOptions2] = useState<{ value: string }[]>([]);
  const [cusOptions, setCusOptions] = React.useState<DefaultOptionType[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const handleSearchCusOptions = (value: string) => {
    setCusOptions(() => {
      if (!value || value.includes('@')) {
        return [];
      }
      return ['gmail.com', '163.com', 'qq.com'].map<DefaultOptionType>((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log('handleKeyPress', ev);
  };

  const renderTitle = (title: string) => (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
  
  const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <FaUser /> {count}
        </span>
      </div>
    ),
  });
  
  const optionsLookup = [
    {
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)],
    },
  ];
  return (
    <>
      <NBreadcrumb title="Checkbox" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Checkbox"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Checkbox >Checkbox</Checkbox>
          </Card>
          <Card
            className="mb-8"
            title="Customize Input Auto Complete"
            bordered={false}
            style={{ width: "auto" }}
          >
            <AutoComplete
              options={options1}
              style={{ width: "90%" }}
              onSelect={onSelect}
              onSearch={(text) => setOptions1(getPanelValue(text))}
            >
              <TextArea
                placeholder="input here"
                className="custom"
                style={{ height: 50, }}
                onKeyPress={handleKeyPress}
              />
            </AutoComplete>
          </Card>
          <Card
            className="mb-8"
            title="Lookup Auto Complete"
            bordered={false}
            style={{ width: "auto" }}
          >
            <AutoComplete
              popupClassName="certain-category-search-dropdown"
              popupMatchSelectWidth={500}
              style={{ width: 250 }}
              options={optionsLookup}
            >
              <Input.Search size="large" placeholder="input here" />
            </AutoComplete>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Customize Auto Complete"
            bordered={false}
            style={{ width: "auto" }}
          >
            <AutoComplete
              style={{ width: "90%" }}
              onSearch={handleSearchCusOptions}
              placeholder="input here"
              options={cusOptions}
            />
          </Card>
          <Card
            className="mb-8"
            title="Non-Case-Sensitive Auto Complete"
            bordered={false}
            style={{ width: "auto" }}
          >
            <AutoComplete
              style={{ width: "90%" }}
              options={optionsCaseSensitive}
              placeholder="try to type `b`"
              filterOption={(inputValue, option) =>
                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CheckboxPage;
