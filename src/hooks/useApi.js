import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunc(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      toast.error('An error occurred. Please try again later.');
      console.error('API Error:', err);
      throw err; // Re-throw the error for the component to handle if needed
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  return { execute, data, loading, error };
};

export default useApi;