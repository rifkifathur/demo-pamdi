import React, { ReactElement, useEffect, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Flex,
  Input,
  Row,
  Space,
  Table,
  Popconfirm,
  Image
} from "antd";
import {
  FaMagnifyingGlass,
  FaPenToSquare,
  FaRegTrashCan
} from "react-icons/fa6";
import type {
  TableProps,
} from 'antd';
import { faker } from '@faker-js/faker/locale/en_US';

interface DataType {
  key?: string;
  name?: string;
  thumb?: ReactElement;
  role: string;
  date: string;
}

const UserPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Apps" },
    { title: "User Management" },
    { title: <Link to={"/apps/user-management/user"}>User</Link> },
  ];

  const initData: DataType[] = [];  
  
  const [data, setData] = useState<DataType[]>(initData);
  const [filter, setFilterData] = useState<DataType[]>();
  
  for (let i = 0; i < 20; i++) {    
    initData.push(
      {
        key: new Date().getTime().toString() + 200,
        name: faker.person.fullName(),
        thumb: (
          <Flex align="center" >
            <div>
              <Image width={50} src={faker.image.abstract()} />
            </div>
            <div className="p-2">
              {faker.person.fullName()}
            </div>
          </Flex>
        ),
        role: faker.person.jobType(),
        date: ++i+' Mar 2023',
      },
    )
  }
  useEffect(() => {
    setFilterData(data);
  }, [data])    
  
  const columns2: TableProps<DataType>['columns'] = [
    {
      title: 'User',
      dataIndex: 'thumb',
      key: 'thumb',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" className="p-0" ><FaPenToSquare className="text-yellow-400" /></Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="text" className="p-0" ><FaRegTrashCan /></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];  


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterData(data);
    if (event.target.value !== '') {
      const temp = data.filter(item => item.name?.toLocaleLowerCase() === event.target.value.toLowerCase());
      setFilterData(temp);
    }
  }
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
                onChange={handleSearch}
              />
              <Link to={"/apps/e-commerce/product/create"}>
                <Button type="primary" className="m-2">
                    + Add Product
                </Button>
              </Link>
            </Flex>
            <Table
              rowSelection={{}}
              columns={columns2}
              dataSource={filter}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserPage;