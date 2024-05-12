import { Separator } from "@/components/ui/separator.tsx"
import { ProfileForm } from "@/views/common/Profile/profile/profile-form.tsx"
import {ProfileAvatar} from "@/views/common/Profile/profile/avatar.tsx";

export default function SettingsProfilePage() {

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <ProfileAvatar />
      <Separator />
      <ProfileForm />
    </div>
  )
}
