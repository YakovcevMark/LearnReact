import classes from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPNG from "../../assets/img/user.png"



const User = ({id, followingInProgress, toggleFollowingInProgress, makeFollow, makeUnFollow, status, name, photos, followed, location}) => {
    return (
        <>
            <div className={classes.item}>
                <div>
                    <NavLink to={`/profile/${id}`}>
                        <div>
                            <img src = {photos.small !== null ? photos.small : userPNG} alt=""/>
                        </div>
                    </NavLink>
                    <div>
                        {
                            followed
                                ? <button disabled={followingInProgress.some(userId => userId === id)}
                                          onClick={() => {
                                              toggleFollowingInProgress(true, id);
                                              makeUnFollow(id);
                                          }}>UnFollow</button>
                                : <button disabled={followingInProgress.some(userId => userId === id)}
                                          onClick={() => {
                                              toggleFollowingInProgress(true, id);
                                              makeFollow(id);
                                          }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{name}</div>
                        <div>{status}</div>
                    </div>
                    <div>
                        <div>location.country</div>
                        <div>location.city</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default User;