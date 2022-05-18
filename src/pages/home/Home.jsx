import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
	const { search } = useLocation();

	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		try {
			const res = await axios.get(
				"https://blog-for-everyone-api.herokuapp.com/api/posts" + search
			);

			setPosts(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
	});

	return (
		<>
			<Header />
			<div className="home">
				{posts ? <Posts posts={posts} /> : null}
				<SideBar />
			</div>
		</>
	);
}

export default Home;
