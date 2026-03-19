"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    setIsLoading(false);

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/admin/artikel");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-md">
        <div className="flex justify-center w-full mb-8">
          <Image
            width="240"
            height="40"
            alt="logo_bamcargo"
            src="/logo-Bam-Cargo-100.png"
            className="object-contain self-center"
          />
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-[#e31e24] text-red-700 p-4 rounded-md mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-username">Username</FieldLabel>
              <Input
                name="username"
                id="fieldgroup-username"
                placeholder="Masukkan username"
                size={12}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
              <Input
                name="password"
                id="fieldgroup-password"
                type="password"
                placeholder="Masukkan password"
                required
              />
            </Field>
            <Field orientation="horizontal">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size={"lg"}
              >
                {isLoading ? "Memverifikasi..." : "Masuk ke Dashboard"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
