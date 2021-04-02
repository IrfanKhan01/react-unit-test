import { useEffect, useState } from "react";





function useFetch(uri) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');



    useEffect(() => {
        if(!uri) return 

        fetch(uri).then(res => res.json()).then(setData).then(() => setLoading(false)).catch(setError)

    },[uri])

    return [loading, data, error]
}


export default useFetch