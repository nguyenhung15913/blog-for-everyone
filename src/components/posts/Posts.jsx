import "./Posts.css";
import Post from "../post/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import MyPost from "../post/MyPost";
function Posts({ posts }) {
	const [myPosts, setMyPosts] = useState([]);
	const fetchMyPost = async () => {
		try {
			const res = await axios.get(
				"https://dev.to/api/articles?username=nguyenhung15913"
			);
			setMyPosts(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMyPost();
	}, []);
	return (
		<div className="posts-page">
			<div className="posts">
				{posts.length > 0 ? (
					posts.map((post) => <Post post={post} />)
				) : (
					<div>No posts yet</div>
				)}
			</div>
			<h1>My Blog Posts from Dev.to</h1>
			<div className="posts">
				{myPosts.map((post) => (
					<MyPost post={post} />
				))}
			</div>
		</div>
	);
}

export default Posts;
