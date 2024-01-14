import { useLoanCalculatorContext } from './hooks/useLoanCalculatorContext'

import { Header, Hero } from './containers/exportContainers';



function App() {

  const { LoanCalculatorContextProvider, LoanCalculatorContext } = useLoanCalculatorContext();

  return (
    <div className="App">

      <LoanCalculatorContextProvider>
        <Header />
        <Hero />
      </LoanCalculatorContextProvider>

    </div>
  )
}

export default App
