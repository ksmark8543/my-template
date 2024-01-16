'use client';
import styled from "styled-components";

const AADiv= styled.div`
  p-10
`;

import React from "react";
import { fakeAsyncOperation } from "~/helper/fake";

const GroupListPage = async () => {
  await fakeAsyncOperation(2000);
  return <div>GroupListPage</div>;
};

export default GroupListPage;