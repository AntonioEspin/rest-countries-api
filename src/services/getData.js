import { useEffect, useState } from "react";

export function GetData ({search}) {
  const API = search ? `https://restcountries.com/v3.1/name/${search}?fullText=true` : `https://restcountries.com/v3.1/all`

  console.log(API)
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(API)
      .then(response => response.json())
      .then(info => setData(info))
      .catch(error => console.log(error))
  },[API, search])

  return {data}
}