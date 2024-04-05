import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, DatePicker, Flex, TimePicker, Select, Space } from "antd";
import type { DatePickerProps, TimePickerProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const { Option } = Select;

type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
const dateFormat = 'YYYY-MM-DD';

const DatePickerPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/date-picker"}>Date Picker</Link> },
  ];
  const [type, setType] = useState<PickerType>('time');
  return (
    <>
      <NBreadcrumb title="Date Picker" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Date Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex vertical>
              <DatePicker className="my-2"/>
              <DatePicker picker="month" className="my-2"/>
              <DatePicker picker="year" className="my-2"/>
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Trigger Text Date Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space>
              <Select value={type} onChange={setType}>
                <Option value="time">Time</Option>
                <Option value="date">Date</Option>
                <Option value="week">Week</Option>
                <Option value="month">Month</Option>
                <Option value="quarter">Quarter</Option>
                <Option value="year">Year</Option>
              </Select>
              <PickerWithType type={type} onChange={(value) => console.log(value)} />
            </Space>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="DateRange Date Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex vertical>
              <RangePicker className="my-2"/>
              <RangePicker showTime className="my-2"/>
            </Flex>
          </Card>
          <Card
            className="mb-8"
            title="Disabled Date Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical" size={12}>
              <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
              <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
              <RangePicker
                defaultValue={[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]}
                disabled
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DatePickerPage;
