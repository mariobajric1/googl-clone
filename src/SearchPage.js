import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Response from "./response";

function SearchPage() {
	const [{ term = "tesla" }, dispatch] = useStateValue();

	// LIVE API CALL
	const { data } = useGoogleSearch(term);

	//   const data = Response;

	// http://developers.google.com/custom-search/v1/using_rest
	// https://cse.google.com/cse/create/new

	console.log(data);

	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<Link to="/">
					<img
						className="searchPage__logo"
						src="https://cdn.vox-cdn.com/thumbor/HqBAiwc9uD1sHBw2Uvac03pCXKE=/0x0:2012x1341/1400x1050/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
					/>
				</Link>
				<div className="searchPage__headerBody">
					<Search hideButtons />
					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="searchPage__option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="searchPage__option">
								<ImageIcon />
								<Link to="/images">Images</Link>
							</div>
							<div className="searchPage__option">
								<LocalOfferIcon />
								<Link to="/shopping">Shopping</Link>
							</div>
							<div className="searchPage__option">
								<RoomIcon />
								<Link to="/maps">Maps</Link>
							</div>
							<div className="searchPage__option">
								<MoreVertIcon />
								<Link to="/more">More</Link>
							</div>
						</div>

						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="searchPage__option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{true && (
				<div className="searchPage__results">
					<p className="searchPage__resultCount">
						About {data?.searchInformation.formattedTotalResults} results (
						{data?.searchInformation.formattedSearchTime}
						seconds) for {term}
					</p>

					{data?.items.map((item) => (
						<div className="searchPage__result">
							<a href={item.link}>
								{item.pagemap?.cse_image?.length > 0 &&
									item.page?.cse_image[0]?.src && (
										<img
											className="searchPage__resultImage"
											src={
												item.pagemap?.cse_image?.length > 0 &&
												item.pagemap?.cse_image[0]?.src
											}
											alt=""
										></img>
									)}
								{item.displayLink}
							</a>
							<a className="searchPage__resultTitle" href={item.link}>
								<h2>{item.title}</h2>
							</a>
							<p className="searchPage__resultSnippet">{item.snippet}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchPage;
