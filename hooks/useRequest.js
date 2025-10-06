import axios from 'axios';
import { useState, useCallback } from 'react';

export const useRequest = ({ url, method, body }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(
    async (onSuccess) => {
      setLoading(true);
      try {
        const response = await axios({
          url,
          method,
          data: body,
        });
        const data = await response.data;
        if (response.status >= 200 && response.status < 300) {
          setData(data);
          setError(null);
          onSuccess();
        } else {
          setError(data.errors);
          setData(null);
        }
      } catch (e) {
        setError(e.errors);
        setData(null);
      } finally {
        setLoading(false);
      }
    },
    [url, method, body]
  );

  return { error, data, loading, fetchData };
};
