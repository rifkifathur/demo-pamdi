import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Flex,
  Form,
  Input,
  message,
  Upload,
  Divider,
  Select
} from "antd";
import type {
  FormProps,
  UploadProps 
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
type FieldType = {
  key?: string;
  photo: string
  name: string;
  category: string;
  description: string;
  price: string;
  stock: string;
  weight: string;
  height: string;
  width: string;
  fee: string;
};

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
    { title: <Link to={"/apps/e-commerce/product"}>Product</Link> },
    { title: <Link to={"/apps/e-commerce/product/create"}>Create</Link> },
  ];
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
    
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {        
    form.resetFields();
    messageApi.open({
      type: 'success',
      content: 'Data succesfully create',
    });
  };
  
  return (
    <>
      {contextHolder}
      <NBreadcrumb title="Product" items={breadcrumbItems} />
      <Card>
        <Form
          form={form}
          name="basic"
          labelAlign="left"
          labelCol={{ lg: { span: 6 } }}
          wrapperCol={{ lg: { span: 18 } }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <h3>Product Info</h3>
          <Form.Item<FieldType>
            label="Photo product"
            // name="role"
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
            name="category"
            rules={[{ required: true, message: 'Please input your category!' }]}
          >
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your product description!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>  
          <Divider />
          <h3>Pricing Info</h3>
          <Form.Item<FieldType>
            label="Pricing"
            name="price"
            rules={[{ required: true, message: 'Please input your product price!' }]}
          >
            <Input />
          </Form.Item>   
          <Form.Item<FieldType>
            label="Stock"
            name="stock"
            rules={[{ required: true, message: 'Please input your product stock!' }]}
          >
            <Input />
          </Form.Item> 
          <Divider />
          <h3>Shipping Info</h3>
          <Form.Item<FieldType>
            label="Weight"
            name="weight"
            rules={[{ required: true, message: 'Please input your product weight!' }]}
          >
            <Input addonAfter="kg" />
          </Form.Item>   
          <Form.Item<FieldType>
            label="Height"
            name="height"
            rules={[{ required: true, message: 'Please input your product height!' }]}
          >
            <Input addonAfter="cm" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Width"
            name="width"
            rules={[{ required: true, message: 'Please input your product width!' }]}
          >
            <Input addonAfter="cm" />
          </Form.Item>  
          <Form.Item<FieldType>
            label="Shipping fees"
            name="fee"
            rules={[{ required: true, message: 'Please input your product fee!' }]}
          >
            <Input />
          </Form.Item> 
          <Flex justify="end">
            <Link to="/apps/e-commerce/product">
              <Button className="mx-1" type="default" >
                Cancel
              </Button>
            </Link>
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
