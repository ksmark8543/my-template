"use client";
import { usePathname } from "next/navigation";
import menuGroups from "~/store/menuGroups";

const getCurrentPageName = (pathname: string) => {
  const menu = menuGroups.find((menuGroup) =>
    menuGroup.children.find((menu) => menu.pathname === pathname)
  );
  if (!menu) {
    return "잘못된 경로입니다";
  }
  return menu.name;
};
export { getCurrentPageName };
