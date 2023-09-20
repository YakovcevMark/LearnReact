const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const profilePage = {
    postsData: [
        {id: 1, message: "Hi! I love you", likesCount: 15},
        {id: 2, message: "i really hate u!!!!!!!!!!!", likesCount: 20},
    ],
    newPostText: '',
};
const profilePageReducer = (state = profilePage,action) => {
    const stateCopy = Object.assign({},state);

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: stateCopy.newPostText,
                likesCount: 0
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return stateCopy;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (newText) =>
    ({type: UPDATE_POST_TEXT, newText: newText})
export default profilePageReducer;
