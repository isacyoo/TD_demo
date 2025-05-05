import Link from 'next/link'
import ModeToggle from "@/components/common/ModeToggle";
import PagesDropdown from "./PagesDropdown";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export default function NavBar() {
    return (
        <>
            <NavBarWide />
            <NavBarNarrow />
        </>
    )
}

function NavBarWide() {
    return (
        <div className='items-center w-auto h-12 p-4 shadow-md hidden lg:flex'>
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

function NavBarNarrow() {
    return (
        <Sheet>
            <div className='flex lg:hidden justify-end p-4'>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
            </div>
            <SheetContent side="right">
                <SheetHeader className="flex items-center justify-between flex-row mt-4">
                    <SheetTitle className="mt-2">Menu</SheetTitle>
                    <ModeToggle />
                </SheetHeader>
                <div className='flex flex-col items-start w-full h-full p-4'>
                    <Link href ='/' className='my-4 border-b-2 border-b-primary'>
                        Home
                    </Link>
                    <PagesDropdown underline/>
                    <Link href='/api-reference' className='my-4 border-b-2 border-b-primary'>API Reference</Link>
                    <Link href='/architecture' className='my-4 border-b-2 border-b-primary'>Architecture</Link>
                    <Link href='/erd' className='my-4 border-b-2 border-b-primary'>ERD</Link>
                    <Link href='/demo' className='my-4 border-b-2 border-b-primary'>Start Demo</Link>                           

                </div>
            </SheetContent>
        </Sheet>
    )
}