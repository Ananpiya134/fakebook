import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";


function PostCard() {

    return (
        <>
            <div className="card">
                <PostHeader />
                <PostContent />
                <PostFooter />
            </div>
        </>
    );
}

export default PostCard;