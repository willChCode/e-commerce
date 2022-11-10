import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<title>e-commerce</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="TODO" />
				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="TODO" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="TODO" />
				<meta property="og:description" content="TODO" />
				<meta property="og:image" content="TODO" />

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="TODO" />
				<meta property="twitter:url" content="TODO" />
				<meta name="twitter:title" content="TODO" />
				<meta name="twitter:description" content="TODO" />
				<meta name="twitter:image" content="TODO" />
			</Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}