import Link from "next/link";

export default async function Home() {
	return (
		<section className="w-[80vw] h-[81vh] ml-2 space-y-6 flex flex-col justify-around p-2 overflow-scroll md:w-[85vw] md:h-[80vh] md:ml-0">
			<div>
				<h1 className="text-4xl">Welcome to</h1>
				<h2 className="text-2xl">Safe Association for Pokemon</h2>
			</div>
			<article className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-5 md:px-20 md:py-10 overflow-scroll ">
				<h2 className="text-red-700 italic">
					Where pokemons can be bought and sold, legally and in all concerns for
					their safety and happiness !
				</h2>
				<p className="text-black">
					Pokemons are usually treated as objects and have less than ideal
					conditions with the reducted space they are confined in.
				</p>
				<p className="text-black">
					At S.A.P. we make it our priority that everyone can sell and buy
					pokemons that are in good health and that can answer their needs :
					whether it is company or fighters to continue on their way to Glory.
					But first, let us guide you through a few guide lines.
				</p>
				<ul className="text-black">
					<li>
						✩ Pokemons are to be treated with respect, they are not mindless
						beast.
					</li>
					<li>
						✩ Seek help before torturing a pokemon, we won't judge you for being
						unable to care for another being.
					</li>
					<li>
						✩ We will judge you and report you if your pokemon has been abused.
					</li>
					<li>
						✩ To report sigthing of a pokemon in a difficult position, please :
					</li>
					<Link
						key="selling"
						href="/pokemons/contact"
						className="text-red-700 text-center w-[100%]"
					>
						contact us
					</Link>
				</ul>
			</article>
			<article className="flex flex-row items-end gap-6 h-[20vh] md:h-[10vh] px-6 py-2 md:px-20 md:my-0 md:justify-center">
				<Link
					key="selling"
					className="border-red-400 border-2 rounded-md mb-5 p-2 hover:bg-red-700 hover:border-white max-w-[30vw]"
					href="/pokemons/selling"
				>
					Sell your pokemon
				</Link>
				<Link
					key="buying"
					className="border-red-400 border-2 rounded-md mb-5 p-2 hover:bg-red-700 hover:border-white max-w-[30vw]"
					href="/pokemons/buying"
				>
					Buy a new pokemon
				</Link>
			</article>
		</section>
	);
}
