import PostCard from "./PostCard";

function PostList({ posts }) {
    return (
        <>
            {posts.map(item => {
                return (
                    <PostCard
                        key={item.id}
                        post={item}
                    />)
            })}
            {/* <PostCard /> */}
        </>
    )
}

export default PostList;