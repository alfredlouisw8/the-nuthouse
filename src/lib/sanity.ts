import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageSource } from "@/types";

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2022-03-25",
	useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: ImageSource) =>
	imageUrlBuilder(sanityClient).image(source);
