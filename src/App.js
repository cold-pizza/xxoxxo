import { useState } from "react";
import onChange from "./onChange";
import "./App.scss";
import removeDuplication from "./removeDuplication";

function App() {
    let [val, setVal] = useState({ value: "" });
    let [result, setResult] = useState([]);

    return (
        <div className="App">
            <h2>키워드 중복제거</h2>
            <textarea
                name="value"
                value={val.value}
                onChange={(e) => onChange(e, val, setVal)}
                className="container"
                cols="70"
                rows="10"
            ></textarea>
            <button
                onClick={() => {
                    removeDuplication(val.value, setResult, setVal);
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
