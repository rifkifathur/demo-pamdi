import React, { useEffect, useRef } from "react";
import { ConfigProvider, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import routes from "../../routes";
import { FaCircle } from "react-icons/fa6";
import './NSider.css';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [];

const buildMenuItem = (route: RoutesType): MenuItem => {
  const children = route.children
    ?.filter((child) => child.sidebar)
    .map((child) => buildMenuItem(child));

  return getItem(
    route.link ? route.link : <span className="font-bold">{route.name}</span>,
    route.key,
    route.icon || <FaCircle style={{ fontSize: '4px', minWidth: 0 }} />,
    children
  );
};

const buildMenuGroup = (route: RoutesType): MenuItem => {
  const groupChildren = route.groupItem
    ?.filter((item) => item.sidebar)
    .map((item) => buildMenuItem(item));

  return getItem(
    <span className="font-bold">{route.name}</span>,
    route.key,
    route.icon || null,
    groupChildren,
    "group"
  );
};

const buildMenu = (routes: RoutesType[]) => {
  routes.forEach((route) => {
    if (route.groupItem) {
      const groupItem = buildMenuGroup(route);
      items.push(groupItem);
    } else if (route.sidebar) {
      const menuItem = buildMenuItem(route);
      items.push(menuItem);
    }
  });
};

buildMenu(routes);

type NSiderType = {
  isCollapsed: boolean;
  isResponsive: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  setIsResponsive: (isResponsive: boolean) => void;
  activeMenuOnSide: string;
  openMenuOnSide: string;
};

const NSider = ({
  isCollapsed,
  setIsCollapsed,
  isResponsive,
  setIsResponsive,
  activeMenuOnSide,
  openMenuOnSide
}: NSiderType) => {

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const btnHide = document.querySelector(".btn-hide-sider");

    const outside = (e: any) => {
      if (!isCollapsed && !ref.current?.contains(e.target) && !btnHide?.contains(e.target) && window.innerWidth < 862) {
        setIsCollapsed(!isCollapsed);
      }      
    }
    document.addEventListener("click", outside);

    return () => {
      document.removeEventListener("click", outside);
    }
  }, [isCollapsed, setIsCollapsed])

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemBg: "#141414",
            darkSubMenuItemBg: "#141414",
            darkItemSelectedBg: "#1c1c21",
            darkPopupBg: "#141414"
          },
        },
      }}
    >
      <Sider
        ref={ref}
        width="260"
        trigger={null}
        collapsed={isCollapsed}
        breakpoint="sm"
        collapsedWidth={isResponsive ? "0" : "70"}
        onBreakpoint={(broken) => {
          if (broken) {
            setIsResponsive(!isResponsive);
            setIsCollapsed(!isCollapsed);
          }
        }}
        onCollapse={(collapsed, type) => {
          return true;
        }}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
          background: "#141414",
          borderRight: "solid 1px #1c1c21"
        }}
      >
        <div className={`mt-[30px] flex items-center px-5 pb-20 text-center`}>
          {isCollapsed ? (
            ""
          ) : (
            <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 text-white">
              Nara <span className="font-medium">ANT D</span>
            </div>
          )}
        </div>
        <div className="custom-scroll-sider overflow-y-scroll invisible hover:visible max-h-[80vh]">
          <Menu
            className="pb-5 visible"
            theme="dark"
            mode="inline"
            selectedKeys={[activeMenuOnSide]}
            defaultOpenKeys={[openMenuOnSide]}
            items={items}
          />
        </div>
      </Sider>
    </ConfigProvider>
  );
};

export default NSider;
