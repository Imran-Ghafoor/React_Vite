import { useEffect, useState } from "react"
function useCurrencyInfo(currncy) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(() => res.jason())
            .then(() => setData(res[currncy]))
        console.log(data);

    }, [currncy])
    console.log(data);
    return data
}
export default useCurrencyInfo