import axios from "axios";
import "./SideBar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
	const [cat, setCats] = useState([]);
	useEffect(() => {
		const getCats = async () => {
			try {
				const res = await axios.get("/categories");
				setCats(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getCats();
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">About Me</span>
				<img
					src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit
					veniam repudiandae assumenda dolorem
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Categories</span>
				{/* <ul className="sidebarList">
					{cat.length > 0 ? (
						cat.map((c) => (
							<Link to={`/?cat=${c.name}`} className="link">
								<li className="sidebarListItem">{c.name}</li>
							</Link>
						))
					) : (
						<span>No Categories yet</span>
					)}
				</ul> */}
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Follow Us</span>
			</div>
			<div className="sidebarSocial">
				<i className="sidebarIcon fa-brands fa-facebook-square"></i>
				<i className="sidebarIcon fa-brands fa-twitter"></i>
				<i className="sidebarIcon fa-brands fa-pinterest"></i>
				<i className="sidebarIcon fa-brands fa-instagram"></i>
			</div>
		</div>
	);
}

export default SideBar;
