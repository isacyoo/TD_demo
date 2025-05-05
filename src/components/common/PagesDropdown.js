import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import Link from "next/link"

const pages = [
    { name: "Home", href: "/pages/home"},
    { name: "Dashboard", href: "/pages/dashboard"},
    { name: "Actions", href: "/pages/actions"},
    { name: "Review event", href: "/pages/review-event"},
    { name: "Schedule", href: "/pages/schedule"},
    { name: "Members", href: "/pages/members"}
]

export default function PagesDropdown({ underline }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={underline ? "border-b-2 border-primary my-2" : ""}>Pages</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Pages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {pages.map((page) => (
                    <DropdownMenuItem key={page.name}>
                        <Link href={page.href}>{page.name}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    )
}