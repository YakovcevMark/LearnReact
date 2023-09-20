import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
    const postElements = props.state.postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost()
    }
    const updatePostText = (e) => {
        const newText = e.target.value;
        props.updatePostText(newText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={updatePostText}
                        value={props.state.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;