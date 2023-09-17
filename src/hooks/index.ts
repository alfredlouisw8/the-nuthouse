import { getProducts } from "@/queries";
import { ProductType } from "@/types";
import { RefObject, useState } from "react";

export const useProducts = (
	initialProducts: ProductType[],
	initialTotalPages: number,
	selected: string,
	titleRef: RefObject<HTMLInputElement>
) => {
	const [products, setProducts] = useState<ProductType[]>(initialProducts);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(initialTotalPages);
	const [lastIds, setLastIds] = useState<string[]>([
		initialProducts.slice(-1)[0]._id,
	]);
	const [pageNumber, setPageNumber] = useState(0);
	const [title, setTitle] = useState("");

	const searchProducts = async () => {
		setIsLoading(true);
		const titleQuery = titleRef.current?.value ?? "";

		const [fetchedProducts, fetchedTotalPage] = await getProducts(
			selected,
			titleQuery
		);

		setTitle(titleQuery);
		setProducts(fetchedProducts);
		setTotalPages(fetchedTotalPage);
		setIsLoading(false);
		setPageNumber(0);
		setLastIds([fetchedProducts.slice(-1)[0]?._id]);
	};

	const fetchNextPage = async () => {
		setIsLoading(true);

		const [fetchedProducts] = await getProducts(
			selected,
			title,
			lastIds[pageNumber]
		);

		setPageNumber((prev) => prev + 1);
		if (!lastIds[pageNumber + 1]) {
			setLastIds((prev) => [...prev, fetchedProducts.slice(-1)[0]._id]);
		}

		setProducts(fetchedProducts);
		setIsLoading(false);
	};

	const fetchPrevPage = async () => {
		setIsLoading(true);

		const [fetchedProducts] = await getProducts(
			selected,
			title,
			lastIds[pageNumber - 2]
		);

		setPageNumber((prev) => prev - 1);
		setProducts(fetchedProducts);
		setIsLoading(false);
	};

	return [
		products,
		pageNumber,
		totalPages,
		fetchNextPage,
		fetchPrevPage,
		searchProducts,
	] as const;
};
