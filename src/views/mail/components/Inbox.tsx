import React, { ReactElement } from "react";
import { Table } from 'antd';
import type { TableColumnsType, TableProps  } from 'antd';

interface DataType {
  key: React.Key;
  starredElm: ReactElement;
  name: string | ReactElement;
  starred: boolean;

}
type TableRowSelection<T> = TableProps<T>["rowSelection"];
type InboxType = {
    data: DataType[];
    columns: TableColumnsType<DataType>;
    rowSelection: TableRowSelection<DataType>,
};

const Inbox = ({
    data,
    columns,
    rowSelection
}: InboxType) => {
  
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
