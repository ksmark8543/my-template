import { MenuOutlined, HomeOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Navbar from "~/ui/admin/navbar/Navbar";
import Sidebar from "~/ui/admin/sidebar/Sidebar";

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
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}
