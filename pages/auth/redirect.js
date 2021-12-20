import {useEffect} from "react";

export default function Redirect() {

    useEffect(async () => {
        const AuthProvider = (await import("@arcana/auth")).AuthProvider;
        AuthProvider.handleRedirectPage(window.location);
    })

    return <div>Logging in.....</div>
        }