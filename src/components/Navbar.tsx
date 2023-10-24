import Image from "next/image";

export default function Navbar() {
	return (
		<header>
			<div className="flex items-center justify-between relative mx-auto px-16 bg-brown">
				<a href="#about">
					<h1 className="sm:block hidden md:text-4xl text-2xl text-white">
						ABOUT US
					</h1>
				</a>
				<Image
					src="/img/logo-mobile.svg"
					alt="The Nuthouse"
					width={360}
					height={360}
					className="absolute top-0 left-0 right-0 mx-auto sm:hidden block z-10 "
				/>
				<Image
					src="/img/logo-mobile.svg"
					alt="The Nuthouse"
					width={235}
					height={235}
					className="sm:block hidden"
				/>
				<a href="#product">
					<h1 className="sm:block hidden md:text-4xl text-2xl text-white ">
						PRODUCTS
					</h1>
				</a>
			</div>
		</header>
	);
}
