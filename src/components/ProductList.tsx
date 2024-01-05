import { ProductType } from "@/types";
import FormButton from "./FormButton";
import Product from "./Product";

interface Props {
	fetchPrevPage: () => Promise<void>;
	fetchNextPage: () => Promise<void>;
	selected: string;
	products: ProductType[];
	totalPages: number;
	pageNumber: number;
}

export default function ProductList({
	selected,
	products,
	pageNumber,
	fetchPrevPage,
	fetchNextPage,
	totalPages,
}: Props) {
	return (
		<>
			<p
				className={`sm:text-xl text-dark-gray ${
					selected != "Branded Products" && "invisible"
				}`}
			>
				{products.map((product) => product.brand).join(" • ")}
			</p>
			<div className="flex flex-col gap-5">
				{products.length > 0 ? (
					<div className="grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-3 gap-5">
						{products.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>
				) : (
					<p className=" text-2xl sm:text-4xl text-center py-5">No products</p>
				)}

				{products.length > 0 && (
					<div className="flex items-center gap-3 justify-center sm:text-xl">
						{pageNumber > 0 && (
							<FormButton onClick={fetchPrevPage} className="underline">
								prev
							</FormButton>
						)}
						<p>
							{pageNumber + 1} of {totalPages}
						</p>
						{pageNumber < totalPages - 1 && (
							<FormButton onClick={fetchNextPage} className="underline">
								next
							</FormButton>
						)}
					</div>
				)}
			</div>
		</>
	);
}
