"use client";
import { useClickAway } from "react-use";
import { useCallback, useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";

export const NavMobile = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const ref = useRef(null);

	useClickAway(ref, () => setOpen(false));

	const handleOpen = useCallback((open: boolean) => {
		setOpen(open);
		document.body.style.overflow = open ? "hidden" : "auto";
	}, []);

	return (
		<>
			<div
				ref={ref}
				className="md:hidden absolute z-10 flex items-center justify-between w-full pt-5"
			>
				<div className="w-[150px] relative aspect-[2/1]">
					<Image alt="logo" src="/img/logo-nuthouse.png" fill />
				</div>
				<div className="relative z-30 pr-3">
					<Hamburger
						toggled={isOpen}
						size={30}
						// @ts-ignore
						toggle={handleOpen}
						color="white"
					/>
				</div>
				{isOpen && (
					<div className="fixed bg-brown/60 w-screen h-screen z-20 top-0">
						<div className="flex flex-col gap-10 items-end relative top-28 pr-8">
							<a
								href="#about"
								onClick={() => handleOpen(false)}
								className="text-white"
							>
								ABOUT US
							</a>
							<a
								href="#product"
								onClick={() => handleOpen(false)}
								className="text-white"
							>
								PRODUCTS
							</a>
							<a
								href="https://wa.me/62816500508"
								onClick={() => handleOpen(false)}
								target="_blank"
								className="text-white"
							>
								CONTACT US
							</a>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
