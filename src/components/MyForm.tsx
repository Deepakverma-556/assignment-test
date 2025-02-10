import React from "react";

const MyForm = () => {
  return (
    <div className="py-[30px]">
      <div className="max-w-[1367px] mx-auto px-4">
        <div>
          <a href="logo">
            <img
              src="../assets/images/png/logo.png"
              alt="logo"
              className="h-8"
            />
          </a>
          <h2 className="font-semibold text-3xl leading-[58.5px]">
            Welcome Back
          </h2>
          <p className="text-sm leading-[30px] text-gray">Welcome back! Please enter your details.</p>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
