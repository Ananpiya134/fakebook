import PostAction from './PostAction';
import CommentList from './CommentList';
import CommentForm from './CommentForm';


function PostFooter() {

    return (
        <div className="p-2">
            <PostAction />
            <CommentList />
            <CommentForm />
        </div>
    );
}

export default PostFooter;