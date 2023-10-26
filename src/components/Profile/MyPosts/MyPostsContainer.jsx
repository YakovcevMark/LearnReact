import {addPost, deletePost} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from 'react'


const MyPostsContainer = (props) => {
    return (
        <MyPosts
            {...props}
        />
    )

}

const mapStateToProps = state => ({
    postsData: state.profilePage.postsData
})

export default connect(mapStateToProps, {addPost, deletePost})(MyPostsContainer)