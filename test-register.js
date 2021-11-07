describe('Register Feature', function () {
    it('Register_03', function () {
        const TabSignup = '~TabSignup'
        const SignupEmailInput = '~SignupEmailInput'
        const SignupPasswordInput = '~SignupPasswordInput'
        const SignupConfirmPasswordInput = '~SignupConfirmPasswordInput'
        const SignupButton = '~SignupButton'
        // 1. Click on Register tab
        $(TabSignup).click()
        // 2. Fill email text field
        $(SignupEmailInput).setValue('datvt.hrt@gmail.com')
        // 3. Fill password text field
        $(SignupPasswordInput).setValue('12345678')
        // 4. Fill confirm password text field
        $(SignupConfirmPasswordInput).setValue('11111111')
        // 5. Click on Register btn
        $(SignupButton).click()
        browser.pause(2000)
    });

    it('Register_01', function () {
        const TabSignup = '~TabSignup'
        const SignupEmailInput = '~SignupEmailInput'
        const SignupPasswordInput = '~SignupPasswordInput'
        const SignupConfirmPasswordInput = '~SignupConfirmPasswordInput'
        const SignupButton = '~SignupButton'
        // 1. Click on Register tab
        $(TabSignup).click()
        // 2. Fill email text field
        $(SignupEmailInput).setValue('datvt.hrt@gmail.com')
        // 3. Fill password text field
        $(SignupPasswordInput).setValue('12345678')
        // 4. Fill confirm password text field
        $(SignupConfirmPasswordInput).setValue('12345678')
        // 5. Click on Register btn
        $(SignupButton).click()
        browser.pause(2000)
    });
});
