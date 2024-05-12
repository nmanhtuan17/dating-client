import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Camera, UserIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/store";
import {Button} from "@/components/ui/button.tsx";
import {useRef} from "react";
import {ApiService} from "@/services/api.service.ts";
import {uploadAvatar} from "@/store/Action/app.action.ts";
import {Spin} from "antd";

export const ProfileAvatar = () => {
  const {account} = useAppSelector(state => state.auth)
  const {appLoading} = useAppSelector(state => state.app)
  const inputRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    dispatch(uploadAvatar(formData)).then(res => {
      console.log(res)
    });
  }
  return (
    <div className={'flex items-center justify-center'}>
      <div className={'relative'}>
        <Avatar className="w-[100px] h-[100px] items-center">
          <AvatarImage src={account?.avatar} alt="@shadcn"/>
          <AvatarFallback>
            {
              appLoading ? <Spin /> : <UserIcon size={32}/>
            }
          </AvatarFallback>
        </Avatar>
        <div
          className='absolute bottom-0 right-0 p-2 rounded-full bg-blue-400 cursor-pointer'
          onClick={() => {
            inputRef.current.click();
          }}
        >
          <Camera color={'#fff'} size={18}/>
        </div>
        <input
          ref={inputRef}
          type={'file'}
          className={'hidden'}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
