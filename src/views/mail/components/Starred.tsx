import { Flex, Empty, Table } from 'antd';
import React, { ReactElement, useState } from "react";
import type { MenuProps, TableColumnsType, TableProps, CollapseProps  } from 'antd';

interface DataType {
  key: React.Key;
  name: string | ReactElement;
  starredElm: ReactElement;
  starred: boolean;
}

type StarredType = {
  data: DataType[];
  columns: TableColumnsType<DataType>;
};
const Starred = ({
  data,
  columns
}: StarredType) => {
  const starred = data.filter(item => item.starred);
  return (
    <>
    {
      starred.length > 0 ? (
        <Table 
          columns={columns} 
          dataSource={starred}
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
      ) : (
        <Flex className="h-full" justify="center" align="center">
          <Empty description={false} />;
        </Flex>
      )
    }
    </>
  );
};

export default Starred;