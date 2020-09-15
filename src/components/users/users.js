import React from 'react';
import './users.css';
import * as axios from 'axios';

class Users extends React.Component {

    getUsers = ()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {this.props.setUsers(response.data.items);
        })
/*         if (this.props.users.length === 0) {
            this.props.setUsers([
                {id: 1, photoUrl: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg', followed: false, fullName: 'Alex', status: 'boss', location: {city: 'Moskow', country: 'Russia'} },
                {id: 2, photoUrl: 'https://g0.sunmag.me/sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png', followed: true, fullName: 'Boris', status: 'second boss', location: {city: 'Kiev', country: 'Ukraine'} },
                {id: 3, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2018/10/spartan.png', followed: false, fullName: 'Charlie', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'} }
            ])
        }  */
    }

    componentDidMount() {
        this.getUsers()
    }
   
    render() {

         return <div className='users'>
        {
            this.props.users.map( u=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className='userPhoto' alt='аватарка пользователя'/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
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
}


export default Users;