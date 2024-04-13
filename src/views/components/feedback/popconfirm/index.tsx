import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, message, Popconfirm, Switch } from "antd";
import React, { useState } from "react";
import type {  PopconfirmProps } from 'antd';
import {  FaQuestion } from "react-icons/fa6";

const PopconfirmPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/feedback/popconfirm"}>Popconfirm</Link> },
  ];

  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);

  const confirm1: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };

  const cancel1: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  const changeCondition = (checked: boolean) => {
    setCondition(checked);
  };

  const confirm2 = () => {
    setOpen(false);
    message.success('Next step.');
  };

  const cancel2 = () => {
    setOpen(false);
    message.error('Click on cancel.');
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm2(); // next step
    } else {
      setOpen(newOpen);
    }
  };

  return (
    <>
      <NBreadcrumb title="Popconfirm" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm1}
              onCancel={cancel1}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Card>
          <Card
            className="mb-8"
            title="Customize Icon"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              icon={<FaQuestion style={{ color: 'red' }} />}
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Directly confirm"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              open={open}
              onOpenChange={handleOpenChange}
              onConfirm={confirm2}
              onCancel={cancel2}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete a task</Button>
            </Popconfirm>
            <br />
            <br />
            Whether directly execute：
            <Switch defaultChecked onChange={changeCondition} />
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default PopconfirmPage;
