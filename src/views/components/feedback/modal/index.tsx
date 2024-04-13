import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Modal, Row, Space } from "antd";
import { useState } from "react";

const ModalPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Feedback" },
    { title: <Link to={"/components/feedback/modal"}>Modal</Link> },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const showModal1 = () => {
    setIsModalOpen(true);
  };

  const handleOk1 = () => {
    setIsModalOpen(false);
  };

  const handleCancel1 = () => {
    setIsModalOpen(false);
  };

  const handleOk2 = () => {
    setOpen1(false);
  };

  const handleCancel2 = () => {
    setOpen1(false);
  };

  return (
    <>
      <NBreadcrumb title="Modal" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Basic Modal"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Button type="primary" onClick={showModal1}>
              Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk1} onCancel={handleCancel1}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Card>
          <Card
            className="mb-8"
            title="Customize duration"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Button type="primary" onClick={() => setOpen2(true)}>
              Open Modal of 1000px width
            </Button>
            <Modal
              title="Modal 1000px width"
              centered
              open={open2}
              onOk={() => setOpen2(false)}
              onCancel={() => setOpen2(false)}
              width={1000}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} lg={12}>
          <Card
            className="mb-8"
            title="Other types of message"
            bordered={false}
            style={{ width: "auto" }}
          >
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  Modal.confirm({
                    title: 'Confirm',
                    content: 'Bla bla ...',
                    footer: (_, { OkBtn, CancelBtn }) => (
                      <>
                        <Button>Custom Button</Button>
                        <CancelBtn />
                        <OkBtn />
                      </>
                    ),
                  });
                }}
              >
                Open Modal Confirm
              </Button>
            </Space>
            <Modal
              open={open1}
              title="Title"
              onOk={handleOk2}
              onCancel={handleCancel2}
              footer={(_, { OkBtn, CancelBtn }) => (
                <>
                  <Button>Custom Button</Button>
                  <CancelBtn />
                  <OkBtn />
                </>
              )}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Card>
        </Col>
      </Row >
    </>
  );
};

export default ModalPage;
