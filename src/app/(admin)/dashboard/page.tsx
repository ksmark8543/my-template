
'use client'
import {RequesterClient, RequesterPromiseClient} from '../../../protos/generated/smartLink_grpc_web_pb'
import sm from '../../../protos/generated/smartLink_pb'
import {equipmentControl} from '../../../lib/grpc-promise'



const serverUrl = 'http://192.168.0.117:50051'; // 서버의 주소와 포트에 맞게 변경
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
  const postGrpc = async () => {
    try{
      // await fetch('/api/grpc', {method:'POST'});
      const res = await equipmentControl();
        console.log({res});
    }catch(e) {
      console.log(e)
    }
  }
  return (<div>
    {/* <button onClick={onPromiseClientClick}>promiseClient</button> */}
    <button onClick={postGrpc}>postGrpc</button>
  </div>);
}
