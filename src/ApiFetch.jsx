import React,{useState,useEffect} from 'react'

function apifetch() {

    useEffect(() => {
        Axios.get(URL)
            .then((res) => res.json())
            .then(console.log(res))
    },[])

  return (
    <div>apifetch</div>
  )
}

export default apifetch;