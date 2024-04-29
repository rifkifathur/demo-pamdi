import { Table } from 'antd';
import type { MenuProps, TableColumnsType, TableProps, CollapseProps  } from 'antd';

const Inbox = () => {
    return (
        <Table 
          // rowSelection={rowSelection}
          // columns={columns} 
          // dataSource={data} 
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
