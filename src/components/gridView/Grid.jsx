import React from "react";
import { GridOne, Gridtwo, GridThree, GridFour, GridFive } from "./index";
import { SidebarNav } from "./sidebar";
import {
  SGridOne,
  SGridtwo,
  SGridThree,
  SGridFour,
  SGridFive,
  SGridSix,
  SGridSeven,
} from "./smallGrid";
export const GridLarge = () => {
  return (
    <div>
      <GridOne />
      <Gridtwo />
      <GridThree />
      <GridFour />
      <GridFive />
    </div>
  );
};

export const GridSmall = () => {
  return (
    <div>
      <SGridOne />
      <SGridtwo />
      <SGridThree />
      <SGridFour />
      <SGridFive />
      <SGridSix />
      <SGridSeven />
    </div>
  );
};
export const Sidebar = () => {
  return (
    <div>
      <SidebarNav />
    </div>
  );
};
