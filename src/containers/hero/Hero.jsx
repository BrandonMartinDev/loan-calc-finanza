import './hero.css'

import {

    InputForm,
    CalculationOutput

} from './components/componentExports'

const Hero = () => {

    return (
        <main className='hero-main container'>

            <InputForm />
            <CalculationOutput />

        </main>
    )

}

export default Hero