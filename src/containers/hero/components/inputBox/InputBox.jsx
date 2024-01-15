import './inputBox.css'

const InputBox = ({ labelText, type, changeFormInputValue, value }) => {

    return (

        <div className="input-box">

            <input
                type='number'
                required
                step="any"
                onChange={e => changeFormInputValue(type, e.target.value)}
                value={type === "SET_FORM_DOWN_PAYMENT" ? value : undefined}
            />

            <span className="input-label">{labelText}</span>

        </div>
    )
}

export default InputBox