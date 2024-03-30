import React from 'react';
import { Layout, Menu, theme, Button, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const NFooter = () => {
  return (
    <Footer style={{
      textAlign: 'center', margin: "0 auto",
      // position: 'absolute', 
      backgroundColor: "#fff",
      // left: 0, 
      // bottom: 0, 
      width: '100%'
    }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default NFooter;