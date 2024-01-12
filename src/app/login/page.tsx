"use client";

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";

//Login Page
export default function LoginPage() {
  const router = useRouter();

  //로그인
  const login = () => {
    router.push("/admin/dashboard");
  };
  return (
    <section className="flex items-center justify-center h-screen bg-slate-500">
      <div className="relative p-10 bg-white border rounded-lg shadow-lg">
        <div className="absolute -top-1/2">Jinong</div>

        <div className="flex flex-col">
          <Input
            className="p-2 mb-3 text-lg text-red-400 border border-t-0 border-l-0 border-r-0 rounded-none"
            // value={""}
            placeholder="아이디"
          />
          <Input
            className="p-2 mb-10 text-lg text-red-400 border border-t-0 border-l-0 border-r-0 rounded-none"
            // value={""}
            placeholder="비밀번호"
          />
          <Button
            type="primary"
            size="large"
            // className="p-4 mt-12 text-lg text-white rounded-md bg-slate-900"
            onClick={login}
          >
            로그인
          </Button>
        </div>
      </div>
    </section>
  );
}
