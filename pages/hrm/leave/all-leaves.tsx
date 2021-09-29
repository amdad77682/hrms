import React from "react";
import { MdClear } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import useLeaves from "../../../components/leave/useLeaves";

export default function AllLeaves() {
  const { leaves } = useLeaves();
  return (
    <div className="p-4">
      <h1>All Leaves</h1>
      <div className="table-responsive overflow-y-auto p-4">
        {leaves && Array.isArray(leaves) && leaves.length ? (
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
                  Type
                </th>
                <th className="p-2 text-left border-b border-gray-200">From</th>

                <th className="p-2 text-left border-b border-gray-200">To</th>
                <th className="p-2 text-left border-b border-gray-200">
                  Reason
                </th>

                <th className={"border-b"}></th>
              </tr>
            </thead>
            <tbody>
              {leaves && Array.isArray(leaves) && leaves.length
                ? leaves.map((item: any, index: number) => {
                    return (
                      <tr
                        key={index}
                        className={`
              border-b border-gray-200 text-gray-700 relative hover:bg-gray-200 `}
                      >
                        <td className={"p-2 pl-4"}>
                          <input type="checkbox" className="form-checkbox" />
                        </td>
                        <td className={"p-2 pl-4 "}>{index}</td>
                        <td className={"p-2"}>
                          <a className="underline hover:text-blue-500 tracking-tighter">
                            {item?.type ?? "N/A"}
                          </a>
                        </td>
                        <td className={"p-2"}>{item?.leave_from ?? "N/A"}</td>
                        <td className={"p-2"}>{item?.leave_to ?? "N/A"}</td>
                        <td className={"p-2"}>{item?.reason ?? "N/A"}</td>

                        <td className="items-center">
                          <div className="flex justify-between cursor-pointer">
                            <button>
                              <BiCheckDouble size={20} color="green" />
                            </button>

                            <button>
                              <MdClear size={18} color="red" />
                            </button>
                          </div>
                        </td>
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
