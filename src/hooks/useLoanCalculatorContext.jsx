import { createContext } from "react";
import { useLoanCalculator } from "./useLoanCalculator";

const LoanCalculatorContext = createContext();

export function useLoanCalculatorContext() {

    function LoanCalculatorContextProvider({ children }) {

        const [LoanCalc, changeLoanCalcProp] = useLoanCalculator();

        return (
            <LoanCalculatorContext.Provider

                value={{
                    LoanCalc,
                    changeLoanCalcProp
                }}

            >
                {children}
            </LoanCalculatorContext.Provider>
        )

    }

    return { LoanCalculatorContext, LoanCalculatorContextProvider }

}