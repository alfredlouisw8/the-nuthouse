"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Dropdown from "./Dropdown";
import Product from "./Product";
import { CategoryType, ProductType } from "@/types";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { useProducts } from "@/hooks";

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

	const [
		products,
		pageNumber,
		totalPages,
		fetchNextPage,
		fetchPrevPage,
		searchProducts,
	] = useProducts(initialProducts, initialTotalPages, selected, titleRef);

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
						className="p-2 bg-white rounded h-[32px] w-[32px] sm:h-[48px] sm:w-[48px] flex items-center justify-center"
						onClick={searchProducts}
					>
						<MagnifyingGlassIcon width={20} />
					</Button>
				</div>

				<p
					className={`sm:text-2xl text-white ${
						selected != "Branded Products" && "invisible"
					}`}
				>
					{products.map((product) => product.brand).join(" | ")}
				</p>

				{products.length > 0 ? (
					<div className="grid grid-cols-3 sm:grid-cols-4 gap-y-10 lg:gap-x-36 md:gap-x-16 gap-x-4">
						{products.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>
				) : (
					<p className="text-white text-2xl sm:text-4xl text-center py-5">
						No products
					</p>
				)}

				{products.length > 0 && (
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
				)}
			</div>
		</section>
	);
}
