import React, { MouseEventHandler, ReactNode } from "react";
import { PulseLoader } from "react-spinners";

type Size = "default" | "xs" | "sm" | "md" | "lg";
type Type = "button" | "submit" | "reset";
type Variant =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "text";

type Props = {
  size?: Size;
  variant?: Variant;
  children?: Element | ReactNode | string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: Type;
  rounded?: boolean;
  leftIcon?: Element | ReactNode | string;
  rightIcon?: Element | ReactNode | string;
  icon?: Element | ReactNode | string;
  block?: boolean;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export type Ref = HTMLButtonElement;

export const Button = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <button
      ref={ref}
      className={`btn type-${props.variant || "default"} size-${
        props.size || "default"
      } ${props.rounded ? "rounded" : ""} ${props.disabled ? "disabled" : ""} ${
        props.block ? "w-full" : ""
      } ${props.icon ? "icon-only" : ""}`}
      disabled={props.disabled}
      type={props.type}
      style={props.style}
      onClick={props.onClick}
    >
      {props.isLoading ? (
        <div className="loader">
          <PulseLoader
            loading={true}
            size={props.size == "xs" ? 5 : props.size == "sm" ? 7 : 9}
          />
        </div>
      ) : (
        <>
          {props.leftIcon && <span data-content="left">{props.leftIcon}</span>}
          {props.icon && <span data-content="icon">{props.icon}</span>}
          {props.children && (
            <span data-content="center">{props.children}</span>
          )}
          {props.rightIcon && (
            <span data-content="right">{props.rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
});
