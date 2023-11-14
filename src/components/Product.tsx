import { urlFor } from "@/lib/sanity";
import { ProductType } from "@/types";
import { BLIBLI_URL, SHOPEE_URL, TOKOPEDIA_URL } from "@/utils/variables";
import Image from "next/image";

interface Props {
	product: ProductType;
}

export default function Product({
	product: { title, image, shopee, tokopedia, blibli, info },
}: Props) {
	const imageUrl = image ? urlFor(image).url() : "/img/no-image.jpg";
	const shopeeUrl = shopee || SHOPEE_URL;
	const tokopediaUrl = tokopedia || TOKOPEDIA_URL;
	const blibliUrl = blibli || BLIBLI_URL;
	return (
		<div className="flex flex-col gap-3">
			<div className="w-full aspect-square overflow-hidden relative rounded-lg">
				<Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
			</div>
			<h5 className="sm:text-2xl text-white flex-1">{title}</h5>
			<div className="bg-white p-1 max-w-fit hidden sm:block">
				<h5 className="text-brown sm:text-base text-xs">{info}</h5>
			</div>

			<div className="flex items-center gap-3">
				<a href={shopeeUrl} target="_blank">
					<Image src="/img/shopee.png" alt={shopeeUrl} width={25} height={25} />
				</a>
				<a href={tokopediaUrl} target="_blank">
					<Image
						src="/img/tokopedia.png"
						alt={tokopediaUrl}
						width={25}
						height={25}
					/>
				</a>
				<a href={blibliUrl} target="_blank">
					<Image src="/img/blibli.png" alt={blibliUrl} width={25} height={25} />
				</a>
			</div>
		</div>
	);
}
