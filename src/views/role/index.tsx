import React, { useEffect, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Modal,
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
  TableColumnsType,
  CheckboxProps,
  FormProps
} from 'antd';

type FieldType = {
  key?: string;
  name?: string;
  role?: [];
};
interface DataPermissionType {
  key: React.Key;
  name: string;
  read?: JSX.Element | String;
  write?: JSX.Element | String;
  create?: JSX.Element | String;
}
interface DataType {
  key?: string;
  name?: string;
}

const RolePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Pages" },
    { title: "Role & Permission" },
    { title: <Link to={"/pages/role-permission/role"}>Role</Link> },
  ];
  const initData: DataType[] = [
    {
      key: new Date().getTime().toString() + 200,
      name: 'Super Administrator',
    },
    {
      key: new Date().getTime().toString() + 100,
      name: 'Administrator',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState<DataType[]>(initData);
  const [filter, setFilterData] = useState<DataType[]>();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  useEffect(() => {
    setFilterData(data);
  }, [data])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChangeChecked: CheckboxProps['onChange'] = (e) => {
    setChecked(e.target.checked);
  };
  const columns: TableColumnsType<DataPermissionType> = [
    {
      title: 'Administrator Access',
      dataIndex: 'name',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: (
        <>
          <Checkbox onChange={onChangeChecked}>Selected All</Checkbox>
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
  const dataPermisson: DataPermissionType[] = [
    {
      key: '1',
      name: 'Dashboard',
      read: (
        <>
          <Checkbox checked={checked} >Read</Checkbox>
        </>
      ),
    },
    {
      key: '2',
      name: 'User Management',
      read: (
        <>
          <Checkbox checked={checked} >Read</Checkbox>
        </>
      ),
      write: (
        <>
          <Checkbox checked={checked} >Write</Checkbox>
        </>
      ),
      create: (
        <>
          <Checkbox checked={checked} >Create</Checkbox>
        </>
      ),
    },
  ];
  const columns2: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
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
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    let newData: DataType = {
      key: values.key || new Date().getTime().toString(),
      name: values.name,
    }
    setData(prev => {
      const isDataExists = prev.find(item => item.key === values.key);
      if (isDataExists) {
        return prev.map(item => (item.key === values.key ? newData : item));
      }
      return [...prev, newData]
    });
    setIsModalOpen(false);
    form.resetFields();
    messageApi.open({
      type: 'success',
      content: 'Data succesfully create',
    });
  };

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
      setIsModalOpen(true);
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
              <Button type="primary" className="m-2" onClick={showModal}>
                + Add Role
              </Button>
            </Flex>
            <Table
              columns={columns2}
              dataSource={filter}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
      <Modal title="Form Role" open={isModalOpen} footer={false} onCancel={handleCancel}>
        <Form
          form={form}
          name="basic"
          labelAlign="left"
          labelCol={{ lg: { span: 24 } }}
          wrapperCol={{ lg: { span: 24 } }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            label="key"
            name="key"
            hidden={true}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Role Permissons"
            name="role"
          >
            <Table
              columns={columns}
              dataSource={dataPermisson}
              pagination={false}
              scroll={{ x: 360 }}
            />
          </Form.Item>
          <Flex justify="end">
            <Button className="mx-1" type="default" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="mx-1" type="primary" htmlType="submit">
              Submit
            </Button>
          </Flex>
        </Form>
      </Modal>
    </>
  );
};

export default RolePage;
