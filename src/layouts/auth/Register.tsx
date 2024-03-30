import { Alert, Button, Card, Divider, Flex, Form, Input } from 'antd';
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [loginFail, setLoginFail] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      if (values.username !== "" && values.email !== "" && values.password !== "") {
        navigate("/");
      } else {
        setLoginFail(true);
        setLoading(false);
      }
    }, 1500);
  };
  return (
    <>
      <Flex justify="center" align="center" vertical className="bg-slate-100 h-[100vh]">
        <Card className="w-[380px] text-center">          
          <h1 className="m-0">Sign Up</h1>
          <span className="mb-8">Sign Up to continue to ...</span>
          <h3>Sign In with</h3>
          <Button className="mx-1" icon={<FaGoogle className="text-orange-700" />}></Button>
          <Button className="mx-1" icon={<FaGithub />}></Button>
          <Divider plain style={{ color: "gray", fontSize: "12px" }}>Or with Email</Divider>
          {loginFail && (
            <Alert
              className="p-2 mb-2 text-left"
              description="Wrong Email Or Password"
              type="error"
              showIcon
            />
          )}
          <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full" loading={loading}>
                Sign up
              </Button>
            </Form.Item>
            <Form.Item>
              Already have an Account?
              <Link to={"/login"} className="mx-1">Sign in</Link>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default Register;