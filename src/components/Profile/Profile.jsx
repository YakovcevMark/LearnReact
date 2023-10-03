import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            {props.isFetching ? <Preloader/> : <ProfileInfo {...props}/>}
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;