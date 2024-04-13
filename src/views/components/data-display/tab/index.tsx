import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Radio, Row, Tabs } from "antd";
import React, {useRef, useState } from "react";
import type { TabsProps, RadioChangeEvent } from 'antd';
import { FaBus, FaCar } from "react-icons/fa6";

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
type TabPosition = 'left' | 'right' | 'top' | 'bottom';
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  { label: 'Tab 1', children: 'Content of Tab 1', key: '1', closable: false },
  { label: 'Tab 2', children: 'Content of Tab 2', key: '2' },
  { label: 'Tab 3', children: 'Content of Tab 3', key: '3' },
];
const TabPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/tab"}>Tab</Link> },
  ];
  const [mode, setMode] = useState<TabPosition>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [itemsTabCard, setItemsTabCard] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...itemsTabCard];
    newPanes.push({ label: 'New Tab', children: 'Content of new Tab', key: newActiveKey });
    setItemsTabCard(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = itemsTabCard.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItemsTabCard(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <>
      <NBreadcrumb title="Tab" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <Card className="mb-8 w-auto " title="Basic" bordered={false}>
            <Tabs defaultActiveKey="1" items={items} />
          </Card>
          <Card className="mb-8 w-auto" title="Disbled" bordered={false}>
            <Tabs
              defaultActiveKey="1"
              items={[
                ...items,
                {
                  key: '4',
                  label: 'Tab 4',
                  children: 'Content of Tab Pane 4',
                  disabled: true
                }
              ]}
            />
          </Card>
          <Card className="mb-8 w-auto" title="With Icon" bordered={false}>
            <Tabs
              defaultActiveKey="2"
              items={[FaCar, FaBus].map((Icon, i) => {
                const id = String(i + 1);
                return {
                  key: id,
                  label: `Tab ${id}`,
                  children: `Tab ${id}`,
                  icon: <Icon />,
                };
              })}
            />
          </Card>
          <Card className="mb-8 w-auto" title="Slide" bordered={false}>
            <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
              <Radio.Button value="top">Horizontal</Radio.Button>
              <Radio.Button value="left">Vertical</Radio.Button>
            </Radio.Group>
            <Tabs
              defaultActiveKey="1"
              tabPosition={mode}
              style={{ height: 220 }}
              items={new Array(30).fill(null).map((_, i) => {
                const id = String(i);
                return {
                  label: `Tab-${id}`,
                  key: id,
                  disabled: i === 28,
                  children: `Content of tab ${id}`,
                };
              })}
            />
          </Card>
          <Card className="mb-8 w-auto" title="Slide" bordered={false}>
            <Tabs
              type="editable-card"
              onChange={onChange}
              activeKey={activeKey}
              onEdit={onEdit}
              items={itemsTabCard}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TabPage;
