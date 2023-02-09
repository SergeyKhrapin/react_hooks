import { useState, FC } from "react";
import { HookName } from "../../types/types";

interface IUseFetch {
  fetchData: (val: string) => Promise<void>;
  isLoading: boolean;
  data: string;
}

const useFetch = (): IUseFetch => {  
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(val: string) {    
    if (val === "") {
      return;
    }

    setIsLoading(true);
    
    const response = await fetch(`http://numbersapi.com/${val}/`);
    const responseText = await response.text();

    setIsLoading(false);
    setData(responseText);
  }

  return {
    fetchData,
    isLoading,
    data,
  };
};

const Fetch: FC<HookName> = () => {  
  const [count, setCount] = useState("");
  const {fetchData, data, isLoading} = useFetch();

  return (
    <div className="row">
      <div className="col-4">
        <h6>Fetch data</h6>
        <button className="btn btn-success me-2" onClick={() => fetchData(count)}>Fetch</button>
        <div className="input-group mb-3">
          <input type="number" onChange={(e) => setCount(e.target.value)} className="form-control" placeholder="enter some number to push data for" />
        </div>
      </div>
      <div className="col-8">
        <span>Fetched data - {isLoading ? "loading ..." : data}</span>
      </div>
    </div>
  );
};

export default Fetch;
