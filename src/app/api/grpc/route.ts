import { NextResponse, NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import services from '../../../protos/generated/smartLink_grpc_web_pb'
import messages from '../../../protos/generated/smartLink_pb'
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import {equipmentControl} from '../../../lib/grpc-promise'
//제너레이터 코드
/*
protoc --proto_path=. smartLink.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.\generated --js_out=import_style=commonjs,binary:.\generated --plugin=protoc-gen-grpc-web=C:\protoc-25.3-win64\bin\protoc-gen-grpc-web.exe 

protoc --proto_path=. smartLink.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.\generated --js_out=import_style=commonjs,mode=grpcwebtext,binary:.\generated --plugin=protoc-gen-grpc-web=C:\protoc-25.3-win64\bin\protoc-gen-grpc-web.exe 



protoc --proto_path=. smartLink.proto --js_out=import_style=closure,mode=grpcwebtext:./js_out

*/


// const serverUrl = 'http://192.168.0.117:50051'; // 서버의 주소와 포트에 맞게 변경
const serverUrl = 'localhost:50051'; // 서버의 주소와 포트에 맞게 변경
// const promiseClient = new RequesterPromiseClient(serverUrl);

// const client = new RequesterClient(serverUrl);
// export default async function GET(req: NextApiRequest, res: NextApiResponse) {
//   return NextResponse.json({ hello: "success" });
//   // const message = new sm.Order();
//   // message.setEquipmentId(1);
//   // message.setAct("on");
//   // message.setValue(100);
//   // promiseClient.equipment_control(message);
    
// }



// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

function sayHello(call:any, callback:any) {
  var order = new messages.Order();
  order.setEquipmentId(1);
  order.setAct("on");
  order.setValue(100);

  

  callback(order);
}

/*
export async function POST(request: NextRequest) {
  
  var client = new services.RequesterClient(serverUrl);

  var order = new messages.Order();
  order.setAct("on");
  order.setValue(100);
  order.setEquipmentId(1);
  client.equipment_control(order, undefined, () =>  {
    console.log('success');
    
  });

  return NextResponse.json({ hello: `success` });;

  // const searchParams = request.nextUrl.searchParams;
  // return NextResponse.json({ hello: `success` });
}
*/

export async function POST(request: NextRequest) {
  
  return await equipmentControl();
  

  // const searchParams = request.nextUrl.searchParams;
  // return NextResponse.json({ hello: `success` });
}