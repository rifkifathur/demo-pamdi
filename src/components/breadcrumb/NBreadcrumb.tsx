import React from 'react';
import { Breadcrumb } from 'antd';

type NBreadcrumbType = {
    separator?: String,
    items?: {}[];
}

const NBreadcrumb = ({ separator, items }: NBreadcrumbType) => {
  const onClick = () => {

  }
  return (
    <Breadcrumb
      // onClick={onClick}
      separator={separator}
      items={items}
      className="mb-8"
    />
  )
};

export default NBreadcrumb;