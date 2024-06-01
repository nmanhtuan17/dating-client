import * as React from "react"
import {
  Search,
} from "lucide-react"

import {Input} from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {Separator} from "@/components/ui/separator"
import {MessagesList} from "@/views/Main-Screen/Message/components/MessagesList.tsx";

import {Outlet} from "react-router-dom";

interface MailProps {
  defaultLayout?: number[] | undefined
}

export function Room({
                       defaultLayout = [265, 440, 655],
                     }: MailProps) {

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full"
    >
      <ResizablePanel defaultSize={20} minSize={15} maxSize={20}>
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Inbox</h1>
        </div>
        <Separator/>
        <div className={'flex min-h-0 flex-1 overflow-y-auto h-full'}>
          <MessagesList/>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle/>
      <ResizablePanel defaultSize={defaultLayout[2]}>
        <Outlet/>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
