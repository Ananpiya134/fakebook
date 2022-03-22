import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

function PostCard({ post }) {
	return (
		<>
			<div className="card my-3">
				<PostHeader post={post} />
				<PostContent post={post} />
				<PostFooter />
			</div>
		</>
	);
}

export default PostCard;
