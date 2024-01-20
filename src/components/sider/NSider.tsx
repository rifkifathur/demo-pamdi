import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import routes from '../../routes';
import { redirect } from 'react-router-dom';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [];

routes.map(item => {
  const children = item.children?.map(item => getItem(item.link, item.key));
  const menuItem = getItem(
    item.link ? item.link : item.name,
    item.key,
    item.icon,
    children
  );

  return items.push(menuItem);
});

type NSiderType = {
  isCollapsed: boolean,
  isResponsive: boolean,
  setIsResponsive: (isResponsive: boolean) => void,
}

const NSider = ({ isCollapsed, isResponsive, setIsResponsive } : NSiderType) => {  
  const onClick: MenuProps['onClick'] = (e) => {    
    redirect(e.key);
  };
  
  return (
    <Sider trigger={null} collapsed={isCollapsed}
      breakpoint="sm"
      collapsedWidth={isResponsive ? "0" : "70"}
      onBreakpoint={(broken) => {
        console.log(broken);
        if (broken) {
          setIsResponsive(!isResponsive);
        }
      }}
      onCollapse={(collapsed, type) => {
        return true;
      }}
      style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
    >
      <div className={`mt-[30px] flex items-center px-5 pb-20 text-center`}>
        {isCollapsed ? '' : (
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 text-white">
            Nara <span className="font-medium">ANTD</span>
          </div>
        )}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} onClick={onClick}/>
    </Sider>
  );
};

export default NSider;