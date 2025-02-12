import React, { Suspense } from "react";
import Dashboard from "./[questions]/page";

const page = () => {
  return (
    <Suspense>
      <Dashboard/>
    </Suspense>
  );
};

export default page;
