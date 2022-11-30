import Page from "@components/Page"
interface ICashFlowUxProps {
  error?: any
}
const CashFlowUx = ({error}:ICashFlowUxProps) => {
  return (
    <Page pageTitle="CashFlow">
      <section>
        Aqui ira la data
        {JSON.stringify(error as any)}
      </section>
    </Page>
  )
}

export default CashFlowUx
