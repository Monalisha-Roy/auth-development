"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      //redirect('/signin');
      router.push("/home");
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>firebase auth</h1>
    </main>
  );
}

Home.requireAuth = true