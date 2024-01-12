import { MenuOutlined, HomeOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Navbar from "~/ui/dashboard/navbar/Navbar";
import Sidebar from "~/ui/dashboard/sidebar/Sidebar";

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
      <div>
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
