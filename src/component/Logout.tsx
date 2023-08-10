import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";
import Spinner from "react-bootstrap/Spinner"

export default function Logout() {

    
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        setUser({username: "", token: ""})
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        navigate('/')
    })

    return (
        <>
            <Spinner animation="border" variant="info" />
        </>
    )
}