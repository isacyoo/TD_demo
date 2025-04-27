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
    { name: "Review event", href: "/pages/revew-event"},
    { name: "Schedule", href: "/pages/schedule"},
    { name: "Members", href: "/pages/members"}
]

export default function PagesDropdown() {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger>Pages</DropdownMenuTrigger>
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