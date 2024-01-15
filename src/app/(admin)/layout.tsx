import { MenuOutlined, HomeOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Navbar from "~/components/admin/navbar/Navbar";
import Sidebar from "~/components/admin/sidebar/Sidebar";
import PageNameHook from "~/components/hooks/MenuNameHook";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex bg-slate-50">
        <Sidebar />
        <div className="p-3 grow">
          <div>
            <PageNameHook />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
