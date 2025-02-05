export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen flex-row md:flex-col md:overflow">
			{children}
		</div>
	);
}
