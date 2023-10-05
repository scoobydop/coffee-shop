import React, {FormEvent, useState} from "react";
import {
    StyledForget,
    StyledInput,
    StyledLabel,
    StyledLoginButton,
    StyledLoginForm,
    StyledLoginLogo,
    StyledRememberAndForget,
} from "./LoginView.styled";
import Logo from "@/assets/images/logo/Coffeeshoplogo.jpg";
import useAdminLogin from "@/hooks/Auth/useLogin.ts";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Cookies from "universal-cookie";

const LoginView: React.FunctionComponent = () => {
    const cookie = new Cookies();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const login = useAdminLogin({
        cb: () => {
            setIsLoading(true)
        },
        cbSuccess: () => {
            setIsLoading(false)
            toast.success("Logged in Successfully!");
            navigate('/', {
                replace: true,
            });
        },
        cbError: () => {
            setIsLoading(false)
            toast.error("Invalid Credentials!");
        }
    });

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const email = target.email.value;
        const password = target.password.value;
        login.mutateAsync({
            email,
            password
        }).then((res) => {
            const expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 14);
            cookie.set('access', res.access_token, {
                sameSite: "none",
                secure: true,
                expires: expireDate
            })
            cookie.set('user', res.user, {
                sameSite: "none",
                secure: true,
                expires: expireDate
            })
        });
    };

    return (
        <>
            <StyledLoginLogo src={Logo}/>
            <StyledLoginForm
                onSubmit={handleLogin}
            >
                <StyledLabel
                    htmlFor={"gw-email-addr-field"}
                >
                    Email Address
                </StyledLabel>
                <StyledInput
                    id={"gw-email-addr-field"}
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    required
                />
                <StyledLabel
                    htmlFor={"gw-pwd-field"}
                >
                    Password
                </StyledLabel>
                <StyledInput
                    id={"gw-pwd-field"}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                />
                <StyledRememberAndForget>

                    <StyledForget
                        to={"/forgot-password"}
                    >Forget Password?</StyledForget>
                </StyledRememberAndForget>
                <StyledLoginButton
                    disabled={isLoading}
                 >
                    Login
                </StyledLoginButton>
            </StyledLoginForm>
        </>
    );
};

export default LoginView;
