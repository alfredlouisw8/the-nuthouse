import { urlFor } from "@/lib/sanity";
import { ProductType } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	BLIBLI_URL,
	SHOPEE_URL,
	TOKOPEDIA_URL,
	numberWithCommas,
} from "@/lib/utils";

interface Props {
	product: ProductType;
}

export default function Product({
	product: { title, image, shopee, tokopedia, blibli, info, price },
}: Props) {
	const imageUrl = image && image.asset ? urlFor(image).url() : "/img/no-image.jpg";
	const shopeeUrl = shopee || SHOPEE_URL;
	const tokopediaUrl = tokopedia || TOKOPEDIA_URL;
	const blibliUrl = blibli || BLIBLI_URL;
	const priceText = price ?? "-";
	return (
		<div className="flex w-full flex-col h-full items-center">
			<Card className="max-w-[200px] border-0 drop-shadow-lg flex-1 w-full">
				<CardHeader className="p-0">
					<div className="w-full h-auto aspect-square relative overflow-hidden rounded-lg">
						<Image
							src={imageUrl}
							alt={title}
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
				</CardHeader>
				<CardContent className="py-6 px-3 flex-1 gap-3 flex flex-col">
					<p className="line-clamp-2 h-12">{title}</p>
					<p className="font-bold text-sm h-10">{priceText}</p>
					<p className="text-xs">{info}</p>
					<div className="flex items-center gap-3">
						<a href={shopeeUrl} target="_blank">
							<Image
								src="/img/shopee.png"
								alt={shopeeUrl}
								height={25}
								width={23}
							/>
						</a>
						<a href={tokopediaUrl} target="_blank">
							<Image
								src="/img/tokopedia.png"
								alt={tokopediaUrl}
								width={27}
								height={25}
							/>
						</a>
						<a href={blibliUrl} target="_blank">
							<Image
								src="/img/blibli.png"
								alt={blibliUrl}
								width={17}
								height={25}
							/>
						</a>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
