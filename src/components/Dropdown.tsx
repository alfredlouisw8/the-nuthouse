"use client";

import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { CategoryType } from "@/types";

interface Props {
	categories: Pick<CategoryType, "_id" | "title">[];
	selected: string;
	setSelected: Dispatch<SetStateAction<string>>;
}

export default function Dropdown({ categories, selected, setSelected }: Props) {
	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className="relative w-full border rounded border-gray">
				<Listbox.Button className="relative w-full cursor-default rounded bg-white px-3 py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
					<span className="block truncate">{selected}</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronDownIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full min-w-[300px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{categories.map(({ _id, title }) => (
							<Listbox.Option
								key={_id}
								className={({ active }) =>
									`relative select-none cursor-pointer py-2 pl-10 pr-4 ${
										active ? "bg-amber-100 text-amber-900" : "text-gray-900"
									}`
								}
								value={title}
							>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? "font-medium" : "font-normal"
											}`}
										>
											{title}
										</span>
										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}
