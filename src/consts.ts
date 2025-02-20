import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
	TITLE: "MARS",
	DESCRIPTION: "Welcome to MARS, my personal portfolio and blog.",
	AUTHOR: "Masato Arnold",
};

// Blog Page
export const BLOG: Page = {
	TITLE: "Blog",
	DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
	TITLE: "Projects",
	DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
	TITLE: "Search",
	DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
	{
		TEXT: "Home",
		HREF: "/",
	},
	{
		TEXT: "Blog",
		HREF: "/blog",
	},
	{
		TEXT: "Projects",
		HREF: "/projects",
	},
];

// Socials
export const SOCIALS: Socials = [
	{
		NAME: "Email",
		ICON: "email",
		TEXT: "dev@masatoarnold.dev",
		HREF: "mailto:dev@masatoarnold.dev",
	},
	{
		NAME: "Github",
		ICON: "github",
		TEXT: "tasamo23",
		HREF: "https://github.com/tasamo23",
	},
	{
		NAME: "LinkedIn",
		ICON: "linkedin",
		TEXT: "masatoarnold",
		HREF: "https://www.linkedin.com/in/masatoarnold/",
	},
];
