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
    const stateCopy = Object.assign({},state);
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: stateCopy.newMessageText,
            };
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        case UPDATE_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return stateCopy;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateMessageTextActionCreator = (newText) =>
    ({type: UPDATE_MESSAGE_TEXT, newText: newText})
export default dialogsPageReducer;