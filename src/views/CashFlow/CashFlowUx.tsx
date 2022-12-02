import Page from "@components/Page";
import { ICashFlow, IGetAllCashFlowResponse } from "@store/Services/CashFlow";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";

import "./CashFlow.css";
interface ICashFlowUxProps {
  error?: any;
  data?: IGetAllCashFlowResponse;
  isLoading?: boolean;
  changePageLimit?: (page: number, limit: number) => void;
}
const CashFlowCard = (item: ICashFlow) => {
  return (
    <Card key={item._id} className={`type_${item.type.toLowerCase()}`}>
      <div>{new Date(item.date).toLocaleDateString()}</div>
      <div>{item.description}</div>
      <h2>{formatCurrency(item.amount)}</h2>
    </Card>
  );
};
const CashFlowUx = ({
  error,
  data,
  isLoading,
  changePageLimit = (p, l) => {
    console.log("PG", { p, l });
  },
}: ICashFlowUxProps) => {
  return (
    <Page pageTitle="CashFlow">
      <section className="CashFlowHolder">
        {isLoading && <div>Loading...</div>}
        {error && <ErrorField>Error al cargar CashFlow</ErrorField>}
        {data && data.items.map((o: ICashFlow) => CashFlowCard(o))}
      </section>
      <Paging
        currentPage={data?.page || 1}
        totalPages={data?.totalPages || 0}
        pageLimit={data?.itemsPerPage || 10}
        onPageChange={(page) => {
          changePageLimit(page, data?.itemsPerPage || 10);
        }}
        onLimitChange={(limit) => {
          changePageLimit(data?.page || 1, limit);
        }}
      />
    </Page>
  );
};

export default CashFlowUx;
