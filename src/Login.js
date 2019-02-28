import React, { Component } from "react";
import Button from "./Button";
import TextField from "./InputField";
import './Forms.css';
import * as firebase from 'firebase';
import ReactDOM from 'react-dom';
import SignUp from './SignUp'
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';



class LogIn extends Component {

    constructor() {
        super();
        this.auth = firebase.auth();
    }
    


    signInUser = () => {
        const userName = document.querySelector("#Input-UserName").value;
        const password = document.querySelector("#Input-Password").value;
        const promise = this.auth.signInWithEmailAndPassword(userName, password);
        promise
            .then(user => {

                console.log(user);
                this.props.history.push("./routes");
            }
            )
            .catch(err => {
                console.log("Error in Login : ", err);
                const alert = (
                    <div className="alert alert-danger" role="alert">
                        Invalid User Details
              </div>
                )
                ReactDOM.render(alert, document.getElementById("show-error"))
                setTimeout(() => {
                    var item = document.getElementById("show-error");
                    item.parentNode.removeChild(item);
                }, 1000)
            })
    }

    signUpUser = (e) => {
        ReactDOM.render(<SignUp />, document.getElementById('root'))
    }



    render() {
        return (
            <div>
                <nav className="navbar bg-primary justify-content-between">
                    <img className="navbar-nav" src={require("./logo.png")} />
                </nav>
                <div className="d-flex justify-content-center align-items-center container" id="form container">

                    <div className="col-md-6 col-sm-12 text-center">
                        <form >
                            <h1>Login</h1>
                            <br></br>
                            <div id="show-error"></div>
                            <center>
                                <div className="m3">
                                    <Grid container spacing={0} justify="center" alignItems="center">
                                        <Grid item>
                                            <i class="fas fa-user-alt" style={{ fontSize: 20 }} />
                                        </Grid>
                                        <Grid item>
                                            <TextField type="text" label="Email" placeholder="Email ID" ClassName='form-control border border-success' id="Input-UserName" />
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
                                            <TextField type="password" label="Password" placeholder="Password" ClassName='form-control border border-success' id="Input-Password" />
                                        </Grid>
                                    </Grid>
                                </div>
                            </center>
                            <br></br>
                            <Button clickFunction={this.signInUser} name="LOG IN" ClassName="btn btn-success m3" />
                            <Button clickFunction={this.signUpUser} name="SIGN UP" ClassName="btn btn-info m3" />
                        </form>
                    </div>

                </div>
            </div>
        );

    }

}


export default LogIn;

