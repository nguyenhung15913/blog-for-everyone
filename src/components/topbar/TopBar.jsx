import "./TopBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
function TopBar() {
	const { user, dispatch } = useContext(Context);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	const PF = "https://blog-for-everyone-api.herokuapp.com/images/";

	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook-square"></i>
				<i className="topIcon fa-brands fa-twitter"></i>
				<i className="topIcon fa-brands fa-pinterest"></i>
				<i className="topIcon fa-brands fa-instagram"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/about">
							About
						</Link>
					</li>
					<li className="topListItem">
						<a className="link" href="mailto:nguyenhung15913@gmail.com">
							Contact
						</a>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							Write
						</Link>
					</li>
					{user ? (
						<li className="topListItem" onClick={handleLogout}>
							<Link className="link" to="/">
								Logout
							</Link>
						</li>
					) : null}
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link to="/setting">
						<img className="topImg" src={PF + user.profilePic} alt="" />
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								Login
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								Register
							</Link>
						</li>
					</ul>
				)}

				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
}

export default TopBar;
