import React from "react";
import { NBreadcrumb } from "../../components";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const breadcrumbItems = [
    { title: <Link to={'/'}>Dashboard</Link> },
  ]
  return (
    <>
      <NBreadcrumb items={breadcrumbItems} />
      <div>OKE</div>
    </>
  );
};

export default Dashboard;
