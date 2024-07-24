
import { Badge } from "@/components/ui/badge"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon, ShoppingCart, User2Icon } from "lucide-react"
import Link from "next/link"
import React from "react"

interface NavBarProps {

}
export const NavBar = ({ }: NavBarProps) => {
    return <div className='container flex items-center justify-between w-full py-2' >
        <div className="flex">
            <Link className="flex font-bold font-sans" href={"/"}>Mini-<span className="text-orange-500">Shop</span></Link>
        </div>
        <div className="flex">
            <div className="flex animate-out">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-orange-500">Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="h-60 w-[900px] bg-orange-500 p-5">

                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-orange-500">Podcast</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="h-60 w-[900px] bg-orange-300 p-5">

                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-orange-500">Shop</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="h-60 w-[900px] bg-orange-300 p-5">

                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-orange-500">About</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="h-60 w-[900px] bg-orange-300 p-5">

                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
        </div>
        <div className="flex">
            <div className="flex">
                <Select >
                    <SelectTrigger className="w-fit gap-2">
                        <SelectValue placeholder="ET (ETB Br)" className="text-black" />
                    </SelectTrigger>
                    <SelectContent className="" >
                        <SelectItem value="light" >ET (ETB Br)</SelectItem>
                        <SelectItem value="dark" >DJ (DJF Fdj)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex gap-2 w-4">
                <div className="flex gap-2 w-8"><SearchIcon />  </div>
                <div className="flex gap-2 w-8"><User2Icon />  </div>
                <div className="flex gap-2 w-8"><ShoppingCart className="flex gap-2 w-8" />
                </div>
                <div className="flex "><Badge className="bg-transparent font-bold w-5 h-5 flex items-center justify-center p-2 text-orange-500 ml-[-15px] mt-[-10px] " variant="outline">12</Badge></div>
            </div>
        </div>

    </div>
}