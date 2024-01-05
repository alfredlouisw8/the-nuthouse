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
