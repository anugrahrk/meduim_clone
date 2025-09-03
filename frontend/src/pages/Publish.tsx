import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../auth"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

export const Publish=()=>{
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const navigate=useNavigate()

    return<div>
        <Appbar AuthorName="A"/>
        <div className="flex justify-center w-full pt-10">
        <div className="max-w-screen-lg w-full">
        <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Enter your title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none" />
        <ContentArea onChange={(e)=>setContent(e.target.value)}/>
         <button onClick={async()=>{
    const response =await axios.post(`${BACKEND_URL}/api/v1/blog`,{
        title,
        content
    },{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
    navigate(`/blog/${response.data.id}`)
   }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 mt-5">
       Publish post
   </button>
    </div>
    </div>
    </div>
}
function ContentArea({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=> void}){
    return <div className="pt-5">
     <div className=" py-2 bg-white rounded-b-lg">
           <label className="sr-only">Publish post</label>
           <textarea id="editor" onChange={onChange} rows={8} className="block w-full text-sm text-gray-800 bg-white border border-gray-300 rounded-lg p-2.5 focus:outline-none   focus:ring-0  " placeholder="Write an article..." required ></textarea>
       </div>
  
   </div>
}