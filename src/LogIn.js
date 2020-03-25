import React from "react";
import image from './images/person-dummy.jpg';
import backgroundimage from './images/background.jpg';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    admin: state.adminReducer.admin
});
class LogInPage extends React.Component {
    render() {

        return (
            <div>
                <image resposive style={styling.backgroundImageStyling} src={backgroundimage}></image>
                <form style={{ position: 'absolute', top: '30%', left: '35%', right: '35%' }}
                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            const val = e.target.elements.username.value.trim();
                            const passVal = e.target.elements.password.value.trim();
                            if (val === this.props.admin[0].userName && passVal === this.props.admin[0].password ) {
                                alert('Log in Successfully');
                                this.props.history.push('/dashboared');
                            } else if(val === this.props.admin[1].userName && passVal === this.props.admin[1].password){
                                alert('Log in Successfully');
                                this.props.history.push('/dashboared');
                            }else if(val === this.props.admin[2].userName && passVal === this.props.admin[2].password){
                                alert('Log in Successfully');
                                this.props.history.push('/dashboared');
                            }else{
                                alert('Username or Password is incorrect');
                            }
                        }

                    }>
                    <image src={image} style={styling.image} />
                    <input style={styling.username_password} type="text" name="username" placeholder="Username" />
                    <input style={styling.username_password} type='password' name="password" placeholder="Password" />
                    <button style={styling.button}>Log In</button>
                </form>
            </div>
        );
    }
}
export default connect(mapStateToProps)(LogInPage);
const styling = {
    username_password: {
        display: 'block',
        marginLeft: '20%',
        marginRight: '40%',
        marginBottom: '10px',
        borderRadius: '20px',
        padding: 5,
        borderColor: 'transparent',
        width: '80%',
        height: '20px',
        paddingLeft: '15px'
    },
    button: {
        display: 'block',
        marginLeft: '46%',
        marginRight: '45%',
        marginTop: 5,
        width: '30%',
        borderRadius: '20px',
        backgroundColor: '#54575c',
        color: 'white',
        borderColor: 'transparent',
        height: 30
    },
    image: {
        display: 'block',
        marginLeft: '40%',
        marginRight: '45%',
        height: "180px",
        widht: "180px",
        marginBottom: '10px',
        borderRadius: '90px'
    },
    backgroundImageStyling: {
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
}

