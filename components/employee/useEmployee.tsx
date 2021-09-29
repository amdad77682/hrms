import React from "react";
const employees = [
  {
    id: 1,
    user_id: "11",
    first_name: "amdad",
    last_name: "haque",
    phone_no: "01648899686",
    manager_id: 2,
  },
  {
    id: 2,
    user_id: "11",
    first_name: "eer",
    last_name: "haquertee",
    phone_no: "01648899686",
    manager_id: 2,
  },
  {
    id: 3,
    user_id: "11",
    first_name: "erteret",
    last_name: "ertert",
    phone_no: "01648899686",
    manager_id: 2,
  },
  {
    id: 5,
    user_id: "11",
    first_name: "dsfd",
    last_name: "dfgdf",
    phone_no: "01648899686",
    manager_id: 2,
  },
];
export default function useEmployee(): {
  employee: any;
} {
  const [employee, setEmployee] = React.useState([]);
  React.useEffect(() => {
    const initApiCall = async () => {
      setEmployee(employees);
    };
    initApiCall();
  }, []);
  return { employee };
}
