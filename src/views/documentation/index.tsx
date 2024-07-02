import React, { ReactElement, useEffect, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType, TableProps  } from "antd";
import { Button, Flex, Input, Layout, Menu, theme, Rate, Table } from "antd";
import {   
  BsArrowCounterclockwise,
  BsEnvelope, 
  BsExclamationCircle, 
  BsFileEarmark,
  BsSearch, 
  BsSend, 
  BsStar,
  BsTag, 
  BsTrash, 
} from "react-icons/bs";
import NLoading from "../../components/loading/NLoading";
import { faker } from '@faker-js/faker/locale/id_ID';

const { Header, Content, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
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
  getItem("Inbox", "inbox", <BsEnvelope />),
  getItem("Sent", "sent", <BsSend />),
  getItem("Draft", "draft", <BsFileEarmark />),
  getItem("Starred", "starred", <BsStar />),
  getItem("Important", "important", <BsTag />),
  getItem("Spam", "spam", <BsExclamationCircle />),
  getItem("Trash", "trash", <BsTrash />),
];

interface DataType {
  key: React.Key;
  starredElm: ReactElement;
  name: string | ReactElement;
  starred: boolean;
}
type TableRowSelection<T> = TableProps<T>["rowSelection"];
const Documentation = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const breadcrumbItems = [
    { title: <Link to={"/apps/mail"}>Mail</Link> },
  ]
  
  

  const dataDummy: DataType[] = [];
  
  const [collapsed, setCollapsed] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [action, setAction] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keyComponent, setKeyComponent] = useState<string>("inbox");
  const [addCompose, setAddCompose] = useState(false);
  const [data, setData] = useState<DataType[]>(dataDummy);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  
  for (let i = 0; i < 5; i++) {
    dataDummy.push({
      key: i,
      starredElm: (
        <Button type="text" onClick={(e)=>handleStar(e, i)} className="p-0 m-0">
          <Rate count={1} value={0}/>
        </Button>
      ),
      name: (
        <Flex justify="space-around" className={`flex-wrap md:flex-nowrap ${i % 2 === 0 && 'font-bold'} cursor-pointer`} onClick={() => setKeyComponent("show")} >
          <Flex align="center" className="w-full md:w-1/3" >            
            <p className="mx-2">{faker.lorem.sentence({min: 1, max:2})}</p>
          </Flex>
          <Flex align="center" className="w-full md:w-1/2 -mt-5 md:m-0">
            <p className="truncate">{faker.lorem.paragraph()}</p>
          </Flex>
          <Flex align="center" className="w-full md:w-1/2 justify-start md:justify-end">
            <span>{10+i} Mar</span>
          </Flex>
        </Flex>
      ),
      starred: false,
    });
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {    
    setSelectedRowKeys(newSelectedRowKeys);    
  };
  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
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
        key: "even",
        text: "Select Even Row",
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
  useEffect(() => {
    if (selectedRowKeys.length > 0) {
      setAction(true);
    } else {
      setAction(false);
    }
  },[selectedRowKeys, setAction]);
  const handleStar = (event: any, key: React.Key) => {
    // If you don't want click extra trigger collapse, you can prevent this:
    event.stopPropagation();
    setData(prevData => {
        return prevData.map(data => {
            if (data.key === key) {                              
                return { ...data,
                  starredElm: (
                    <Button type="text" onClick={(e)=>handleStar(e, key)} className="p-0 m-0">
                      <Rate count={1} value={!data.starred ? 1 : 0}/>
                    </Button>
                  ), 
                  starred: !data.starred, 
                };
            }
            return data;
        });
    });
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
      title:'',
      dataIndex: "starredElm",
    },
    {
      title: getActions(),
      dataIndex: "name",
      width: '90%',
    },
  ];

  // const components: any = [
  //   { key: "inbox", item: <Inbox data={data} columns={columns} rowSelection={rowSelection} />},    
  //   { key: "show", item: <Show setKeyComponent={setKeyComponent} />},
  //   { key: "sent", item: <Sent />},
  //   { key: "draft", item: <Draft />},
  //   { key: "starred", item: <Starred data={data} columns={columns} rowSelection={rowSelection} />},
  //   { key: "draft", item: <Draft />},
  //   { key: "important", item: <Important />},
  //   { key: "spam", item: <Spam />},
  //   { key: "trash", item: <Trash />},
  // ];
  
  // const getComponent = (key: string = "inbox") => {
  //   for (const component of components) {
  //       if (component.key === keyComponent) {          
  //         return component.item;
  //       }
  //   }
  //   return null;
  // }

  const handleMenu: MenuProps["onClick"] = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setKeyComponent(e.key);
    }, 1500);
  };
  
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }    
  
  return (
    <>
      <NBreadcrumb title="Mail" items={breadcrumbItems} />
      <Layout>
        <Content>
          <Layout
            style={{
              padding: "0 0 20px",
              background: colorBgContainer,
            }}
          >
            <Sider
              style={{ background: colorBgContainer }}
              width={200}
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
              <div className="custom-scrollbar h-[380px] overflow-y-auto invisible hover:visible">
                <Menu
                  onClick={handleMenu}
                  className="visible"
                  mode="inline"
                  defaultSelectedKeys={["inbox"]}
                  style={{ height: "100%" }}
                  items={items}
                />
              </div>
            </Sider>
            <Layout>
              <Content className="" style={{ backgroundColor: colorBgContainer }}>
                {
                  loading ? (
                    <Flex className="h-full" justify="center" align="center">
                      <NLoading />
                    </Flex>
                  ) : (
                    <>        
                      {/* {getComponent()} */}
                    </>
                  )
                }
              </Content>
            </Layout>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default Documentation;
