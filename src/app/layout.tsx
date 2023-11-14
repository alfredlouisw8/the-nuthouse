import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "The Nuthouse",
	description:
		"The Nuthouse, which operates in the food supplier industry in Surabaya, presents various kitchen needs with various choices such as categories, quantities or variants. For orders and further questions, kindly contact us.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth relative">
			<body>{children}</body>
		</html>
	);
}
