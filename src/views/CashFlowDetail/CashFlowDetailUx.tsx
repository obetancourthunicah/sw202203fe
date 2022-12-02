import Page from "@components/Page";
import { DateField, Field, FieldSelect } from "@components/InputField";
import ActionField from "@components/ActionField";
import { Button } from "@components/Buttons";
import { INewCashFlow } from "@store/Services/CashFlow";

export interface ICashFlowDetailUx {
  isLoading: boolean;
  error: any;
  form: INewCashFlow;
  onReturnClick: () => void;
}

const CashFlowDetailUx = ({ form, isLoading, error, onReturnClick }: ICashFlowDetailUx) => {
  return (
    <Page pageTitle="Nuevo CashFlow">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error al cargar CashFlow</div>}
      {form && (
      <section>
        <Field
          name="type"
          labelText="Tipo"
          value={form.type==="INCOME"?"Ingreso":"Egreso"}
          readOnly
        />
        <Field
          name="description"
          labelText="Descripción"
          value={form.description}
          readOnly
        />
        <Field
          name="amount"
          labelText="Monto"
          value={String(form.amount)}
          type="number"
          readOnly
        />
        <DateField name="date" labelText="Fecha" value={form.date} readOnly />
        <ActionField>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onReturnClick();
            }}
          >
            Atrás
          </Button>
        </ActionField>
      </section>)}
    </Page>
  );
};

export default CashFlowDetailUx;
