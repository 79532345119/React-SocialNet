import React from 'react';
import { NavLink } from 'react-router-dom';
import './users.css';


let Users = (props) => {

    return <div className='users'>
                <UsersCounter totalUsersQuantity={props.totalUsersQuantity} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />

                <UsersToShow users={props.users} isFollowingInProgress={props.isFollowingInProgress} unfollow={props.unfollow} follow={props.follow } />
            </div> 
}

export const UsersCounter = (props) => {
    let pagesQuantity = Math.ceil(props.totalUsersQuantity / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesQuantity; i++) {
        pages.push(i);
    }
    
    let selectedPages = pages.slice(props.currentPage-5 >0 ? props.currentPage-5: 0
        , props.currentPage-5 >0 ? props.currentPage+5 : 10);
        
    return <div className='usersQuantity'>
                {selectedPages.map(p => {
                    return <span key = {p} className={(props.currentPage === p)? 'selectedPage' : 'currentPage'}  
                    onClick={(e)=> { props.onPageChanged(p) } }
                    >{p}</span>
                })
                }
                <span>TOTAL {pagesQuantity} PAGES</span>
            </div>

}

export const UsersToShow = (props) => {
    return (
        props.users.map( u=> <div  className = 'userField' key={u.id}>
            <div>
                <div>
                    <NavLink to={'/profile/'+u.id}>
                        <img src={u.photos.large || u.photos.small || 'https://shapka-youtube.ru/wp-content/uploads/2018/10/spartan.png'} className='userPhoto' alt='аватарка пользователя'/>
                    </NavLink>
                </div>
                <div>
                    {u.followed 
                        ? <button className='btn-sm' disabled={props.isFollowingInProgress.some(id => id ===u.id)} 
                            onClick={()=>{
                                props.unfollow(u.id)
                            }}>Unfollow</button> 
                        : <button className='btn-sm' disabled={props.isFollowingInProgress.some(id => id ===u.id)} 
                            onClick={()=>{
                                props.follow(u.id)
                            }}>Follow</button>}
                </div>
            </div>
            <div>
                <div className='userName'>{u.name}</div>
                <div>{u.status ? u.status : 'too lazy to add status'}</div>
                <div>user ID {u.id}</div>
            </div>
        </div> )
    )
}


export default Users;