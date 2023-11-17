
import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://api.coinlore.net/api/${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      setData(response.data);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }, [url]);

  return { data, loading, error };
};

export default useApi;
