import { Clapperboard, Home, ListVideo, Podcast } from "lucide-react";

export default function Footer(){
    return(
        <div className="fixed bottom-0 bg-white w-full h-12 items-center flex justify-between">
            <div className="flex flex-col mx-2 text-sm items-center">
                <Home></Home>
                Home
            </div>
            <div className="flex flex-col mx-2 text-sm items-center">
                <Clapperboard></Clapperboard>
                Shorts
            </div>
            <div className="flex flex-col mx-2 text-sm items-center"><Podcast></Podcast>
            Subscriptions
            </div>
            <div className="flex flex-col mx-2 text-sm items-center"><ListVideo></ListVideo>
            Library
            </div>
        </div>
    )
}