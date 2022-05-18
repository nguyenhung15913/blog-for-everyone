import "./Setting.css";
import Sidebar from "../../components/sidebar/SideBar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
function Setting() {
	const { user, dispatch } = useContext(Context);
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const PF = "https://blog-for-everyone-api.herokuapp.com/images/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			try {
				await axios.post("/upload", data);
			} catch (error) {
				console.log(error);
			}
		}
		try {
			const res = await axios.put("/users/" + user._id, updatedUser);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (error) {
			console.log(error);
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};
	return (
		<div className="setting">
			<div className="settingWrapper">
				<div className="settingTitle">
					<span className="settingUpdateTitle">Update your account</span>
					<span className="settingDeleteTitle">Delete your account</span>
				</div>
				<form className="settingForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingPP">
						<img
							src={file ? URL.createObjectURL(file) : PF + user.profilePic}
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingPPIcon fa-solid fa-circle-user"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={user.username}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<label>Email</label>
					<input
						type="email"
						placeholder={user.email}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button className="settingSubmit" type="submit">
						Update
					</button>
					{success && (
						<span
							style={{ color: "green", textAlign: "center", marginTop: "15px" }}
						>
							Updated Successfully
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
}

export default Setting;
