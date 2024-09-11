import React from "react";
import Navbar from "../ui/profile/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen flex-col">
			<Navbar />
			<div>{children}</div>
		</div>
	);
}
