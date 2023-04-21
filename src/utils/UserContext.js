import { createContext } from "react";

const UserContext = createContext({
    name : "Hemanth",
    role : "Developer"
});

UserContext.displayName = "UserContext";

export default UserContext;