import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const NFooter = () => {
  return (
    <Footer style={{
      textAlign: 'center', 
      margin: "0 auto",
      marginTop:"20px",
      // background:"#fff",
      // position: 'absolute', 
      // left: 0, 
      // bottom: 0, 
      width: '100%'
    }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default NFooter;