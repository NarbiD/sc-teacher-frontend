import React from 'react'

import PageTitle from '../page-title/page-title';
import SignInForm from "../sign-in-form/sign-in-form";

const SingIn = () => {
    return <div>
        <PageTitle text={"Авторизація"} />
        <div className="container">
            <SignInForm />
        </div>
    </div>
}

export default SingIn;