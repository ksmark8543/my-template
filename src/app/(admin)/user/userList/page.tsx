"use client";
import { Button, Flex, Select, Space, Table } from "antd";
import { useState } from "react";
import type { TableColumnsType } from "antd";
// const dataSource = [
//   {
//     key: "1",
//     name: "Mike",
//     age: 32,
//     address: "10 Downing Street",
//   },
//   {
//     key: "2",
//     name: "John",
//     age: 42,
//     address: "10 Downing Street",
//   },
// ];

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
// ];

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     render: (text: string) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
// ];
interface DataType {
  // key: React.Key;
  id: string;
  grpName: string;
  userType: string;
  regDate: string;
  useYN: string;
}
export default function UserListPage() {
  const [dataSource, setDataSource] = useState([]);
  const columns: TableColumnsType<DataType> = [
    {
      title: "grpName",
      dataIndex: "grpName",
      key: "grpName",
      sorter: (a: any, b: any) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
    {
      title: "userType",
      dataIndex: "userType",
      key: "userType",
      sorter: (a: any, b: any) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
    {
      title: "regDate",
      dataIndex: "regDate",
      key: "regDate",
      sorter: (a: any, b: any) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
    {
      title: "useYN",
      dataIndex: "useYN",
      key: "useYN",
      sorter: (a: any, b: any) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
  ];

  const onSearchClick = async () => {
    const response = await fetch("http://localhost:8888/users");
    const jsonData = await response.json();
    console.log(jsonData);
    setDataSource(jsonData);
  };
  return (
    <div>
      {/* <Input /> */}
      <div className="flex gap-4 px-4 py-3 mb-3 bg-white border border-solid rounded-md border-slate-200">
        <Button type="primary" onClick={onSearchClick}>
          검색
        </Button>
        <Flex wrap="wrap" gap="small">
          <Space>
            <span className="text-sm text-slate-800">그룹구분</span>
            <Select
              aria-label="사용자구분"
              className="w-32"
              value={"관리자"}
              options={[
                { value: "관리자", label: "관리자" },
                { value: "일반농가", label: "일반농가" },
              ]}
            />
          </Space>
        </Flex>
      </div>
      <Table
        className="border border-solid rounded-md border-slate-200"
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: 400 }}
      />
    </div>
  );
}
