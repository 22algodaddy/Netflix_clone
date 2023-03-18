import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";
import {UserAuth} from "../../context/Authcontext";

const Signup= () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [Error, setError] = useState(" ");
    const {signUp,user} = UserAuth();
    const navigate=useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await signUp(email,password);
            navigate("/");
        }
        catch(error){
            console.log(error);
            setError(error.message);
        }
    }
    return(
        <>
            <div className="w-full h-screen ">
                <img className="hidden sm:block absolute w-full h-screen object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/">
                </img>
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24  z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="font-bold font-sans text-3xl text-gray-400">Sign Up</h1>
                            {Error!=" " ? <p className="p-3 bg-red-900 my-3 rounded-md">{Error}</p> : null}
                            <form  onSubmit={handleSubmit} className="w-full flex flex-col py-2">
                                <input className="p-3 my-2 bg-gray-700 rounded"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    onChange={(e)=>{(setEmail(e.target.value))
                                        console.log(e);
                                    }}/>
                                <input className="p-3 my-2 bg-gray-700 rounded"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    onChange={(e)=>(setPassword(e.target.value))}
                                />
                                <button className="bg-red-600 text-white py-3 my-6
                                font-bold py-2 px-4 rounded-full"> SignUp
                                </button>
                                <div className="flex justify-between items-centre text-sm text-gray-500">
                                    <p className='mr-2'>
                                        <input type="checkbox"></input>Remember Me
                                    </p>
                                    <p>
                                        Need Help
                                    </p>
                                </div>
                                <p className="py-8">
                                    <span className="text-gray-500">Already Subscribed To Metflix?</span>{' '}
                                   <Link to='/login'>Sign In </Link>
                                </p>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
export default Signup;
//div just below of img tag is for ovarlay effect
//making an element fixed positions that wrt to main html page/or ur screen and it remains fixed at its position even if
//u scroll.