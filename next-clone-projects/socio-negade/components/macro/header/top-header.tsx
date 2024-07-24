import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, FacebookIcon, FanIcon, LucideInstagram, LucideYoutube, MailIcon, MapPin, XSquareIcon } from "lucide-react"

interface TopHeaderProps {

}
export const TopHeader = ({ }: TopHeaderProps) => {

    return <div className=' flex items-center bg-[#1a1a1a] h-[40px] text-[#e9e9e9]' >
        <div className="container flex justify-between items-center ">
            <div className="flex gap-5">
                <div className="flex gap-2 items-center "><MailIcon className="w-4 h-4 " />  example@example.com </div>
                <div className="flex gap-2 items-center"><MapPin className="w-4 h-4 " />  City, State, ZIP Code </div>
            </div>
            <div className="flex gap-5">
                <div className="flex">
                    <Select >
                        <SelectTrigger className="w-fit gap-2">
                            <SelectValue placeholder="English" className="text-black" />
                        </SelectTrigger>
                        <SelectContent className="" >
                            <SelectItem value="light" >English</SelectItem>
                            <SelectItem value="dark" >Amharic</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex gap-2 w-4">
                        <div className="flex gap-2 w-4"><FacebookIcon />  </div>
                        <div className="flex gap-2 w-5"><XSquareIcon />  </div>
                        <div className="flex gap-2 w-5"><LucideYoutube />  </div>
                        <div className="flex gap-2 w-4">< LucideInstagram />  </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}