import userLocalPhoto from "../../../assets/img/user.png";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import React from "react";
import Contact from "./Contact";

const CurrentProfileInfo = ({
                                isOwner,
                                savePhoto,
                                profileInfo,
                                status,
                                updateProfileStatusRequest
                            }) => {
    function onSavePhoto(e) {
        if (e.currentTarget.files[0])
            savePhoto(e.currentTarget.files[0]);
    }

    const profilePhoto = profileInfo.photos.large || userLocalPhoto;
    return <>
        <div className={classes.profilePhoto}>
            <img src={profilePhoto} alt=""/>
        </div>
        <div>
            {isOwner && <input type="file" onChange={onSavePhoto}/>}
        </div>
        <div>
            <b>FullName:</b> {profileInfo.fullName}
        </div>
        <div>
            <b>Status:</b>
            <ProfileStatus
                isOwner={isOwner}
                status={status}
                updateProfileStatusRequest={updateProfileStatusRequest}
            />
        </div>
        <div>
            <div><b>aboutMe:</b></div>
            {profileInfo.aboutMe}
        </div>
        <div>
            <div><b>Ищет работу?</b></div>
            {profileInfo.lookingForAJob ? "да" : "нет"}
        </div>
        <div>
            <div><b>lookingForAJobDescription:</b></div>
            {profileInfo.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts:</b>
            {Object.keys(profileInfo.contacts).map(key => {
                return <Contact key={key}
                                contactName={key}
                                contactValue={profileInfo.contacts[key]}
                />
            })}
        </div>
    </>
}
export default CurrentProfileInfo;