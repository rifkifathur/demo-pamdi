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
  message,
  Upload,
  Divider
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
  FormProps,
  UploadProps 
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
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

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const CreateEcommercePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Apps" },
    { title: "E-commerce" },
    { title: "Product" },
    { title: <Link to={"/pages/e-commerce/product/create"}>Create</Link> },
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
      <NBreadcrumb title="Product" items={breadcrumbItems} />
      <Card>
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
            label="Photo product"
            name="role"
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item<FieldType>
            label="Product Name"
            name="name"
            rules={[{ required: true, message: 'Please input your product name!' }]}
          >
            <Input />
          </Form.Item>   
          <Form.Item<FieldType>
            label="Category"
            name="name"
            rules={[{ required: true, message: 'Please input your product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Category"
            name="name"
            rules={[{ required: true, message: 'Please input your product name!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>  
          <Divider />
          <Form.Item<FieldType>
            label="Product Name"
            name="name"
            rules={[{ required: true, message: 'Please input your product name!' }]}
          >
            <Input />
          </Form.Item>   
          <Form.Item<FieldType>
            label="Category"
            name="name"
            rules={[{ required: true, message: 'Please input your product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Category"
            name="name"
            rules={[{ required: true, message: 'Please input your product name!' }]}
          >
            <Input.TextArea rows={4} />
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
      </Card>
    </>
  );
};

export default CreateEcommercePage;
