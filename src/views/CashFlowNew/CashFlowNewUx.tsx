import Page from "@components/Page";
import { DateField, Field, FieldSelect } from "@components/InputField";
import ActionField from "@components/ActionField";
import { PrimaryButton, Button } from "@components/Buttons";
import { INewCashFlow } from "@store/Services/CashFlow";
export interface ICashFlowNewUx {
  form: INewCashFlow;
  onChangeHandler: (name: string, value: string | number) => void;
  onSubmitHandler: () => void;
  onCancelHandler: () => void;
}
const CashFlowNewUx = ({
  form,
  onChangeHandler,
  onSubmitHandler,
  onCancelHandler,
}: ICashFlowNewUx) => {
  return (
    <Page pageTitle="Nuevo CashFlow">
      <section>
        <FieldSelect
          name="type"
          labelText="Tipo"
          value={form.type}
          options={[
            { value: "INCOME", text: "Ingreso" },
            { value: "EXPENSE", text: "Egreso" },
          ]}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        <Field
          name="description"
          labelText="Descripción"
          value={form.description}
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        <Field
          name="amount"
          labelText="Monto"
          value={String(form.amount)}
          type="number"
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        <DateField
          name="date"
          labelText="Fecha"
          value={form.date}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        <ActionField>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSubmitHandler();
            }}
          >
            Guardar
          </PrimaryButton>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCancelHandler();
            }}
          >Cancelar</Button>
        </ActionField>
      </section>
    </Page>
  );
};

export default CashFlowNewUx;
