import React, { Component } from "react"
import Button from "./Button"
import TextField from './InputField'
import './Forms.css';
import * as firebase from "firebase";
import ReactDOM from 'react-dom';
import LogIn from './Login';
import Grid from '@material-ui/core/Grid';



class SignUp extends Component {

    constructor() {

        super();
        this.auth = firebase.auth();

    }

    showError(alert, Class) {
        const Alert = (
            <div className={Class} role="alert">
                {alert}
            </div>
        )
        ReactDOM.render(Alert, document.getElementById("show-error"))
        setTimeout(() => {
            var item = document.getElementById("show-error");
            item.parentNode.removeChild(item);
        }, 3000)
    }

    signUpUser = () => {
        const userName = document.querySelector("#SInput-UserName").value;
        const password = document.querySelector("#SInput-Password").value;
        const ConfirmPassword = document.querySelector("#SInput-ConfirmPassoword").value;
        if (password !== ConfirmPassword) {
            this.showError("Please check your password", "alert alert-danger");
        }
        else {
            console.log(userName, password);
            const promise = this.auth.createUserWithEmailAndPassword(userName, password);
            promise
                .then(user => {
                    console.log(user);

                    ReactDOM.render(<LogIn />, document.getElementById('root'));
                    this.showError("Signed Up Successfully!", "alert alert-success");
                })
                .catch(err => {
                    console.log(err)
                    if (err.code === "auth/email-already-in-use") {
                        this.showError("Email already in use", "alert alert-danger");
                    }
                    if (err.code === "auth/invalid-email") {
                        this.showError("Invalid Email ID", "alert alert-danger");
                    }
                    else {
                        this.showError("Something went wrong", "alert alert-danger");
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar bg-primary justify-content-between">
                    <img className="navbar-nav" src={require("./logo.png")} />
                </nav>

                <div className="d-flex justify-content-center align-items-center container" id="form container">

                    <div className="col-md-6 col-sm-12 text-center">
                        <form>
                            <h1>SignUp</h1>
                            <div id="show-error"></div>
                            <div>
                            <div className="m3">
                                    <Grid container spacing={0} justify="center" alignItems="center">
                                        <Grid item>
                                            <i class="fas fa-user-alt" style={{ fontSize: 20 }} />
                                        </Grid>
                                        <Grid item>
                                            <TextField type="text" label="Email" placeholder="Email ID" ClassName='form-control border border-success' id="SInput-UserName" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <br></br>
                                <div className="m3">
                                    <Grid container spacing={0} justify="center" alignItems="center">
                                        <Grid item>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                                        </Grid>
                                        <Grid item>
                                            <TextField type="password" label="Password" placeholder="Password" ClassName='form-control border border-success' id="SInput-Password" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <br></br>
                                <div className="m3">
                                    <Grid container spacing={0} justify="center" alignItems="center">
                                        <Grid item>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                                        </Grid>
                                        <Grid item>
                                            <TextField type="password" label="Password" placeholder="Re-enter Password" ClassName='form-control border border-success' id="SInput-ConfirmPassoword" />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <br></br>

                            <Button clickFunction={this.signUpUser} name="SIGN UP" ClassName="btn btn-primary m3" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp