import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Search from "@/components/Search";
import { getCategories, getProducts } from "@/queries";

export default async function Home() {
	const categories = await getCategories();
	const [products, totalPages] = await getProducts("All", "");

	return (
		<>
			<Navbar />
			<About />
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
