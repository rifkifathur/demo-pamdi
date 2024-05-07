import React, { ReactElement, useState } from "react";
import { Table } from 'antd';
import type { MenuProps, TableColumnsType, TableProps, CollapseProps  } from 'antd';

interface DataType {
  key: React.Key;
  starredElm: ReactElement;
  name: string | ReactElement;
  starred: boolean;

}

type InboxType = {
    data: DataType[];
    columns: TableColumnsType<DataType>;
    action: boolean;
    setAction: (action: boolean) => void;
};

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const Inbox = ({
    data,
    columns,
    action,
    setAction,
}: InboxType) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setAction(!action);
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
    return (
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
    );
};

export default Inbox;
