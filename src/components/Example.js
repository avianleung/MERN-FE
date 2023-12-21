import React, { useState, useEffect } from "react"
import exampleService from "../services/example.service";

function Example() {
  const [data, setData] = useState("")

  useEffect(() => {
    exampleService.helloWorld().then(response => {
      console.log(response.data)
      setData(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      {data}
    </div>
  );
}

export default Example;
