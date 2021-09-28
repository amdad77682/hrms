import React from "react";
import useEmployee from "../../../components/employee/useEmployee";

export default function Employees() {
  const { employee } = useEmployee();
  return (
    <div>
      {" "}
      <div className="table-responsive overflow-y-auto">
        {employee && Array.isArray(employee) && employee.length ? (
          <table className="w-full bg-white shadow table-auto table-basic">
            <thead>
              <tr>
                <th
                  className="p-2 pl-4 text-left 
          border-b border-gray-200 font-medium"
                >
                  <input type="checkbox" className="form-checkbox" />
                </th>
                <th className="p-2 pl-4 text-left border-b border-gray-200">
                  SL
                </th>
                <th className="p-2 text-left border-b border-gray-200 ">
                  Merchant Name
                </th>
                <th className="p-2 text-left border-b border-gray-200">
                  Merchant ID
                </th>
                <th className="p-2 text-left border-b border-gray-200">Type</th>
                <th className="p-2 text-left border-b border-gray-200">
                  Owner&apos;s Name
                </th>
                <th className="p-2 text-left border-b border-gray-200">
                  Owner&apos;s Number
                </th>
                <th className="p-2 text-left border-b border-gray-200">
                  Company&apos;s Email
                </th>
                <th className="w-1/12 p-2 text-left border-b border-gray-200">
                  Status
                </th>
                <th className={"border-b"}></th>
              </tr>
            </thead>
            <tbody>
              {employee && Array.isArray(employee) && employee.length
                ? employee.map((item: any, index: number) => {
                    return (
                      <tr
                        key={item?.merchant_code}
                        className={`
                  border-b border-gray-200 text-gray-700 relative hover:bg-gray-200 `}
                      >
                        <td className={"p-2 pl-4"}>
                          <input type="checkbox" className="form-checkbox" />
                        </td>
                        <td className={"p-2 pl-4 "}>{index}</td>
                        <td className={"p-2"}>
                          <a className="underline hover:text-blue-500 tracking-tighter">
                            {item?.merchant_name ?? "N/A"}
                          </a>
                        </td>
                        <td className={"p-2"}>
                          {item?.merchant_code ?? "N/A"}
                        </td>
                        <td className={"p-2"}>
                          {item?.merchant_type ?? "N/A"}
                        </td>
                        <td className={"p-2"}>
                          {item?.merchant_name ?? "N/A"}
                        </td>
                        <td className={"p-2"}>
                          {item?.merchant_phone_no ?? "N/A"}
                        </td>
                        <td
                          className={"p-2 tracking-tighter"}
                          title={item?.merchant_email}
                        >
                          {item?.merchant_email ?? "N/A"}
                        </td>
                        <td className="p-2 capitalize whitespace-nowrap tracking-tighter">
                          <p className="">{item.status}</p>
                        </td>
                        <td className="p-2"></td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        ) : (
          <p className="flex items-center justify-center">no data found</p>
        )}
      </div>
    </div>
  );
}
