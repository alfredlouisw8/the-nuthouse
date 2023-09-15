"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Dropdown from "./Dropdown";
import Product from "./Product";
import { CategoryType, ProductType } from "@/types";
import { useRef, useState } from "react";
import { getProducts } from "@/queries";
import Button from "./Button";
import Image from "next/image";

interface Props {
	categories: CategoryType[];
	products: ProductType[];
	totalPages: number;
}

export default function Search({
	categories,
	products: initialProducts,
	totalPages: initialTotalPages,
}: Props) {
	const categoriesWithEmptyState = [{ _id: "0", title: "All" }, ...categories];
	const [selected, setSelected] = useState<string>("All");
	const titleRef = useRef<HTMLInputElement>(null);
	const [title, setTitle] = useState("");
	const [products, setProducts] = useState<ProductType[]>(initialProducts);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(initialTotalPages);
	const [lastIds, setLastIds] = useState<string[]>([
		initialProducts.slice(-1)[0]._id,
	]);
	const [pageNumber, setPageNumber] = useState(0);

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
		setLastIds([fetchedProducts.slice(-1)[0]._id]);
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

	return (
		<section className="bg-brown">
			<div className="p-10 flex flex-col gap-5 bg-blue-500">
				<div className="flex items-center gap-4">
					<div className="grow max-w-">
						<Dropdown
							categories={categoriesWithEmptyState}
							selected={selected}
							setSelected={setSelected}
						/>
					</div>
					<div className="bg-white rounded grow">
						<input
							type="text"
							className="outline-none w-full text-xs text-brown sm:text-2xl px-3 py-2 rounded"
							ref={titleRef}
							placeholder="Search..."
						/>
					</div>
					<Button
						className="p-2 bg-white rounded h-[32px] w-[32px] sm:h-[41px] sm:w-[41px] flex items-center justify-center"
						onClick={searchProducts}
					>
						<MagnifyingGlassIcon width={20} />
					</Button>
				</div>

				<div className="grid grid-cols-3 sm:grid-cols-4 gap-5 sm:gap-10">
					{products.length > 0 ? (
						products.map((product) => (
							<>
								<Product key={product._id} product={product} />
								<Product key={product._id} product={product} />
								<Product key={product._id} product={product} />
							</>
						))
					) : (
						<p>No products</p>
					)}
				</div>

				<Image
					src="/img/white-logo.png"
					alt="The Nuthouse"
					width={200}
					height={200}
					className="mx-auto"
				/>

				<div className="flex items-center gap-3 justify-center text-white sm:text-2xl">
					{pageNumber > 0 && (
						<Button onClick={fetchPrevPage} className="underline">
							prev
						</Button>
					)}
					<p>
						{pageNumber + 1} of {totalPages}
					</p>
					{pageNumber < totalPages - 1 && (
						<Button onClick={fetchNextPage} className="underline">
							next
						</Button>
					)}
				</div>
			</div>
		</section>
	);
}
