import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Divider, Radio, Row, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import type { TableColumnsType, TableProps } from 'antd';
import TableDynamic from "./TableDynamic";

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columnsFilter: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
];

const TablePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/table"}>Table</Link> },
  ];

  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedRowKeys1, setSelectedRowKeys1] = useState<React.Key[]>([]);
  const [selectedRowKeys2, setSelectedRowKeys2] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const rowSelection1 = {
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys1([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange1 = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys1(newSelectedRowKeys);
  };

  const rowSelection2 = {
    selectedRowKeys1,
    onChange: onSelectChange1,
  };
  const hasSelected = selectedRowKeys1.length > 0;

  const onSelectChange2 = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys2(newSelectedRowKeys);
  };

  const rowSelection3: TableRowSelection<DataType> = {
    selectedRowKeys: selectedRowKeys2,
    onChange: onSelectChange2,
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
          setSelectedRowKeys2(newSelectedRowKeys);
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
          setSelectedRowKeys2(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <>
      <NBreadcrumb title="Table" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <Card className="mb-8 w-auto " title="Basic Table" bordered={false}>
            <Table columns={columns} dataSource={data} />
          </Card>
          <Card className="mb-8 w-auto" title="Selection" bordered={false}>
            <Radio.Group
              onChange={({ target: { value } }) => {
                setSelectionType(value);
              }}
              value={selectionType}
            >
              <Radio value="checkbox">Checkbox</Radio>
              <Radio value="radio">radio</Radio>
            </Radio.Group>
            <Divider />
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection1,
              }}
              columns={columns}
              dataSource={data}
            />
          </Card>
          <Card className="mb-8 w-auto" title="Operation" bordered={false}>
            <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys1.length} items` : ''}
            </span>
            <Table rowSelection={rowSelection2} columns={columns} dataSource={data} />
          </Card>
          <Card className="mb-8 w-auto" title="Custom Selection" bordered={false}>
            <Table rowSelection={rowSelection3} columns={columns} dataSource={data} />
          </Card>
          <Card className="mb-8 w-auto" title="Filter and Sort" bordered={false}>
            <Table
              columns={columnsFilter}
              dataSource={data}
              showSorterTooltip={{ target: 'sorter-icon' }}
            />
          </Card>
          <Card className="mb-8 w-auto" title="Dynamic" bordered={false}>
            <TableDynamic />
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default TablePage;
