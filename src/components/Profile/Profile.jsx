import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.content}>
                 <ProfileInfo
                    isOwner={props.isOwner}
                    savePhoto = {props.savePhoto}
                    profileInfo={props.profileInfo}
                    status={props.status}
                    getProfileStatusRequest={props.getProfileStatusRequest}
                    updateProfileStatusRequest={props.updateProfileStatusRequest}
                    router={props.router}
                    updateProfileRequest={props.updateProfileRequest}
                />}
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;