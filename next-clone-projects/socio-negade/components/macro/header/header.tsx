import { NavBar } from "./main-header"
import { TopHeader } from "./top-header"

interface HeaderProps {

}
export const Header = ({ }: HeaderProps) => {

    return <div className='flex flex-col' >
        <TopHeader />
        <NavBar />
    </div>
}