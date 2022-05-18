import "./Post.css";
import { Link } from "react-router-dom";

function MyPost({ post }) {
	return (
		<div className="post">
			{
				<img
					className="myPostImg"
					src={post.cover_image ? post.cover_image : post.social_image}
					alt=""
				/>
			}

			<div className="postInfo">
				<div className="postCats">
					{post.tag_list.map((cat) => (
						<span>{cat.name}</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>

				<hr />
				<span className="postDate">
					{new Date(post.created_at).toDateString()}
				</span>
				<p className="postDesc">{post.description}</p>
			</div>
		</div>
	);
}

export default MyPost;
