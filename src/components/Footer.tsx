import Image from "next/image";

export default function Footer() {
	return (
		<footer>
			<div className="flex items-center justify-between bg-green h-24 md:h-48 pr-8 md:pr-12 py-5 gap-5">
				<div className="w-32 md:w-64 md:h-40 h-20 relative">
					<Image
						src="/img/white-logo.png"
						alt="logo"
						fill
						style={{ objectFit: "contain" }}
					/>
				</div>

				<div className="flex items-end gap-3 md:gap-5 text-white flex-col flex-1 justify-end">
					<div className="flex items-center md:gap-10 gap-3 text-white">
						<div className="flex items-center md:gap-4 gap-2">
							<div className="md:w-6 md:h-6 w-3 h-3 relative">
								<Image
									src="/img/location.png"
									fill
									alt="Kota Surabaya"
									style={{ objectFit: "contain" }}
								/>
							</div>

							<h6 className="md:text-2xl text-xs text-white">Kota Surabaya</h6>
						</div>
						<a
							className="flex items-center md:gap-4 gap-2"
							target="_blank"
							href="https://wa.me/62816500508"
						>
							<div className="md:w-6 md:h-6 w-3 h-3 relative">
								<Image
									src="/img/whatsapp-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt="+62 816-500-508"
								/>
							</div>

							<p className="md:text-2xl text-xs text-white">+62 816-500-508</p>
						</a>
					</div>
					<div className="flex items-center gap-5">
						<a href="https://www.instagram.com/nuthouse.id/" target="_blank">
							<div className="md:w-6 md:h-6 w-3 h-3 relative">
								<Image
									src="/img/instagram-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt="https://www.instagram.com/nuthouse.id/"
								/>
							</div>
						</a>
						<a href="https://shopee.co.id/nuthouse" target="_blank">
							<div className="md:w-6 md:h-6 w-3 h-3 relative">
								<Image
									src="/img/shopee-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt="https://shopee.co.id/nuthouse"
								/>
							</div>
						</a>
						<a
							href="https://www.blibli.com/merchant/the-nut-house-official-store/THN-70062"
							target="_blank"
						>
							<div className="md:w-6 md:h-6 w-3 h-3 relative">
								<Image
									src="/img/blibli-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt="https://www.blibli.com/merchant/the-nut-house-official-store/THN-70062"
								/>
							</div>
						</a>
						<a href="https://www.tokopedia.com/nuthouse" target="_blank">
							<div className="md:w-20 md:h-6 w-10 h-3 relative">
								<Image
									src="/img/tokopedia-white.png"
									fill
									style={{ objectFit: "contain" }}
									alt="https://www.tokopedia.com/nuthouse"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
