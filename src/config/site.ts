import { TbLayoutDashboardFilled } from 'react-icons/tb';
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Poramoozi panel",
	description:
		"Interactive English learning platform.",
	navItems: [
		{
			label: "داشبورد",
			href: "/",
		},
		{
			label: "تمرینات",
			href: "/practice/list",
		},
		{
			label: "تمرین جدید",
			href: "/practice/create",
		},
		{
			label: "دانشجویان",
			href: "/student/list",
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
