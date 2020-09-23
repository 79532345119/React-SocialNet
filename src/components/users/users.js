import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import './users.css';


let Users = (props) => {
    let pagesQuantity = Math.ceil(props.totalUsersQuantity / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesQuantity; i++) {
        pages.push(i);
    }

    return <div className='users'>
    <div>
        {pages.map(p => {
            return <span key = {p} className={(props.currentPage === p)? 'selectedPage' : 'currentPage'}  
            onClick={(e)=> { props.onPageChanged(p) } }
            >{p}</span>
        })
        }
    </div>
{
    props.users.map( u=> <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/'+u.id}>
                    <img src={u.photos.large || u.photos.small || 'https://shapka-youtube.ru/wp-content/uploads/2018/10/spartan.png'} className='userPhoto' alt='аватарка пользователя'/>
                </NavLink>
            </div>
            <div>
                {u.followed 
                    ? <button onClick={()=>{
                        usersAPI.unfollowUser(u.id)
                            .then(data => {
                                    if (data.resultCode === 0) {props.unfollow(u.id)}
                                })
                        }}>Unfollow</button> 
                    : <button onClick={()=>{
                        usersAPI.followUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {props.follow(u.id)}
                                })
                        }}>Follow</button>}
            </div>
        </span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
        </span>
    </div> )
}
</div> 
}


export default Users;