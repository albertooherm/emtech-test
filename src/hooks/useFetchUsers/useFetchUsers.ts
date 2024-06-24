import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { User } from '../../utils/types/User/UserTypes';

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://randomuser.me/api/?results=4');
      setUsers(response.data.results);
    } catch (err) {
      setError('Error fetching data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { users, loading, error, refetch: fetchData };
};

export default useFetchUsers;
