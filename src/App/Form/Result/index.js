import "./style.css";


export const Result = ({ result }) => (
    <p className="result">
        Po przeliczaeniu: 
        {!!result && (
            <strong className="result__value">
                {result.targetAmount.toFixed(2)}&nbsp;{result.finish}
            </strong>
        )}
    </p>
);