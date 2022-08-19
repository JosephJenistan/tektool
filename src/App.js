import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, StyledEngineProvider, Toolbar } from "@mui/material";

import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import Shadows from "./pages/shadows/Shadows";
import Entities from "./pages/entities/Entities";
import Learn from "./pages/learn/Learn";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import BackToTop from "./components/backToTop/BackToTop";
import TextShadows from "./pages/shadows/textShadows/TextShadows";
import BoxShadows from "./pages/shadows/boxShadows/BoxShadows";
import EmojiEntities from "./pages/entities/emojiEntities/EmojiEntities";
import HtmlEntities from "./pages/entities/htmlEntities/HtmlEntities";
import { useState } from "react";

function App() {
	const [navActive, setNavActive] = useState("");
	const handleNavActive = () => {
		var currentDateTime = new Date();
		setNavActive(currentDateTime.getTime());
	};
	return (
		<>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<Toolbar id='back-to-top-anchor' />
				<Navbar navActive={navActive} />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/resources' element={<Resources />} />
						<Route path='/box-shadows' element={<BoxShadows />} />
						<Route path='/text-shadows' element={<TextShadows />} />
						<Route path='/html-entities' element={<HtmlEntities />} />
						<Route path='/emoji-entities' element={<EmojiEntities />} />
						<Route path='/learn' element={<Learn />} />
					</Routes>
				</main>
				<Footer handleNavActive={handleNavActive} />
				<BackToTop />
			</StyledEngineProvider>
		</>
	);
}

export default App;
