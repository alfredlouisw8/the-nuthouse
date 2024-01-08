import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import FormButton from "./FormButton";
import Dropdown from "./Dropdown";
import { Dispatch, RefObject, SetStateAction } from "react";
import { CategoryType, CategoryTypeWithEmptyArray } from "@/types";

interface Props {
	titleRef: RefObject<HTMLInputElement>;
	searchProducts: () => Promise<void>;
	categoriesWithEmptyState: CategoryTypeWithEmptyArray;
	selected: string;
	setSelected: Dispatch<SetStateAction<string>>;
}

export default function Filter({
	titleRef,
	searchProducts,
	categoriesWithEmptyState,
	selected,
	setSelected,
}: Props) {
	return (
		<>
			<p className="text-xl text-dark-gray">Filter</p>
			<form onSubmit={searchProducts}>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-3">
						<input
							type="text"
							className="border flex-1 px-3 py-2 rounded border-gray md:w-[50px]"
							ref={titleRef}
							placeholder="Search..."
						/>
						<FormButton
							className="p-2 bg-white rounded h-[42px] w-[42px] flex items-center justify-center border border-gray"
							onClick={searchProducts}
							type="submit"
						>
							<MagnifyingGlassIcon width={20} />
						</FormButton>
					</div>
					<div className="flex items-center gap-4">
						<Dropdown
							categories={categoriesWithEmptyState}
							selected={selected}
							setSelected={setSelected}
						/>
					</div>
				</div>
			</form>
		</>
	);
}
