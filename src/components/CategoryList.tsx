import { CategoryType } from "@/types";
import Category from "./Category";
import { Dispatch, SetStateAction } from "react";

interface Props {
	categories: CategoryType[];
	setSelected: Dispatch<SetStateAction<string>>;
}

export default function CategoryList({ categories, setSelected }: Props) {
	return (
		<section className="flex flex-col gap-4 -mt-[10px]" id="product">
			<div className="bg-green py-5 relative">
				<h1 className="text-center text-white sm:text-xl font-bold">
					PRODUCT CATEGORY
				</h1>
			</div>
			<div className="py-10 bg-[url('/img/products-bg.png')] container px-0">
				<div className="flex md:grid grid-cols-5 items-start gap-6 md:gap-10 overflow-auto md:max-w-[1600px] md:flex-wrap md:mx-auto md:justify-center pb-3 px-10">
					{categories.map((category) => (
						<a
							key={category._id}
							href="#search"
							onClick={() => setSelected(category.title)}
						>
							<Category category={category} />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
