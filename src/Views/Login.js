import React, { Component } from 'react'
import Facebook from '../components/Facebook'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 mx-auto">
                            <div id="first">
                                <div class="myform form ">
                                    <div class="logo mb-3">
                                        <div class="col-md-12 text-center">
                                            <h1>Login</h1>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <p class="text-center">
                                            <Facebook />  
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
