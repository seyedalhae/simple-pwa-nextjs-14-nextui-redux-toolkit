export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Nextjs pwa",
	description:
		"This is a simple Nextjs 14 pwa.",
	navItems: [
		{
			label: "Dashboard",
			href: "/",
		},
		{
			label: "Products",
			href: "/products",
		},
		{
			label: "Categories",
			href: "/categories",
		},
		{
			label: "Terms",
			href: "/terms",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};
