import React from 'react';
import { Breadcrumb, Typography  } from 'antd';

type NBreadcrumbType = {
    title?: String,
    separator?: String,
    items?: {}[];
}
const { Title } = Typography;
const NBreadcrumb = ({ title, separator, items }: NBreadcrumbType) => {
  return (
    <>
      <Title level={4} style={{ padding:0, margin:0}}>{title}</Title>
      <Breadcrumb
        // onClick={onClick}
        separator={separator}
        items={items}
        className="mb-8"
      />
    </>
  )
};

export default NBreadcrumb;