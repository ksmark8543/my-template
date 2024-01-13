"use client";
import Link from "next/link";
import React, { useState } from "react";
import {MdCheck  } from "react-icons/md";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdDashboard,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex bg-slate-50">
      <div className="h-screen py-10 text-white w-[280px] rounded-tr-3xl bg-slate-600">
        {/* todo MenuGroup, Menu를 atoms 로 유지 할 것 */}
        <MenuGroup
          icon={<MdDashboard />}
          name="대시보드"
          isOpen={true}
          onClick={() => alert("대시보드 클릭")}
        >
          <Menu name={"메인"} href={"/dashboard"} />
        </MenuGroup>
        <MenuGroup icon={<MdDashboard />} name="사용자" isOpen={false}>
          <Menu name={"접속자조회"} href={"/user/farmers2"} />
          <Menu name={"접속자조회"} href={"/user/farmers2"} />
          <Menu name={"농가목록"} href={"/user/farmers"} isActive={true} />

          <Menu name={"접속자조회"} href={"/user/farmers2"} />
          <Menu name={"접속자조회"} href={"/user/farmers2"} />
        </MenuGroup>
        <MenuGroup icon={<MdDashboard />} name="사용자" isOpen={true}>
          <Menu name={"접속자조회"} href={"/user/farmers2"} />
          <Menu name={"접속자조회"} href={"/user/farmers2"} />
          <Menu name={"농가목록"} href={"/user/farmers"} isActive={true} />

          <Menu name={"접속자조회"} href={"/user/farmers2"} />
          <Menu name={"접속자조회"} href={"/user/farmers2"} />
        </MenuGroup>
      </div>
    </div>
  );
};

export default Sidebar;

const MenuGroup = ({
  icon,
  name,
  isOpen = false,
  children,
  onClick,
}: {
  icon: React.ReactNode;
  name: string;
  isOpen?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const Icon = icon;
  return (
    <div>
      <div
        className={`flex px-3 font-bold items-center py-3 cursor-pointer           
         ${isOpen ? " shadow-sm text-slate-50 " : " text-slate-300   "}
        `}
        onClick={onClick}
      >
        {icon}
        <div className="flex-grow ml-2">{name}</div>
        {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
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
      className={`py-3 text-xs block font-bold text-gray-300 flex
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

//hover:text-white hover:filter hover:brightness-90 transition-colors duration-300 ease-in-out 