import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../auth"
export interface Blog{
    title:string
    content:string
    id:string
    author:{
        name:string
    }
    publishedDate:string
}
export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]=useState(true)
    const [blog,setBlog]=useState<Blog>()
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(response=>{
            setBlog(response.data.post)
            setLoading(false)
        })
    },[id])
    return {
        loading,
        blog
    }
}
export const useBlogs=()=>{
    const [loading, setLoading]=useState(true)
    const [blogs,setBlogs]=useState<Blog[]>([])
    useEffect(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            .then(res=>{
                    setBlogs(res.data.post)
                    setLoading(false)
            })
    },[])
    return {
        loading,
        blogs
    }
}