import dynamic from "next/dynamic";
import React from "react";
import { Sidebar } from "./Sidebar";

const Header = dynamic(() => import("../core/Header"), {
  ssr: false,
});
export const MainLayout = (props: any) => {
  return (
    <>
      <Sidebar />
      <section
        css={`
          margin-left: 256px;
        `}
      >
        <Header />
        <div>{props.children}</div>
      </section>
    </>
  );
};
