import React from "react";
import { userInLoggedIn } from "../../utils/authentication";
import { MdKeyboardBackspace } from "react-icons/md";

interface Inotification {
  _id: string;
  body: string;
  title: string;
  type: string;
  resource_id: string;
  to: string;
  status: string;
  image_url: null | string;
  redirect_url: null | string;
  timestamp: string;
}

const Notifications = ({ toggle }) => {
  const [loading, setLoading] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    const fetchdata = async () => {
      if (userInLoggedIn())
        try {
          setLoading(true);

          setNotifications([]);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
    };

    fetchdata();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full p-6">
        loading..
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between bg-white ">
        <div className="px-4 py-4 font-semibold bg-white md:py-2 ">
          <button
            className="mr-4 align-middle md:hidden"
            onClick={() => toggle()}
          >
            <MdKeyboardBackspace size={25} />
          </button>
          Notification
        </div>
        <button className="px-4 text-xs text-blue-700">Mark all as read</button>
      </div>
      <div className="bg-white">
        {notifications.length ? (
          <ul
            className="overflow-y-auto"
            style={{
              maxHeight:
                window.innerWidth < 768 ? window.innerHeight - 170 : 400,
            }}
          >
            {notifications.map((val: Inotification, index) => {
              return (
                <li
                  key={index}
                  className={`border-solid hover:bg-gray-300 border-b border-gray-300 cursor-pointer ${
                    val.status == "read" ? "bg-white" : " bg-gray-200"
                  }`}
                >
                  <a>
                    <div className="flex">
                      <div className="px-2 py-3">
                        <img
                          src={
                            val.image_url
                              ? val.image_url
                              : "/static/images/notification-flat.png"
                          }
                          alt=""
                          className="object-contain h-8"
                        />
                      </div>
                      <div className="w-full p-2 py-3">
                        <div
                          className="text-sm text-gray-800"
                          dangerouslySetInnerHTML={{
                            __html: val.body,
                          }}
                        />

                        <small className="font-bold text-gray-800">
                          {new Date(val.title)}
                        </small>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 pt-8 md:py-16">
            <img
              css={`
                height: 80px;
              `}
              src={"/static/images/notification-flat.png"}
            />
            <p className="pb-2 font-semibold leading-relaxed text-gray-700">
              No notifications yet
            </p>
            <small className="leading-relaxed text-center">
              Stay tuned! Notification about your activity will show up here
            </small>
          </div>
        )}
      </div>
    </>
  );
};
export default Notifications;
