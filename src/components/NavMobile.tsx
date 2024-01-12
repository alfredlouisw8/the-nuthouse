"use client";
import { useClickAway } from "react-use";
import { useCallback, useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import LinktreePopup from "./LinktreePopup";

export const NavMobile = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleOpen = useCallback((open: boolean) => {
		setOpen(open);
		document.body.style.overflow = open ? "hidden" : "auto";
	}, []);

	return (
		<>
			<div className="md:hidden z-10 flex items-center justify-between w-full bg-green p-3 h-[75px]">
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
					<>
						<div
							className="fixed bg-black/60 w-[calc(100vw+10px)] h-screen z-30 top-0 ml-[-12px]"
							onClick={() => handleOpen(false)}
						/>
						<div className="flex flex-col gap-10 items-end top-28 pr-8 z-40 fixed right-0">
							<a
								href="#product"
								onClick={() => handleOpen(false)}
								className="text-white"
							>
								CATEGORY
							</a>
							<LinktreePopup>
								<p className="text-white">CONTACT US</p>
							</LinktreePopup>
						</div>
					</>
				)}
			</div>
		</>
	);
};
