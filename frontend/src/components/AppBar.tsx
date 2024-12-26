import { Avatar } from "./BlogCard"

export const AppBar = ()=>{
    return <div className="py-5 border-b flex justify-between px-10">
        <div className="flex justify-center flex-col font-mono font-bold">HerRise</div>
        <div><Avatar size={"big"} name={"sahithi"}/></div>
    </div>
}