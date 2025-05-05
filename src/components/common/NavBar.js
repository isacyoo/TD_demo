import Link from 'next/link'
import ModeToggle from "@/components/common/ModeToggle";
import PagesDropdown from "./PagesDropdown";

export default function NavBar() {
    return (
        <div className='flex items-center w-auto h-12 p-4 shadow-md'>
            <Link href ='/' className='ml-7'>
                Home
            </Link>
            <div className='h-7 w-0.5 border-l-2 border-l-primary/20 mx-7'></div>
            <div className='flex items-center ml-auto mr-2'>
                <ModeToggle />
                <div className='h-7 w-0.5 border-l-2 border-l-primary/20 mx-7'></div>
                <PagesDropdown />
                <div className='h-7 w-0.5 border-l-2 border-l-primary/20 mx-7'></div>
                <Link href='/api-reference'>API Reference</Link>
                <div className='h-7 w-0.5 border-l-2 border-l-primary/20 mx-7'></div>
                <Link href='/architecture'>Architecture</Link>
                <div className='h-7 w-0.5 border-l-2 border-l-primary/20 mx-7'></div>
                <Link href='/erd'>ERD</Link>
                <div className='h-7 w-0.5 border-l-2 border-l-primary/20 mx-7'></div>
                <Link href='/demo'>Start Demo</Link>                           
            </div>
        </div>
    )
  }