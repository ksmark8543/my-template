"use client";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import menuGroups from "~/store/menuGroups";

const getCurrentPageName = (pathname: string) => {
  const activeSegment = useSelectedLayoutSegment();
  const menu = menuGroups.find((item) => item.pathname === activeSegment);
  const subMenu = menu?.children.find((item) => item.pathname === pathname);
  if (!menu) {
    return "잘못된 경로입니다";
  }
  return `${menu.name} > ${subMenu?.name}`;
};
export { getCurrentPageName };
