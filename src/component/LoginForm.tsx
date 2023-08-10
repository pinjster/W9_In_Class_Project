import { FormEvent, useRef, useEffect, useContext } from 'react'
import { UserContext } from "../contexts/UserProvider"
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  
    console.log(user);

    useEffect(() => {
        if(user.username){
            console.log(user);
            navigate('/')
        }
    }, [user])

    async function handleUserData(e: FormEvent){
        e.preventDefault();
        const res = await fetch('https://matrix-fakebook-123.onrender.com/api/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current!.value,
                password: passwordField.current!.value
            })
        })
        if(res.ok){
            const data = await res.json()
            setUser({
                username: usernameField.current!.value.toString(),
                token: data.access_token
            })
            updateUserState(usernameField.current!.value, data.access_token)
            resetForm()
        } else {
            window.alert('Invalid UserData')
        }
    }

    function updateUserState(username:string,token:string){
      setUser({
        username:username,
        token: token
      })
      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('username', JSON.stringify(username))
    }

    function resetForm(){
      usernameField.current!.value = ''
      passwordField.current!.value = ''
    }

  return (
    <>
      <h2>Login Form</h2>
      <form action="" onSubmit={handleUserData}>
        <label> Usermame: <br />
          <input type="text" ref={usernameField}/>
        </label><br />
        <label>Password: <br />
          <input type="password" ref={passwordField} />
        </label> <br />
        <input type="submit" value="Log In" />
      </form>
    </>
  )
}
