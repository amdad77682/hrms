import React from "react";

import Notifications from "./Notifications";
import { IoMdNotificationsOutline } from "react-icons/io";
import { userInLoggedIn } from "../../utils/authentication";
import { CustomPopover } from "../common/Popover";

export default function Notification() {
  const [notifications, setNotifications] = React.useState(0);

  React.useEffect(() => {
    const fetchdata = async () => {
      if (userInLoggedIn())
        try {
          setNotifications(10);
        } catch (error) {
          //err
        }
    };

    fetchdata();
  }, []);

  return (
    <>
      <CustomPopover
        placement="bottom-end"
        renderReference={(ref, toggle) => (
          <button
            className="relative mt-1 text-gray-700"
            onClick={toggle}
            ref={ref}
          >
            <IoMdNotificationsOutline size={25} />
            {notifications > 0 ? (
              <span
                css={`
                  position: absolute;
                  top: 0px;
                  height: 10px;
                  width: 10px;
                  border-radius: 10px;
                  background: linear-gradient(90deg, #f5515f 0%, #9f041b 100%);
                  color: white;
                `}
              ></span>
            ) : null}
          </button>
        )}
        renderPopover={(toggle) => {
          return (
            <div
              className="border rounded shadow-lg "
              css={`
                z-index: 20;
                background: rgb(255, 255, 255) none repeat scroll 0% 0%;
                box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
                  rgba(9, 30, 66, 0.31) 0px 0px 1px;
                box-sizing: border-box;
                overflow: auto;
                min-width: 400px;
                max-width: 400px;
                margin-top: 16px;
                @media (max-width: 768px) {
                  min-width: 315px;
                }
              `}
            >
              <Notifications toggle={toggle} />
            </div>
          );
        }}
      />
    </>
  );
}
