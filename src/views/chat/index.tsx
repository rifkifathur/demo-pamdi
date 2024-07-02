import React, { useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Col, List, Row, Input, Avatar, Button, Flex, theme, Empty } from "antd";
import { BsArrowLeft, BsSearch, BsThreeDotsVertical } from "react-icons/bs";

const { TextArea } = Input;

interface Message {
  id: number;
  text: string;
  sender: string;
}

interface ChatList {
  key: string;
  name: string;
  avatar: JSX.Element | string;
  preview: string;
}

const ChatPage = () => {
  const {
    token: { colorBgContainer, colorFillSecondary, colorPrimary },
  } = theme.useToken();

  const breadcrumbItems = [
    { title: <Link to={'/apps/chat'}>Chat</Link> },
  ]

  const [activeChat, setActiveChat] = useState<ChatList | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({
    john: [
      { id: 1, text: "Hey there!", sender: "friend" },
      { id: 2, text: "Hi, How are you?", sender: "user" },
      { id: 3, text: "Hi! I'm good, thanks!", sender: "friend" },
      { id: 4, text: "What about you?", sender: "user" },
    ],
    andi: [
      { id: 1, text: "Hey, good to see you!", sender: "friend" },
      { id: 2, text: "Hey, It's been a while. How have you been?", sender: "user" },
      { id: 3, text: "I've been good, thanks. How about you?", sender: "friend" },
      { id: 4, text: "I've been busy with work, but doing well overall. Thanks for meeting me here.", sender: "user" },
    ],
    tony: [
      { id: 1, text: "Hey, good to see you!", sender: "friend" },
      { id: 2, text: "Hey, It's been a while. How have you been?", sender: "user" },
      { id: 3, text: "I've been good, thanks. How about you?", sender: "friend" },
      { id: 4, text: "I've been busy with work, but doing well overall. Thanks for meeting me here.", sender: "user" },
    ],
    chris: [
      { id: 1, text: "Hey, good to see you!", sender: "friend" },
      { id: 2, text: "Hey, It's been a while. How have you been?", sender: "user" },
      { id: 3, text: "I've been good, thanks. How about you?", sender: "friend" },
      { id: 4, text: "I've been busy with work, but doing well overall. Thanks for meeting me here.", sender: "user" },
    ],
    harry: [
      { id: 1, text: "Hey, good to see you!", sender: "friend" },
      { id: 2, text: "Hey, It's been a while. How have you been?", sender: "user" },
      { id: 3, text: "I've been good, thanks. How about you?", sender: "friend" },
      { id: 4, text: "I've been busy with work, but doing well overall. Thanks for meeting me here.", sender: "user" },
    ],
  });
  const [showChat, setShowChat] = useState(false);
  const chatMenuList: ChatList[] = [
    {
      key: 'john',
      name: 'John',
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/18.jpg",
      preview: messages['john'][messages['john'].length - 1].text,
    },
    {
      key: 'andi',
      name: 'Andi',
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg",
      preview: messages['andi'][messages['andi'].length - 1].text,
    },
    {
      key: 'tony',
      name: 'Tony',
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/12.jpg",
      preview: messages['tony'][messages['tony'].length - 1].text,
    },
    {
      key: 'chris',
      name: 'Chris',
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg",
      preview: messages['chris'][messages['chris'].length - 1].text,
    },
    {
      key: 'harry',
      name: 'Harry',
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/16.jpg",
      preview: messages['harry'][messages['harry'].length - 1].text,
    },
  ];
  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const newMessage: Message = {
        id: messages[activeChat!.key].length + 1,
        text: inputValue.trim(),
        sender: 'user',
      };
      setMessages({
        ...messages,
        [activeChat!.key]: [...messages[activeChat!.key], newMessage],
      });
      setInputValue('');
    }
  };

  const handleMenuChat = (key: string) => {
    const tempData = chatMenuList.filter(item => item.key === key);
    setActiveChat(tempData[0]);
    setShowChat(true);
  }

  return (
    <>
      <NBreadcrumb title="Chat" items={breadcrumbItems} />
      <Row className="h-[350px] mb-8">
        <Col xs={24} lg={8}>
          <div className={`h-full ${!showChat ? "block" : "hidden"} md:block`} style={{
            backgroundColor: colorBgContainer,
            border: "solid 1px " + colorFillSecondary,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            padding: 10,
          }}>
            <Input className="w-full p-3 mb-2" placeholder="Search..." prefix={<BsSearch />} />
            <div className="custom-scrollbar h-[300px] overflow-y-auto invisible hover:visible">
              <List
                className="visible"
                itemLayout="horizontal"
                dataSource={chatMenuList}
                renderItem={(item, index) => (
                  <List.Item className="cursor-pointer" onClick={() => handleMenuChat(item.key)} style={{
                    backgroundColor: item.key === activeChat?.key ? colorFillSecondary : colorBgContainer,
                  }}>
                    <List.Item.Meta
                      className="px-5"
                      avatar={<Avatar src={item.avatar} />}
                      title={(
                        <div className="flex justify-between">
                          <div>{item.name}</div>
                          <div className="font-light">14.00</div>
                        </div>
                      )}
                      description={(<span className="block truncate w-50">{item.preview}</span>)}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Col>
        <Col xs={24} lg={16}>
          <div className={`h-full ${!showChat ? "hidden" : ""} md:block`} style={{
            backgroundColor: colorBgContainer,
            border: "solid 1px " + colorFillSecondary,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10
          }}
          >
            {activeChat !== null ? (
              <>
                <Flex className="p-2" justify="space-between" align="center" style={{
                  borderBottom: "solid 1px " + colorFillSecondary,
                }}>
                  <div className="flex items-center">
                    <div className="block md:hidden px-1" onClick={() => setShowChat(false)} >
                      <BsArrowLeft />
                    </div>
                    <Avatar
                      size={40}
                      shape="circle"
                      src={activeChat !== null ? activeChat.avatar : ''}
                    />
                    <span className="px-3 text-lg font-bold">{activeChat?.name}</span>
                  </div>
                  <div><BsThreeDotsVertical /></div>
                </Flex>
                <div className="custom-scrollbar h-[300px] overflow-y-auto invisible hover:visible">
                  <List
                    className="visible"
                    itemLayout="horizontal"
                    dataSource={messages[activeChat !== null ? activeChat.key : '']}
                    renderItem={(message) => (
                      <div className={`flex p-3 my-2 ${message.sender === 'user' ? "justify-end" : "justify-start"}`}>
                        <div className="py-2 px-4 rounded-md text-right" style={{
                          backgroundColor: message.sender === 'user' ? colorPrimary : colorFillSecondary,
                        }}>
                          <span className={`${message.sender === 'user' ? 'text-[#fff]' : ''}`}>{message.text}</span><br />
                          <span className={`text-[8px] ${message.sender === 'user' ? 'text-[#fff]' : ''}`}>14.00</span>
                        </div>
                      </div>
                    )}
                  />
                </div>
                <Flex justify="space-between">
                  <TextArea
                    rows={1}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPressEnter={handleMessageSend}
                    placeholder="Type your message here..."
                    style={{ marginTop: '10px', width: "85%" }}
                  />
                  <Button
                    type="primary"
                    style={{ marginTop: '10px' }}
                    onClick={handleMessageSend}
                  >
                    Send
                  </Button>
                </Flex>
              </>
            ) : (
              <Flex className="h-full" justify="center" align="center">
                <Empty description={false} />
              </Flex>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ChatPage;
