import { useState, type ChangeEvent } from "react"
import type { SignupType } from "@znugrahrk/medium_common"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../auth"
export const Auth=({type}:{type: "signin" | "signup"})=>{
    const navigate=useNavigate()
    const [name,setName]=useState<SignupType>({
        name:"",
        email:"",
        password:""
    })
    async function sendRequest(){
        try{
        const response=await axios.post(`${BACKEND_URL}/api/v1/user${type==="signin"?"/signin":"/signup"}`,name)
            const jwt=response.data.token
            localStorage.setItem("token",jwt)
            navigate("/blogs") 
        }
        catch(e){
            console.log(e)
        }
    }
    return <div className="flex h-screen items-center justify-center">
        <div >
             {/* {JSON.stringify(name)} */}
             <div className="px-5"><div className="text-3xl font-bold">Complete Verification</div>
            <div className="text-center">{type === "signin"?"Create an Account":"Already have an account" }<Link className="underline pl-1" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"Sign up":"Sign in"}</Link></div></div>
            
            {type==="signup"?<LoginElement label="Name"  placeholder="John Doe" onChange={(e)=>{

                setName(c=>({
                    ...c,
                    name:e.target.value
                }))

            }}/>:null}
            <LoginElement label="Email"  placeholder="johndoe@mail.com" onChange={(e)=>{

                setName(c=>({
                    ...c,
                    email:e.target.value
                }))

            }}/>
            <LoginElement label="Password" type={"password"} placeholder="password" onChange={(e)=>{

                setName(c=>({
                    ...c,
                    password:e.target.value
                }))

            }}/>
            <button type="button" onClick={sendRequest} className=" mt-8 w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type==="signin"?"Sign in":"Sign up"}</button>
        </div>
    </div>
}
interface LabelledInputType{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
function  LoginElement({label,placeholder,onChange,type}:LabelledInputType){
return <div>
    <label className="pt-4 block mb-2 text-sm font-medium text-gray-900" htmlFor="">{label}</label>
    <input onChange={onChange} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" type={type || "text"} placeholder={placeholder} required/>
</div>
}