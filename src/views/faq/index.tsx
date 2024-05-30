import React from 'react';
import { Card, Collapse, Flex, Input, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import {
  FaMagnifyingGlass,
} from "react-icons/fa6";

const { Panel } = Collapse;

const FAQPage = () => {
  return (
    <Card>
      <h1 className="text-center">
        Frequently Asked Questions
      </h1>
      <Flex justify="center" className="mb-7">
        <Input
          className="w-[550px] h-[35px]"
          placeholder="Search"
          prefix={<FaMagnifyingGlass className="site-form-item-icon" />}
        />
      </Flex>
      <Collapse
        accordion
        // bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
        <Panel
          header={
            <span className="font-bold text-lg">Question 1: What is Lorem Ipsum?</span>
          }
          key="1"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Panel>
        <Panel
          header={
            <span className="font-bold text-lg">Question 2: Why do we use it?</span>
          }
          key="2"
        >
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </Panel>
        <Panel
          header={
            <span className="font-bold text-lg"> Question 3: Where can I get some?</span>
          }
          key="3"
        >
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable.
          </p>
        </Panel>
        {/* Add more panels as needed */}
      </Collapse>
    </Card>
  );
};

export default FAQPage;
