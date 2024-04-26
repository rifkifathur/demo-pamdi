import React, { ReactElement, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps, TableColumnsType, TableProps, CollapseProps  } from 'antd';
import { Button, Flex, Input, Layout, Menu, theme, Table, Rate, Avatar, Dropdown, Space, Divider, Collapse, ConfigProvider } from 'antd';
import { 
  BsArrowCounterclockwise, 
  BsArrowLeft, 
  BsCaretDownFill, 
  BsEnvelope, 
  BsExclamationCircle, 
  BsFileEarmark, BsPlus, 
  BsSearch, 
  BsSend, 
  BsStar, 
  BsStarFill, 
  BsTag, 
  BsThreeDotsVertical, 
  BsTrash 
} from "react-icons/bs";
import NLoading from "../../components/loading/NLoading";

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
    token: { colorBgContainer, colorBgElevated, borderRadiusLG, boxShadowSecondary },
  } = theme.useToken();

  const breadcrumbItems = [
    { title: <Link to={'/apps/mail'}>Mail</Link> },
  ]

  const [collapsed, setCollapsed] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [action, setAction] = useState(false);
  const [loading, setLoading] = useState(false);

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
        <Flex justify="space-around" className="flex-wrap md:flex-nowrap font-bold">
          <Flex align="center" className="w-full md:w-1/3">
            <Rate count={1}/>
            <p className="mx-2">Title {i}</p>
          </Flex>
          <Flex align="center" className="w-full md:w-1/2 -mt-5 md:m-0">
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
  const itemsCollapse: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <Flex>
          <Avatar className="mx-3" size={40}>USER</Avatar>
          <Flex className="w-full mr-8" justify="space-between">
            <Flex vertical>
              <span className="font-bold">Emma Smith</span>
              <Flex align="center">
                <span>to me</span>                
              </Flex>
            </Flex>
            <Flex align="center">
              <span className="mx-2" >05 May 2024, 6:43 am</span>
              <Rate className="mx-2" count={1} />
              <span className="cursor-pointer"><BsThreeDotsVertical /></span>
            </Flex>
          </Flex>
        </Flex>
      ),
      children: (
        <>
          <Flex className="py-5 ml-14 mr-8 bg-slate-400" justify="center">
              <div>
                  <p>Hi Bob,</p>
                  <p>
                      With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of
                      any article is the title.Without a compelleing title, your reader won't even get to the first
                      sentence.After the title, however, the first few sentences of your article are certainly
                      the most important part.
                  </p>
                  <p>
                      Jornalists call this critical, introductory section the "Lede," and when bridge properly executed,
                      it's the that carries your reader from an headine try at attention-grabbing to the body of your
                      blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
                  </p>
                  <p>
                      Best regards,
                  </p>
                  <p className="mb-0">
                      Jason Muller
                  </p>
              </div>
          </Flex>
        </>
      ),
      showArrow: false,
      extra: (
        <>
          <Dropdown
            trigger={['click']}
            dropdownRender={() => (
              <div 
                style={{
                  backgroundColor: colorBgElevated,
                  borderRadius: borderRadiusLG,
                  boxShadow: boxShadowSecondary,
                  padding: 20,
                }}
              >
                <table className="table">
                  <tbody>
                      <tr>
                          <td className="py-3 w-[95px] text-muted">From</td>
                          <td>Emma Bold</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Date</td>
                          <td>20 Dec 2024, 6:05 pm</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Subject</td>
                          <td>Trip Reminder. Thank you for flying with us!</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Reply-to</td>
                          <td>emma@intenso.com</td>
                      </tr>
                  </tbody>
              </table>
              </div>
            )}
          >                                  
            <span 
              className="cursor-pointer absolute left-32 bottom-2" 
              onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
              }}
            >
              <BsCaretDownFill />
            </span>                                  
          </Dropdown>
        </>
      )
    },
    {
      key: '2',
      label: (
        <Flex>
          <Avatar className="mx-3" size={40}>USER</Avatar>
          <Flex className="w-full mr-8" justify="space-between">
            <Flex vertical>
              <span className="font-bold">Emma Smith</span>
              <Flex align="center">
                <span>to me</span>
              </Flex>
            </Flex>
            <Flex align="center">
              <span className="mx-2" >05 May 2024, 6:43 am</span>
              <Rate className="mx-2" count={1} />
              <span className="cursor-pointer"><BsThreeDotsVertical /></span>
            </Flex>
          </Flex>
        </Flex>
      ),
      children: (
        <>
          <Flex className="py-5 ml-14 mr-8 bg-slate-400" justify="center">
              <div>
                  <p>Hi Bob,</p>
                  <p>
                      With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of
                      any article is the title.Without a compelleing title, your reader won't even get to the first
                      sentence.After the title, however, the first few sentences of your article are certainly
                      the most important part.
                  </p>
                  <p>
                      Jornalists call this critical, introductory section the "Lede," and when bridge properly executed,
                      it's the that carries your reader from an headine try at attention-grabbing to the body of your
                      blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
                  </p>
                  <p>
                      Best regards,
                  </p>
                  <p className="mb-0">
                      Jason Muller
                  </p>
              </div>
          </Flex>
        </>
      ),
      showArrow: false,
      extra: (
        <>
          <Dropdown
            trigger={['click']}
            dropdownRender={() => (
              <div 
                style={{
                  backgroundColor: colorBgElevated,
                  borderRadius: borderRadiusLG,
                  boxShadow: boxShadowSecondary,
                  padding: 20,
                }}
              >
                <table className="table">
                  <tbody>
                      <tr>
                          <td className="py-3 w-[95px] text-muted">From</td>
                          <td>Emma Bold</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Date</td>
                          <td>20 Dec 2024, 6:05 pm</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Subject</td>
                          <td>Trip Reminder. Thank you for flying with us!</td>
                      </tr>
                      <tr>
                          <td className="py-3 text-muted">Reply-to</td>
                          <td>emma@intenso.com</td>
                      </tr>
                  </tbody>
              </table>
              </div>
            )}
          >                                  
            <span 
              className="cursor-pointer absolute left-32 bottom-2" 
              onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
              }}
            >
              <BsCaretDownFill />
            </span>                                  
          </Dropdown>
        </>
      )
    },
  ];
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
              <Flex className="my-5" justify="center">
                <Button type="primary">+ Compose</Button>
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
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                    }}
                  />
                }
                <Flex className="w-full mx-5" justify="space-between">
                  <Input className="w-1/2 md:w-auto" placeholder="Search..." prefix={<BsSearch />} />
                  <Button  type="primary" icon={<BsArrowCounterclockwise />} onClick={handleRefresh}/>
                </Flex>
              </Header>
              <Content className="" style={{ backgroundColor: colorBgContainer }}>
                {
                  loading ? (
                    <Flex className="h-full" justify="center" align="center">
                      <NLoading />
                    </Flex>
                  ) : (
                    <>                      
                      {/* <Table 
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
                      /> */}
                      <div>
                        <Space size={0}>
                          <Button className="ml-1 mr-3" type="text" icon={<BsArrowLeft />} />
                          <Button type="text" icon={<BsStar />} />
                          <Button type="text" icon={<BsTag />} />
                          <Button type="text" icon={<BsExclamationCircle />} />
                          <Button type="text" icon={<BsTrash />} />
                        </Space>
                        <Divider className="my-2"/>
                        <ConfigProvider
                          theme={{
                            components: {
                              Collapse: {
                                headerBg: colorBgContainer,
                              },
                            },
                          }}
                        >
                          <Collapse items={itemsCollapse} bordered={false} defaultActiveKey={['2']} />
                        </ConfigProvider>                                         
                      </div>
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

export default MailPage;
