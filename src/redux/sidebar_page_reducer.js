const sidebar = {
    popularFriends: [
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Erzhan'},
    ]
};
const sidebarPageReducer = (state = sidebar, action) => {
    const stateCopy = Object.assign({},state);
    return stateCopy;
}
export default sidebarPageReducer;