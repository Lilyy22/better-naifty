import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

export const useCheckOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const CHECK_ONLINE_STATUS = gql`
    {
      __schema {
        description
      }
    }
  `;
  const { data, error } = useQuery(CHECK_ONLINE_STATUS, {
    fetchPolicy: "network-only", // Disable caching for the query
  });

  useEffect(() => {
    if (data) {
      setIsOnline(true);
    }
    if (error) {
      setIsOnline(false);
    }
  }, [data, error]);

  return isOnline;
};
