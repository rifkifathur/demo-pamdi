import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const MailPage = () => {
  const breadcrumbItems = [
    { title: <Link to={'/apps/mail'}>Mail</Link> },
  ]
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  return (
    <>
      <NBreadcrumb title="Mail" items={breadcrumbItems} />
      <Tabs tabPosition="left" defaultActiveKey="1" items={items} />
    </>
  );
};

export default MailPage;
