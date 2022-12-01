import CashFlowUx from "./CashFlowUx";
import { useAllCashFlowQuery } from "@store/Services/CashFlow";
const CashFlow = () => {
  const { data, isLoading, error } = useAllCashFlowQuery({
    page: 1,
    items: 10,
  });
  return <CashFlowUx error={error} data={data} isLoading={isLoading} />;
};

export default CashFlow;
