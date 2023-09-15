import { urlFor } from "@/lib/sanity";
import { ProductType } from "@/types";
import Image from "next/image";

interface Props {
	product: ProductType;
}

export default function Product({
	product: { title, image, shopee, tokopedia, blibli },
}: Props) {
	return (
		<div className="flex flex-col gap-3">
			<div className="w-full aspect-square overflow-hidden relative rounded-lg">
				<Image
					src={urlFor(image).url()}
					alt={title}
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
			<h5 className="sm:text-2xl text-white">{title}</h5>
			<div className="flex items-center gap-3">
				<a href={shopee} target="_blank">
					<Image src="/img/shopee.jpg" alt={shopee} width={25} height={25} />
				</a>
				<a href={tokopedia} target="_blank">
					<Image
						src="/img/tokopedia.jpg"
						alt={tokopedia}
						width={25}
						height={25}
					/>
				</a>
				<a href={shopee} target="_blank">
					<Image src="/img/blibli.jpg" alt={blibli} width={25} height={25} />
				</a>
			</div>
		</div>
	);
}