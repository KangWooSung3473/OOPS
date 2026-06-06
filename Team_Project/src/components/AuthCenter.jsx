import "./AuthCenter.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import useTitle from "../hook/useTitle";

const AuthCenter = ()=>{
    const [view, setView] = useState("login");

    useTitle(view === "login" ? "로그인 페이지" : "회원가입 페이지");

    return (
        <div className="auth-container" key={view}>
            {view === "login" && <Login setView={setView}></Login>}
            {view === "register" && <SignUp setView={setView}></SignUp>}
        </div>
    );
}

export default AuthCenter; 