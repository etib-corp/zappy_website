import React from "react";

import { DarkThemeToggle, SidebarLogo } from "flowbite-react";

import { Navbar } from "flowbite-react";

export function Narbar_Component() {
  return (
  <div className="py-6 px-8">
    <Navbar className="py-10" fluid rounded>
      <Navbar.Brand className="px-3" href="https://etib.tech">
        <img src="zappy.png" alt="Zappy" className="h-20"/>
      </Navbar.Brand>
      <div className="flex justify-center">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="flex items-center space-x-10">
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">GitHub</Navbar.Link>
          <Navbar.Link href="#">Docs</Navbar.Link>
        </div>
        <DarkThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}
