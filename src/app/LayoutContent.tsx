import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Analytics } from "@vercel/analytics/react";

import { ToastProvider } from "@/app/context/ToastContext";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastProvider>
        <div className="flex flex-col h-screen">
          <main className="">{children}</main>
          <Analytics />
        </div>
      </ToastProvider>
    </>
  );
}
