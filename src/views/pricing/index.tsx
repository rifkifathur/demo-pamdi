import React from 'react';
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Flex } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

interface Plan {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonType: 'primary' | 'default';
}

const plans: Plan[] = [
  {
    title: 'Basic',
    price: '$9.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    buttonText: 'Choose Basic',
    buttonType: 'default',
  },
  {
    title: 'Standard',
    price: '$19.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    buttonText: 'Choose Standard',
    buttonType: 'primary',
  },
  {
    title: 'Premium',
    price: '$29.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    buttonText: 'Choose Premium',
    buttonType: 'default',
  },
];

const PricingPage = () => {
  const breadcrumbItems = [
    { title: "Pages" },
    { title: <Link to={'/pricing'}>Pricing</Link> },
  ]

  return (
    <>
      <NBreadcrumb title="Pricing" items={breadcrumbItems} />
      <div className="text-center mb-7">
        <h2>Pick a base plan</h2>
        <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission.</p>
      </div>
      <Row gutter={16}>
        {plans.map((plan, index) => (
          <Col key={index} xs={24} lg={8} className="mb-7">
            <Card title={plan.title} bordered={false} className="text-center">
              <Flex vertical justify="space-between" align="center" className="h-[400px] py-10">
                <div>
                  <p className="text-[24px] font-bold my-[20px]">{plan.price}</p>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li className="list-none mr-8" key={i}>
                        <CheckOutlined /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button type={plan.buttonType}>{plan.buttonText}</Button>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PricingPage;