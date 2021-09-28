import Link from "next/link";
import { AiFillShop } from "react-icons/ai";
import { RiStoreLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { FcLeave } from "react-icons/fc";
import React, { useRef } from "react";

const ITEMS = [
  {
    parentTile: "My Leaves",
    subtitle: "See your applied leaves",
    link: "/hrm/leave/my-leaves",
    path: "/hrm/leave/my-leaves",
    icon: <FcLeave color="black" />,
    child: [],
  },
  {
    parentTile: "All Leaves",
    subtitle: "See all applied leaves",
    link: "/hrm/leave/all-leaves",
    path: "/hrm/leave/all-leaves",
    icon: <RiStoreLine />,
    child: [],
  },
  {
    parentTile: "Employees",
    subtitle: "See all employeees",
    link: "/hrm/employee",
    path: "/hrm/employee",
    icon: <BsPeople />,
    child: [],
  },
];

export function Sidebar({ toggle }: { toggle?: () => void }): JSX.Element {
  const sidebarRef = useRef(null);

  const renderSingleMenu = (
    parentTile: string,
    subtitle: string,
    link: string,
    icon: JSX.Element | string | undefined,
    path: string
  ) => {
    return (
      <li
        key={parentTile}
        className={` ${
          typeof window !== "undefined" &&
          window.location.pathname.includes(path)
            ? "bg-sideBarItemhoverbg"
            : "hover:bg-sideBarItemhoverbg"
        }`}
        css={`
          border-top: 1px solid #273749;
          min-height: 70px;
        `}
      >
        <Link href={link}>
          <a
            onClick={toggle}
            className={`flex pr-3 pl-4 py-3  ${
              typeof window !== "undefined" && window.location.pathname === link
                ? "font-medium bg-gray-primary text-gray-800"
                : "text-gray-700"
            }`}
          >
            <span className="mt-1">
              {icon ? (
                <i className="font-evl text-white">{icon}</i>
              ) : (
                <AiFillShop size="20" color={"white"} />
              )}
            </span>
            <div className="ml-3 items-center leading-5">
              <h4 className="font-semibold text-white text-base ">
                {parentTile}
              </h4>
              <span
                className="capitalize text-xs text-gray-400"
                title={`${subtitle}`}
              >
                {subtitle}
              </span>
            </div>
          </a>
        </Link>
      </li>
    );
  };

  return (
    <section
      ref={sidebarRef}
      css={`
        position: fixed;
        height: 100%;
        width: 256px;
        top: 0px;
        left: 0;
        z-index: 51;
      `}
      className="bg-sideBarbg sidebar"
    >
      <div className="h-full">
        <div
          css={`
            height: 59px;
          `}
          className="flex items-center text-white text-3xl"
        >
          HRMS
        </div>
        <ul
          css={`
            height: 100vh;
            overflow-y: auto;
          `}
        >
          {ITEMS.map((item) => {
            return !item.child.length
              ? renderSingleMenu(
                  item.parentTile,
                  item.subtitle,
                  item.link,
                  item.icon,
                  item.path
                )
              : null;
          })}
        </ul>
      </div>
    </section>
  );
}
