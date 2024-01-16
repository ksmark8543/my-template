'use client';
import styled from "styled-components";

import React from "react";
import { fakeAsyncOperation } from "~/helper/fake";

const AADiv= styled.div`
  p-10
`;

const GroupListPage = async () => {
  await fakeAsyncOperation(2000);
  return <div>GroupListPage</div>;
};

export default GroupListPage;