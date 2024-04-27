import React, { useCallback, useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Button, ConfigProvider, Flex, Layout, Result, theme } from "antd";
import { NFooter, NSider, NHeader } from "../../components";
import routes from "../../routes";
import NLoading from "../../components/loading/NLoading";

const { Content } = Layout;
const { defaultAlgorithm, darkAlgorithm } = theme;

const AdminLayout = () => {
  const location = useLocation();
  const auth = sessionStorage.getItem('auth');
  const navigate = useNavigate();
  const defaultIsDarkMode = localStorage.getItem('isDarkMode');

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);  
  const [isGetRoute, setIsGetRoute] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState<string | null>(defaultIsDarkMode);
  const [activeRoute, setActiveRoute] = useState<RoutesType | null>(null);

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
          setActiveRoute(route);
          setIsGetRoute(true);                    
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
              setActiveRoute(groupItem);
              setIsGetRoute(true);                          
            }
          }
        }
      }
      setLoading(false);
      return null;
    },
    [location.pathname]
  );

  useEffect(() => {
    if (isResponsive) {
      setIsCollapsed(true);
    }
    setLoadingContent(true);
    setTimeout(() => {
      if (auth === null) {
        navigate("/login");
      }

      if (getRoutes(routes) == null) {
        setIsGetRoute(false);
      }
      getRoutes(routes);
      setLoadingContent(false);
    }, 1500);
  }, [getRoutes, navigate, auth, isResponsive]);

  if (loading) {
    return (
      <Flex className="mt-[250px]" justify="center" align="center">
        <NLoading />
      </Flex>
    )
  }

  if (isResponsive) {
    if (!isCollapsed) {
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.overflow = "scroll";
    }
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
      {isResponsive && !isCollapsed && <div className="h-[100vh] w-full fixed bg-[rgba(0,0,0,0.4)] z-[100]"></div>}
      {isGetRoute ? (
        <Layout 
          style={{ 
            minHeight: '100vh',             
          }}
        >
          <NSider
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isResponsive={isResponsive}
            setIsResponsive={setIsResponsive}
            activeMenuOnSide={activeRoute!.key}
            openMenuOnSide={activeRoute!.baseKey || activeRoute!.baseParentKey || ''}
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
                {loadingContent ? (
                  <Flex className="mt-[150px]" justify="center" align="center">
                    <NLoading />
                  </Flex>
                ) : (
                  <Routes>                    
                    <Route
                      path={`${activeRoute?.path}`}
                      element={activeRoute?.component}
                      key={activeRoute?.key}
                    />
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
