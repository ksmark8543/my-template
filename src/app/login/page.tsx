"use client";

import { useRouter } from "next/navigation";

//Login Page
export default function LoginPage() {
  const router = useRouter();

  //로그인
  const login = () => {
    router.push("/dataSearchCmn");
  };
  return (
    <section className="flex items-center justify-center h-screen bg-slate-500">
      <div className="p-10 bg-white border rounded-lg shadow-lg">
        {/* <div className="text-4xl text-slate-400">Jinong</div> */}
        <div className="flex flex-col">
          <input
            className="p-2 text-lg border border-t-0 border-l-0 border-r-0"
            // value={""}
            placeholder="아이디"
          />
          <input
            className="p-2 mt-5 text-lg border border-t-0 border-l-0 border-r-0"
            // value={""}
            placeholder="비밀번호"
          />
          <button
            className="p-4 mt-12 text-lg text-white rounded-md bg-slate-900"
            onClick={login}
          >
            로그인
          </button>
        </div>
      </div>
    </section>
  );
}
