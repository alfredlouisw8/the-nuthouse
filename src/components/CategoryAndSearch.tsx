"use client";
import { useState } from "react";
import CategoryList from "./CategoryList";
import Search from "./Search";
import { CategoryType, ProductType } from "@/types";

interface Props {
	categories: CategoryType[];
	products: ProductType[];
	totalProducts: number;
}

export default function CategoryAndSearch({
	categories,
	products,
	totalProducts,
}: Props) {
	const [selected, setSelected] = useState<string>("All");

	return (
		<>
			<CategoryList categories={categories} setSelected={setSelected} />
			<Search
				categories={categories}
				products={products}
				totalProducts={totalProducts}
				selected={selected}
				setSelected={setSelected}
			/>
		</>
	);
}
