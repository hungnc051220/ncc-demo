"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";
import Loading from "../loading";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useOverlay } from "@/hooks/use-overlay";

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const overlay = useOverlay();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      redirect: false
    })
      .then((callback) => {
        setLoading(false);
        if (callback?.error) {
          toast.error(callback?.error);
        }
        if (callback?.ok && !callback?.error) {
          router.refresh();
          onClose();
          overlay.onOpen();
        }
      })
      .finally(() => setLoading(false));
  };

  const socialAction = (action: string) => {
    setLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
        }
        if (callback?.ok) {
          console.log("ok");
        }
      })
      .finally(() => setLoading(false));
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Modal title="Đăng nhập" isOpen={isOpen} onClose={onClose}>
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
                        autoComplete="new-password"
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
                  {loading ? <Loading /> : "Đăng nhập"}
                </Button>
              </div>

              {/* <div
                className={cn(
                  loading ? "pointer-events-none opacity-80" : "",
                  "flex gap-4 items-center justify-center w-full mt-6"
                )}
              >
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
              </div> */}
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
