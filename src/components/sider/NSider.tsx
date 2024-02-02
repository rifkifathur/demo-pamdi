import React, { useCallback, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import routes from "../../routes";
import { useLocation } from "react-router-dom";

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

routes.map((route) => {
  const children = route.children
    ?.filter((route) => route.sidebar)
    .map((route) => getItem(route.link, route.key));

  if (route.groupItem) {
    const groupChildren = route.groupItem.map((item) => {
      const groupSubChildren = item.children
        ?.filter((sub) => sub.sidebar)
        .map((sub) => getItem(sub.link, sub.key));
      return getItem(item.name, item.key, item.icon, groupSubChildren);
    });
    const groupItem = getItem(
      route.name,
      route.key,
      null,
      groupChildren,
      "group"
    );
    return items.push(groupItem);
  } else {
    const menuItem = getItem(
      route.link ? route.link : route.name,
      route.key,
      route.icon,
      children,
      route.isGroup ? "group" : ""
    );
    return items.push(menuItem);
  }
});

type NSiderType = {
  isCollapsed: boolean;
  isResponsive: boolean;
  setIsResponsive: (isResponsive: boolean) => void;
};

const NSider = ({ isCollapsed, isResponsive, setIsResponsive }: NSiderType) => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const [openKey, setOpenKey] = useState<string>("");
  const [isOpenKey, setIsOpenKey] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKey(e.key);
  };

  // const getRoutes = (routes: RoutesType[]): any => {
  //   for (let route of routes) {
  //     if (route.children) {
  //       const foundInChildren = getRoutes(route.children);
  //       if (foundInChildren) {
  //         return foundInChildren;
  //       }
  //     }

  //     if (route.path && route.path === location.pathname) {
  //       setIsOpenKey(true);
  //       if (route.baseParent) {
  //         setOpenKey(route.baseParent);                    
  //       }
  //     }

  //     if (route.isGroup && route.groupItem) {
  //       for (let groupItem of route.groupItem) {
  //         if (groupItem.children) {
  //           const foundInGroupChildren = getRoutes(groupItem.children);
  //           if (foundInGroupChildren) {
  //             return foundInGroupChildren;
  //           }
  //         }

  //         if (groupItem.path && groupItem.path === location.pathname) {
  //           return groupItem;
  //         }
  //       }
  //     }
  //   }

  //   return null;
  // };

  const getRoutes = useCallback((routes: RoutesType[]): any => {
      for (let route of routes) {
      if (route.children) {
        const foundInChildren = getRoutes(route.children);
        if (foundInChildren) {
          return foundInChildren;
        }
      }

      if (route.path && route.path === location.pathname) {
        setIsOpenKey(true);
        if (route.baseParent) {
          setOpenKey(route.baseParent);                    
        }
      }

      if (route.isGroup && route.groupItem) {
        for (let groupItem of route.groupItem) {
          if (groupItem.children) {
            const foundInGroupChildren = getRoutes(groupItem.children);
            if (foundInGroupChildren) {
              return foundInGroupChildren;
            }
          }

          if (groupItem.path && groupItem.path === location.pathname) {
            return groupItem;
          }
        }
      }
    }

    return null;
  }, [setIsOpenKey, setOpenKey, location.pathname]);
  
  useEffect(() => {
    getRoutes(routes);
  }, [getRoutes]);

  return (
    <Sider
      trigger={null}
      collapsed={isCollapsed}
      breakpoint="sm"
      collapsedWidth={isResponsive ? "0" : "70"}
      onBreakpoint={(broken) => {
        if (broken) {
          setIsResponsive(!isResponsive);
        }
      }}
      onCollapse={(collapsed, type) => {
        return true;
      }}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
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
      {
        isOpenKey && 
        (
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[selectedKey]}
            defaultOpenKeys={[openKey]}
            items={items}
            onClick={onClick}
          />
        )
      }
    </Sider>
  );
};

export default NSider;
