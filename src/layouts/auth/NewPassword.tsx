import { Alert, Button, Card, Flex, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        navigate("/");
    }, 1500);
  };
  return (
    <>
      <Flex justify="center" align="center" vertical className="bg-slate-100 h-[100vh]">
        <Card className="w-[380px]">          
          <div className="text-center my-3">
            <h1 className="m-0">Setup New Password</h1>
            <span className="mb-8 text-gray-400">
              Have you already reset the password ? 
              <Link to={"/login"} className="mx-1">Sign In</Link>
            </span>            
          </div>
          <Form
            name="reset-password"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password 
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password 
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full mb-2" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default NewPassword;