import Link from "next/link";
import React from "react";

export default function ButtonC({ title, href }) {
  return (
    <Link
      target="_blank"
      href={`${href}`}
      className="w-full py-3 rounded-xl hover:scale-105 duration-500 transition-all text-center outline outline-2"
    >
      {title}
    </Link>
  );
}
