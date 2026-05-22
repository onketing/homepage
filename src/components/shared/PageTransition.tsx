"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not consumed
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname]);

	return <>{children}</>;
};
