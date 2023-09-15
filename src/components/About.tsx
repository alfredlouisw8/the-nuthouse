export default function About() {
	return (
		<section>
			<div className="w-full bg-[url('/img/about-bg.png')] h-[700px] sm:h-[900px] bg-no-repeat bg-cover bg-bottom p-10 flex items-end">
				<div className="relative bottom-60 sm:bottom-24">
					<h1 className="mb-5 text-xl sm:text-4xl font-bold text-white">
						ABOUT US
					</h1>
					<p className="text-white w-56 sm:w-[450px] sm:text-2xl">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
					</p>
				</div>
			</div>
		</section>
	);
}
