import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setErrors(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { errors, loading, data };
};

export default useFetch;
