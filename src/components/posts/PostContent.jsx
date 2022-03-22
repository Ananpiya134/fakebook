
function PostContent({ post: { title, image } }) {


    return (
        <>
            {title && <p className="text-justify px-3 py-1"> {title} </p>}
            {image && <img src={image} className="img-fluid" alt="post-img" />}

        </>
    )
}

export default PostContent;