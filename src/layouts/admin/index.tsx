import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Button, ConfigProvider, Layout, Result, Spin, theme } from "antd";
import { NFooter, NSider, NHeader } from "../../components";
import routes from "../../routes";

const { Content } = Layout;
const { defaultAlgorithm, darkAlgorithm } = theme;

const AdminLayout = () => {
  const location = useLocation();
  const auth = sessionStorage.getItem('auth');
  const navigate = useNavigate();
  const defaultIsDarkMode = localStorage.getItem('isDarkMode');

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const [renderRoute, setRenderRoute] = useState<ReactElement>();
  const [activeMenuOnSide, setActiveMenuOnSide] = useState<string>("");
  const [openMenuOnSide, setOpenMenuOnSide] = useState<string>("");
  const [isGetRoute, setIsGetRoute] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingRoute, setLoadingRoute] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState<string | null>(defaultIsDarkMode);

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
              setIsGetRoute(true);
              setRenderRoute(
                <Route
                  path={`${groupItem.path}`}
                  element={groupItem.component}
                  key={groupItem.key}
                />
              );
              setActiveMenuOnSide(groupItem.key);
              if (groupItem.baseKey) {
                setOpenMenuOnSide(groupItem.baseKey);
              }

              if (groupItem.baseParentKey) {
                setActiveMenuOnSide(groupItem.baseParentKey);
              }
            }
          }
        }
      }
      setLoading(false);
      return null;
    },
    [location.pathname]
  );
console.log(renderRoute);
  useEffect(() => {
    setLoadingRoute(true);
    setTimeout(() => {
      if (auth === null) {
        navigate("/login");
      }

      if (getRoutes(routes) == null) {
        setIsGetRoute(false);
      }
      getRoutes(routes);
      setLoadingRoute(false);
    }, 1500);
  }, [getRoutes, navigate, auth]);

  if (loading) {
    return (
      <Spin tip="Loading" size="large" style={{ top: "250px" }}>
        <div className="content" />
      </Spin>
    )
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode === 'yes' ? darkAlgorithm : defaultAlgorithm,
        token: {
          fontFamily: "Inter, sans-serif",
          controlHeight: 38,
        },
        components: {
          Layout: {
            siderBg: '#0d0e12'
          },
        },
      }}
    >
      {isGetRoute ? (
        <Layout style={{ minHeight: '100vh' }}>
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
              marginLeft: isCollapsed ? (isResponsive ? 0 : 70) : (isResponsive ? 0 : 260),
            }}
          >
            <NHeader
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              isResponsive={isResponsive}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
            <Content style={{
              margin: "12px 16px 0",
              overflow: "initial",
            }}
            >
              <div
                style={{
                  padding: 24,
                }}
              >
                {loadingRoute ? (
                  <Spin tip="Loading" size="large">
                    <div className="content" />
                  </Spin>
                ) : (
                  <Routes>
                    {renderRoute}
                  </Routes>
                )}
              </div>
            </Content>
            <NFooter />
          </Layout>
        </Layout>
      ) : (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Link to={"/"}><Button type="primary">Back Home</Button></Link>}
        />
      )}
    </ConfigProvider>
  );
};

export { AdminLayout };
