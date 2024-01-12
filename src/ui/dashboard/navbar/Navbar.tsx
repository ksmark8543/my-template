import { Button, Space } from "antd";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="flex justify-between p-5 ">
      <div className="flex items-center">
        <MdOutlineMenu size={30} />
        <span>농장산책</span>
      </div>
      <div className="flex gap-3">
        <div>농장산책관리자</div>
        <div>로그아웃</div>
      </div>
    </section>
  );
};
export default Navbar;
