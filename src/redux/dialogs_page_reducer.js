const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
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
    newMessageText: '',
};
const dialogsPageReducer = (state = dialogsPage, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}
export const addMessage = () => ({type: ADD_MESSAGE})

export const updateMessageText = (newText) =>
    ({type: UPDATE_MESSAGE_TEXT, newText: newText})
export default dialogsPageReducer;