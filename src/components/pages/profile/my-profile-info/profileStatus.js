import React from 'react';
import './profileStatus.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode() {
        this.props.isOwner && this.setState({editMode: true})
    }
    deactivateEditMode() {
        this.setState( {
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
   
    render() {
        return (
            <div className='status'>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status || 'too lazy to add status. Or Young?'}</span>
                    </div>
                }

                {this.state.editMode &&
                <div>
                    <input className='status' onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value = {this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus