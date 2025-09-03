import { Link } from "react-router-dom"
import { Avatar } from "./BlogElement"

export const Appbar=({AuthorName}:{AuthorName:string})=>{
    return <div className=" border border-b py-2 border-slate-100 flex justify-between px-10">
            <div className="font-medium text-lg flex justify-center flex-col cursor-pointer">
                <Link to={"/blogs"}>Medium</Link></div>
            <div>
                <Link to={'/publish'}><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-10 cursor-pointer">Create</button></Link>
                <Avatar AuthorName={AuthorName[0]} size={"big"}/></div>
    </div>
}