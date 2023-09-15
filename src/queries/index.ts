import { sanityClient } from "@/lib/sanity";
import { CategoryType, ProductType } from "@/types";
import { PRODUCTS_PER_PAGE } from "@/utils/variables";

export const getCategories = (): Promise<CategoryType[]> => {
	const categoriesQuery = `*[_type == "category"]{
    _id,
    title,
    image
  }`;

	return sanityClient.fetch(categoriesQuery);
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
      shopee,
      tokopedia,
      blibli
  }`;

	const productsCountQuery = `count(*[_type == "product" && title match "*${
		title ?? ""
	}*"  && category._ref in *[_type=="category" ${
		category !== "All" ? `&& title=="${category}"` : ""
	}]._id] | order(_id) {
    _id,
      title,
      image,
      shopee,
      tokopedia,
      blibli
  })`;

	const products = await sanityClient.fetch(productsQuery);
	const productsCount = await sanityClient.fetch(productsCountQuery);

	return [products, productsCount];
};
