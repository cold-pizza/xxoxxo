const removeDuplication = (text, setState, setVal) => {
    let temp = text.split(",");
    for (let i = 0; i < temp.length; i++) {
        temp[i] = temp[i].replace(/ /g, "");
    }
    const set = new Set(temp);
    const results = [...set];

    if (results.length < 2) {
        alert("값을 다시 입력해주세요.");
        setVal({ value: "" });
    } else {
        setState(results.toString());
    }
};

export default removeDuplication;
