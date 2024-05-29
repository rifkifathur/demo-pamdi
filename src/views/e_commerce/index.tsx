import React, { useEffect, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Space,
  Table,
  Popconfirm,
  message
} from "antd";
import {
  FaMagnifyingGlass,
  FaPenToSquare,
  FaRegTrashCan
} from "react-icons/fa6";
import type {
  TableProps,
} from 'antd';


interface DataType {
  key?: string;
  name?: string;
  category: string;
}

const EcommercePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Apps" },
    { title: "E-Commerce" },
    { title: <Link to={"/apps/e-commerce/product"}>Product</Link> },
  ];
  const initData: DataType[] = [
    {
      key: new Date().getTime().toString() + 200,
      name: 'Product',
      category: "Test",
    },
  ];  
  
  const [data, setData] = useState<DataType[]>(initData);
  const [filter, setFilterData] = useState<DataType[]>();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  useEffect(() => {
    setFilterData(data);
  }, [data])    
  
  const columns2: TableProps<DataType>['columns'] = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Stock',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" className="p-0" onClick={() => handleEdit(record.key)}><FaPenToSquare className="text-yellow-400" /></Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button danger type="text" className="p-0" ><FaRegTrashCan /></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];  

  const handleDelete = (key?: string): void => {
    setData(prev => {
      return prev.filter(item =>
        item.key !== key
      )
    });

    messageApi.open({
      type: 'success',
      content: 'Delete data succesfully',
    });
  }

  const handleEdit = (key?: string): void => {
    let getDetail = data.find(item => item.key === key);
    if (getDetail) {
      form.setFieldsValue(getDetail);      
    } else {
      messageApi.open({
        type: 'warning',
        content: 'data not found',
      });
    };
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterData(data);
    if (event.target.value !== '') {
      const temp = data.filter(item => item.name?.toLocaleLowerCase().includes(event.target.value.toLowerCase()));
      setFilterData(temp);
    }
  }
  return (
    <>
      {contextHolder}
      <NBreadcrumb title="Product" items={breadcrumbItems} />
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
              rowSelection={{
                // type: selectionType,
                // ...rowSelection,
              }}
              columns={columns2}
              dataSource={filter}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EcommercePage;
