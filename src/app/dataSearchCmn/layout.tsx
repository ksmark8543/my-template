import { MenuOutlined, HomeOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* top */}
      <div className="flex items-center gap-3 px-5 py-5 text-xl">
        <Button icon={<MenuOutlined />}></Button>
        강원도특별자치도 농업기술원
      </div>
      {/* left */}
      <div className="flex bg-slate-50">
        <div className="h-screen py-6 text-white w-60 rounded-tr-3xl bg-slate-400">
          <div className="flex items-center px-3 font-bold">
            <div className="flex gap-2">
              <HomeOutlined />
              <div>메인&대시보드</div>
            </div>
            <UpOutlined className="ml-auto" />
          </div>
        </div>
        {/* right */}
        <div className="w-full p-5 bg-slate-50">{children}</div>
      </div>
    </div>
  );
}
