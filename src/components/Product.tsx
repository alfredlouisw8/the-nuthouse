import { urlFor } from "@/lib/sanity";
import { ProductType } from "@/types";
import Image from "next/image";

interface Props {
	product: ProductType;
}

export default function Product({
	product: { title, image, shopee, tokopedia, blibli, info },
}: Props) {
	const imageUrl = image ? urlFor(image).url() : "/img/no-image.jpg";
	return (
		<div className="flex flex-col gap-3">
			<div className="w-full aspect-square overflow-hidden relative rounded-lg">
				<Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
			</div>
			<h5 className="sm:text-2xl text-white">{title}</h5>
			<div className="bg-white p-1 max-w-fit hidden sm:block">
				<h5 className="text-brown sm:text-base text-xs">{info}</h5>
			</div>

			<div className="sm:flex items-center gap-3 hidden">
				{shopee && (
					<a href={shopee} target="_blank">
						<Image src="/img/shopee.png" alt={shopee} width={25} height={25} />
					</a>
				)}
				{tokopedia && (
					<a href={tokopedia} target="_blank">
						<Image
							src="/img/tokopedia.png"
							alt={tokopedia}
							width={25}
							height={25}
						/>
					</a>
				)}
				{blibli && (
					<a href={blibli} target="_blank">
						<Image src="/img/blibli.png" alt={blibli} width={25} height={25} />
					</a>
				)}
			</div>
		</div>
	);
}
