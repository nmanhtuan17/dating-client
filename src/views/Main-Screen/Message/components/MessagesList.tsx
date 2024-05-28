import {cn} from "@/lib/utils"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/store";
import {useEffect} from "react";
import {RequestService} from "@/services/request.service.ts";
import {ApiService} from "@/services/api.service.ts";
import {getAllConversation} from "@/store/Action/app.action.ts";
import {getReceiver} from "@/utils/getReceiver.ts";


export function MessagesList() {
  const navigate = useNavigate();
  const {conversationId} = useParams();
  const {conversations} = useAppSelector(state => state.message);
  const dispatch = useAppDispatch();
  const {account} = useAppSelector(state => state.auth);
  useEffect(() => {
    dispatch(getAllConversation())
  }, []);
  return (
    <div className="flex flex-col gap-2 p-4 pt-0 w-full">
      {conversations.map((item) => (
        <button
          key={item._id}
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            (conversationId && conversationId === item._id) && "bg-muted"
          )}
          onClick={() => {
            navigate(`/message/${item._id}`)
          }}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Avatar className={'w-[32px] h-[32px]'}>
                  <AvatarImage src={getReceiver(item.participants, account?._id)?.avatar}/>
                  <AvatarFallback>
                    {getReceiver(item.participants, account._id).fullName
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")
                      .toUpperCase()
                    }
                  </AvatarFallback>
                </Avatar>
                <div className="font-semibold">{getReceiver(item.participants, account._id).fullName}</div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
