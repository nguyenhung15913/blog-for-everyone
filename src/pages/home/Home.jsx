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
		const res = await axios.get("/posts" + search);

		setPosts(res.data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<SideBar />
			</div>
		</>
	);
}

export default Home;
