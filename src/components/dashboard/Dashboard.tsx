import React from "react";

const Dashboard = () => {
  function remove() {
    localStorage.removeItem("formValue");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
