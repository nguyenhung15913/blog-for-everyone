import "./Post.css";
import { Link } from "react-router-dom";
function Post({ post }) {
	const PF = "https://blog-for-everyone-api.herokuapp.com/images/";
	return (
		<div className="post">
			{post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

			<div className="postInfo">
				<div className="postCats">
					{post.categories?.map((cat) => (
						<span>{cat.name}</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>

				<hr />
				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
				<p className="postDesc">{post.desc}</p>
			</div>
		</div>
	);
}

export default Post;
