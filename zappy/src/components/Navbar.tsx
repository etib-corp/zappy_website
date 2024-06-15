import React from "react";

import { DarkThemeToggle, SidebarLogo } from "flowbite-react";

import { Navbar } from "flowbite-react";

export function Narbar_Component() {
  return (
  <div className="py-5 px-8">
    <Navbar className="py-10" fluid rounded>
      <Navbar.Brand className="min-md:px-20 px-10" href="/">
        <img src="zappy_bg.png" alt="Zappy" className="h-20"/>
      </Navbar.Brand>
      <div className="flex justify-center">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="min-w-screen-md flex items-center space-x-7">
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="https://github.com/MAILLOTNathan/zappy">GitHub</Navbar.Link>
          <Navbar.Link href="#">Docs</Navbar.Link>
          <DarkThemeToggle />
        </div>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}
