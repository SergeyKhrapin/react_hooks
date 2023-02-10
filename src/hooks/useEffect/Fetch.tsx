import { useState, useEffect, useRef, FC } from "react";
import { HookName } from "../../types/types";

interface IUseFetch {
  fetchData: (val: string) => Promise<void>;
  isLoading: boolean;
  data: string;
}

const useFetch = (val: string): IUseFetch => {  
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const timeoutId = useRef<any>(0);

  useEffect(() => {    
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(fetchData, 1000);
  }, [val]);

  async function fetchData() {
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
  const {fetchData, data, isLoading} = useFetch(count);

  return (
    <div className="row">
      <div className="col-4">
        <h6>Fetch data</h6>
        <div className="input-group mb-3">
          <input
            type="number"
            onChange={(e) => setCount(e.target.value)}
            className="form-control"
            placeholder="enter some number to push data for"
          />
        </div>
      </div>
      <span>Fetched data - {isLoading ? "loading ..." : data}</span>
    </div>
  );
};

export default Fetch;
