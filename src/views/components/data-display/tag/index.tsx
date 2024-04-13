import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Divider, Flex, Row, Tag, Tooltip, Input, theme } from "antd";
import type { InputRef } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaLinkedinIn, FaPlus, FaTwitter, FaX, FaYoutube } from "react-icons/fa6";

const tagInputStyle: React.CSSProperties = {
  width: 64,
  height: 22,
  marginInlineEnd: 8,
  verticalAlign: 'top',
};

const TagPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/tag"}>Tag</Link> },
  ];

  const { token } = theme.useToken();
  const [tags, setTags] = useState<string[]>(['Unremovable', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const tagPlusStyle: React.CSSProperties = {
    height: 22,
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };
  return (
    <>
      <NBreadcrumb title="Tag" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Tag"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Tag>Tag 1</Tag>
            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
            </Tag>
            <Tag closeIcon onClose={preventDefault}>
              Prevent Default
            </Tag>
            <Tag closeIcon={<FaX />} onClose={console.log}>
              Tag 2
            </Tag>
          </Card>
          <Card
            className="mb-8"
            title="Add Remove Tag"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="4px 0" wrap="wrap">
              {tags.map<React.ReactNode>((tag, index) => {
                if (editInputIndex === index) {
                  return (
                    <Input
                      ref={editInputRef}
                      key={tag}
                      size="small"
                      style={tagInputStyle}
                      value={editInputValue}
                      onChange={handleEditInputChange}
                      onBlur={handleEditInputConfirm}
                      onPressEnter={handleEditInputConfirm}
                    />
                  );
                }
                const isLongTag = tag.length > 20;
                const tagElem = (
                  <Tag
                    key={tag}
                    closable={index !== 0}
                    style={{ userSelect: 'none' }}
                    onClose={() => handleClose(tag)}
                  >
                    <span
                      onDoubleClick={(e) => {
                        if (index !== 0) {
                          setEditInputIndex(index);
                          setEditInputValue(tag);
                          e.preventDefault();
                        }
                      }}
                    >
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </span>
                  </Tag>
                );
                return isLongTag ? (
                  <Tooltip title={tag} key={tag}>
                    {tagElem}
                  </Tooltip>
                ) : (
                  tagElem
                );
              })}
              {inputVisible ? (
                <Input
                  ref={inputRef}
                  type="text"
                  size="small"
                  style={tagInputStyle}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputConfirm}
                  onPressEnter={handleInputConfirm}
                />
              ) : (
                <Tag style={tagPlusStyle} icon={<FaPlus />} onClick={showInput}>
                  New Tag
                </Tag>
              )}
            </Flex>
          </Card>
          
          <Card
            className="mb-8"
            title="With Icon Tag"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Flex gap="4px 0" wrap="wrap">
              <Tag icon={<FaTwitter />} color="#55acee">
                Twitter
              </Tag>
              <Tag icon={<FaYoutube />} color="#cd201f">
                Youtube
              </Tag>
              <Tag icon={<FaFacebook />} color="#3b5999">
                Facebook
              </Tag>
              <Tag icon={<FaLinkedinIn />} color="#55acee">
                LinkedIn
              </Tag>
            </Flex>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Colorful Tag"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Divider orientation="left">Presets</Divider>
            <Flex gap="4px 0" wrap="wrap">
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </Flex>
            <Divider orientation="left">Custom</Divider>
            <Flex gap="4px 0" wrap="wrap">
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </Flex>
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default TagPage;
