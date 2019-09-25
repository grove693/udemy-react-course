import React from 'react';
import {connect} from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{


    componentDidMount() { 

        console.log('component did mount');


        window.gapi.load('client:auth2', () => {

            window.gapi.client.init({
                clientId: '639797632904-ufdq4a0sdtj4m6akcu7hd89ps8od5ac4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.onAuthChange(this.auth.isSignedIn.get());                
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

        
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    };

    renderAuthButton(){

        if (this.props.isSignedIn === null){
            return (
                null
            );
        } else if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    }

    render(){
        console.log('bla');
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn,signOut}) (GoogleAuth) ;