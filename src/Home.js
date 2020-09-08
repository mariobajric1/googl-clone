import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
	return (
		<div className="home">
			<div className="home__header">
				<div className="home__headerLeft">
					<Link to="/about">about</Link>
					<Link to="/store">store</Link>
				</div>
				<div className="home__headerRight">
					<a href="https://mail.google.com/">gmail</a>
					<Link to="/images">images</Link>
					<AppsIcon />
					<Avatar />
				</div>
			</div>
			<div className="home__body">
				<img src="https://content.fortune.com/wp-content/uploads/2017/01/google.jpeg"></img>
				<div className="home__inputContainer">
					<Search />
				</div>
			</div>
		</div>
	);
}

export default Home;
