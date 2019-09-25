import React from 'react';

class GoogleAuth extends React.Component{

    state={}

    componentDidMount() { 

        console.log('component did mount');


        window.gapi.load('client:auth2', () => {

            window.gapi.client.init({
                clientId: '639797632904-ufdq4a0sdtj4m6akcu7hd89ps8od5ac4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth);
                this.setState({isSignedIn: this.auth.isSignedIn.get() })
            });
        });

        
    }

    renderAuthButton(){

        if (this.state.isSignedIn === null){
            return (
                <div>I dont know if we are signed in</div>
            );
        } else if (this.state.isSignedIn){
            return (
            <div>
                I am signed in
            </div>
            );
        } else {
            return (
                <div> I am not signed in</div>
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


export default GoogleAuth;