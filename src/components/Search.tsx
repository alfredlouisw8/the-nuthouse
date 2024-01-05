"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Dropdown from "./Dropdown";
import Product from "./Product";
import { CategoryType, CategoryTypeWithEmptyArray, ProductType } from "@/types";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useProducts } from "@/hooks";
import FormButton from "./FormButton";
import Filter from "./Filter";
import { title } from "process";
import ProductList from "./ProductList";

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
	const categoriesWithEmptyState: CategoryTypeWithEmptyArray = [
		{ _id: "0", title: "All" },
		...categories,
	];
	const [selected, setSelected] = useState<string>("All");
	const titleRef = useRef<HTMLInputElement>(null);

	const [
		products,
		pageNumber,
		totalPages,
		fetchNextPage,
		fetchPrevPage,
		searchProducts,
	] = useProducts(initialProducts, initialTotalPages, selected, titleRef);

	return (
		<section id="search">
			<div className="bg-green py-5 relative">
				<h1 className="text-center text-white sm:text-xl font-bold">
					PRODUCT LIST
				</h1>
			</div>
			<div className="container flex items-start py-10 gap-10 md:flex-row flex-col">
				<div className="md:w-1/4 flex flex-col gap-5 sm:border-right w-full">
					<Filter
						titleRef={titleRef}
						searchProducts={searchProducts}
						categoriesWithEmptyState={categoriesWithEmptyState}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>
				<div className="md:w-3/4 flex flex-col gap-5 w-full">
					<ProductList
						selected={selected}
						products={products}
						pageNumber={pageNumber}
						fetchPrevPage={fetchPrevPage}
						fetchNextPage={fetchNextPage}
						totalPages={totalPages}
					/>
				</div>
			</div>
		</section>
	);
}
