import Image from "next/image";

export default function Navbar() {
	return (
		<header className="absolute top-4 items-center z-10 w-full hidden md:flex">
			<div className="w-[20vw] relative aspect-[2/1]">
				<Image alt="logo" src="/img/logo-nuthouse.png" fill />
			</div>

			<div className="bg-brown/60 flex items-center justify-end gap-20 flex-1 h-[5vw] xl:text-3xl lg:text-2xl md:text-xl pr-20 text-white">
				<a href="#about">ABOUT US</a>
				<a href="#product">PRODUCTS</a>
				<a href="https://wa.me/62816500508">CONTACT US</a>
			</div>
		</header>
	);
}
