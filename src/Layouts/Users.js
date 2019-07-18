import React, { useState, useEffect } from "react";
import TableEx from "../Components/TableEx";
import axios from "axios";
const Users = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(response.data);
      console.log("Use Effect - User Component");
    }
    fetchUser();
  }, []);
  return <TableEx userList={userList} />;
};

export default Users;
