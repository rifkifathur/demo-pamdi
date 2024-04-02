import { Alert, Button, Card, Flex, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {      
      setLoading(false);
      navigate("/new-password");
    }, 1500);
  };
  return (
    <>
      <Flex justify="center" align="center" vertical className="bg-slate-100 h-[100vh]">
        <Card className="w-[380px]">          
          <div className="text-center my-3">
            <h1 className="m-0">Forgot Password ?</h1>
            <span className="mb-8 text-gray-400">Enter your email to reset your password.</span>            
          </div>
          <Form
            name="reset-password"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full mb-2" loading={loading}>
                Submit
              </Button>              
              <Link to={"/login"}>
                <Button type="default" className="login-form-button w-full mb-2">
                  Cancel
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default ResetPassword;