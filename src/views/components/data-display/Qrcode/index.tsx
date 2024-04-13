import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row, Space, QRCode, Input, theme, Button } from "antd";
import { useState } from "react";

const { useToken } = theme;
const QrcodePage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Data Display" },
    { title: <Link to={"/components/data-display/qrcode"}>Qrcode</Link> },
  ];
  const { token } = useToken();
  const [text, setText] = useState<string>('https://ant.design/');

  const downloadQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = 'QRCode.png';
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <NBreadcrumb title="Qrcode" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Qrcode"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space direction="vertical" align="center">
              <QRCode value={text || '-'} />
              <Input
                placeholder="-"
                maxLength={60}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Space>
          </Card>
          <Card
            className="mb-8"
            title="Custom Color"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space>
              <QRCode value="https://ant.design/" color={token.colorSuccessText} />
              <QRCode
                value="https://ant.design/"
                color={token.colorInfoText}
                bgColor={token.colorBgLayout}
              />
            </Space>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="With Icon"
            bordered={false}
            style={{ width: "auto" }}
          >
            <QRCode
              errorLevel="H"
              value="https://ant.design/"
              icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
          </Card>
          <Card
            className="mb-8"
            title="Download Qrcode"
            bordered={false}
            style={{ width: "auto" }}
          >
             <div id="myqrcode">
              <QRCode value="https://ant.design/" style={{ marginBottom: 16 }} />
              <Button type="primary" onClick={downloadQRCode}>
                Download
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default QrcodePage;
