import SideBar from "../../components/sidebar/SideBar";
import "./Single.css";
import SinglePost from "../../components/singlePost/SinglePost";

function Single() {
	return (
		<div className="single">
			<SinglePost />
			<SideBar />
		</div>
	);
}

export default Single;
