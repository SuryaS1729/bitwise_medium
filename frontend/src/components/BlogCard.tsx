
interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps)=>{

    return <div className="flex justify-center flex-col bg-fuchsia-400">
        <div><Avatar name={authorName}/> {authorName}·{publishedDate}</div>
        <div>{title}</div>
        <div>{content.slice(0,100)+"..."}</div>
        <div>{`${Math.ceil(content.length/100)} min read`}</div>
        <div className="bg-slate-300 h-0.5 w-full" ></div>
    </div>
}

function Avatar({name}:{name:string}){
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}