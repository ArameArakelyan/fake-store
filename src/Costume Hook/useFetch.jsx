import { useEffect, useState } from "react";

function useFetch(url_fetch, method_fetch) {
    const [data, setData] = useState({})
    useEffect(()=>{
        async function fetching(url, method) {
            try {
                const response = await fetch(url, { method });
                const json = await response.json();
                setData(json)
            } catch (error) {
                return console.error("Error:", error);
            }
        }
        fetching(url_fetch, method_fetch)
    },[url_fetch, method_fetch])
    return data
}

export default useFetch