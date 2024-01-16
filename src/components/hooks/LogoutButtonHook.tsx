"use client";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";

const LogoutButtonHook = () => {
  const router = useRouter();
  const logout = async () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      message.open({
        type: "success",
        content: "로그아웃 되었습니다.",
      });

      router.replace("/login");
    }
  };
  return <Button onClick={logout}>로그아웃</Button>;
};

export default LogoutButtonHook;
