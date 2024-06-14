import React from "react";
import { Button, Navbar } from "flowbite-react";

export function Narbar_Component() {
  return (
    <Navbar className="my-8" fluid rounded>
      <Navbar.Brand className="px-3" href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ZappyEtib</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
         <Navbar.Link href="#">GitHub</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
