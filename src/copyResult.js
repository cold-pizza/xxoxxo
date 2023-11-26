const copyResult = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        alert("복사 실패!");
    }
};

export default copyResult;
