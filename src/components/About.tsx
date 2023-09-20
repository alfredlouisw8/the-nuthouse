"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
	const settings = {
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: false,
	};
	return (
		<section className="relative overflow-x-hidden">
			<Slider {...settings}>
				<div className="w-full bg-[url('/img/about-bg.png')] h-[700px] sm:h-[900px] bg-no-repeat bg-cover bg-bottom"></div>
				<div className="w-full bg-[url('/img/about-bg.png')] h-[700px] sm:h-[900px] bg-no-repeat bg-cover bg-bottom"></div>
				<div className="w-full bg-[url('/img/about-bg.png')] h-[700px] sm:h-[900px] bg-no-repeat bg-cover bg-bottom"></div>
			</Slider>
			<div className="absolute bottom-60 sm:bottom-24 left-16">
				<h1 className="mb-5 text-xl sm:text-4xl font-bold text-white">
					ABOUT US
				</h1>
				<p className="text-white w-56 sm:w-[450px] sm:text-2xl">
					The Nuthouse, which operates in the food supplier industry in
					Surabaya, presents various kitchen needs with various choices such as
					categories, quantities or variants. For orders and further questions,
					kindly contact us.
				</p>
			</div>
		</section>
	);
}
