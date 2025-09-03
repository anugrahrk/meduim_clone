import { Appbar } from "../components/Appbar"
import { BlogElement } from "../components/BlogElement"
import { Skeleton } from "../components/Skeleton"
import { useBlogs } from "../hooks"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs()
    if (loading){
        return <div>
    <Appbar AuthorName="Anugrah R K"/> 
    <div className="flex justify-center w-full">
        <div className="p-4 w-screen max-w-screen-md">
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
        </div>  
        </div>
    }
    return <div> 
    <Appbar AuthorName="Anugrah R K"/> 
    <div className="flex justify-center">  
        <div className="">
        {blogs.map(blog => <BlogElement id={blog.id} AuthorName={blog.author.name || "Anonymous"} content={blog.content} title={blog.title} publishedDate="31-08-2025"/>)
    
        }
    </div>
    </div> 
    </div>
 
}