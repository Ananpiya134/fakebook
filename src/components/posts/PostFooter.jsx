import { useState } from "react";
import axios from "../../config/axios";
import PostAction from "./PostAction";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function PostFooter({ post: { Comments, id } }) {
	const [comments, setComments] = useState(Comments);
	const [showComments, setShowComments] = useState(false);
	const [showForm, setShowForm] = useState(false);

	const toggleShowComments = () => {
		setShowComments((prev) => !prev);
	};

	const toggleShowForm = () => {
		setShowForm((prev) => !prev);
	};

	const createComment = async (title) => {
		try {
			const res = await axios.post("/comments", { title, postId: id });
			setComments((prev) => [...prev, res.data.comment]);
			setShowComments(true);
			toggleShowForm(false);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="p-2">
			<PostAction
				numComment={comments.length}
				toggleShowComments={toggleShowComments}
				toggleShowForm={toggleShowForm}
			/>
			{showComments && <CommentList comments={comments} />}
			{showForm && <CommentForm createComment={createComment} />}
		</div>
	);
}

export default PostFooter;
