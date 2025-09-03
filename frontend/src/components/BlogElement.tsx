import { Link } from "react-router-dom"

interface BlogElementpoprs{
    AuthorName:string
    title:string
    content:string
    publishedDate:string 
    id:string
}
export const BlogElement=({AuthorName,
    id,
    title,
    content,
    publishedDate
}:BlogElementpoprs)=>{
    return <Link to={`/blog/${id}`}> <div className="p-4 w-screen max-w-screen-md cursor-pointer"> 
        <div className="flex">
        <div className="flex justify-center flex-col"><Avatar AuthorName={AuthorName} /></div>
        <div className="font-extralight pl-2">{AuthorName}</div>
        <div className="flex justify-center flex-col pl-2"><Dot/></div>
        <div className="pl-2 font-thin text-slate-400">{publishedDate}</div></div>
        <div className="font-bold text-3xl ">{title}</div>
        <div className="font-light mt-2">{content.slice(0,100)+"..."}</div>
        <div className="bg-slate-200 w-25 flex rounded-full justify-center mt-4">{Math.ceil((content.length)/100)+" min read"}</div>
        <div className="border border-b border-gray-200 mt-6"></div>
    </div>
    </Link>
}

export function Avatar({ AuthorName ,size="small" }:{AuthorName:string,size?:"small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size=="small"?"w-6 h-6":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full`}>
        <span className={`text-gray-600 ${size=="small"?"text-xs":""}`}>{AuthorName[0]}</span>
    </div>
}
function Dot(){
    return <div className="bg-gray-400 rounded-full w-0.5 h-0.5 ">

    </div>
}