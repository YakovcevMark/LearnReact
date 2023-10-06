import profilePageReducer, {deletePost} from "../profile_page_reducer";
const state = {
    postsData: [
        {id: 1, message: "Hi! I love you", likesCount: 15},
        {id: 2, message: "i really hate u!!!!!!!!!!!", likesCount: 20},
    ],
}
test('after deleting post array posts should be incremented', () => {
    const action = deletePost(1)
    const newState = profilePageReducer(state, action)
    expect(newState.postsData.length).toBe(1);
});