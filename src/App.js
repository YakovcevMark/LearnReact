import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {useContext} from "react";
import StoreContext from "./store-context";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
    const store = useContext(StoreContext);
    return (<BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                {/*<Navbar friends={store.getState().sidebar.popularFriends}/>*/}
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
