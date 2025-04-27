import Link from 'next/link'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

import { House, LayoutDashboard, MousePointerClick, MonitorPlay, Calendar, CircleAlert } from 'lucide-react';

export default function PagesSidebar() {

    const items = [
        {
            title: "Home",
            url: "/pages/home",
            icon: House,
        },
        {
            title: "Dashboard",
            url: "/pages/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Actions",
            url: "/pages/actions",
            icon: MousePointerClick
        },
        {
            title: "Review Event",
            url: "/pages/review-event",
            icon: MonitorPlay,
        },
        {
            title: "Schedule",
            url: "/pages/schedule",
            icon: Calendar ,
        },
        {
            title: "Members",
            url: "/pages/members",
            icon: CircleAlert ,
        }
      ]
    return (
        <Sidebar variant="floating">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Pages</SidebarGroupLabel>
                    <SidebarGroupContent>  
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <Link href={item.url} className="flex items-center">
                                        <item.icon className="mr-2" />
                                        {item.title}
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}