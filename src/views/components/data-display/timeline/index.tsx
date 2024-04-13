import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Timeline, Radio } from "antd";
import { useState } from 'react';
import { FaFaceSmile } from "react-icons/fa6";
import type { RadioChangeEvent } from 'antd';

const TimelinePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/timeline"}>Timeline</Link> },
  ];

  const [mode, setMode] = useState<'left' | 'alternate' | 'right'>('left');

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <>
      <NBreadcrumb title="Timeline" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Timeline"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Timeline
              items={[
                {
                  children: 'Create a services site 2015-09-01',
                },
                {
                  children: 'Solve initial network problems 2015-09-01',
                },
                {
                  children: 'Technical testing 2015-09-01',
                },
                {
                  children: 'Network problems being solved 2015-09-01',
                },
              ]}
            />
          </Card>
          <Card
            className="mb-8"
            title="Last node"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Timeline
              pending="Recording..."
              reverse={false}
              items={[
                {
                  children: 'Create a services site 2015-09-01',
                },
                {
                  children: 'Solve initial network problems 2015-09-01',
                },
                {
                  children: 'Technical testing 2015-09-01',
                },
              ]}
            />
          </Card>

          <Card
            className="mb-8"
            title="Label"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Radio.Group
              onChange={onChange}
              value={mode}
              style={{
                marginBottom: 20,
              }}
            >
              <Radio value="left">Left</Radio>
              <Radio value="right">Right</Radio>
              <Radio value="alternate">Alternate</Radio>
            </Radio.Group>
            <Timeline
              mode={mode}
              items={[
                {
                  label: '2015-09-01',
                  children: 'Create a services',
                },
                {
                  label: '2015-09-01 09:12:11',
                  children: 'Solve initial network problems',
                },
                {
                  children: 'Technical testing',
                },
                {
                  label: '2015-09-01 09:12:11',
                  children: 'Network problems being solved',
                },
              ]}
            />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Color"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Timeline
              items={[
                {
                  color: 'green',
                  children: 'Create a services site 2015-09-01',
                },
                {
                  color: 'green',
                  children: 'Create a services site 2015-09-01',
                },
                {
                  color: 'red',
                  children: (
                    <>
                      <p>Solve initial network problems 1</p>
                      <p>Solve initial network problems 2</p>
                      <p>Solve initial network problems 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: 'gray',
                  children: (
                    <>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </>
                  ),
                },
                {
                  color: '#00CCFF',
                  dot: <FaFaceSmile />,
                  children: <p>Custom color testing</p>,
                },
              ]}
            />
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default TimelinePage;
