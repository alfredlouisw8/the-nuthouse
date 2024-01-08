import { PRODUCTS_PER_PAGE } from "@/lib/utils";
import { getProducts } from "@/queries";
import { ProductType } from "@/types";
import { RefObject, useCallback, useEffect, useState } from "react";

export const useProducts = (
	initialProducts: ProductType[],
	initialTotalProducts: number,
	selected: string,
	titleRef: RefObject<HTMLInputElement>
) => {
	const [products, setProducts] = useState<ProductType[]>(initialProducts);
	const [isLoading, setIsLoading] = useState(false);
	const [totalProducts, setTotalProducts] = useState(initialTotalProducts);
	const [lastTitles, setLastTitles] = useState<string[]>([
		initialProducts.slice(-1)[0]._id,
	]);
	const [pageNumber, setPageNumber] = useState(0);
	const [title, setTitle] = useState("");

	const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

	const searchProducts = useCallback(async () => {
		setIsLoading(true);

		const titleQuery = titleRef.current?.value ?? "";

		const [fetchedProducts, fetchedTotalProducts] = await getProducts(
			selected,
			titleQuery
		);

		setTitle(titleQuery);
		setProducts(fetchedProducts);
		setTotalProducts(fetchedTotalProducts);
		setIsLoading(false);
		setPageNumber(0);
		setLastTitles([fetchedProducts.slice(-1)[0]?.title]);
	}, [selected, titleRef]);

	const fetchNextPage = async () => {
		setIsLoading(true);

		const [fetchedProducts] = await getProducts(
			selected,
			title,
			lastTitles[pageNumber]
		);

		setPageNumber((prev) => prev + 1);
		if (!lastTitles[pageNumber + 1]) {
			setLastTitles((prev) => [...prev, fetchedProducts.slice(-1)[0]?.title]);
		}
		setProducts(fetchedProducts);
		setIsLoading(false);
	};

	const fetchPrevPage = async () => {
		setIsLoading(true);

		const [fetchedProducts] = await getProducts(
			selected,
			title,
			lastTitles[pageNumber - 2]
		);

		setPageNumber((prev) => prev - 1);
		setProducts(fetchedProducts);
		setIsLoading(false);
	};

	useEffect(() => {
		searchProducts();
	}, [selected, searchProducts]);

	return [
		products,
		pageNumber,
		totalPages,
		fetchNextPage,
		fetchPrevPage,
		searchProducts,
	] as const;
};
