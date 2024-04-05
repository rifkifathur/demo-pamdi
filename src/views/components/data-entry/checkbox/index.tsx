import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Checkbox, Button, Divider } from "antd";
import type { CheckboxProps, GetProp } from 'antd';

type CheckboxValueType = GetProp<typeof Checkbox.Group, 'value'>[number];
const CheckboxGroup = Checkbox.Group;

const CheckboxPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/checkbox"}>Checkbox</Link> },
  ];
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];
  
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
  
  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
  
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onCheckAll = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  
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
            title="Controlled Checkbox"
            bordered={false}
            style={{ width: "auto" }}
          >
            <p style={{ marginBottom: '20px' }}>
              <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
                {label}
              </Checkbox>
            </p>
            <p>
              <Button type="primary" size="small" onClick={toggleChecked}>
                {!checked ? 'Check' : 'Uncheck'}
              </Button>
              <Button style={{ margin: '0 10px' }} type="primary" size="small" onClick={toggleDisable}>
                {!disabled ? 'Disable' : 'Enable'}
              </Button>
            </p>
          </Card>
          <Card
            className="mb-8"
            title="Lookup Auto Complete"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
              Check all
            </Checkbox>
            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onCheckAll} />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Disbled Checkbox"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Checkbox className="mx-3" defaultChecked={false} disabled />            
            <Checkbox className="mx-3" indeterminate disabled />            
            <Checkbox className="mx-3" defaultChecked disabled />
          </Card>
          <Card
            className="mb-8"
            title="Checkbox Group"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
            <br />
            <br />
            <Checkbox.Group options={options} defaultValue={['Pear']} />
            <br />
            <br />
            <Checkbox.Group
              options={optionsWithDisabled}
              disabled
              defaultValue={['Apple']}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CheckboxPage;
