import Image from "next/image";

export default function Footer() {
	return (
		<footer>
			<div className="flex items-center justify-between bg-green h-24 sm:h-48">
				{/* <Image src="/next.svg" alt="logo" width={100} height={100} /> */}

				{/* <div className="flex items-start gap-5 text-black">
					<div className="flex flex-col items-end gap-3">
						<h6 className="font-bold">Our Store</h6>
						<h6>Kota Surabaya</h6>
					</div>
					<div className="flex flex-col items-end gap-3">
						<h6 className="font-bold">Contact Us</h6>
						<h6>+628 1650 0508</h6>
						<h6>@nuthouse.id</h6>
					</div>
				</div> */}
			</div>
		</footer>
	);
}
