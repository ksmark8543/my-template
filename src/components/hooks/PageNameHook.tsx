"use client";

import { usePathname } from "next/navigation";
import { PageName } from "~/components/atoms/PageName";
import { getCurrentPageName } from "~/helper/menuHelper";

const PageNameHook = () => {
  const pathname = usePathname();
  const name = getCurrentPageName(pathname);
  return <PageName name={name} />;
};

export default PageNameHook;
