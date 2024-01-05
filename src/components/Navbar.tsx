import Image from "next/image";

export default function Navbar() {
	return (
		<header className="items-center z-10 w-full hidden md:flex bg-green px-10 py-3">
			<div className="relative w-40 h-20">
				<Image
					alt="logo"
					src="/img/white-logo.png"
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>

			<div className="flex items-center justify-end gap-20 flex-1 h-16 xl:text-xl md:text-xl text-white">
				<a href="#product">CATEGORY</a>
				<a href="https://wa.me/62816500508">CONTACT US</a>
			</div>
		</header>
	);
}
