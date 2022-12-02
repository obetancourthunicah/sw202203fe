import CashFlowDetailUx from "./CashFlowDetailUx";
import { useCashFlowByIdQuery } from "@store/Services/CashFlow";
import { useNavigate, useParams } from "react-router-dom";

const CashFlowDetail = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const {data:form, isLoading, error } = useCashFlowByIdQuery(id as string);
  return (
    <CashFlowDetailUx
      form={form}
      onReturnClick={() => {Navigate("/cashflow")}}
      isLoading={isLoading}
      error={error}
    />
  );
};
export default CashFlowDetail;
