import {Mail} from "@/views/Main-Screen/Message/components/mail.tsx";
import {accounts, mails} from "@/views/Main-Screen/Message/data.tsx";


export default function MailPage() {
  return (
      <div className="flex flex-1 min-h-0 flex-col">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={[]}
          navCollapsedSize={4}
        />
      </div>
  )
}
