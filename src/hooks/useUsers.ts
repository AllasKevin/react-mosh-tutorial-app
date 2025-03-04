import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import UserService, { User } from "../services/UserService";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
  
    const { request, cancel } = UserService.getAll<User>();
    request
      .then((thisResponse) => {
        setUsers(thisResponse.data);
        setLoading(false);
      }) 
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    //.finally(() => {setLoading(false)}); This does not work with the strictmode turned on for some reason
  
    return () => cancel();
  }, []);
  
  return { users, error, isLoading, setUsers, setError};
}

export default useUsers;