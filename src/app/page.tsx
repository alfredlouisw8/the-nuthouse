import About from "@/components/About";
import Footer from "@/components/Footer";
import { NavMobile } from "@/components/NavMobile";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Search from "@/components/Search";
import { getCategories, getProducts, getThumbnail } from "@/queries";

export default async function Home() {
	const categories = await getCategories();
	const [products, totalPages] = await getProducts("All", "");
	const thumbnail = await getThumbnail();

	return (
		<>
			<Navbar />
			<NavMobile />
			<About thumbnail={thumbnail} />
			<Products categories={categories} />
			<Search
				categories={categories}
				products={products}
				totalPages={totalPages}
			/>
			<Footer />
		</>
	);
}
