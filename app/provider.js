"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'


export function Providers({ children }) {
  const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
		{children}
		</NextUIProvider>
	);
}
