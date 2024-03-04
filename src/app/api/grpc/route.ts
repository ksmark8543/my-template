import { NextResponse, NextRequest } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
// import { NextApiRequest, NextApiResponse } from 'next';
import services from '../../../protos/generated/smartLink_grpc_web_pb'
import messages from '../../../protos/generated/smartLink_pb'
// import grpc from '@grpc/grpc-js'
// import protoLoader from '@grpc/proto-loader'
import {doSomething, equipmentControl, equipmentControlPromise} from '../../../lib/grpc-promise'


//제너레이터 코드
/*
protoc --proto_path=. smartLink.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.\generated --js_out=import_style=commonjs,binary:.\generated --plugin=protoc-gen-grpc-web=C:\protoc-25.3-win64\bin\protoc-gen-grpc-web.exe 

protoc --proto_path=. smartLink.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.\generated --js_out=import_style=commonjs,mode=grpcwebtext,binary:.\generated --plugin=protoc-gen-grpc-web=C:\protoc-25.3-win64\bin\protoc-gen-grpc-web.exe 



protoc --proto_path=. smartLink.proto --js_out=import_style=closure,mode=grpcwebtext:./js_out

*/


// const serverUrl = '192.168.0.117:50051'; // 서버의 주소와 포트에 맞게 변경
// const serverUrl = 'http://localhost:50051'; // 서버의 주소와 포트에 맞게 변경
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

// function sayHello(call:any, callback:any) {
//   var order = new messages.Order();
//   order.setEquipmentId(1);
//   order.setAct("on");
//   order.setValue(100);

  

//   callback(order);
// }

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

/*export async function POST(request: NextRequest) {
  
  return await equipmentControl();
  
}
*/

// export default async function POST(request: NextRequest) {
//   //500
//   const res = await equipmentControl();

//   // const res = await equipmentControlPromise();
  
//   return NextResponse.json(res);
  
// }



export async function POST(request: NextRequest, response: NextResponse) {
  // async function doSomething() {
  //   return new Promise((resolve, reject) => {
  //     resolve({name:'jaden22'});
  //   })
  // }

  // async function doSomething() {
  //   return new Promise((resolve, reject) => {
  //       var client = new services.RequesterClient('192.168.0.117:50051', null, {
  //           // "Access-Control-Allow-Origin": "*",
  //           // "Content-Type": "application/grpc-web-text"
  //       });
    
  //       var order = new messages.Order();
  //       order.setAct("on");
  //       order.setValue(100);
  //       order.setEquipmentId(1);
  //       client.equipment_control(order, undefined, (res, error) =>  {
  //           console.log('장비 콜백=========')
  //           resolve(res);
  //       });
    
  //   });
  // }


  

var PROTO_PATH ="D:/smartLink.proto";//자기 파일 경로로 바꾸기 

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader')

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var Requester = grpc.loadPackageDefinition(packageDefinition).Requester;
var client = new Requester('192.168.0.117:50051',
                                       grpc.credentials.createInsecure());

async function doSomething() {
  return new Promise((resolve, reject) => {
    client.equipment_control({
      equipment_id:1,
      act:'on',
      value:70
  },(error:any,result:any)=>{
      if (error) throw error;
      console.log({result})

      resolve(result)
  });
  });
}

  const res = await doSomething()
  // const res = equipmentControl();
  //serverside console
  console.log({doSomethingRes:res})

  return NextResponse.json(res)

  /*
  //500
  const res = await equipmentControl();
  alert();
  console.log('POST res:',res)
  
  // const res = await equipmentControlPromise();
  
  return Response.json(res);

  // return NextResponse.json(res);
  */
}
// const GET = async (request: NextRequest) => {
//   console.log('1111')
  
//   return Response.json({ok:"ok"});

//   // return NextResponse.json(res);
  
// }
// export {GET, POST}
