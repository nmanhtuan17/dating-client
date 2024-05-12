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
import {useAppSelector} from "@/store";

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
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const {account} = useAppSelector(state => state.auth)
  console.log(account )
  const defaultValues: Partial<ProfileFormValues> = {
    address: account?.address,
    fullName: account?.fullName,
    email: account?.email,
    age: account?.age
  }
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })


  function onSubmit(data: ProfileFormValues) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({field}) => (
            <FormItem>
              <FormLabel>You name</FormLabel>
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
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="age" {...field} />
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
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="You current address"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
