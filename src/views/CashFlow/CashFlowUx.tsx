import Page from "@components/Page";
import { ICashFlow, IGetAllCashFlowResponse } from '@store/Services/CashFlow';
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import './CashFlow.css';
interface ICashFlowUxProps {
  error?: any
  data?: IGetAllCashFlowResponse
  isLoading?: boolean

}
const CashFlowCard = (item: ICashFlow) => {
  return <Card key={item._id} className={`type_${item.type.toLowerCase()}`}>
        <h2>{item.description}</h2>
        <div>{item.amount}</div>
      </Card>
}
const CashFlowUx = ({error, data, isLoading}:ICashFlowUxProps) => {
  return (
    <Page pageTitle="CashFlow">
      <section>
       {isLoading && <div>Loading...</div>}
       {error && <ErrorField>Error al cargar CashFlow</ErrorField>}
       {data && data.items.map((o:ICashFlow) => CashFlowCard(o)) }
      </section>
    </Page>
  )
}

export default CashFlowUx
