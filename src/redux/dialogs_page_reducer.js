const ADD_MESSAGE = "ADD-MESSAGE";
const dialogsPage = {
    dialogsData: [
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Mark'},
        {id: 5, name: 'Artem'},
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Wat's up?"},
        {id: 3, message: "Lol kek cheburek"},
        {id: 4, message: "Atata"},
    ],
};
const dialogsPageReducer = (state = dialogsPage, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: action.newMessageBody,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],

            }
        default:
            return state;
    }
}
export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})
export default dialogsPageReducer;