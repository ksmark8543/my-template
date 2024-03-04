import services from '../protos/smartLink_grpc_web_pb'
import messages from '../protos/smartLink_pb'

// import grpc from '@grpc/grpc-js' 
// import protoLoader from '@grpc/proto-loader'


const serverUrl = 'http://192.168.0.117:50051'; // 서버의 주소와 포트에 맞게 변경
// const serverUrl = 'http://localhost:50051'; // 서버의 주소와 포트에 맞게 변경

// export async function equipmentControl() {
  
//     return new Promise((resolve, reject) => {
//         var client = new services.RequesterClient(serverUrl, null, {
//             // "Access-Control-Allow-Origin": "*",
//             // "Content-Type": "application/grpc-web-text"
//         });
    
//         var order = new messages.Order();
//         order.setAct("on");
//         order.setValue(100);
//         order.setEquipmentId(1);
//         client.equipment_control(order, undefined, (res, error) =>  {
//             console.log('장비 콜백=========')
//             resolve(res);
//         });
    
//     });

  
//     // const searchParams = request.nextUrl.searchParams;
//     // return NextResponse.json({ hello: `success` });
//   }

  export async function equipmentControlPromise() {
    const client = new services.RequesterPromiseClient(serverUrl);
    const order = new messages.Order();
    order.setAct("on");
    order.setEquipmentId(1);
    order.setValue(100);
    return await client.equipment_control(order);
  }


  


var PROTO_PATH ="../protos/smartLink.proto";//자기 파일 경로로 바꾸기 

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader')


export async function equipmentControl(id,act,value){
    var packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {keepCase: true,
         longs: String,
         enums: String,
         defaults: true,
         oneofs: true
        });
    var Requester = grpc.loadPackageDefinition(packageDefinition).Requester;
    var client = new Requester('localhost:50051',
                                           grpc.credentials.createInsecure());
    
    return new Promise((resolve, reject) => {
        client.equipment_control({
            equipment_id:id,
            act:act,
            value:value
        },(error,result)=>{
            if (error) throw error;
            console.log(result)
            resolve(result);
        });
    });
}