"use client";

import { useState } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    signIn("credentials", {
      ...values,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          console.log(callback?.error);
        }
        if (callback?.ok && !callback?.error) {
          console.log("OK");
        }
      })
      .finally(() => setLoading(false));
  };

  const socialAction = (action: string) => {
    setLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          console.log(callback?.error);
        }
        if (callback?.ok) {
          console.log("ok");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Modal
      title="Đăng nhập"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên đăng nhập</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Tên đăng nhập"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mật khẩu</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Mật khẩu"
                          type="password"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <p className="text-red-500 text-end mt-3 text-sm cursor-pointer hover:underline">
                Quên mật khẩu?
              </p>
              <div className="mt-8 w-full">
                <Button
                  disabled={loading}
                  type="submit"
                  variant="destructive"
                  className="w-full"
                >
                  Đăng nhập
                </Button>
              </div>

              <div className="flex gap-4 items-center justify-center w-full mt-6">
                <div
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                  onClick={() => socialAction("google")}
                >
                  <FcGoogle size={30} />
                </div>
                <div
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                  onClick={() => socialAction("github")}
                >
                  <AiFillGithub size={30} color="#000" />
                </div>
              </div>
              <p className="mt-8 text-center text-sm">
                Bạn chưa có tài khoản?{" "}
                <a className="text-red-500 hover:underline cursor-pointer">
                  Đăng ký
                </a>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
