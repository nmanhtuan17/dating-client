"use client"

import * as React from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import {cn} from "@/lib/utils"
import {Input} from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {Separator} from "@/components/ui/separator"
import {useMail} from "@/views/Main-Screen/Message/use-mail.ts";
import {MailList} from "@/views/Main-Screen/Message/components/mail-list.tsx";
import {MailDisplay} from "@/views/Main-Screen/Message/components/mail-display.tsx";
import {type Mail} from "@/views/Main-Screen/Message/data"

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
                       accounts,
                       mails,
                       defaultLayout = [265, 440, 655],
                       defaultCollapsed = false,
                       navCollapsedSize,
                     }: MailProps) {
  const [mail] = useMail()

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`
      }}
      className="h-full max-h-[800px] items-stretch"
    >
      <ResizablePanel defaultSize={15} minSize={15} maxSize={30}>
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Inbox</h1>
        </div>
        <Separator/>
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"/>
              <Input placeholder="Search" className="pl-8"/>
            </div>
          </form>
        </div>
        <div className={'flex min-h-0 flex-1 overflow-y-auto h-full'}>
          <MailList items={mails}/>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle/>
      <ResizablePanel defaultSize={defaultLayout[2]}>
        <MailDisplay
          mail={mails.find((item) => item.id === mail.selected) || null}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
