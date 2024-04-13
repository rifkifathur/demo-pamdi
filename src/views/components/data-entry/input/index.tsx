import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import {
  Switch,
  Card,
  Col,
  Row,
  Input,
  Select,
  Space,
  Cascader,
  Button,
  InputNumber,
  Mentions,
  Radio,
  Divider,
  Flex,
  Rate,
  Slider,
  Transfer,
  TreeSelect
} from "antd";
import { FaEye, FaEyeSlash, FaGear, FaUser } from "react-icons/fa6";
import type { SelectProps, InputNumberProps, TransferProps } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

const InputPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/input"}>Input</Link> },
  ];
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [radioDisabled, setRadioDisabled] = useState(true);
  const [sliderDisabled, setSliderDisabled] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<TransferProps['targetKeys']>([]);
  const [treeValue, setTreeValue] = useState<string>();
  const [treeValueMultiple, setTreeValueMultiple] = useState<string>();

  const onChangeSliderNumber: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  const onChangeSlider = (checked: boolean) => {
    setSliderDisabled(checked);
  };

  const toggleDisabled = () => {
    setRadioDisabled(!radioDisabled);
  };

  const onChangeTransfer: TransferProps['onChange'] = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChangeTransfer: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys,
  ) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onChangeTree = (newValue: string) => {
    setTreeValue(newValue);
  };

  const onChangeTreeMultiple = (newValue: string) => {
    setTreeValueMultiple(newValue);
  };
  return (
    <>
      <NBreadcrumb title="Input" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Input placeholder="Basic usage" />
          </Card>
          <Card
            className="mb-8"
            title="Variant Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Input placeholder="Outlined" className="my-2" />
            <Input placeholder="Filled" variant="filled" className="my-2" />
            <Input placeholder="Borderless" variant="borderless" className="my-2" />
          </Card>
          <Card
            className="mb-8"
            title="Textarea Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
          </Card>
          <Card
            className="mb-8"
            title="Password Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Input.Password placeholder="input password" />
              <Input.Password
                placeholder="input password"
                iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
              />
              <Space direction="horizontal">
                <Input.Password
                  placeholder="input password"
                  visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                />
                <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
                  {passwordVisible ? 'Hide' : 'Show'}
                </Button>
              </Space>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Input Number"
            bordered={false}
            style={{ width: "auto" }}
          >
            <InputNumber min={1} max={10} defaultValue={3} />
          </Card>
          <Card
            className="mb-8"
            title="Radio"
            bordered={false}
            style={{ width: "auto" }}
          >
            <h4 className="p-0 my-1">Basic</h4>
            <Radio>Radio</Radio>
            <Divider />
            <h4 className="p-0 my-1">Radio Disabled</h4>
            <Radio defaultChecked={false} disabled={radioDisabled}>
              Disabled
            </Radio>
            <Radio defaultChecked disabled={radioDisabled}>
              Disabled
            </Radio>
            <br />
            <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
              Toggle disabled
            </Button>
            <Divider />
            <h4 className="p-0 my-1">Radio Group</h4>
            <Radio.Group value={1}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
            </Radio.Group>
            <Divider />
            <h4 className="p-0 my-1">Radio Vertical</h4>
            <Radio.Group value={1}>
              <Space direction="vertical">
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
              </Space>
            </Radio.Group>
            <Divider />
            <h4 className="p-0 my-1">Radio Style</h4>
            <Flex vertical gap="middle">
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">Aceh</Radio.Button>
                <Radio.Button value="b">Bangka Belitung</Radio.Button>
                <Radio.Button value="c">Cirebon</Radio.Button>
                <Radio.Button value="d">Demak</Radio.Button>
              </Radio.Group>
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Switch"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Switch defaultChecked className="mx-1" />
            <Switch disabled className="mx-1" />
          </Card>
          <Card
            className="mb-8"
            title="Transfer"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Transfer
              dataSource={mockData}
              titles={['Source', 'Target']}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={onChangeTransfer}
              onSelectChange={onSelectChangeTransfer}
              render={(item) => item.title}
            />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Size Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Input size="large" placeholder="large size" prefix={<FaUser />} />
            <br />
            <br />
            <Input placeholder="default size" prefix={<FaUser />} />
            <br />
            <br />
            <Input size="small" placeholder="small size" prefix={<FaUser />} />
          </Card>
          <Card
            className="mb-8"
            title="Pre / Post tab Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
              <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
              <Input addonAfter={<FaGear />} defaultValue="mysite" />
              <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
              <Input
                addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
                defaultValue="mysite"
              />
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="OTP Input"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <h3>With formatter (Upcase)</h3>
              <Input.OTP formatter={(str) => str.toUpperCase()} />
              <h3>With Disabled</h3>
              <Input.OTP disabled />
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Input Mention"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Mentions
              style={{ width: '100%' }}
              defaultValue="@afc163"
              options={[
                {
                  value: 'afc163',
                  label: 'afc163',
                },
                {
                  value: 'zombieJ',
                  label: 'zombieJ',
                },
                {
                  value: 'yesmeck',
                  label: 'yesmeck',
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Rate"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Rate />
            <br /><br />
            <Rate allowHalf defaultValue={2.5} />
            <br /><br />
            <Rate defaultValue={5} />
          </Card>
          <Card
            className="mb-8"
            title="Select"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Select
              defaultValue="lucy"
              style={{ width: 150 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 150, margin: '0 5px' }}
              loading
              options={[{ value: 'lucy', label: 'Lucy' }]}
            />
            <br /><br />
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              options={options}
            />
          </Card>
          <Card
            className="mb-8"
            title="Slider"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Slider defaultValue={30} disabled={sliderDisabled} />
            <Slider range defaultValue={[20, 50]} disabled={sliderDisabled} />
            Disabled: <Switch size="small" checked={sliderDisabled} onChange={onChangeSlider} />
            <br />
            <br />
            <Flex justify="space-between">
              <Slider
                style={{ width: 200 }}
                min={1}
                max={20}
                onChange={onChangeSliderNumber}
                value={typeof inputValue === 'number' ? inputValue : 0}
              />
              <InputNumber
                min={1}
                max={20}
                style={{ margin: '0 16px' }}
                value={inputValue}
                onChange={onChangeSliderNumber}
              />
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Tree"
            bordered={false}
            style={{ width: "auto" }}
          >
            <TreeSelect
              showSearch
              style={{ width: '100%' }}
              value={treeValue}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="Please select"
              allowClear
              treeDefaultExpandAll
              onChange={onChangeTree}
              treeData={treeData}
            />
            <br /><br />
            <TreeSelect
              showSearch
              style={{ width: '100%' }}
              value={treeValueMultiple}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="Please select"
              allowClear
              multiple
              treeDefaultExpandAll
              onChange={onChangeTreeMultiple}
              treeData={treeData}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default InputPage;
