import { Component, ReactNode } from "react";

interface FormFields{
    username: string,
    comment: string,
    topic: string,
}

class FormComponent extends Component<{}, FormFields> {

    constructor(props: any){
        super(props);
        this.state = {
            username: "",
            comment: "",
            topic: "react",
        };
    }

    onUsernameChange = (event: any) => {
        this.setState({
            username: event.target.value
        });
    }

    onCommentChange = (event: any) => {
        this.setState({
            comment: event.target.value
        });
    }

    onTopicChange = (event: any) => {
        this.setState({
            topic: event.target.value
        });
    }

    onSubmit = (event: any) => {
        alert(`${this.state.username}\n${this.state.comment}\n${this.state.topic}`)
        event.preventDefault();
    }

    render(): ReactNode {
        const {username, topic, comment} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text"
                        value={username}
                        onChange={this.onUsernameChange} />
                </div>
                <br/>
                <div>
                    <label>Comment</label>
                    <textarea 
                        rows={2}
                        cols={20}
                        value={comment}
                        onChange={this.onCommentChange} />
                </div>
                <br/>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.onTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }

}

export default FormComponent;
