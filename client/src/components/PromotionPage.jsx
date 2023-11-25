import React from "react";
import Services from "./Services";
import Transactions from "./Transactions";
import Welcome from "./Welcome";

const PromotionPage = () => {
  return (
    <div>
      <Welcome />
      <Services />
      <Transactions />
    </div>
  );
};

export default PromotionPage;
