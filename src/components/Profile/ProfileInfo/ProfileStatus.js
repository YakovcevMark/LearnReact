import React, {useEffect, useState} from 'react'

const ProfileStatus = ({isOwner, status, updateProfileStatusRequest }) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status);
    }, [status])

    const onTitleChanged = (e) => {
        setLocalStatus(e.target.value);
    }
    const toggleEditMode = () => {
        setEditMode(!editMode);
    }
    const onUpdateProfileStatus = () => {
        toggleEditMode();
        if (status !== localStatus)
            updateProfileStatusRequest(localStatus)
    }
    return <div>
        {editMode && isOwner
            ? <div>
                <input autoFocus={true}
                       onBlur={onUpdateProfileStatus}
                       value={localStatus}
                       onChange={onTitleChanged}>
                </input>
            </div>
            : <div>
                      <span onDoubleClick={toggleEditMode}>
                          {localStatus || "Update status"}
                      </span>
            </div>
        }
    </div>

}

export default ProfileStatus;