import { BLIBLI_URL, SHOPEE_URL, TOKOPEDIA_URL } from "@/lib/utils";
import Image from "next/image";

export default function Footer() {
	return (
		<footer>
			<div className="flex flex-col md:flex-row bg-green p-5 md:gap-10">
				<div className="flex items-center md:justify-around justify-between flex-1">
					<div className="lg:w-32 lg:h-20 w-20 h-10 relative">
						<Image
							src="/img/white-logo.png"
							alt="logo"
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
					<div className="flex items-center md:gap-4 gap-2">
						<div className="lg:w-6 lg:h-6 w-3 h-3 relative">
							<Image
								src="/img/location.png"
								fill
								alt="Kota Surabaya"
								style={{ objectFit: "contain" }}
							/>
						</div>

						<h6 className="lg:text-xl text-xs text-white">Kota Surabaya</h6>
					</div>
				</div>

				<div className="flex items-center md:justify-around justify-between text-white flex-1">
					<div className="flex items-center  text-white">
						<a
							className="flex items-center md:gap-4 gap-2"
							target="_blank"
							href="https://wa.me/62816500508"
						>
							<div className="lg:w-6 lg:h-6 w-3 h-3 relative">
								<Image
									src="/img/whatsapp-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt="+62 816-500-508"
								/>
							</div>

							<p className="lg:text-xl text-xs text-white">+62 816-500-508</p>
						</a>
					</div>
					<div className="flex items-center gap-5">
						<a href="https://www.instagram.com/nuthouse.id/" target="_blank">
							<div className="lg:w-6 lg:h-6 w-3 h-3 relative">
								<Image
									src="/img/instagram-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt="https://www.instagram.com/nuthouse.id/"
								/>
							</div>
						</a>
						<a href={SHOPEE_URL} target="_blank">
							<div className="lg:w-6 lg:h-6 w-3 h-3 relative">
								<Image
									src="/img/shopee-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt={SHOPEE_URL}
								/>
							</div>
						</a>
						<a href={BLIBLI_URL} target="_blank">
							<div className="lg:w-6 lg:h-6 w-3 h-3 relative">
								<Image
									src="/img/blibli-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt={BLIBLI_URL}
								/>
							</div>
						</a>
						<a href={TOKOPEDIA_URL} target="_blank">
							<div className="lg:w-20 lg:h-6 w-10 h-3 relative">
								<Image
									src="/img/tokopedia-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt={TOKOPEDIA_URL}
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
