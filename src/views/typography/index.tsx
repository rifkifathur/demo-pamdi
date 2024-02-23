import React, { useMemo, useState } from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Radio, Typography, Space } from "antd";
import {
  HighlightOutlined,
  CheckOutlined,
  SmileOutlined,
  SmileFilled,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const TypographyPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: <Link to={"/typography"}>Typography</Link> },
  ];

  const [editableStr, setEditableStr] = useState("This is an editable text.");
  const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
    "This is a loooooooooooooooooooooooooooooooong editable text with suffix."
  );
  const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] =
    useMemo(
      () => [
        editableStrWithSuffix.slice(0, -12),
        editableStrWithSuffix.slice(-12),
      ],
      [editableStrWithSuffix]
    );
  const [customIconStr, setCustomIconStr] = useState(
    "Custom Edit icon and replace tooltip text."
  );
  const [clickTriggerStr, setClickTriggerStr] = useState(
    "Text or icon as trigger - click to start editing."
  );
  const [chooseTrigger, setChooseTrigger] = useState<("icon" | "text")[]>([
    "icon",
  ]);
  const [customEnterIconStr, setCustomEnterIconStr] = useState(
    "Editable text with a custom enter icon in edit field."
  );
  const [noEnterIconStr, setNoEnterIconStr] = useState(
    "Editable text with no enter icon in edit field."
  );
  const [hideTooltipStr, setHideTooltipStr] = useState("Hide Edit tooltip.");
  const [lengthLimitedStr, setLengthLimitedStr] = useState(
    "This is an editable text with limited length."
  );

  const radioToState = (input: string): ("icon" | "text")[] => {
    switch (input) {
      case "text":
        return ["text"];
      case "both":
        return ["icon", "text"];
      case "icon":
      default:
        return ["icon"];
    }
  };

  const stateToRadio = useMemo<string>(() => {
    if (chooseTrigger.includes("text")) {
      return chooseTrigger.includes("icon") ? "both" : "text";
    }
    return "icon";
  }, [chooseTrigger]);
  return (
    <>
      <NBreadcrumb items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Title Component"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Title>h1. Ant Design</Title>
            <Title level={2}>h2. Ant Design</Title>
            <Title level={3}>h3. Ant Design</Title>
            <Title level={4}>h4. Ant Design</Title>
            <Title level={5}>h5. Ant Design</Title>
          </Card>
          <Card
            className="mb-8"
            title="Interactive"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Paragraph editable={{ onChange: setEditableStr }}>
              {editableStr}
            </Paragraph>
            <Paragraph
              editable={{
                onChange: setEditableStrWithSuffix,
                text: editableStrWithSuffix,
              }}
              ellipsis={{
                suffix: editableStrWithSuffixSuffixPart,
              }}
            >
              {editableStrWithSuffixStartPart}
            </Paragraph>
            <Paragraph
              editable={{
                icon: <HighlightOutlined />,
                tooltip: "click to edit text",
                onChange: setCustomIconStr,
              }}
            >
              {customIconStr}
            </Paragraph>
            Trigger edit with:{" "}
            <Radio.Group
              onChange={(e) => setChooseTrigger(radioToState(e.target.value))}
              value={stateToRadio}
            >
              <Radio value="icon">icon</Radio>
              <Radio value="text">text</Radio>
              <Radio value="both">both</Radio>
            </Radio.Group>
            <Paragraph
              editable={{
                tooltip: "click to edit text",
                onChange: setClickTriggerStr,
                triggerType: chooseTrigger,
              }}
            >
              {clickTriggerStr}
            </Paragraph>
            <Paragraph
              editable={{
                icon: <HighlightOutlined />,
                tooltip: "click to edit text",
                onChange: setCustomEnterIconStr,
                enterIcon: <CheckOutlined />,
              }}
            >
              {customEnterIconStr}
            </Paragraph>
            <Paragraph
              editable={{
                icon: <HighlightOutlined />,
                tooltip: "click to edit text",
                onChange: setNoEnterIconStr,
                enterIcon: null,
              }}
            >
              {noEnterIconStr}
            </Paragraph>
            <Paragraph
              editable={{ tooltip: false, onChange: setHideTooltipStr }}
            >
              {hideTooltipStr}
            </Paragraph>
            <Paragraph
              editable={{
                onChange: setLengthLimitedStr,
                maxLength: 50,
                autoSize: { maxRows: 5, minRows: 3 },
              }}
            >
              {lengthLimitedStr}
            </Paragraph>
            <Typography.Title editable level={1} style={{ margin: 0 }}>
              h1. Ant Design
            </Typography.Title>
            <Typography.Title editable level={2} style={{ margin: 0 }}>
              h2. Ant Design
            </Typography.Title>
            <Typography.Title editable level={3} style={{ margin: 0 }}>
              h3. Ant Design
            </Typography.Title>
            <Typography.Title editable level={4} style={{ margin: 0 }}>
              h4. Ant Design
            </Typography.Title>
            <Typography.Title editable level={5} style={{ margin: 0 }}>
              h5. Ant Design
            </Typography.Title>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Text and Link Component"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical">
              <Text>Ant Design (default)</Text>
              <Text type="secondary">Ant Design (secondary)</Text>
              <Text type="success">Ant Design (success)</Text>
              <Text type="warning">Ant Design (warning)</Text>
              <Text type="danger">Ant Design (danger)</Text>
              <Text disabled>Ant Design (disabled)</Text>
              <Text mark>Ant Design (mark)</Text>
              <Text code>Ant Design (code)</Text>
              <Text keyboard>Ant Design (keyboard)</Text>
              <Text underline>Ant Design (underline)</Text>
              <Text delete>Ant Design (delete)</Text>
              <Text strong>Ant Design (strong)</Text>
              <Text italic>Ant Design (italic)</Text>
              <Link to="https://ant.design" target="_blank">
                Ant Design (Link)
              </Link>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Disabled Button"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Paragraph copyable>This is a copyable text.</Paragraph>
            <Paragraph copyable={{ text: "Hello, Ant Design!" }}>
              Replace copy text.
            </Paragraph>
            <Paragraph
              copyable={{
                icon: [
                  <SmileOutlined key="copy-icon" />,
                  <SmileFilled key="copied-icon" />,
                ],
                tooltips: ["click here", "you clicked!!"],
              }}
            >
              Custom Copy icon and replace tooltips text.
            </Paragraph>
            <Paragraph copyable={{ tooltips: false }}>
              Hide Copy tooltips.
            </Paragraph>
            <Text copyable />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TypographyPage;
