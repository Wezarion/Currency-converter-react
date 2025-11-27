import { currencies } from "../currencies";
import "./style.css";
import { Result } from "./Result";
import { useState } from "react";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].pair);
    const [amount, setAmount] = useState("");

    const onImput = () => {
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onInput={onImput}>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p className="form__label">
                <label>
                    Wybierz pare walutową:
                    <select className="form__select"
                        value={currency} 
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                kay={currency.pair}
                                value={currency.pair}
                            >
                                {currency.pair}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p className="form__label">
                <label >
                    Podaj kwote {currency.base} : 
                </label>
                <input 
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    className="form__select" 
                    type="number" 
                    placeholder="Wpisz kwote"
                    step="0.01"                         
                    required>
                </input>                
            </p>
            
            <Result result={result} />
            
        </fieldset>
    </form>
    )
};