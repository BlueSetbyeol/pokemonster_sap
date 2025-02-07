"use client";

import { links } from "@/app/lib/utils";
import Link from "next/link";

export default function NavBar() {
	return (
		<section className="flex flex-col justify-center items-start">
			<img
				src="https://cdn.pixabay.com/photo/2016/12/16/02/34/pokemon-1910474_1280.png"
				alt="SAP logo"
				className="w-[20vh] p-5"
			/>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className="rounded-xl bg-white text-sm/7 text-gray-700 flex items-center justify-start h-[10vh] ml-5 mt-5"
					>
						<img
							src={link.icon}
							alt="icon"
							className="size-[30px] rounded-full"
						/>
						<p className="hidden ml-5 md:block">{link.name}</p>
					</Link>
				);
			})}
		</section>
	);
}
