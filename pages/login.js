import Head from 'next/head'
import React from "react";
import SawoLogin from "sawo-react"
import lstyles from '../styles/login.module.css'
function login() {
    function sawoLoginCallback(payload) {
        console.log("Payload : " + JSON.stringify(payload));
    }

    const sawoConfig = {
        onSuccess: sawoLoginCallback,
        identifierType: "email", //required, must be one of: 'email', 'phone_number_sms',
        apiKey: "8e90c0bc-86b5-48b5-bddb-1fc1599e4008", // required, get it from sawo dev.sawolabs.com,
        containerHeight: "300px", // the login container height, default is 300px
    };

    return (

        <div className={lstyles.container}>
            <Head>
                <title>Login</title>
            </Head>
            <div className={lstyles.login_container}>
                <h1>Login</h1>
                <SawoLogin config={sawoConfig}>
                  </SawoLogin>
            </div>
        </div>


    );
};

export default login;
