import { useLoanCalculatorContext } from './hooks/useLoanCalculatorContext'

import { Header, Hero, AmortizationSchedule } from './containers/exportContainers';



function App() {

  const { LoanCalculatorContextProvider, LoanCalculatorContext } = useLoanCalculatorContext();

  return (
    <div className="App">

      <Header />

      <LoanCalculatorContextProvider>
        <Hero />
        <AmortizationSchedule />
      </LoanCalculatorContextProvider>

    </div>
  )
}

export default App
