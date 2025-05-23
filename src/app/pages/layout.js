import PagesSidebar from '@/components/pages/Sidebar'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function PagesLayout({ children }) {
    return (
        <div className='flex w-full'>
            <SidebarProvider>
                <PagesSidebar />
                <SidebarTrigger />
                <div className='m-8 w-full md:w-1/2'>
                    {children}
                </div>
            </SidebarProvider>
        </div>
    )
  }