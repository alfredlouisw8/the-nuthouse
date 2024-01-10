"use client";
import { useClickAway } from "react-use";
import { useCallback, useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export const NavMobile = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const ref = useRef(null);

	useClickAway(ref, () => setOpen(false));

	const handleOpen = useCallback((open: boolean) => {
		setOpen(open);
		document.body.style.overflow = open ? "hidden" : "auto";
	}, []);

	const linktree = [
		{
			title: "Whatsapp",
			link: "https://wa.me/+62816500508",
		},
		{
			title: "Tokopedia",
			link: "https://tokopedia.link/jA1XuyLQBhb",
		},
		{
			title: "Shopee",
			link: "https://shopee.co.id/nuthouse?smtt=0.0.9",
		},
		{
			title: "BliBli",
			link: "https://blibli.app.link/o76vBUvb1Ab",
		},
	];

	return (
		<>
			<div
				ref={ref}
				className="md:hidden z-10 flex items-center justify-between w-full bg-green p-3"
			>
				<div className="w-20 relative h-10">
					<Image alt="logo" src="/img/white-logo.png" fill />
				</div>
				<div className="relative z-40">
					<Hamburger
						toggled={isOpen}
						size={20}
						// @ts-ignore
						toggle={handleOpen}
						color="white"
					/>
				</div>
				{isOpen && (
					<div className="fixed bg-black/60 w-screen h-screen z-30 top-0 ml-[-12px]">
						<div className="flex flex-col gap-10 items-end relative top-28 pr-8">
							<a
								href="#product"
								onClick={() => handleOpen(false)}
								className="text-white"
							>
								CATEGORY
							</a>
							<Dialog>
								<DialogTrigger>
									<p className="text-white">CONTACT US</p>
								</DialogTrigger>
								<DialogContent className="rounded-lg p-10">
									<div className="flex flex-col gap-6">
										{linktree.map((item) => (
											<Button
												className="rounded-full bg-black text-white py-6"
												key={item.title}
											>
												<a href={item.link} target="_blank">
													{item.title}
												</a>
											</Button>
										))}
									</div>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
