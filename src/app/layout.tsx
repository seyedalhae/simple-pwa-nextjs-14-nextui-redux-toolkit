import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ReduxProvider } from "@/redux/ReduxProvider";

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="fa">
			<head />
			<body
				className={clsx(
					"bg-background min-h-screen font-[Vazir] antialiased",
					fontSans.variable,
				)}
				dir="rtl"
			>
				<ReduxProvider>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
						{children}
					</Providers>
				</ReduxProvider>
			</body>
		</html>
	);
}
