import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex flex-wrap justify-content-evenly  m-2">

					<div className="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
					<div className="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
					<div className="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
					<div className="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
			
		</div>
	);
};

export default Home;
