import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await axios.post(
				"https://blog-for-everyone-api.herokuapp.com/api/auth/register",
				{
					username,
					email,
					password
				}
			);
			res.data && window.location.replace("/login");
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="register">
			<span className="loginTitle">Register</span>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className="loginInput"
					type="text"
					placeholder="Enter your username..."
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<label>Email</label>
				<input
					className="loginInput"
					type="text"
					placeholder="Enter your email..."
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label>Password</label>
				<input
					className="loginInput"
					type="password"
					placeholder="Enter your password..."
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
			<button className="registerLoginButton">
				<Link
					className="link"
					to="https://blog-for-everyone-api.herokuapp.com/api/login"
				>
					Login
				</Link>
			</button>
			{error && (
				<span style={{ color: "red", marginTop: "15px" }}>
					Something went wrong
				</span>
			)}
		</div>
	);
}

export default Register;
