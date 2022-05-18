import "./Post.css";

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
				<a href={post.url} className="postTitle">
					{post.title}
				</a>

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
