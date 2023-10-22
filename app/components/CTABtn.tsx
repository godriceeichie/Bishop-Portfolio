import Link from "next/link";
import React from "react";

const CTABtn = ({ buttonName, link }: {buttonName: string, link: string}) => {
  return (
    <>
      <Link
        href={link}
        className="btn2 inline-block rounded px-6 py-3 relative bg-accent-color text-white tracking-wider leading-none overflow-hidden hover:border hover:border-accent-color hover:text-accent-color"
      >
        <span className="absolute inset-0 bg-white"></span>
        <span className="absolute inset-0 flex justify-center items-center font-bold">
          {buttonName}
        </span>
        {buttonName}
      </Link>
    </>
  );
};

export default CTABtn;
