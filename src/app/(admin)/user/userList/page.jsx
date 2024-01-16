"use client";
import { Button, Flex, Modal, Select, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { MdDownload } from "react-icons/md";
import { fakeAsyncOperation } from "~/helper/fake";
// import { RiFileExcel2Line } from "react-icons/ri";

// import GroupModify from "../../../../components/GroupModify";
import GroupModify from "./GroupModify";
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
// interface DataType {
//   // key: React.Key;
//   id: string;
//   grpName: string;
//   userType: string;
//   regDate: string;
//   useYN: string;
// }
export default function UserListPage() {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      width: "100px",
      // className: "text-center",
      // align: "center",

      // sortDirections: ["descend"],
    },
    {
      title: "그룹명",
      dataIndex: "grpName",
      // key: "grpName",
      sorter: (a, b) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
    {
      title: "사용자구분",
      dataIndex: "userType",
      // key: "userType",
      sorter: (a, b) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
    {
      title: "등록일",
      dataIndex: "regDate",
      // key: "regDate",
      sorter: (a, b) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
    {
      title: "사용여부",
      dataIndex: "useYN",
      // key: "useYN",
      sorter: (a, b) => a.grpName.localeCompare(b.grpName),
      // sortDirections: ["descend"],
    },
    {
      title: "관리",
      dataIndex: "manage",
      render: () => {
        return (
          <Space>
            <Button size="middle" onClick={modalToggle}>
              수정
            </Button>
            <Button size="middle">삭제</Button>
          </Space>
        );
      },
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const searchData = async () => {
    setLoading(true);
    //fake await
    await fakeAsyncOperation(2000);
    const response = await fetch("http://localhost:8888/users");
    const jsonData = await response.json();
    console.log(jsonData);
    setDataSource(jsonData);
    setLoading(false);
  };

  const modalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  //모달에서 업데이트 이후 콜백
  const onUpdate = () => {
    modalToggle();
    searchData();
  };

  //onReady
  useEffect(() => {
    searchData();
  }, []);

  return (
    <div>
      {/* <Input /> */}
      <div className="flex gap-4 px-4 py-3 mb-4 bg-white border border-solid rounded-md border-slate-200">
        <Button type="primary" onClick={searchData} loading={isLoading}>
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
      <div className="flex items-center px-3 mb-4">
        <div className="mr-4 text-sm">전체({dataSource.length})</div>
        <Button
          className="flex items-center"
          disabled={isLoading}
          icon={<MdDownload />}
        >
          엑셀다운로드
        </Button>
      </div>
      <Table
        className="border border-solid rounded-md border-slate-200"
        loading={isLoading}
        dataSource={dataSource}
        // caption={<div className="p-3 bg-red-200">캡션입니다</div>}
        columns={columns}
        scroll={{ y: 400 }} //본문 스크롤이 있으면, 헤더 고정됨
      />

      <Modal
        title="그룹 수정"
        open={isModalOpen}
        // onOk={modalToggle}
        onCancel={modalToggle}
        width={700}
        footer={null}
      >
        <GroupModify onOk={onUpdate} onCancel={modalToggle} />
      </Modal>
    </div>
  );
}
