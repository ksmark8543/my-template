import { MenuOutlined, HomeOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Navbar from "~/ui/dashboard/navbar/Navbar";
import Sidebar from "~/ui/dashboard/sidebar/Sidebar";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      {children}
    </div>
  );
  // return (
  //   <div>
  //     {/* top */}
  //     <div className="flex items-center gap-3 px-5 py-5 text-xl">
  //       <Button icon={<MenuOutlined />}></Button>
  //       강원도특별자치도 농업기술원
  //     </div>
  //     {/* left */}
  //     <div className="flex bg-slate-50">
  //       <div className="h-screen py-10 text-white w-[280px] rounded-tr-3xl bg-slate-600">
  //         <div className="flex items-center px-3 font-bold">
  //           <div className="flex px-2">
  //             <div className="pr-2">
  //               <HomeOutlined />
  //             </div>

  //             <div>메인&대시보드</div>
  //           </div>
  //           <UpOutlined className="ml-auto" />
  //         </div>
  //       </div>
  //       {/* right */}
  //       <div className="w-full p-5 bg-slate-50">{children}</div>
  //     </div>
  //   </div>
  // );
}
