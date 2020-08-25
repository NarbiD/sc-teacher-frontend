import React from 'react'

import PageTitle from '../page-title/page-title';
import SignUpForm from '../sign-up-form/sign-up-form';

const SingUp = () => {



    return <div>
            <PageTitle text={"Реєстрація викладача"} />
            <div className="container">
                <SignUpForm />
            </div>
        </div>
}

export default SingUp;