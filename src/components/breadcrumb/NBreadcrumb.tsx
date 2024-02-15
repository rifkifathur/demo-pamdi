import React from 'react';
import { Breadcrumb } from 'antd';

type NBreadcrumbType = {
    items?: {
        title: JSX.Element | String;
    }[];
}

const NBreadcrumb = ({ items }: NBreadcrumbType) => (
  <Breadcrumb
    items={items}
    className="mb-8"
  />
);

export default NBreadcrumb;