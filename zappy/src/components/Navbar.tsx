import React from "react";

import { DarkThemeToggle } from "flowbite-react";

import { Navbar } from "flowbite-react";

export function Narbar_Component() {
  return (
    <div className="py-6 px-8">
      <Navbar className="py-10" fluid rounded>
        <Navbar.Brand className="px-3 flex-col" href="https://etib.tech">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Zappy</span>
        </Navbar.Brand>
        <div className="flex justify-center items-center">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">GitHub</Navbar.Link>
          <Navbar.Link href="#">Docs</Navbar.Link>
          <DarkThemeToggle />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
