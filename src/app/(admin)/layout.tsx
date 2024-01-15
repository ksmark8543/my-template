import Navbar from "~/components/admin/navbar/Navbar";
import Sidebar from "~/components/admin/sidebar/Sidebar";
import LogoutButtonHook from "~/components/hooks/LogoutButtonHook";
import PageNameHook from "~/components/hooks/PageNameHook";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Navbar userName="제이든님" logout={<LogoutButtonHook />} />
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
