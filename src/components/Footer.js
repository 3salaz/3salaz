import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <footer className="h-10p w-full flex items-center justify-center gap-4 rounded-t-lg drop-shadow-lg bg-white">
      <Button>Contact</Button>
      <Button variant='secondary'>Circle</Button>
      <Button>More</Button>
    </footer>
  );
}

export default Footer;
