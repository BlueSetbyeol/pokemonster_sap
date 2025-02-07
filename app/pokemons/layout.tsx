export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center w-[85vw] h-[80vh] w-[85vw] h-[80vh] overflow">
			{children}
		</div>
	);
}
