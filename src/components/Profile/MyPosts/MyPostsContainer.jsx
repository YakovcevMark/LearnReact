import {addPost, updatePostText} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from 'react'


class MyPostsContainer extends React.Component{
    render() {
        return (
            <MyPosts
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    state: state.profilePage
})

export default connect(mapStateToProps, {addPost, updatePostText})(MyPostsContainer)