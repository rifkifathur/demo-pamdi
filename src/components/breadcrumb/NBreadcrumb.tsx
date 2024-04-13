import React, { ReactElement } from 'react';
import { Breadcrumb, Typography  } from 'antd';
import { FaPlay } from 'react-icons/fa6';

type NBreadcrumbType = {
    title?: String,
    separator?: String|ReactElement,
    items?: {}[];
}
const { Title } = Typography;
const NBreadcrumb = ({ title, separator=<FaPlay className="text-[6px] mb-[0.7px]"/>, items }: NBreadcrumbType) => {
  return (
    <>
      <Title level={4} style={{ padding:0, margin:0}}>{title}</Title>
      <Breadcrumb
        separator={separator}
        items={items}
        className="mb-8"
      />
    </>
  )
};

export default NBreadcrumb;