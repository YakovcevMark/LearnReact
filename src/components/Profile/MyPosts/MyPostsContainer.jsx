import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import {useContext} from "react";
import StoreContext from "../../../store-context";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//     const store = useContext(StoreContext);
//     const onAddPost = () => {
//         store.dispatch(addPostActionCreator())
//     }
//     const onUpdatePostText = (newText) => {
//         store.dispatch(updatePostTextActionCreator(newText))
//     }
//     return (
//         <MyPosts
//             addPost={onAddPost}
//             updatePostText={onUpdatePostText}
//             state={store.getState().profilePage}
//         />
//     )
// }
const mapStateToProps = state => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (newText) => {
            dispatch(updatePostTextActionCreator(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;