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
	return (
		<section className="relative overflow-x-hidden" id="about">
			<Slider {...settings}>
				<div className={`w-full h-[700px] sm:h-[900px] relative`}>
					<Image
						src={urlFor(thumbnail.image1).url()}
						fill
						alt="Image1"
						objectFit="cover"
					/>
				</div>
				<div className={`w-full h-[700px] sm:h-[900px] relative`}>
					<Image
						src={urlFor(thumbnail.image2).url()}
						fill
						alt="Image2"
						objectFit="cover"
					/>
				</div>
				<div className={`w-full h-[700px] sm:h-[900px] relative`}>
					<Image
						src={urlFor(thumbnail.image3).url()}
						fill
						alt="Image3"
						objectFit="cover"
					/>
				</div>
			</Slider>
			<div className="absolute bottom-60 sm:bottom-24 left-16">
				<h1 className="mb-5 text-xl sm:text-4xl font-bold text-white">
					{thumbnail.title}
				</h1>
				<p className="text-white w-56 sm:w-[450px] sm:text-2xl">
					{thumbnail.description}
				</p>
			</div>
		</section>
	);
}
