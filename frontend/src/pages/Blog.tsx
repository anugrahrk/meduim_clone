import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog"
import { Appbar } from "../components/Appbar"

export const Blog=()=>{
    const {id}=useParams()
    const {loading,blog}=useBlog({
        id:id ||""
    })
    if (loading || !blog){
        return <div>
                <Appbar AuthorName="Anugrah R K"/>
                <div className="flex justify-center">
                 <div className="grid grid-cols-12 px-10 w-full pt-12  max-w-screen-2xl">
                <div className=" col-span-8">
                    <div className="text-3xl font-extrabold"><BlogSkeleton/></div>
                    <div className="text-slate-200 pt-2"><BlogSkeleton/></div>
                    <div className="pt-4"><BlogSkeleton/>
                    <BlogSkeleton/><BlogSkeleton/>
                    </div>
                    </div>
                    <div className="col-span-4">
                                <div className="text-slate-600 text-lg"><BlogSkeleton/></div>
        
                        <div className="flex">
                            <div className="flex justify-center flex-col pr-4"><BlogSkeleton/></div>
                            
                        
                        </div>
                        
                </div>
                
            </div>
            </div>
            </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}
export const BlogSkeleton=()=>{
    return <div className="w-full">
        <div role="status" className="max-w-2xl animate-pulse ">
    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    <span className="sr-only">Loading...</span>
</div>
    </div> 
}