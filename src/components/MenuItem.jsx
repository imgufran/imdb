import Link from "next/link";
import React from "react";

// Link -> a React component that extends the HTML <a> element. The <Link> component prefetches the route before the user clicks the link. This means that the destination page will be loaded in the background, so the user will experience a faster navigation. The <Link> component can also be used to navigate to dynamic routes.

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      {/* Add `Link` from "next/link" */}
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4"/>
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
