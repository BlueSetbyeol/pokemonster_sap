export default async function Home() {
	return (
		<section className="w-[85vw] h-[80vh] space-y-6 flex flex-col p-1">
			<h1 className="flex justify-center">
				Welcome to our Safe Association for Pokemon
			</h1>
			<div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
				<h2>
					Where pokemons can be bought and sold, legally and in all concerns for
					their safety and happiness !
				</h2>

				<p>
					Pokemons are usually treated as objects and have less than ideal
					conditions with the reducted space they are confined in.
				</p>

				<p>
					At S.A.P. we make it our priority that everyone can sell and buy
					pokemons that are in good health and that can answer their needs :
					whether it is company or fighters to continue on their way to Glory.
					But first, let us guide you through a few guide lines.
				</p>
			</div>
		</section>
	);
}
