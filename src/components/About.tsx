"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThumbnailType } from "@/types";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

type Props = {
	thumbnail: ThumbnailType;
};

const aboutImages = [];

export default function About({ thumbnail }: Props) {
	const settings = {
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		arrows: false,
	};

	const thumbnailImages = [
		urlFor(thumbnail.image1).url(),
		urlFor(thumbnail.image2).url(),
		urlFor(thumbnail.image3).url(),
	];
	return (
		<section className="relative overflow-x-hidden" id="about">
			<Slider {...settings}>
				{thumbnailImages.map((image, i) => (
					<div className={`w-full h-screen relative`} key={i}>
						<Image
							src={image}
							fill
							alt="Image1"
							style={{ objectFit: "cover" }}
						/>
					</div>
				))}
			</Slider>
			<div className="absolute top-24 md:top-auto md:bottom-24 left-1/2 translate-x-[-50%] md:translate-x-0 z-20 w-4/5">
				<h1 className="mb-5 text-xl sm:text-4xl font-bold text-white">
					{thumbnail.title}
				</h1>
				<p className="text-white sm:w-[450px] sm:text-xl mb-5">
					{thumbnail.description}
				</p>
				<a href="#search" className="rounded-full py-3 px-6 bg-white">
					Search
				</a>
			</div>
			<div className="w-full h-[calc(100%-10px)] absolute bg-black/50 z-10 top-0"></div>
		</section>
	);
}
