import React, {useState} from "react";
import ProfileUpdateForm from "../../common/FormControls/ProfileUpdateForm";
import CurrentProfileInfo from "./CurrentProfileInfo";


const ProfileInfo = ({
                         isOwner,
                         savePhoto,
                         profileInfo,
                         status,
                         getProfileStatusRequest,
                         updateProfileRequest,
                         updateProfileStatusRequest,
                     }) => {

    const [editMode, setEditMode] = useState(false);

    function updateProfile(requestData, setErrors) {
        updateProfileRequest(requestData, setErrors);
        setEditMode(false);
    }

    return (
        <>
            {isOwner && !editMode && <button onClick={() => setEditMode(!editMode)}>Update Profile</button>}
            {editMode
                ? <ProfileUpdateForm savePhoto={savePhoto}
                                     profileInfo={profileInfo}
                                     status={status}
                                     onSubmit={updateProfile}
                                     updateProfileStatusRequest={updateProfileStatusRequest}
                />
                : <CurrentProfileInfo isOwner={isOwner}
                                      savePhoto={savePhoto}
                                      profileInfo={profileInfo}
                                      status={status}
                                      updateProfileStatusRequest={updateProfileStatusRequest}
                />
            }
        </>
    )
}

export default ProfileInfo;