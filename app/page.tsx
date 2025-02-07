import Link from "next/link";

export default async function Home() {
	return (
		<section className="w-[85vw] h-[80vh] space-y-6 flex flex-col justify-around p-1">
			<h1 className="flex justify-center text-4xl font-[family-name:var(--font-wallpoet)]">
				Welcome to our Safe Association for Pokemon
			</h1>
			<article className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
				<h2 className="text-red-700 text-lg italic font-[family-name:var(--font-mulish)]">
					Where pokemons can be bought and sold, legally and in all concerns for
					their safety and happiness !
				</h2>

				<p className="text-black font-[family-name:var(--font-mulish)]">
					Pokemons are usually treated as objects and have less than ideal
					conditions with the reducted space they are confined in.
				</p>

				<p className="text-black font-[family-name:var(--font-mulish)]">
					At S.A.P. we make it our priority that everyone can sell and buy
					pokemons that are in good health and that can answer their needs :
					whether it is company or fighters to continue on their way to Glory.
					But first, let us guide you through a few guide lines.
				</p>
			</article>
			<article className="flex flex-row justify-center items-end gap-6 h-[20vh]">
				<Link
					key="selling"
					className="rounded-xl bg-red-700 text-sm/7 text-white flex items-center justify-center h-[5vh] w-[12vw] ml-5 mt-5"
					href="/pokemons/selling"
				>
					Sell your pokemon
				</Link>
				<Link
					key="buying"
					className="rounded-xl bg-red-700 text-sm/7 text-white flex items-center justify-center h-[5vh] w-[12vw] ml-5 mt-5"
					href="/pokemons/buying"
				>
					Buy a new pokemon
				</Link>
			</article>
		</section>
	);
}
