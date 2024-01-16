"use client";

import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { PageName } from "~/components/atoms/PageName";
import { getCurrentPageName } from "~/helper/menuHelper";

const PageNameHook = () => {
  const activeSegment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const name = getCurrentPageName(activeSegment!, pathname);
  return <PageName name={name} />;
};

export default PageNameHook;
