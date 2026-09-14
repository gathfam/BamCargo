"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@bamcargo/ui";
import { Field, FieldGroup, FieldLabel } from "@bamcargo/ui/field";
import { Input } from "@bamcargo/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLoading) return;
    setIsLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      console.log(res);
      if (res?.error) {
        setError(res.error);
      } else if (res?.ok) {
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-md">
        <div className="flex justify-center w-full mb-8">
          <Image
            width={240}
            height={40}
            alt="logo_bamcargo"
            src="/logo-Bam-Cargo-100.png"
            className="object-contain self-center"
            priority
          />
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-[#e31e24] text-red-700 p-4 rounded-md mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          method="post"
          action="#"
          noValidate
          className="space-y-5"
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="login-username">Username</FieldLabel>
              <Input
                id="login-username"
                name="username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
                placeholder="Masukkan username"
                autoComplete="username"
                required
                disabled={isLoading}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="login-password">Password</FieldLabel>
              <Input
                id="login-password"
                name="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                placeholder="Masukkan password"
                autoComplete="current-password"
                required
                disabled={isLoading}
              />
            </Field>
            <Field orientation="horizontal">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
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
