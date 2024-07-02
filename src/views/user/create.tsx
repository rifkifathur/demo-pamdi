import React, { useState } from "react";
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
  GetProp,
  FormProps,
  UploadProps 
} from 'antd';
import { InboxOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
type FieldType = {
  key?: string;
  photo: string
  name: string;
  role: string;
  description: string;
};

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const CreateUserPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Apps" },
    { title: "User Management" },
    { title: <Link to={"/apps/user-management/user"}>User</Link> },
    { title: <Link to={"/apps/user-management/user/create"}>Create</Link> },
  ];
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [form] = Form.useForm();
  
  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
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
      <NBreadcrumb title="User" items={breadcrumbItems} />
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
          <h3>User Info</h3>
          <Form.Item<FieldType>
            label="Photo"
            // name="role"
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item<FieldType>
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input />
          </Form.Item>   
          <Form.Item<FieldType>
            label="Role"
            name="role"
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
          <Flex justify="end">
            <Link to="/apps/user-management/product">
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

export default CreateUserPage;
