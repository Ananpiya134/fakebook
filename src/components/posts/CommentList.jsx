import CommentItem from "./CommentItem";

function CommentList() {

    return (
        <>
            <div className={`pt-1`}>
                <CommentItem />
                <CommentItem />
            </div>
        </>
    );
}

export default CommentList;