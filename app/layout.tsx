import "@/app/ui/global.css";
import { poppins } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | Acme Dashboard",
		default: "Acme Dashboard",
	},
	description: "The official next.js course dashboard.",
	metadataBase: new URL("https://nextjs-shekhar.vercel.app"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
