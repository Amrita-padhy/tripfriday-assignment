import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [usersData, setUsersData] = useState([]);
      const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsersData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
    
    return (
        <UserContext.Provider value={{ usersData }}>
        {children}
      </UserContext.Provider>
    );
};
export const useDataContext = () => useContext(UserContext);