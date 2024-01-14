import React from 'react';
import { Layout, Menu, theme, Button, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const NFooter = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    );
};

export default NFooter;