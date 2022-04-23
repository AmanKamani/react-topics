import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Post{
    id: number;
    title: string;
    body: string
}

function UseEffectDataFetch() {

    const [post, setPost] = useState<null | Post>(null);
    const [postId, setPostId] = useState(1)
    const [idToFetch, setIdToFetch] = useState(1);

    useEffect(() => {
        axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                setPost(response.data)
            })
            .catch(error => console.log(error));
    }, [idToFetch]);

    const onFetchData = () => {
        setIdToFetch(postId);
    }

    return (<>
        <h4>useEffect with network call</h4>

        <input
            type="number"
            placeholder='postId to fetch'
            value={postId}
            onChange={(e) => setPostId(+e.target.value)} />
        <button onClick={onFetchData}>Fetch Data</button>
        {
            post ? <p>{post.title}</p> : null
        }
        
    </>);
}

export default UseEffectDataFetch