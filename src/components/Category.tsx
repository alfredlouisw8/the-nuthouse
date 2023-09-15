import { urlFor } from "@/lib/sanity";
import { CategoryType } from "@/types";
import Image from "next/image";

interface Props {
	category: CategoryType;
}

export default function Category({ category: { image, title } }: Props) {
	return (
		<div className="flex flex-col gap-5">
			<div className="w-28 h-28 sm:w-48 sm:h-48 overflow-hidden relative rounded-full">
				<Image
					src={urlFor(image).url()}
					alt={title}
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
			<h1 className="text-center text-brown sm:text-2xl">{title}</h1>
		</div>
	);
}
