import { Flex, Empty } from 'antd';
import React from 'react';

const Trash = () => {
  return (
    <Flex className="h-full" justify="center" align="center">
      <Empty description={false} />;
    </Flex>
  );
};

export default Trash;