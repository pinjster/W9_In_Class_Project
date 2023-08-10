import { FormEvent, useContext, useRef } from "react";
import { UserContext } from "../contexts/UserProvider";
import { useNavigate } from "react-router-dom";


export default function MakePost() {
    
    const { user } =useContext(UserContext)
    const postField = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const baseApiUrl = import.meta.env.VITE_APP_BASE_API

    async function handlePostData(e: FormEvent){
        e.preventDefault();
        const res = await fetch(`${baseApiUrl}/publish-post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({body: postField.current!.value})
        })
        if(res.ok){
            navigate(`/user-page/${user.username}`)
        } else {
            window.alert("can't post")
        }
    }

    return (
        <form onSubmit={handlePostData}>
            <label htmlFor="">Make Post:
                <input type="text" placeholder="What's on your mind?" ref={postField} required  />
            </label>
            <input type="submit" value="Post" />
        </form>
    )
};
