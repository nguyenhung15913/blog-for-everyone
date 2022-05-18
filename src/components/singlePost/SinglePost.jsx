import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../../context/Context";

function SinglePost() {
	const { user } = useContext(Context);
	const location = useLocation();
	const postId = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);
	const PF = "https://blog-for-everyone-api.herokuapp.com/images/";

	const handleUpdate = async () => {
		try {
			await axios.put("/posts/" + postId, {
				username: user.username,
				title,
				desc
			});
			setUpdateMode(false);
		} catch (error) {}
	};

	const handleClick = async () => {
		try {
			await axios.delete("/posts/" + postId, { username: user.username });
			window.location.replace("/");
		} catch (error) {}
	};

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get("/posts/" + postId);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [postId]);

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img className="singlePostImg" src={PF + post.photo} alt="" />
				)}{" "}
				{updateMode ? (
					<input
						type="text"
						value={title}
						className="singlePostTitleInput"
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="singlePostTitle">
						{title}
						{post.username === user?.username && (
							<div className="singlePostEdit">
								<i
									className="singlePostIcon fa-solid fa-pen-to-square"
									onClick={() => setUpdateMode(true)}
								></i>
								<i
									className="singlePostIcon fa-solid fa-trash-can"
									onClick={handleClick}
								></i>
							</div>
						)}
					</h1>
				)}
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author:
						<Link to={`/?user=${post.username}`} className="link">
							<b>{post.username}</b>
						</Link>
					</span>
					<span className="singlePostDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				{updateMode ? (
					<textarea
						className="singlePostDescInput"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className="singlePostDesc">{desc}</p>
				)}
				{updateMode && (
					<button className="singPostButton" onClick={handleUpdate}>
						Update
					</button>
				)}
			</div>
		</div>
	);
}

export default SinglePost;
