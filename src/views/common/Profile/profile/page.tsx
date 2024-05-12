import { Separator } from "@/components/ui/separator.tsx"
import { ProfileForm } from "@/views/common/Profile/profile/profile-form.tsx"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import {useAppSelector} from "@/store";

export default function SettingsProfilePage() {
  const {account} = useAppSelector(state => state.auth)
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <div className={'flex items-center justify-center flex-1'}>
        <Avatar className="w-[64px] h-[64px]" >
          <AvatarImage src={account?.avatar} alt="@shadcn" />
          <AvatarFallback>
            <UserIcon size={32}/>
          </AvatarFallback>
        </Avatar>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}
