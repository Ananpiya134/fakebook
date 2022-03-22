import { useEffect, useState } from "react";
import axios from '../../config/axios';
import PostForm from "./PostForm";
import PostList from './PostList';


function PostWrapper() {

    const [posts, setPost] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            try {

                const res = await axios.get('/posts');
                setPost(res.data.posts);
                // console.log(posts[0])

            } catch (err) {
                console.log(err)
            }
        }
        fetchPost();
    }, [])
    return (
        <>
            <PostForm />
            <PostList
                posts={posts}
            />
        </>
    );
}

export default PostWrapper;