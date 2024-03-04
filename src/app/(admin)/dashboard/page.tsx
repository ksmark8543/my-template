
'use client'
import {RequesterClient, RequesterPromiseClient} from '../../../protos/smartLink_grpc_web_pb'
import sm from '../../../protos/smartLink_pb'
import {equipmentControl, equipmentControlPromise} from '../../../lib/grpc-promise'
import { useState } from 'react';



const serverUrl = '192.168.0.117:50051'; // 서버의 주소와 포트에 맞게 변경
// const serverUrl = 'http://localhost:50051'; // 서버의 주소와 포트에 맞게 변경
// const serverUrl = '211.63.33.45:50051'; // 서버의 주소와 포트에 맞게 변경

const promiseClient = new RequesterPromiseClient(serverUrl);
const client = new RequesterClient(serverUrl);
export default function DashboardPage() {
  // const onPromiseClientClick = () => {
  //   const message = new sm.Order();
  //   message.setEquipmentId(1);
  //   message.setAct("on");
  //   message.setValue(100);
  //   promiseClient.equipment_control(message).then((res) => {
  //     alert('성공')
  //     console.log(res)
  //   }).catch((err) => {
  //     alert('에러');
  //   });
  // }

  const [data, setData] = useState({});

  const open = async () => {
    try{

      setData({});

      // const res = await fetch('/api/hello');
      
      const res = await fetch('/api/grpc', {method:'POST'});
      const data = await res.json()
      // alert(data.success);

      setData(data);

      console.log(data);
       
    }catch(e) {
      // console.log(e)
      alert('error')
    }
  }
 
  return (<div>
    {/* <button onClick={onPromiseClientClick}>promiseClient</button> */}
    <button onClick={open}>열기</button>
    {/* <button onClick={open}>닫기</button> */}
    <pre>
      {
        JSON.stringify(data, null, 2)
      }
    </pre>
  </div>);
}
