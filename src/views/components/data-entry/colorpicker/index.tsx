import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, ColorPicker, Space, theme } from "antd";
import type { ColorPickerProps } from 'antd';
import { generate, green, presetPalettes, red } from '@ant-design/colors';

type Presets = Required<ColorPickerProps>['presets'][number];
const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({ label, colors }));

const ColorPickerPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Entry" },
    { title: <Link to={"/components/data-entry/color-picker"}>Color Picker</Link> },
  ];
  
  const { token } = theme.useToken();
  const presets = genPresets({ primary: generate(token.colorPrimary), red, green });
  return (
    <>
      <NBreadcrumb title="Color Picker" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Color Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <ColorPicker defaultValue="#1677ff" />
          </Card>
          <Card
            className="mb-8"
            title="Trigger Text Color Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <ColorPicker
              defaultValue="#1677ff"
              showText={(color) => <span>Custom Text ({color.toHexString()})</span>}
            />
          </Card>
          <Card
            className="mb-8"
            title="Preset Color Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <ColorPicker presets={presets} defaultValue="#F5222D" />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Size Color Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space>
              <Space direction="vertical">
                <ColorPicker defaultValue="#1677ff" size="small" />
                <ColorPicker defaultValue="#1677ff" />
                <ColorPicker defaultValue="#1677ff" size="large" />
              </Space>
              <Space direction="vertical">
                <ColorPicker defaultValue="#1677ff" size="small" showText />
                <ColorPicker defaultValue="#1677ff" showText />
                <ColorPicker defaultValue="#1677ff" size="large" showText />
              </Space>
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Disabled Color Picker"
            bordered={false}
            style={{ width: "auto" }}
          >
            <ColorPicker defaultValue="#1677ff" showText disabled />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ColorPickerPage;
