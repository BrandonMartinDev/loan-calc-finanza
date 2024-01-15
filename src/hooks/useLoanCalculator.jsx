import { useReducer } from "react"

// DEFAULT LOAN CALCULATOR VALUES

const defaultValuesObject = {
    principal: 0,
    termYears: 0,
    termMonths: 0,
    interestRatePercentage: 0,
    downPaymentPercentage: 0,
}

class LoanCalculator {

    constructor(_principal, _termYears, _termMonths, _interestRatePercentage, _downPaymentPercentage) {

        this.principal = Number(_principal)
        this.termYears = Number(_termYears)
        this.termMonths = Number(_termMonths)
        this.interestRatePercentage = Number(_interestRatePercentage)
        this.downPaymentPercentage = Number(_downPaymentPercentage)

    }

    // LOGIC

    get downPaymentAmount() {
        return (this.principal * (this.downPaymentPercentage / 100));
    }

    get principalMinusDownPayment() {
        return (this.principal - this.downPaymentAmount);
    }

    get annualInterestRatePercentage() {
        return (this.interestRatePercentage / 100)
    }

    get totalMonths() {
        return ((this.termYears * 12) + this.termMonths);
    }

    get calculatedMonthlyPayment() {

        const monthlyInterestRate = (this.annualInterestRatePercentage / 12);

        const firstPartOfFormula = (this.principalMinusDownPayment * monthlyInterestRate) * Math.pow((1 + monthlyInterestRate), this.totalMonths);
        const secondPartOfFormula = (Math.pow((1 + monthlyInterestRate), this.totalMonths) - 1);

        const finalCalculation = (firstPartOfFormula / secondPartOfFormula);

        return Number.isNaN(finalCalculation) ? null : finalCalculation;

    }

    get totalInterestPayments() {

        let total = 0;

        let amortizationSchedule = this.amortizationSchedule;

        for (let month of amortizationSchedule) {
            total += Number(month.interestPayment);
        }

        return Number(total);

    }

    get calculatedTotalLoanPaymentMinusDownPayment() {
        return (this.principalMinusDownPayment + this.totalInterestPayments);
    }

    get calculatedTotalLoanPayment() {
        return (this.principal + this.totalInterestPayments);
    }



    // PUBLIC

    get displayMonthlyPayment() {
        return this.calculatedMonthlyPayment.toLocaleString(undefined, { style: "currency", currency: "USD" })
    }

    get displayPrincipal() {
        return this.principal.toLocaleString(undefined, { style: "currency", currency: "USD" })
    }

    get displayTotalInterestPayments() {
        return this.totalInterestPayments.toLocaleString(undefined, { style: "currency", currency: "USD" })
    }

    get displayDownPaymentAmount() {
        return this.downPaymentAmount.toLocaleString(undefined, { style: "currency", currency: "USD" })
    }

    get displayCalculatedTotalLoanPaymentMinusDownPayment() {
        return this.calculatedTotalLoanPaymentMinusDownPayment.toLocaleString(undefined, { style: "currency", currency: "USD" })
    }

    get amortizationSchedule() {

        const monthlyPayment = this.calculatedMonthlyPayment || 0;

        let schedule = [];

        let principalBalance = this.principalMinusDownPayment;

        for (let monthNumber = 0; monthNumber <= this.totalMonths; monthNumber++) {

            const annualInterestRateFee = (principalBalance * this.annualInterestRatePercentage);
            const monthlyInterestRateFee = (annualInterestRateFee / 12);

            const principalPayment = (monthlyPayment - monthlyInterestRateFee);

            const newPrincipalBalance = (principalBalance - principalPayment);

            const totalPrincipalPaid = (this.principalMinusDownPayment - newPrincipalBalance);

            let monthInfo = {
                newPrincipalBalance: Number(newPrincipalBalance).toFixed(2),
                totalPayment: Number(monthlyPayment).toFixed(2),
                interestPayment: Number(monthlyInterestRateFee).toFixed(2),
                principalPayment: Number(principalPayment).toFixed(2),
                totalPrincipalPaid: Number(totalPrincipalPaid).toFixed(2)
            };

            schedule[monthNumber] = monthInfo;

            principalBalance = newPrincipalBalance;

        }

        return schedule;

    }

}

export function useLoanCalculator() {

    const [

        {
            principal,
            termYears,
            termMonths,
            interestRatePercentage,
            downPaymentPercentage
        },

        loanDispatch

    ] = useReducer((existingState, action) => {
        
        switch (action.type) {
            case "SET_PRINCIPAL":
                return { ...existingState, principal: action.payload };
            case "SET_TERM_YEARS":
                return { ...existingState, termYears: action.payload };
            case "SET_TERM_MONTHS":
                return { ...existingState, termMonths: action.payload };
            case "SET_INTEREST_RATE":
                return { ...existingState, interestRatePercentage: action.payload };
            case "SET_DOWN_PAYMENT":
                return { ...existingState, downPaymentPercentage: action.payload };
        }

    }, defaultValuesObject)

    function changeLoanCalcProp(type, payload) {
        loanDispatch({ type: type, payload: payload })
    }

    const LoanCalc = new LoanCalculator(principal, termYears, termMonths, interestRatePercentage, downPaymentPercentage);

    return [LoanCalc, changeLoanCalcProp, loanDispatch];

}