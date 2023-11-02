import { useState } from "react";
import onChange from "./onChange";
import logo from "./logo.svg";
import "./App.scss";

function App() {
    let [val, setVal] = useState({ value: "" });
    let [result, setResult] = useState();

    const removeDupli = (text) => {
        let temp = text.split(",");
        for (let i = 0; i < temp.length; i++) {
            temp[i] = temp[i].replace(/ /g, "");
        }
        const set = new Set(temp);
        const results = [...set];
        setResult(results.toString());
    };
    return (
        <div className="App">
            <h2>키워드 중복제거</h2>
            <textarea
                name="value"
                onChange={(e) => onChange(e, val, setVal)}
                className="container"
                cols="70"
                rows="10"
            ></textarea>
            <button
                onClick={() => {
                    removeDupli(val.value);
                }}
            >
                중복제거
            </button>
            <button
                onClick={() => {
                    setVal({ value: "" });
                }}
            >
                값 지우기
            </button>
            <h3>결과</h3>
            <p>{result}</p>
        </div>
    );
}

export default App;
