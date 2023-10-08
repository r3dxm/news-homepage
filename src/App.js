import "./App.scss";
import Logo from "./images/logo.svg";
import HeroImageDesktop from "./images/image-web-3-desktop.jpg";
import HeroImageMobile from "./images/image-web-3-mobile.jpg";
import Article from "./components/Article";
import RetroPCImage from "./images/image-retro-pcs.jpg";
import LaptopImage from "./images/image-top-laptops.jpg";
import GamingImage from "./images/image-gaming-growth.jpg";
import MenuIcon from "./images/icon-menu.svg";
import MenuCloseIcon from "./images/icon-menu-close.svg";
import { useState } from "react";

function App() {
	const [mobileMenu, setMobileMenu] = useState();
	return (
		<div className="App">
			<nav className="desktopMenu">
				<img src={Logo} alt="logo" />
				<ul>
					<li>Home</li>
					<li>New</li>
					<li>Popular</li>
					<li>Trending</li>
					<li>Categories</li>
				</ul>
			</nav>
			<nav className="mobileMenu">
				<img src={Logo} alt="logo" />
				<button onClick={() => setMobileMenu(true)}>
					<img src={MenuIcon} alt="menu-icon" />
				</button>
				{mobileMenu && <div className="overlay" />}
				{mobileMenu && (
					<span>
						<button onClick={() => setMobileMenu(false)}>
							<img src={MenuCloseIcon} alt="close-icon" />
						</button>
						<ul>
							<li>Home</li>
							<li>New</li>
							<li>Popular</li>
							<li>Trending</li>
							<li>Categories</li>
						</ul>
					</span>
				)}
			</nav>
			<section className="hero">
				<img className="desktopImage" src={HeroImageDesktop} alt="hero-image" />
				<img className="mobileImage" src={HeroImageMobile} alt="hero-image" />
				<h1>The Bright Future of Web 3.0?</h1>
				<div className="heroDescription">
					<p>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button>READ MORE</button>
				</div>
				<div className="news">
					<h2>News</h2>
					<h3>Hydrogen VS Electric Cars</h3>
					<p>Will hydrogen-fueled cars ever catch up to EVs?</p>
					<hr />
					<h3>The Downside of AI Artistry</h3>
					<p>
						What are the possible adverse effects of on-demand AI image
						generation?
					</p>
					<hr />
					<h3>Is VC Funding Drying Up?</h3>
					<p>
						Private funding by VC firms is down 50% YOY. We take a look at what
						that means.
					</p>
				</div>
			</section>
			<section className="topArticles">
				<Article
					image={RetroPCImage}
					rank="01"
					title="Reviving old PCs"
					description="What happens when old PCs are given modern upgrades?"
				/>
				<Article
					image={LaptopImage}
					rank="02"
					title="Top 10 Laptops of 2022"
					description="Our best picks for various needs and budgets."
				/>
				<Article
					image={GamingImage}
					rank="03"
					title="The Growth of Gaming"
					description="How the pandemic has sparked fresh opportunities."
				/>
			</section>
		</div>
	);
}

export default App;
