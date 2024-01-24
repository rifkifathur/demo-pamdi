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
  />
);

export default NBreadcrumb;