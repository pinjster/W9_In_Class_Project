import { useRef, FormEvent, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';


export default function RegisterPage() {

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  //const verifyField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const fnameField = useRef<HTMLInputElement>(null);
  const lnameField = useRef<HTMLInputElement>(null);

  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    if(user.username) {
      navigate('/');
    }}, [user, navigate]);

    async function handleRegisterData(e: FormEvent){
      e.preventDefault();
      const res = await fetch('https://matrix-fakebook-123.onrender.com/api/register', {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current!.value,
                password: passwordField.current!.value,
                email: emailField.current!.value,
                first_name: fnameField.current!.value,
                last_name: lnameField.current!.value
              })
      })
        if(res.ok){
          const data = await res.json()
          console.log(data);
          setUser({
            username: usernameField.current!.value,
            token: ''
          })
          resetForm()
        } else {
          window.alert('FAIL')
        }
    }

    function resetForm(){
      usernameField.current!.value = ''
      passwordField.current!.value = ''
      emailField.current!.value = ''
      fnameField.current!.value = ''
      lnameField.current!.value = ''
    }

  return (
    <>
      <h2>Register Page</h2>
      <form onSubmit={handleRegisterData}>
        <label htmlFor="">First Name <br />
        <input type="text" ref={ fnameField } /></label><br />
        <label htmlFor="">Last Name <br />
        <input type="text" ref={ lnameField } /></label><br />
        <label htmlFor="">Username <br />
        <input type="text" ref={ usernameField } /></label><br />
        <label htmlFor="">Email <br />
        <input type="text" ref={ emailField } /></label><br />
        <label htmlFor="">Password<br />
        <input type="password" ref={ passwordField } /></label><br />
        <label htmlFor="">Verify Password<br />
        <input type="password" ref={ passwordField } /></label><br />
        <input type="submit" value="Register" />
      </form>
    </>
  )
}
