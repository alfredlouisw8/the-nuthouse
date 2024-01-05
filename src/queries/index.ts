import { sanityClient } from "@/lib/sanity";
import { PRODUCTS_PER_PAGE } from "@/lib/utils";
import { CategoryType, ProductType, ThumbnailType } from "@/types";

export const getCategories = (): Promise<CategoryType[]> => {
	const categoriesQuery = `*[_type == "category"] | order(order asc) {
    _id,
    title,
    image
  }`;

	return sanityClient.fetch(categoriesQuery);
};

export const getThumbnail = (): Promise<ThumbnailType> => {
	const thumbnailQuery = `*[_type == "thumbnail"][0] {
    title,
		description,
    image1,
		image2,
		image3
  }`;

	return sanityClient.fetch(thumbnailQuery);
};

export const getProducts = async (
	category: string,
	title: string,
	lastId?: string
): Promise<[ProductType[], number]> => {
	const productsQuery = `*[_type == "product" && title match "*${
		title ?? ""
	}*" ${
		lastId ? `&& _id > "${lastId}"` : ""
	} && category._ref in *[_type=="category" ${
		category !== "All" ? `&& title=="${category}"` : ""
	}]._id] | order(_id) [0...${PRODUCTS_PER_PAGE}]{
    _id,
      title,
      image,
			info,
			brand,
      shopee,
      tokopedia,
      blibli
  }`;

	const productsCountQuery = `count(*[_type == "product" && title match "*${
		title ?? ""
	}*"  && category._ref in *[_type=="category" ${
		category !== "All" ? `&& title=="${category}"` : ""
	}]._id] | order(_id))`;

	const products = await sanityClient.fetch(productsQuery);
	const productsCount = await sanityClient.fetch(productsCountQuery);

	return [products, productsCount];
};
