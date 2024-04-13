import React from "react";
import { NBreadcrumb } from "../../../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Result, Row, Typography } from "antd";
import { FaFaceSmile, FaX } from "react-icons/fa6";

const { Paragraph, Text } = Typography;

const ResultPage = () => {
  const breadcrumbItems = [
    { title: <Link to={"/"}>Dashboard</Link> },
    { title: "Components" },
    { title: "Feedback" },
    { title: <Link to={"/components/feedback/result"}>Result</Link> },
  ];

  return (
    <>
      <NBreadcrumb title="Result" items={breadcrumbItems} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24}>
          <Card className="mb-8 w-auto " title="Success" bordered={false}>
            <Result
              status="success"
              title="Successfully Purchased Cloud Server ECS!"
              subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
              extra={[
                <Button type="primary" key="console">
                  Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
              ]}
            />
          </Card>
          <Card className="mb-8 w-auto" title="Info" bordered={false}>
            <Result
              title="Your operation has been executed"
              extra={
                <Button type="primary" key="console">
                  Go Console
                </Button>
              }
            />
          </Card>
          <Card className="mb-8 w-auto" title="Warning" bordered={false}>
            <Result
              status="warning"
              title="There are some problems with your operation."
              extra={
                <Button type="primary" key="console">
                  Go Console
                </Button>
              }
            />
          </Card>
          <Card className="mb-8 w-auto" title="403" bordered={false}>
            <Result
              status="403"
              title="403"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </Card>
          <Card className="mb-8 w-auto" title="404" bordered={false}>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary">Back Home</Button>}
            />
          </Card>
          <Card className="mb-8 w-auto" title="404" bordered={false}>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary">Back Home</Button>}
            />
          </Card>
          <Card className="mb-8 w-auto" title="500" bordered={false}>
            <Result
              status="500"
              title="500"
              subTitle="Sorry, something went wrong."
              extra={<Button type="primary">Back Home</Button>}
            />
          </Card>
          <Card className="mb-8 w-auto" title="Error" bordered={false}>
            <Result
              status="error"
              title="Submission Failed"
              subTitle="Please check and modify the following information before resubmitting."
              extra={[
                <Button type="primary" key="console">
                  Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
              ]}
            >
              <div className="desc">
                <Paragraph>
                  <Text
                    strong
                    style={{
                      fontSize: 16,
                    }}
                  >
                    The content you submitted has the following error:
                  </Text>
                </Paragraph>
                <Paragraph>
                  <FaX className="site-result-demo-error-icon" /> Your account has been
                  frozen. <a>Thaw immediately &gt;</a>
                </Paragraph>
                <Paragraph>
                  <FaX className="site-result-demo-error-icon" /> Your account is not yet
                  eligible to apply. <a>Apply Unlock &gt;</a>
                </Paragraph>
              </div>
            </Result>
          </Card>
          <Card className="mb-8 w-auto" title="Custom Icon" bordered={false}>
            <Result
              icon={<FaFaceSmile className="text-[80px] text-sky-400"/>}
              title="Great, we have done all the operations!"
              extra={<Button type="primary">Next</Button>}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ResultPage;
