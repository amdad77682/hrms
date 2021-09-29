import React from "react";
const Leaves = [
  {
    id: 1,
    type: "sick_leave",
    reason: "Deue to fever",
    leave_from: "2021-09-27T21:16:19.527Z",
    leave_to: "2021-09-27T21:16:19.527Z",
    phone_no: "01648899686",
  },
  {
    id: 2,
    type: "sick_leave",
    reason: "Deue to fever",
    leave_from: "2021-09-27T21:16:19.527Z",
    leave_to: "2021-09-27T21:16:19.527Z",
    phone_no: "01648899686",
  },
  {
    id: 3,
    type: "sick_leave",
    reason: "Deue to fever",
    leave_from: "2021-09-27T21:16:19.527Z",
    leave_to: "2021-09-27T21:16:19.527Z",
    phone_no: "01648899686",
  },
  {
    id: 4,
    type: "sick_leave",
    reason: "Deue to fever",
    leave_from: "2021-09-27T21:16:19.527Z",
    leave_to: "2021-09-27T21:16:19.527Z",
    phone_no: "01648899686",
  },
];
export default function useLeaves(): {
  leaves: any;
} {
  const [leaves, setLeaves] = React.useState([]);
  React.useEffect(() => {
    const initApiCall = async () => {
      setLeaves(Leaves);
    };
    initApiCall();
  }, []);
  return { leaves };
}
