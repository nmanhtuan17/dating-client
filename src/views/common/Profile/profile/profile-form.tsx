"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {cn} from "@/lib/utils.ts"
import {Button} from "@/components/ui/button.tsx"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx"
import {Input} from "@/components/ui/input.tsx"
import {Textarea} from "@/components/ui/textarea.tsx"
import React from "react";
import {useAppDispatch, useAppSelector} from "@/store";
import {updateProfile} from "@/store/Action/app.action.ts";
import {InputNumber} from "antd";

const profileFormSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  age: z
    .number({
      required_error: "Please enter an age to display.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  address: z.string().max(160).min(4),
  favorite: z.string()
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const dispatch = useAppDispatch();
  const {account} = useAppSelector(state => state.auth)
  const defaultValues: Partial<ProfileFormValues> = {
    address: account?.address,
    fullName: account?.fullName,
    email: account?.email,
    age: account?.age,
    favorite: account?.favorite
  }
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })


  function onSubmit(data: ProfileFormValues) {
    dispatch(updateProfile(data));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({field}) => (
            <FormItem>
              <FormLabel>Họ tên</FormLabel>
              <FormControl>
                <Input placeholder="fullname" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({field}) => (
            <FormItem>
              <FormLabel className={'me-2'}> Tuổi: </FormLabel>
              <FormControl>
                <InputNumber placeholder="age" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({field}) => (
            <FormItem>
              <FormLabel> Địa chỉ </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Địa chỉ hiện tại"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="favorite"
          render={({field}) => (
            <FormItem>
              <FormLabel> Sở thích </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Sở thích của bạn"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Cập nhật</Button>
      </form>
    </Form>
  )
}
