import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = ()=>{
    return <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="max-w-xl">
        
                <BlogCard
                authorName={"Sahithi Natva"} title={"How to start a startup"} content={"Start with a clear problem to solve. Validate your idea, build an MVP, form a solid team, iterate with user feedback, secure funding, and scale wisely."} publishedDate={"2nd August 2024"}
            />
            <BlogCard
                authorName={"Sahithi Natva"} title={"How to start a startup"} content={"Start with a clear problem to solve. Validate your idea, build an MVP, form a solid team, iterate with user feedback, secure funding, and scale wisely."} publishedDate={"2nd August 2024"}
            />
            <BlogCard
                authorName={"Sahithi Natva"} title={"How to start a startup"} content={"Start with a clear problem to solve. Validate your idea, build an MVP, form a solid team, iterate with user feedback, secure funding, and scale wisely."} publishedDate={"2nd August 2024"}
            />
            </div>
        </div>
    </div>
}