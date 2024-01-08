import About from "@/components/About";
import Footer from "@/components/Footer";
import { NavMobile } from "@/components/NavMobile";
import Navbar from "@/components/Navbar";
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import { getCategories, getProducts, getThumbnail } from "@/queries";
import CategoryAndSearch from "@/components/CategoryAndSearch";

export default async function Home() {
	const categories = await getCategories();
	const [products, totalProducts] = await getProducts("All", "");
	const thumbnail = await getThumbnail();

	return (
		<>
			<Navbar />
			<NavMobile />
			<About thumbnail={thumbnail} />
			<CategoryAndSearch
				categories={categories}
				products={products}
				totalProducts={totalProducts}
			/>
			<Footer />
		</>
	);
}
