import { useState } from "react";
import CashFlowAdminUx from "./CashFlowAdminUx";
import { useAllCashFlowAdminQuery } from "@store/Services/CashFlow";
import { useNavigate } from "react-router-dom";
const CashFlowAdmin = () => {
  const { data, isLoading, error } = useAllCashFlowAdminQuery({} , {refetchOnMountOrArgChange: true, refetchOnFocus: true});
  const Navigate = useNavigate();
  return (
    <CashFlowAdminUx
      error={error}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default CashFlowAdmin;
