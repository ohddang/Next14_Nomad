"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [count, setCount] = useState(0);
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
