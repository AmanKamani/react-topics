import axios from "axios";
import { Component } from "react";

class PostForm extends Component<any, any>{

    static URL = "https://jsonplaceholder.typicode.com/posts";

    constructor(props: any){
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: ""
        };
    }

    onValueChange = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            [key]: value
        });
    }

    onSubmitPost = (event: any) => {
        console.log(this.state)

        axios.post(PostForm.URL, this.state)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        event.preventDefault();
    }

    render() {
        const { userId, title, body } = this.state;
        return (<>
            <form onSubmit={this.onSubmitPost}>
                <h4>Add Post Details</h4>
                <input 
                    placeholder="userID"
                    type={"text"}
                    name="userId"
                    value={userId} 
                    onChange={this.onValueChange}/>
                <br />
                <input 
                    type={"text"}
                    placeholder="title"
                    name="title"
                    value={title} 
                    onChange={this.onValueChange}/>
                <br />
                <input 
                    type={"text"}
                    placeholder="body"
                    name="body"
                    value={body}
                    onChange={this.onValueChange} />
                <br />
                <button type="submit">Save</button>
            </form>
        </>);
    }
}

export default PostForm;