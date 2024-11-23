import React, { useEffect } from "react";
import { deleteCookie, getCookie, setCookie } from "./utils/cookies";

export const useAuthenticate = () => {

    const [authenticated, setAuthenticated] = React.useState(false);

    const authenticate = () => {
        setAuthenticated(true);
        setCookie("authenticated", "1112223334");
    };

    const logout = () => {
        setAuthenticated(false);
        deleteCookie("authenticated");
    };

    useEffect(() => {
        const cookie = getCookie("authenticated");
        if (cookie) {
            setAuthenticated(true);
        }
    }, []);

  return {
    authenticate,
    logout,
    authenticated
  };
};
