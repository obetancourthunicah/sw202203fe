import { useState } from "react";
import CashFlowUx from "./CashFlowUx";
import { useAllCashFlowQuery } from "@store/Services/CashFlow";
const CashFlow = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const changePageLimit = (p: number, l: number) => {
    setPage(p);
    setLimit(l);
  }
  const { data, isLoading, error } = useAllCashFlowQuery({
    page,
    items: limit,
  });
  return <CashFlowUx error={error} data={data} isLoading={isLoading} changePageLimit={changePageLimit} />;
};

export default CashFlow;
