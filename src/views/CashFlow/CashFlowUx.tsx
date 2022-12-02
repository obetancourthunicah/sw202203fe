import Page from "@components/Page";
import { ICashFlow, IGetAllCashFlowResponse } from "@store/Services/CashFlow";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";

import "./CashFlow.css";
import { CircleButton } from "@components/Buttons";
interface ICashFlowUxProps {
  error?: any;
  data?: IGetAllCashFlowResponse;
  isLoading?: boolean;
  changePageLimit?: (page: number, limit: number) => void;
  addPageClick?: () => void;
  viewDetailClick?: (id: string) => void;
}
const CashFlowCard = (item: ICashFlow, viewDetailClick: (id:string)=> void ) => {
  return (
    <Card key={item._id} className={`type_${item.type.toLowerCase()}`}>
      <div>{new Date(item.date).toLocaleDateString()}</div>
      <div onClick={()=>{viewDetailClick(item._id);}}>{item.description}</div>
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
  addPageClick = () => {},
  viewDetailClick = (id) => {},
}: ICashFlowUxProps) => {
  return (
    <Page pageTitle="CashFlow">
      <section className="CashFlowHolder">
        {isLoading && <div>Loading...</div>}
        {error && <ErrorField>Error al cargar CashFlow</ErrorField>}
        {data && data.items.map((o: ICashFlow) => CashFlowCard(o, viewDetailClick))}
      </section>
      <CircleButton className="floatLeftButton"
        onClick={() => {addPageClick()}}
      >+</CircleButton>
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
