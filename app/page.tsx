import Link from "next/link";

export default async function Home() {
	return (
		<section className="w-[80vw] h-[81vh] ml-2 space-y-6 flex flex-col justify-around p-2 overflow-scroll md:w-[85vw] md:ml-0">
			<div>
				<h1 className="text-4xl">Welcome to</h1>
				<h2 className="text-2xl">Safe Association for Pokemon</h2>
			</div>
			<article className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-5 md:px-20 md:py-10">
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
			</article>
			<article className="flex flex-row items-end gap-6 h-[20vh] px-6 py-2 md:px-20 md:justify-center">
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
