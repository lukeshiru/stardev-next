import Head from "next/head";
import { Link } from "../components/Link/Link";
import styles from "../styles/Home.module.css";

export default function Home() {
	const links = [
		{
			title: "Github",
			url: "https://github.com/stardev"
		},
		{
			title: "Twitter",
			url: "https://twitter.com/stardev"
		},
		{
			title: "Instagram",
			url: "https://instagram.com/stardev"
		},
		{
			title: "Mail",
			url: "mailto:hello@stardev.com"
		}
	];

	return (
		<div className={styles.Home}>
			<Head>
				<meta
					name="description"
					content="Juan Perez is a Web Developer from Argentina, sarasa!"
				/>
				<meta
					name="keywords"
					content="stardev,juan perez,programmer,webdev,software developer,"
				/>
				<title>@stardev - Juan Perez</title>
			</Head>

			<img
				className={styles.image}
				src="./logo.svg"
				alt="@stardev logo"
			/>
			<h1 className={styles.title}>@stardev</h1>
			<nav>
				<ul className={styles.list}>
					{links.map(link => (
						<li className={styles.listItem}>
							<Link aside className={styles.link} href={link.url}>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
