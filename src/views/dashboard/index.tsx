import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker/locale/en_US';

const Dashboard = () => {
  const breadcrumbItems = [
    { title: <Link to={'/'}>Dashboard</Link> },
  ]

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <>
      <NBreadcrumb title="Dashboard" items={breadcrumbItems} />
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false} styles={{body: {
            padding:"10px 24px"
          }}}>
            <p className="font-bold text-[16px]">Total Sales</p>
            <div className="flex items-center">
              <span className="font-bold text-2xl">$5000</span>
              <div className="text-rose-700 px-4">
                <span>-5.4%</span>
                <BsArrowDown />
              </div>              
            </div>
            <span className="text-[12px] text-slate-400">(This Week)</span>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false} styles={{body: {
            padding:"10px 24px"
          }}}>
            <p className="font-bold text-[16px]">Monthly Sales</p>
            <div className="flex items-center">
              <span className="font-bold text-2xl">$1500</span>
              <div className="text-lime-700 px-4">
                <span>-5.4%</span>
                <BsArrowUp />
              </div>              
            </div>
            <span className="text-[12px] text-slate-400">(This Week)</span>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false} styles={{body: {
            padding:"10px 24px"
          }}}>
            <p className="font-bold text-[16px]">Top Selling Product</p>
              <div className="flex items-center">
                <span className="font-bold text-xl">iPhone 12</span>
                <div className="text-lime-700 px-4">
                  <span>-5.4%</span>
                  <BsArrowUp />
                </div>              
              </div>
              <span className="text-[12px] text-slate-400">(This Week)</span>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}styles={{body: {
            padding:"10px 24px"
          }}}>
            <p className="font-bold text-[16px]">New Customers</p>
              <div className="flex items-center">
                <span className="font-bold text-xl">52</span>
                <div className="text-lime-700 px-4">
                  <span>-5.4%</span>
                  <BsArrowUp />
                </div>              
              </div>
              <span className="text-[12px] text-slate-400">(This Week)</span>            
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={16}>
          <Card bordered={false} styles={{body: {
            padding:"10px 24px"
          }}}>
            <Bar options={options} data={data} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card bordered={false} styles={{body: {
            padding:"10px 24px"
          }}}>
            <Doughnut data={data} />
          </Card>
        </Col>        
      </Row>
    </>
  );
};

export default Dashboard;
