import React from "react";

export default function useEmployee(): {
  employee: any;
} {
  const [employee, setEmployee] = React.useState([]);
  React.useEffect(() => {
    const initApiCall = async () => {
      setEmployee([]);
    };
    initApiCall();
  }, []);
  return { employee };
}
