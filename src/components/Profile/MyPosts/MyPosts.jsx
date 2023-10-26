import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {AddNewPostForm} from "../../common/FormControls/AddNewPostForm";


const MyPosts = ({postsData, deletePost, addPost}) => {
    const postElements = postsData
        .map(p => <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
            deletePost={deletePost}
        />)


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <div>
                <AddNewPostForm onSubmit={addPost}/>
            </div>

            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;