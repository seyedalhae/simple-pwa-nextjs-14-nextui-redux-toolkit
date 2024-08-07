"use client";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	// NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	Logo,
} from "@/components/icons";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleSidebar } from "@/redux/features/sidebarSlice";
import AdminHamburger from "./layout/HamburgerMenu";

export const Navbar = () => {
	const dispatch = useAppDispatch();

	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" classNames={{ base: "!backdrop-blur-none !backdrop-filter-none" }}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">ACME</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			{/* <NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent> */}

			<NavbarContent className="basis-1 pl-4 relative" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle onChange={() => dispatch(toggleSidebar())} className="hidden md:block" />
				<AdminHamburger />
			</NavbarContent>
		</NextUINavbar>
	);
};
