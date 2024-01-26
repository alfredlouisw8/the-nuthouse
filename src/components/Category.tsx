import { urlFor } from "@/lib/sanity";
import { CategoryType } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
	category: CategoryType;
}

export default function Category({ category: { image, title } }: Props) {
	return (
		<div className="flex w-full flex-col h-full items-center">
			<Card className="max-w-[200px] border-0 drop-shadow-lg flex-1 w-full">
				<CardHeader className="p-0">
					<div className="w-40 h-40 md:w-full md:h-auto md:aspect-square relative">
						<Image
							src={urlFor(image).url()}
							alt={title}
							fill
							style={{ objectFit: "cover" }}
							className="rounded-lg"
						/>
					</div>
				</CardHeader>
				<CardContent className="py-6 px-3 flex-1 h-20">
					<p className="font-bold">{title}</p>
				</CardContent>
			</Card>
		</div>
	);
}
