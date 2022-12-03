import CashFlowNewUx from "./CashFlowNewUx";
import { useNewCashFlowMutation, INewCashFlow } from "@store/Services/CashFlow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CashFlowNew = () => {
  const [form, setForm] = useState<INewCashFlow>({
    type: "INCOME",
    description: "",
    amount: 0,
    date: new Date().toString(),
  });
  const [newCashFlow, { isLoading, error }] = useNewCashFlowMutation();
  const Navigate = useNavigate();

  const onChangeHandler = (name:string, value:string|number) => {
    setForm({ ...form, [name]: value });
  }
  const onSubmitHandler = async () => {
    try {
      const data = await newCashFlow(form).unwrap();
      console.log(data);
      Navigate("/cashflow");
    } catch (error) {
      console.log(error);
    }
  }
  const onCancelHandler = () => {
    console.log('cancel');
    Navigate("/cashflow");
  }
  return (
    <CashFlowNewUx
      form={form}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      onCancelHandler={onCancelHandler}
    />
  );
};
export default CashFlowNew;
