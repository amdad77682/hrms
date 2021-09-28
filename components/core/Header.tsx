import { Button } from "../common/Button";
import { CustomPopover } from "../common/Popover";
import { FaUserCircle } from "react-icons/fa";
import Notification from "../notifications/Notification";

export default function Header(): JSX.Element {
  return (
    <div>
      <div
        css={`
          height: 60px;
        `}
        className="sticky top-0 z-50 flex bg-white border-b"
      >
        <div className="flex justify-end flex-1">
          <div className="px-2 flex items-center">
            <Notification />
          </div>
          <CustomPopover
            placement="bottom"
            renderReference={(ref, toggle) => (
              <span
                ref={ref}
                onClick={toggle}
                className="inline-flex items-center justify-center p-4 cursor-pointer hover:bg-gray-200"
              >
                <span className="mr-2">
                  <FaUserCircle size={30} className="text-gray-400" />
                </span>
                <span className="font-evl text-3xl text-gray-400">
                  &#x25BE;
                </span>
              </span>
            )}
            renderPopover={() => {
              return (
                <div
                  className="w-full ml-3 mr-4"
                  css={`
                    z-index: 60;
                  `}
                >
                  <div
                    className="flex flex-col bg-white border rounded shadow-xl"
                    css={`
                      width: 320px;
                      min-height: 200px;
                    `}
                  >
                    <div className="flex flex-col items-center justify-center p-6">
                      <span>
                        <FaUserCircle size={50} className="text-gray-700" />
                      </span>
                      <p className="text-base leading-relaxed text-gray-800">
                        {"User"}
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-4 px-8 border-t">
                      <Button
                        variant={"outline"}
                        block={true}
                        onClick={() => {
                          //
                        }}
                      >
                        Sign out
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
