import nextConnect from "next-connect";
import middleware from "../../../lib/middleware/indeex";
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
const handler = nextConnect();
handler.use(middleware);
handler.get(async (req: any, res: any) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data: employees }));
});
export default handler;
