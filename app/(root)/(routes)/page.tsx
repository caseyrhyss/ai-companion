import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const RootPage = () => {
    return ( 
        <div className="container mx-auto my-10 ">
            <div className="px-6 lg:px-16 py-10 rounded-3xl">
                <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                <div className="flex flex-col gap-5 lg:gap-10">
                    <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
                    a unique approach <br className="lg:flex hidden"/> to talk <br className="lg:flex hidden" /> companions
                    online
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-500">
                    We craft companions for you to converse <br  className="lg:flex hidden"/> with in moments of solitude.
                    </p>
                    {/* <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button> */}
                    <div>
                        <Button variant="premium" size="sm">
                        Get Started
                        <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                        </Button>
                    </div>
                </div>
                <img src="/Image.png" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default RootPage;