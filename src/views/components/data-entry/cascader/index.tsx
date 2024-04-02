import React, { useState } from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Cascader } from "antd";

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'A',
    label: 'A',    
    children: [
      {
        value: 'A child',
        label: 'A child',
        children: [
          {
            value: 'A sub child',
            label: 'A sub child',
          },
        ],
      },
    ],
  },
  {
    value: 'B',
    label: 'B',
    children: [
      {
        value: 'B child',
        label: 'B child',
        children: [
          {
            value: 'B sub child',
            label: 'B sub child',
          },
        ],
      },
    ],
  },
];

const CascaderPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/cascader"}>Cascader</Link> },
  ];
  const [text, setText] = useState('Unselect');

  const onChangeCustomTrigger = (_: string[], selectedOptions: Option[]) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };

  const onChange = (value: (string | number)[]) => {
    console.log(value);
  };

  const displayRender = (labels: string[]) => labels[labels.length - 1];

  return (
    <>
      <NBreadcrumb title="Cascader" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Cascader"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Cascader
              style={{width:"90%"}}
              options={options}
              onChange={onChange}
              placeholder="Please select"
            />
          </Card>
          <Card
            className="mb-8"
            title="Hover Cascader"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Cascader
              style={{width:"90%"}}
              options={options}
              expandTrigger="hover"
              displayRender={displayRender}
              onChange={onChange}
              placeholder="Please select"
            />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Cascader default value"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Cascader 
              style={{width:"90%"}}
              defaultValue={['A', 'A child', 'A sub child']} 
              options={options} 
              onChange={onChange} />
          </Card>
          <Card
            className="mb-8"
            title="Cascade Custom Trigger"
            bordered={false}
            style={{ width: "auto" }}
          >
            <span>
              {text}
              &nbsp;
              <Cascader 
                options={options} 
                onChange={() => onChangeCustomTrigger([''], options)}
              >                
                <span className="text-sky-700 cursor-pointer">Change city</span>
              </Cascader>
            </span>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CascaderPage;
