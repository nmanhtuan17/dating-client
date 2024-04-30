import {useState} from "react";
import {AuthService} from "@services/auth.services";
import {useAppDispatch} from "@Store/store";
import {setTokens} from "@Store/slices/auth.slice";

export const Signin = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const dispatch = useAppDispatch();
  const handleSigin = async () => {
    const data =  await AuthService.signIn({email, password});
    console.log(data)
    dispatch(setTokens(data.tokens))
  }
  return (
    <div>
      <input
        className='border'
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='border'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSigin}>submit</button>
    </div>
  )
}
