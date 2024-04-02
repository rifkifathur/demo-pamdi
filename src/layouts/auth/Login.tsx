import { Alert, Button, Card, Divider, Flex, Form, Input } from 'antd';
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginFail, setLoginFail] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      if (values.email === "demo@demo.com" && values.password === "password") {
        sessionStorage.setItem("auth", "demo@demo.com");
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
        <Card className="w-[380px]">          
          <div className="text-center">
            <h1 className="m-0">Sign In</h1>
            <span className="mb-8">Sign in to continue to ...</span>
            <h3>Sign In with</h3>
            <Button className="mx-1" icon={<FaGoogle className="text-orange-700" />}></Button>
            <Button className="mx-1" icon={<FaGithub />}></Button>
            <Divider plain style={{ color: "gray", fontSize: "12px" }}>Or with Email</Divider>
          </div>
          {loginFail && (
            <Alert
              className="p-2 mb-2"
              description="Wrong Email Or Password"
              type="error"
              showIcon
            />
          )}
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ 
              email: "demo@demo.com",
              password: "password"
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="mb-0 pb-0"
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password 
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item className="mb-1 pb-1">
              <Link to={"/reset-password"} className="login-form-forgot float-right" >
                Forgot password?
              </Link>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full" loading={loading}>
                Sign in
              </Button>
            </Form.Item>
            <Form.Item>
              Not a Member yet?
              <Link to={"/register"} className="mx-1">Sign up</Link>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default Login;