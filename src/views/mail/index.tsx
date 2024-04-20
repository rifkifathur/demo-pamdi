import React, { ReactElement, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps, TableColumnsType, TableProps } from 'antd';
import { Button, Flex, Input, Layout, Menu, theme, Table } from 'antd';
import { BsArrowCounterclockwise, BsEnvelope, BsExclamationCircle, BsFileEarmark, BsPlus, BsSearch, BsSend, BsStar, BsTag, BsTrash } from "react-icons/bs";

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
  age: string;
  address: string;
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

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setAction(!action);
    setSelectedRowKeys(newSelectedRowKeys);
  };

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
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue nisi arcu, a interdum erat iaculis a. Maecenas a finibus tellus. Aenean pharetra augue risus, pulvinar hendrerit nisi convallis ut. Nulla facilisi. Aenean justo eros, lobortis et tempus vel, tempus vel lacus. Suspendisse rhoncus iaculis auctor. Integer non velit ipsum. Sed ac dapibus eros. Fusce scelerisque augue massa, sit amet placerat felis ultricies eu. Donec mollis urna quis quam ultricies, et feugiat augue accumsan. Integer id risus ornare, tincidunt lorem at, tempor sem. Duis accumsan massa at ante iaculis blandit. Vivamus sed imperdiet eros. Maecenas magna eros, lobortis non justo eget, porttitor eleifend elit. Nam libero magna, consectetur quis ex non, lacinia mollis metus. Vivamus vel sapien sollicitudin, egestas turpis id, pretium est.",
      address: `London, Park Lane no. ${i}`,
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
                <Button type="primary">Compose</Button>
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
                  <Button  type="primary" icon={<BsArrowCounterclockwise />} />
                </Flex>
              </Header>
              <Content className="h-[380px]">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: 270 }} />
              </Content>
            </Layout>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default MailPage;
