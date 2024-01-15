"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import menuGroups from "~/store/menuGroups";

const Sidebar = () => {
  //현재 pathname
  const pathname = usePathname();
  //한단계 이전의 경로
  const activeSegment = useSelectedLayoutSegment();

  return (
    <div className="flex bg-slate-50">
      <div className="h-screen py-10 text-white w-[280px] rounded-tr-3xl bg-slate-600">
        {/* todo MenuGroup, Menu를 atoms 로 유지 할 것 */}
        {menuGroups.map((menuGroup) => (
          <MenuGroup
            key={menuGroup.pathname}
            icon={menuGroup.icon}
            name={menuGroup.name}
            initialOpen={menuGroup.pathname === activeSegment}
          >
            {menuGroup.children.map((menu) => (
              <Menu
                key={menu.pathname}
                name={menu.name}
                href={menu.pathname}
                isActive={menu.pathname == pathname}
              />
            ))}
          </MenuGroup>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const MenuGroup = ({
  icon,
  name,
  initialOpen = false,
  children,
  onClick,
}: {
  icon: React.ReactNode;
  name: string;
  initialOpen?: boolean;
  children?: React.ReactNode;
  onClick?: Function;
}) => {
  const [isOpen, setOpen] = useState(initialOpen);
  const toggle = () => {
    setOpen(() => !isOpen);
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <div>
      <div
        className={`flex px-3 font-bold items-center py-3 cursor-pointer           
         ${initialOpen ? " shadow-sm text-slate-50 " : " text-slate-300 "}
        `}
        onClick={toggle}
      >
        {icon}
        <div className="flex-grow ml-2">{name}</div>
        {initialOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>
      <div>{isOpen ? children : null}</div>
    </div>
  );
};

const Menu = ({
  name,
  href,
  isActive = false,
}: {
  name: string;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`py-3 text-sm block font-bold text-gray-300 flex
        ${isActive ? "text-slate-50 " : ""} 
        hover:text-white hover:bg-slate-500 transition-colors duration-300 ease-in-out 
      `}
    >
      <div className="pl-3 w-[40px] flex justify-center">
        {isActive ? <MdCheck /> : null}
      </div>
      {name}
    </Link>
  );
};
