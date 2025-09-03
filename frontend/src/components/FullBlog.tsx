import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogElement"

export const FullBlog=({ blog }:{blog:Blog})=>{
    return <div>
        <Appbar AuthorName="Anugrah R K"/>
        <div className="flex justify-center">
         <div className="grid grid-cols-12 px-10 w-full pt-12  max-w-screen-2xl">
        <div className=" col-span-8">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-200 pt-2">Posted on {blog.publishedDate}</div>
            <div className="pt-4">{blog.content}</div>
            </div>
            <div className="col-span-4">
                        <div className="text-slate-600 text-lg">Author</div>

                <div className="flex">
                    <div className="flex justify-center flex-col pr-4"><Avatar size="big" AuthorName={blog.author.name || "Anonymous"}/></div>
                    <div>
                        <div className="font-bold text-xl">{blog.author.name || "Anonymous"}</div>
                        <div className="pt-2 text-slate-500">Random catch phrase</div>
                    </div>
                
                </div>
                
        </div>
        
    </div>
    </div>
    </div>
}