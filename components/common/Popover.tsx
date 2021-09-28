import { usePopper } from "react-popper";
import React from "react";
import Portal from "@reach/portal";

type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";
export const CustomPopover = ({
  placement,
  renderReference,
  renderPopover,
  portal,
  zIndex = 60,
}: {
  placement?: Placement;
  renderReference: (ref: any, toggle: () => void) => JSX.Element;
  renderPopover: (toggle: () => void, isOpen: boolean) => JSX.Element;
  portal?: boolean;
  zIndex?: number;
}) => {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState<any>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: "fixed",
    placement: placement || "bottom",
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {renderReference(setReferenceElement, toggle)}
      {isOpen && (
        <>
          {portal ? (
            <Portal>
              <div
                className="fixed w-full h-full left-0 top-0 bg-transparent"
                onClick={(event) => {
                  if (popperElement && popperElement.contains(event.target)) {
                    return;
                  }
                  toggle();
                }}
                css={`
                  z-index: ${zIndex};
                `}
              >
                <div
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  {renderPopover(toggle, isOpen)}
                </div>
              </div>
            </Portal>
          ) : (
            <div
              className="fixed w-full h-full left-0 top-0 bg-transparent"
              onClick={(event) => {
                if (popperElement && popperElement.contains(event.target)) {
                  return;
                }
                toggle();
              }}
              css={`
                z-index: ${zIndex};
              `}
            >
              <div
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                {renderPopover(toggle, isOpen)}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
