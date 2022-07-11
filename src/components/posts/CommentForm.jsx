import { useRef, useEffect, useState, useContext } from "react";
import defaultImg from "../../assets/images/defaultProfilePic.png";
import { AuthContext } from "../../contexts/AuthContext";

function CommentForm({ createComment }) {
	const [title, setTitle] = useState("");
	const inputEl = useRef();

	const { user } = useContext(AuthContext);

	useEffect(() => {
		inputEl.current.focus();
	}, []);

	const handleSubmitForm = (e) => {
		e.preventDefault();
		createComment(title);
	};
	return (
		<form onSubmit={handleSubmitForm}>
			<div className="position-relative d-flex align-items-center">
				<img
					src={user.profileImg ?? defaultImg}
					width="30"
					height="30"
					className="rounded-circle me-2"
					alt="user"
				/>
				<input
					type="text"
					className="form-control rounded-pill d-inline"
					placeholder="Write something ..."
					ref={inputEl}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
		</form>
	);
}

export default CommentForm;
