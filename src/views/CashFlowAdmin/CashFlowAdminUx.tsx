import Page from "@components/Page";
import { ICashFlow, IGetAllCashFlowResponse } from "@store/Services/CashFlow";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import { formatCurrency } from "@helpers/NumberFormat";

import "./CashFlowAdmin.css";
interface ICashFlowAdminUxProps {
  error?: any;
  data?: any;
  isLoading?: boolean;

}
const CashFlowAdminCard = (item: ICashFlow ) => {
  return (
    <Card key={item._id} className={`type_${item.type.toLowerCase()}`}>
      <div>{new Date(item.date).toLocaleDateString()}</div>
      <div>{item.description}</div>
      <h2>{formatCurrency(item.amount)}</h2>
      {item.userId? <div>{item.userId}</div>: null}
    </Card>
  );
};
const CashFlowUx = ({
  error,
  data,
  isLoading
}: ICashFlowAdminUxProps) => {
  return (
    <Page pageTitle="CashFlow">
      <section className="CashFlowHolder">
        {isLoading && <div>Loading...</div>}
        {error && <ErrorField>Error al cargar CashFlow</ErrorField>}
        {data && data.map((o: ICashFlow) => CashFlowAdminCard(o))}
      </section>
    </Page>
  );
};

export default CashFlowUx;
