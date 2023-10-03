import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profileInfo)
        return (
            <div>
                <div>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt=""/>
                </div>
                <div className={classes.descriptionBlock}>
                    ava+description
                </div>
            </div>
        )
    return (
        <div>
            <div>
                <img src={props.profileInfo.photos.large}/>
            </div>
            <div>
                FullName : {props.profileInfo.fullName}
            </div>
            <div>
                <ProfileStatus
                    status={props.status}
                    getProfileStatus={props.getProfileStatus}
                    updateProfileStatus={props.updateProfileStatus}
                    router={props.router}
                />
            </div>
            <div>
                aboutMe : {props.profileInfo.aboutMe}
            </div>
            <div>
                Ищет работу ? : {props.profileInfo.lookingForAJob ? "да" : "нет"}
            </div>
            <div>
                lookingForAJobDescription : {props.profileInfo.lookingForAJobDescription}
            </div>
            <div>
                contacts :
                <div>facebook : <a href={props.profileInfo.contacts.facebook}>facebook</a></div>
                <div>website : <a href={props.profileInfo.contacts.website}>website</a></div>
                <div>vk : <a href={props.profileInfo.contacts.vk}>vk</a></div>
                <div>twitter : <a href={props.profileInfo.contacts.twitter}>twitter</a></div>
                <div>instagram : <a href={props.profileInfo.contacts.instagram}>instagram</a></div>
                <div>youtube : <a href={props.profileInfo.contacts.youtube}>youtube</a></div>
                <div>github : <a href={props.profileInfo.contacts.github}>github</a></div>
                <div>mainLink : <a href={props.profileInfo.contacts.mainLink}>mainLink</a></div>
            </div>
        </div>
    )
}

export default ProfileInfo;