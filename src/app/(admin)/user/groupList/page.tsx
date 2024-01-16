import React from "react";
import { fakeAsyncOperation } from "~/helper/fake";

const GroupListPage = async () => {
  await fakeAsyncOperation(2000);
  return <div>GroupListPage</div>;
};

export default GroupListPage;
