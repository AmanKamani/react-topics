import axios from "axios";
import { Component } from "react";

class PostList extends Component<any, {posts: [], error: string}>{

    static URL = "https://jsonplaceholder.typicode.com/posts";

    constructor(props: any){
        super(props);
        this.state = {
            posts: [],
            error: "",
        };
    }

    componentDidMount(){
        axios.get(PostList.URL)
            .then(response => this.setState({
                posts: response.data,
            }))
            .catch(error => this.setState({ error: "Error Retrieving Data" }));
    }

    render(){
        const { posts, error } = this.state;
        return (<>
            <h4>Posts List from JSON PlaceHolder</h4>
            {
                posts.length ? 
                    posts.map((post: {id: number, title: string}) => <p key={post.id}> {post.title} </p>)
                    : null
            }
            {
                error ? <p>Something Went Wrong: {error}</p> : null
            }
        </>);
    }
}

export default PostList;