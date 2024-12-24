import { SignupInput,  } from "@surya7314/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"


export const Auth = ({type}: {type: "signup"|"signin"})=>{
    const navigate = useNavigate()
    const [postInputs,setPostInputs]= useState<SignupInput>({
        name: "",
        username:"",
        password:""
    })

    async function sendRequest(){
        try {
             const response= await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs )
             const jwt = response.data
             localStorage.setItem("token",jwt)
             navigate("/blogs")
        } catch (error) {
            //alert the user that the request failed   
        }
      
    }
    return <div className="bg-red-100 h-screen flex justify-center flex-col">
   
        <div className="flex justify-center">
            <div>
            <div className="px-10">
                <div className="text-pink-800 text-3xl font-extrabold">
                {type === "signin" ? "Login to your Account ":"Create an Account" }
                </div>
                <div className=" text-slate-900 text-s font-mono font-normal pl-0.5 mt-1">
                   {type === "signin" ? "Don't have an account? ":"Already have an account?" }
                    <Link className="pl-2 underline text-pink-800" to={type === "signin"? "/signup": "/signin"}>{type==="signin"? "Sign Up": "Login"}</Link>
                </div>
            </div>
            <div className="pt-8">
                {type === "signup"?<LabelledInput label="Name" placeholder="Your Name 🙋🏻‍♀️" onChange={(e)=>{
                   setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
                }} />:null}
                <LabelledInput label="Username" placeholder="Your Email address @ 📧" onChange={(e)=>{
                   setPostInputs({
                    ...postInputs,
                    username: e.target.value
                })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="Hush Hush 🤫" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-pink-900 hover:bg-pink-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-4 me-2 mb-2">{type === "signup"? "Sign Up": "Login" }</button>

                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType{
    label: string,
    placeholder:string,
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
function LabelledInput({label,placeholder,onChange, type}: LabelledInputType){
    return   <div>
    <label  className="block mb-2 text-base text-pink-800 font-semibold py-1">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-pink-100 placeholder-slate-600 border border-pink-200 text-gray-900 text-base font-mono rounded-lg block w-full p-4" placeholder={placeholder} required /> 
</div>

}