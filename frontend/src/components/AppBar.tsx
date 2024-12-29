import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = ()=>{
    return <div className="py-5 border-b flex justify-between px-10">
        <Link to={"/blogs"} className="flex justify-center flex-col font-mono font-bold cursor-pointer">HerRise</Link>
        <div>
        <Link to={"/publish"}><button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New Blog</button></Link>

            <Avatar size={"big"} name={"sahithi"}/>
        </div>
    </div>
}