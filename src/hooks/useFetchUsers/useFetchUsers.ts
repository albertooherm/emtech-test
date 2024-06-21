import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  name: {
    first: string;
    last: string;
  };
  location: {
    state: string;
    country: string;
  };
  picture: {
    large: string;
  };
}

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=4');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { users, loading };
};

export default useFetchUsers;