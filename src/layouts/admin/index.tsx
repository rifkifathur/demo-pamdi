import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout, theme } from "antd";
import { NFooter, NSider, NHeader } from "../../components";
import routes from "../../routes";

const { Content } = Layout;

const AdminLayout = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const [renderRoute, setRenderRoute] = useState<ReactElement>();
  const [activeMenuOnSide, setActiveMenuOnSide] = useState<string>("");
  const [openMenuOnSide, setOpenMenuOnSide] = useState<string>("");
  const [isGetRoute, setIsGetRoute] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getRoutes = useCallback(
    (routes: RoutesType[]): any => {
      for (let route of routes) {
        if (route.children) {
          const foundInChildren = getRoutes(route.children);
          if (foundInChildren) {
            return foundInChildren;
          }
        }

        if (route.path && route.path === location.pathname) {
          setIsGetRoute(true);
          setRenderRoute(
            <Route
              path={`${route.path}`}
              element={route.component}
              key={route.key}
            />
          );
          setActiveMenuOnSide(route.key);
          if (route.baseKey) {
            setOpenMenuOnSide(route.baseKey);
          }

          if (route.baseParentKey) {
            setActiveMenuOnSide(route.baseParentKey);
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
    },
    [location.pathname]
  );

  useEffect(() => {
    getRoutes(routes);
  }, [getRoutes]);

  return (
    <>
      {isGetRoute && (
        <Layout>
          <NSider
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isResponsive={isResponsive}
            setIsResponsive={setIsResponsive}
            activeMenuOnSide={activeMenuOnSide}
            openMenuOnSide={openMenuOnSide}
          />
          <Layout
            style={{
              marginLeft: isCollapsed ? (isResponsive ? 0 : 70) : (isResponsive ? 0 : 220),
            }}
          >
            <NHeader
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              isResponsive={isResponsive}
            />
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                style={{
                  padding: 24,
                }}
              >
                <Routes>
                  {renderRoute}
                  {/* <Route path="/user" element={<User />} /> */}
                </Routes>
              </div>
            </Content>
            <NFooter />
          </Layout>
        </Layout>
      )}
    </>
  );
};

export { AdminLayout };
