"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IconManifestType, IconType } from "react-icons";
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
          <Menu name={"메인"} href={"/admin/dashboard"} />
          <Menu name={"메인"} href={"/admin/dashboard"} isActive={true} />
          <Menu name={"메인"} href={"/admin/dashboard"} />
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
    <>
      <div
        className="flex px-3 font-bold items-center py-3 hover:bg-slate-700 cursor-pointer"
        onClick={onClick}
      >
        {icon}
        <div className="flex-grow ml-2">{name}</div>
        {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>
      <div
        className={`border border-slate-500 border-l-0 border-r-0 ${
          isOpen ? "border-solid" : ""
        } `}
      >
        {isOpen ? children : null}
      </div>
    </>
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
      className={`pl-10 py-3 text-sm block ${
        isActive ? "bg-slate-700" : ""
      } hover:bg-slate-700`}
    >
      {name}
    </Link>
  );
};
