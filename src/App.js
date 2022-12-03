import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import axios from 'axios'

const CONTEXT = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => {
        const data = res
        setData(data.data)
        console.log(data.data)
    })
  }, [])

  const value = {
    data,
  };
  return (
    <div>
      <CONTEXT.Provider value={value}>
        <RouterProvider router={routes} />
      </CONTEXT.Provider>
    </div>
  );
}

export default App;
