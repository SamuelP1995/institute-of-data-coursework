import { useState } from "react";


function Calc() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [rotationDegree, setRotationDegree] = useState(0)

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const calculate = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult('Invalid input');
        }
    };

    const rotateCalculator = () => {
        setRotationDegree(rotationDegree + 90);
    };

    return (
        <div className="calculator" style={{ transform: `rotate(${rotationDegree}deg)` }}>
            <input
                type="text"
                value={input}
                onChange={handleInput}
                placeholder="Enter calculation"
            />
            <br></br>
            <button onClick={calculate}>Calculate</button>
            <div className="result">Result: {result}</div>
            <button onClick={rotateCalculator}>Rotate 90°</button>
        </div>
    );
}



export default Calc;
