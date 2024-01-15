import { MdDashboard, MdPerson } from "react-icons/md";

const menuGroups = [
  {
    name: "대시보드",
    icon: <MdDashboard />,
    pathname: "dashboard",
    children: [
      {
        name: "메인",
        pathname: "/dashboard",
      },
    ],
  },
  {
    name: "사용자관리",
    pathname: "user",
    icon: <MdPerson />,
    children: [
      {
        name: "사용자관리",
        pathname: "/user/userList",
      },
      {
        name: "그룹관리",
        pathname: "/user/groupList",
      },
    ],
  },
];
export default menuGroups;
