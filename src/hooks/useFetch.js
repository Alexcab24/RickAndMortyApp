import { useEffect, useState } from "react"


export const useFetch = (URL) => {
    const [api, setApi] = useState([]);

    useEffect(() => {
    getAPI()
    }, [URL]);
    
    const getAPI = async() => {
      await fetch(URL)
      .then(resp => resp.json())
      .then(data => setApi(data.results));
    }

    return {
        api,
    }
}




