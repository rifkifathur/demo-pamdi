import React, { useState } from "react";
import { NBreadcrumb, NTable } from "../../components";
import { Link } from "react-router-dom";
import { Button, Card, Checkbox, Col, Flex, Form, Input, Modal, Row, Space, Table, Tag } from "antd";
import { FaMagnifyingGlass } from "react-icons/fa6";
import type { TableColumnsType } from 'antd';

type FieldType = {
  name?: string;
  role?: [];
};

interface DataType {
  key: React.Key;
  name: string;
  read: JSX.Element|String;
  write: JSX.Element|String;
  create: JSX.Element|String;
}

const selectedAllChange = () => {
  alert("OK");  
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Administrator Access',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: (
      <>        
        <Checkbox onChange={selectedAllChange}>Selected All</Checkbox>
      </>
    ),
    dataIndex: 'read',
  },
  {
    title: '',
    dataIndex: 'write',
  },
  {
    title: '',
    dataIndex: 'create',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    read: (
      <>        
        <Checkbox >Read</Checkbox>
      </>
    ),
    write: (
      <>        
        <Checkbox >Write</Checkbox>
      </>
    ),
    create: (
      <>        
        <Checkbox >Create</Checkbox>
      </>
    ),
  },
  {
    key: '2',
    name: 'Jim Green',
    read: (
      <>        
        <Checkbox >Read</Checkbox>
      </>
    ),
    write: (
      <>        
        <Checkbox >Write</Checkbox>
      </>
    ),
    create: (
      <>        
        <Checkbox >Create</Checkbox>
      </>
    ),
  },
  {
    key: '3',
    name: 'Joe Black',
    read: (
      <>        
        <Checkbox >Read</Checkbox>
      </>
    ),
    write: (
      <>        
        <Checkbox >Write</Checkbox>
      </>
    ),
    create: (
      <>        
        <Checkbox >Create</Checkbox>
      </>
    ),
  },
  {
    key: '4',
    name: 'Disabled User',
    read: (
      <>        
        <Checkbox >Read</Checkbox>
      </>
    ),
    write: (
      <>        
        <Checkbox >Write</Checkbox>
      </>
    ),
    create: (
      <>        
        <Checkbox >Create</Checkbox>
      </>
    ),
  },
];

const RolePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: <Link to={"/"}>User</Link> },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <NBreadcrumb title="User" items={breadcrumbItems} />
      <Row className="mt-8">
        <Col span={24}>
          <Card>
            <Flex justify="space-between" align="center" className="mb-3">
              <Input
                className="w-[250px] h-[35px]"
                placeholder="Search"
                prefix={<FaMagnifyingGlass className="site-form-item-icon" />}
              />
              <Button size="large" type="primary" className="m-2" onClick={showModal}>
                Add Role
              </Button>
            </Flex>
            <NTable />
          </Card>
        </Col>
      </Row>
      <Modal title="Form Role" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelAlign="left"
          labelCol={{ lg: { span: 24 } }}
          wrapperCol={{ lg: { span: 24 } }}          
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Name"
            name="role"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Table               
              columns={columns} 
              dataSource={data} 
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default RolePage;
