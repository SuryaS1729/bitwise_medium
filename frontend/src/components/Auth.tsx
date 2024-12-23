import { SignupInput,  } from "@surya7314/medium-common"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

export const Auth = ({type}: {type: "signup"|"signin"})=>{

    const [postInputs,setPostInputs]= useState<SignupInput>({
        name: "",
        username:"",
        password:""
    })
    return <div className="bg-red-100 h-screen flex justify-center flex-col">
   
        <div className="flex justify-center">
            <div>
            <div className="px-10">
                <div className="text-pink-800 text-3xl font-extrabold">
                    Create an account
                </div>
                <div className=" text-slate-900 text-s font-mono font-thin pl-0.5 mt-1">
                   Already have an account? <Link className="pl-0 underline text-pink-800" to={"/signin"}>Login</Link>
                </div>
            </div>
            <div className="pt-8">
                <LabelledInput label="Name" placeholder="Your Beautiful Name 🙋🏻‍♀️" onChange={(e)=>{
                   setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
                }} />
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
                <button type="button" className="mt-8 w-full text-white bg-pink-900 hover:bg-pink-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-4 me-2 mb-2">{type === "signup"? "Sign Up": "Sign In" }</button>

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