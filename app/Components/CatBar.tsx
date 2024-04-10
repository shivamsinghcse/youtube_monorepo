import { Car, Compass } from "lucide-react";

export default function CategouryBar(){
    const cat=[
        {
            name: 'All',
        },
        {
            name: 'Music',
        },
        {
            name: 'Mixes',
        },
        {
            name: 'AMVs',
        },
        {
            name: 'News',
        },
    ]
    return(<div className="flex gap-2 overflow-x-scroll">
        <Card>
        <Compass></Compass>
        </Card>
        {cat.map((item,index)=><Card key={index}>{item.name}</Card>)}
    </div>
    )
}
function Card({children}){
    return(
        <div  className="h-10 border-2 w-fit border-black p-2 px-4 rounded-2xl">
        {children}
        </div>
    )
}