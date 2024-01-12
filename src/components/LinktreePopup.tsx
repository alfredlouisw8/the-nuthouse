import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { linktree } from "@/lib/utils";

export default function LinktreePopup({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent className="rounded-lg p-10">
				<div className="flex flex-col gap-6">
					{linktree.map((item) => (
						<a
							href={item.link}
							target="_blank"
							key={item.title}
							className="w-full"
						>
							<Button className="rounded-full bg-black text-white py-6 w-full">
								{item.title}
							</Button>
						</a>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
}
