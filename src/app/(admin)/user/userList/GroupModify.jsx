"use client";
import { Button, Descriptions, Input, Space, message } from "antd";
import { title } from "process";
import { useState } from "react";
import { fakeAsyncOperation } from "~/helper/fake";

const GroupModify = ({ onOk, onCancel }) => {
  const [isSaving, setSaving] = useState(false);
  const update = async () => {
    setSaving(true);
    await fakeAsyncOperation(1000);
    message.open({
      content: "저장되었습니다.",
      type: "success",
    });

    setSaving(false);

    onOk();
  };
  return (
    <>
      <Descriptions bordered column={2}>
        <Descriptions.Item label="그룹명">
          <div>
            <Input width={100} value={"함평농업기술센터"} />
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="사용자 구분">일반농가</Descriptions.Item>
        <Descriptions.Item label="등록일">2023-11-04</Descriptions.Item>
        <Descriptions.Item label="사용여부">Y</Descriptions.Item>
      </Descriptions>
      <div className="flex justify-end mt-3">
        <Space>
          <Button onClick={onCancel}>취소</Button>
          <Button onClick={update} type="primary" loading={isSaving}>
            수정
          </Button>
        </Space>
      </div>
    </>
  );
};
export default GroupModify;
