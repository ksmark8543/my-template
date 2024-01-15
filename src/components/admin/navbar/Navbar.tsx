import { Button, Space } from "antd";
import React from "react";
import { MdOutlineMenu, MdOutlineEmojiEmotions } from "react-icons/md";

const Navbar = ({
  userName = "",
  logout,
}: {
  userName?: string;
  logout?: React.ReactNode;
}) => {
  return (
    <section className="flex justify-between p-5 ">
      <div className="flex items-center gap-2">
        <MdOutlineMenu size={30} />
        <span>농장산책</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
          <MdOutlineEmojiEmotions size={20} />
          {userName}
        </div>
        {logout}
      </div>
    </section>
  );
};
export default Navbar;
