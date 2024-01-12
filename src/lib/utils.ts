import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function numberWithCommas(x: number) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const PRODUCTS_PER_PAGE = 12;
export const SHOPEE_URL = "https://shopee.co.id/nuthouse";
export const TOKOPEDIA_URL = "https://www.tokopedia.com/nuthouse";
export const BLIBLI_URL =
	"https://www.blibli.com/merchant/the-nut-house-official-store/THN-70062";

export const linktree = [
	{
		title: "Whatsapp",
		link: "https://wa.me/+62816500508",
	},
	{
		title: "Tokopedia",
		link: "https://tokopedia.link/jA1XuyLQBhb",
	},
	{
		title: "Shopee",
		link: "https://shopee.co.id/nuthouse?smtt=0.0.9",
	},
	{
		title: "BliBli",
		link: "https://blibli.app.link/o76vBUvb1Ab",
	},
];
