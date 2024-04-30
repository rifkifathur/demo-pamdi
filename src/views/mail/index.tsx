import React, { ReactElement, ReactHTMLElement, useEffect, useRef, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps, TableColumnsType, TableProps, CollapseProps  } from 'antd';
import { Button, Flex, Input, Layout, Menu, theme, Table, Rate, Avatar, Dropdown } from 'antd';
import { 
  BsArrowCounterclockwise,
  BsCaretDownFill, 
  BsEnvelope, 
  BsExclamationCircle, 
  BsFileEarmark, BsPlus, 
  BsSearch, 
  BsSend, 
  BsStar, 
  BsTag, 
  BsThreeDotsVertical, 
  BsTrash,
} from "react-icons/bs";
import NLoading from "../../components/loading/NLoading";
import Compose from "./components/Compose";
import Show from "./components/Show";

const { Header, Content, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Inbox', '1', <BsEnvelope />),
  getItem('Sent', '2', <BsSend />),
  getItem('Draft', '3', <BsFileEarmark />),
  getItem('Starred', '4', <BsStar />),
  getItem('Important', '5', <BsTag />),
  getItem('Spam', '6', <BsExclamationCircle />),
  getItem('Trash', '7', <BsTrash />),
  getItem('Add Label', '8', <BsPlus />),
];

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string | ReactElement;
}

const MailPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const breadcrumbItems = [
    { title: <Link to={'/apps/mail'}>Mail</Link> },
  ]

  const [collapsed, setCollapsed] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [action, setAction] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addCompose, setAddCompose] = useState(false);
  const [show, setShow] = useState(false);

  const refBtn = useRef<HTMLDivElement | null>(null);
  const refSider = useRef<HTMLDivElement | null>(null);
  useEffect(() => {    
    const outside = (e: any) => {      
      if (!collapsed && !refSider.current?.contains(e.target) && !refBtn.current?.contains(e.target) && window.innerWidth < 862) {
        setCollapsed(!collapsed);
      }      
    }
    document.addEventListener("click", outside);

    return () => {
      document.removeEventListener("click", outside);
    }
  }, [collapsed, setCollapsed])

  const handleAddCompose = () => {
    setAddCompose(true);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleStar = (event: any) => {
    // If you don't want click extra trigger collapse, you can prevent this:
    event.stopPropagation();
  }
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setAction(!action);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  const getActions = () => {
    if (action) {
      return (
        <>
          <Button type="text" icon={<BsStar />} />
          <Button type="text" icon={<BsTag />} />
          <Button type="text" icon={<BsExclamationCircle />} />
          <Button type="text" icon={<BsTrash />} />
        </>
      );
    }
    return null;
  }

  const columns: TableColumnsType<DataType> = [    
    {
      title: getActions(),
      dataIndex: 'name',
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: (
        <Flex justify="space-around" className="flex-wrap md:flex-nowrap font-bold cursor-pointer" onClick={handleShow}>
          <Flex align="center" className="w-full md:w-1/3">
            <Button type="text" onClick={handleStar} className="p-0 m-0">
              <Rate count={1} />
            </Button>
            <p className="mx-2">Title {i}</p>
          </Flex>
          <Flex align="center" className="w-full md:w-1/2 -mt-5 md:m-0" >
            <p className="truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue nisi arcu, a interdum erat iaculis a. Maecenas a finibus tellus. Aenean pharetra augue risus, pulvinar hendrerit nisi convallis ut. Nulla facilisi. Aenean justo eros, lobortis et tempus vel, tempus vel lacus. Suspendisse rhoncus iaculis auctor. Integer non velit ipsum. Sed ac dapibus eros. Fusce scelerisque augue massa, sit amet placerat felis ultricies eu. Donec mollis urna quis quam ultricies, et feugiat augue accumsan. Integer id risus ornare, tincidunt lorem at, tempor sem. Duis accumsan massa at ante iaculis blandit. Vivamus sed imperdiet eros. Maecenas magna eros, lobortis non justo eget, porttitor eleifend elit. Nam libero magna, consectetur quis ex non, lacinia mollis metus. Vivamus vel sapien sollicitudin, egestas turpis id, pretium est.</p>
          </Flex>
          <Flex align="center" className="w-full md:w-1/2 justify-start md:justify-end">
            <span>{i} Mar</span>
          </Flex>
        </Flex>
      ),
    });
  }
  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  
  return (
    <>
      <NBreadcrumb title="Mail" items={breadcrumbItems} />
      <Layout>
        <Content>
          <Layout
            style={{
              padding: '0 0 20px',
              background: colorBgContainer,
            }}
          >
            <Sider
              ref={refSider}              
              style={{ 
                background: colorBgContainer, 
                position: responsive ? 'fixed' : 'relative',
                top: responsive ? '0' : 'auto',
                bottom: responsive ? '0' : 'auto',
                left: responsive ? '0' : 'auto',
                zIndex: responsive ? 102 : 0
              }}
              width={260}
              trigger={null}
              collapsible
              collapsed={collapsed}
              collapsedWidth={0}
              breakpoint="sm"
              onBreakpoint={(broken) => {
                if (broken) {
                  setResponsive(!responsive);
                  setCollapsed(!collapsed);
                }
              }}
            >
              <Flex className="my-5" justify="center">
                <Button type="primary" onClick={handleAddCompose}>+ Compose</Button>
              </Flex>
              <div className="custom-scrollbar h-[380px] overflow-y-auto invisible hover:visible">
                <Menu
                  className="visible"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                  items={items}
                />
              </div>
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {responsive &&
                  <Button
                    ref={refBtn}
                    type="text"
                    icon={<MenuUnfoldOutlined className="pointer-events-none" />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                      padding:0
                    }}
                  />
                }
                <Flex className="w-full mx-5" justify="space-between">
                  <Input className="w-1/2 md:w-auto" placeholder="Search..." prefix={<BsSearch />} />
                  <Button  type="primary" icon={<BsArrowCounterclockwise />} onClick={handleRefresh}/>
                </Flex>
              </Header>
              <Content style={{ backgroundColor: colorBgContainer }}>
                {
                  loading ? (
                    <Flex className="h-full" justify="center" align="center">
                      <NLoading />
                    </Flex>
                  ) : (
                    <>                      
                      {show ? (
                        <Show setShow={setShow} />
                      ) : (
                        <Table 
                          rowSelection={rowSelection} 
                          columns={columns} 
                          dataSource={data} 
                          scroll={{ y: 300 }} 
                          pagination={{ 
                            size: "small",
                            style: {
                              position:"absolute",
                              top:0,
                              right:0
                            } 
                          }}
                        />
                      )}
                    </>
                  )
                }
                { addCompose && <Compose setAddCompose={setAddCompose} /> }
              </Content>
            </Layout>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default MailPage;
