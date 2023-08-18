"use client";

import { useEffect, useState } from "react";
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
import { redirect, useRouter } from "next/navigation";
import Loading from "@/components/loading";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  name: z.string().min(1),
  idCard: z.string().min(1),
  phoneNumber: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
});

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      idCard: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post("/api/register", values);
      signIn("credentials", values);
      onClose();
      toast.success("Đăng ký thành công");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Đăng ký"
      isOpen={isOpen}
      onClose={onClose}
      contentClassName="max-w-xl"
    >
      <div>
        <div className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
              <div className="flex items-center gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Họ và tên</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Họ và tên"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="idCard"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>CMND/CCCD</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="CMND/CCCD"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-5 mt-5">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Số điện thoại"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Email"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-5 flex items-center gap-5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
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
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Xác nhận mật khẩu</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Xác nhận mật khẩu"
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

              <div className="mt-8 w-full">
                <Button
                  disabled={loading}
                  type="submit"
                  variant="destructive"
                  className="w-full"
                >
                  {loading ? <Loading /> : "Đăng ký"}
                </Button>
              </div>
              <p className="mt-8 text-center text-sm">
                Bạn đã có tài khoản?{" "}
                <a className="text-red-500 hover:underline cursor-pointer">
                  Đăng nhập
                </a>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
