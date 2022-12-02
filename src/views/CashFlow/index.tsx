import { useState } from "react";
import CashFlowUx from "./CashFlowUx";
import { useAllCashFlowQuery } from "@store/Services/CashFlow";
import { useNavigate } from "react-router-dom";
const CashFlow = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const changePageLimit = (p: number, l: number) => {
    setPage(p);
    setLimit(l);
  };
  const { data, isLoading, error } = useAllCashFlowQuery({
    page,
    items: limit,
  });
  const Navigate = useNavigate();
  return (
    <CashFlowUx
      error={error}
      data={data}
      isLoading={isLoading}
      changePageLimit={changePageLimit}
      addPageClick={() => {Navigate("/cashflow/new")}}
      viewDetailClick={(id) => {Navigate(`/cashflow/${id}`)}}
    />
  );
};

export default CashFlow;
