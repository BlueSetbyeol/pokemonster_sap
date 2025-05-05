"use client";

export default function contact() {
	return (
		<section className="w-[80vw] h-[81vh] ml-2 space-y-6 flex flex-col justify-around p-2 overflow-scroll md:w-[85vw] md:h-[80vh] md:ml-0">
			<div>
				<h1 className="text-4xl">Any question ?</h1>
				<h2 className="text-2xl">SAP will be happy to help you</h2>
			</div>
			<article className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-5 md:px-20 md:py-10 overflow-scroll ">
				<h2 className="text-red-700 italic">Where can you find a pokemon ?</h2>
				<p className="text-black">
					In your back yard for one. But also do take a look around, take a deep
					breath and enjoy nature around you. They are there in every corner.
				</p>
				<p className="text-black">
					Just be careful not to hurt them. And if you need more information, go
					to our "All About" page.
				</p>
			</article>
			<article className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-5 md:px-20 md:py-10 overflow-scroll ">
				<h2 className="text-red-700 italic">
					What to do if you found a hurt Pokemon ?
				</h2>
				<p className="text-black">
					If you want to keep it, we do have contact with a specialized Poke
					center that will help you care for these little monsters.
				</p>
				<p className="text-black">
					If not, we will be happy to care for them and find them a good home
					later on. Do go and check out our "Selling" page.
				</p>
			</article>
		</section>
	);
}
