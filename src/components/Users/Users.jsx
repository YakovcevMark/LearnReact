import classes from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    const pages = [];
    const countOfPages = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= countOfPages; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div>
            <div className={classes.pagination}>
                {
                    slicedPages.map(p => {
                        return <span className={props.currentPage === p ? classes.selectedPage : classes.paginationItem}
                                     onClick={(e) => {
                                         props.pageChanged(p);
                                     }}>
                                        {p}
                            </span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.item}>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <div>
                                    <img src={u.photos.small}/>
                                </div>
                            </NavLink>
                            <div>
                                {
                                    u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.toggleFollowingInProgress(true, u.id)
                                                      props.makeUnFollow(u.id)
                                                  }}>UnFollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.toggleFollowingInProgress(true, u.id)
                                                      props.makeFollow(u.id)
                                                  }}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>u.location.country</div>
                                <div>u.location.city</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Users;