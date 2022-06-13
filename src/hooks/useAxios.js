import { useEffect, useState } from 'react'

const useAxios = ({ url }) => {
  
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, [url]);

  return { response, error, loading }
}

export default useAxios