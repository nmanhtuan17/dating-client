import {ComponentProps} from "react"
import {cn} from "@/lib/utils"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Badge} from "@/components/ui/badge.tsx";
import {useMail} from "@/views/Main-Screen/Message/use-mail.ts";
import {Mail} from "@/views/Main-Screen/Message/data.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

interface MailListProps {
  items: Mail[]
}

export function MailList({items}: MailListProps) {
  const [mail, setMail] = useMail()

  return (
    <div className="flex flex-col gap-2 p-4 pt-0">
      {items.map((item) => (
        <button
          key={item.id}
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            mail.selected === item.id && "bg-muted"
          )}
          onClick={() =>
            setMail({
              ...mail,
              selected: item.id,
            })
          }
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Avatar className={'w-[32px] h-[32px]'}>
                  <AvatarImage alt={''}/>
                  <AvatarFallback>
                    {'TUAN'
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="font-semibold">{item.name}</div>
                {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600"/>
                )}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}
