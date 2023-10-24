import { CategoryType } from "@/types";
import Category from "./Category";

interface Props {
	categories: CategoryType[];
}

export default function Products({ categories }: Props) {
	return (
		<section className="flex flex-col gap-4 -mt-[10px]" id="product">
			<div className="border-green/50 sm:rounded-b-3xl pb-3 border-b">
				<div className="border-green/75 sm:rounded-b-3xl pb-3 border-b">
					<div className="bg-green sm:rounded-b-3xl py-10 relative">
						<h1 className="text-center text-white text-xl sm:text-4xl font-bold">
							OUR PRODUCTS
						</h1>
					</div>
				</div>
			</div>
			<div className="py-10 bg-[url('/img/products-bg.png')]">
				<div className="flex items-start gap-6 sm:gap-10 overflow-auto sm:max-w-[1600px] sm:flex-wrap sm:mx-auto sm:justify-center pb-3">
					<div></div>
					{categories.map((category) => (
						<Category key={category._id} category={category} />
					))}
					<div></div>
				</div>
			</div>
		</section>
	);
}
