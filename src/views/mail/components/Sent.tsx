import { Flex, Empty } from 'antd';
import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

const Sent = () => {
  return (
    <Flex className="h-full" justify="center" align="center">
      <Empty description={false} />;
    </Flex>
  );
};

export default Sent;