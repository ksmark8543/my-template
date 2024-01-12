"use client";
import { Button, Space, Modal } from "antd";
import { DownOutlined, UpOutlined, HomeOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function DataSearchCmnPage() {
  // const [isOpen, setOpen] = useState(false);

  // const toggle = () => setOpen(!isOpen);
  return <div>Dashboard</div>;
  // return (
  //   <div>
  //     <div className="flex items-center justify-between mb-3">
  //       <div className="font-bold text-slate-900">센서 및 제어 정보</div>
  //       <Button className="flex items-center">
  //         검색 열기
  //         <DownOutlined />
  //       </Button>
  //     </div>
  //     <div className="flex flex-col gap-10">
  //       <RoundedBox>
  //         <div className="flex rounded-md bg-slate-50">
  //           <section className="p-3">
  //             <div>오늘</div>
  //             <div>01.11</div>
  //           </section>
  //           <section className="p-3">
  //             <div>오전</div>
  //             <div>10%</div>
  //           </section>
  //           <section className="p-3">
  //             <div>오후</div>
  //             <div>30%</div>
  //           </section>
  //         </div>

  //         <div className="flex ml-5 rounded-md bg-slate-50">
  //           <section className="p-3">
  //             <div>오늘</div>
  //             <div>01.11</div>
  //           </section>
  //           <section className="p-3">
  //             <div>오전</div>
  //             <div>10%</div>
  //           </section>
  //           <section className="p-3">
  //             <div>오후</div>
  //             <div>30%</div>
  //           </section>
  //         </div>
  //         <div className="flex ml-5 rounded-md bg-slate-50">
  //           <section className="p-3">
  //             <div>오늘</div>
  //             <div>01.11</div>
  //           </section>
  //           <section className="p-3">
  //             <div>오전</div>
  //             <div>10%</div>
  //           </section>
  //           <section className="p-3">
  //             <div>오후</div>
  //             <div>30%</div>
  //           </section>
  //         </div>
  //       </RoundedBox>
  //       <div className="flex gap-5">
  //         <div className="flex flex-col gap-4">
  //           <RoundedBox>
  //             <div>
  //               <div className="flex gap-2 mb-3">
  //                 <HomeOutlined />
  //                 <h4>농가 종합현황</h4>
  //               </div>
  //               <div className="flex gap-4 p-5 bg-orange-100 rounded-md">
  //                 <div className="p-5 bg-white">
  //                   연구협력과
  //                   <div className="mt-2 font-bold text-blue-500">93농가</div>
  //                 </div>
  //                 <div className="p-5 bg-white">
  //                   연구협력과
  //                   <div className="mt-2 font-bold text-blue-500">93농가</div>
  //                 </div>
  //                 <div className="p-5 bg-white">
  //                   연구협력과
  //                   <div className="mt-2 font-bold text-blue-500">93농가</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </RoundedBox>
  //           <RoundedBox>
  //             <div>
  //               <div className="flex items-center justify-between mb-3">
  //                 <div className="flex gap-2">
  //                   <HomeOutlined />
  //                   <h4>누적데이터 현황</h4>
  //                 </div>
  //                 <Space>
  //                   <Button
  //                     type="primary"
  //                     size="small"
  //                     onClick={() => setOpen(true)}
  //                   >
  //                     환경
  //                   </Button>
  //                   <Button size="small">생육</Button>
  //                 </Space>
  //               </div>

  //               <div className="flex gap-4 p-5 bg-orange-100 rounded-md">
  //                 <div className="p-5 bg-white">
  //                   연구협력과
  //                   <div className="mt-2 font-bold text-blue-500">93농가</div>
  //                 </div>
  //                 <div className="p-5 bg-white">
  //                   연구협력과
  //                   <div className="mt-2 font-bold text-blue-500">93농가</div>
  //                 </div>
  //                 <div className="p-5 bg-white">
  //                   연구협력과
  //                   <div className="mt-2 font-bold text-blue-500">93농가</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </RoundedBox>
  //         </div>
  //       </div>
  //     </div>

  //     <Modal open={isOpen} onCancel={toggle} onOk={toggle}>
  //       content..
  //     </Modal>
  //   </div>
  // );
}

const RoundedBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex px-5 py-5 bg-white rounded-lg shadow-lg">{children}</div>
);
