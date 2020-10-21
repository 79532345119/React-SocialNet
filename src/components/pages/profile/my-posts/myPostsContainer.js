import {addPostActionCreator} from '../../../../data/profile-reducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText)=> {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 

export default MyPostsContainer;