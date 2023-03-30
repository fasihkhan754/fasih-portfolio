"use client";
import { Navbar } from "./components";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FASIH | Portfolio</title>
      </head>
      <body><Navbar />
        {children}</body>
    </html>
  );
}
