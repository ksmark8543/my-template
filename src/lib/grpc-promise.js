import services from '../protos/generated/smartLink_grpc_web_pb'
import messages from '../protos/generated/smartLink_pb'

// const serverUrl = '192.168.0.117:50051'; // 서버의 주소와 포트에 맞게 변경
const serverUrl = 'localhost:50051'; // 서버의 주소와 포트에 맞게 변경

export async function equipmentControl() {
  
    return new Promise((resolve, reject) => {
        var client = new services.RequesterClient(serverUrl, null, {
            // "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/grpc-web-text"
        });
    
        var order = new messages.Order();
        order.setAct("off");
        order.setValue(100);
        order.setEquipmentId(1);
        client.equipment_control(order, undefined, (res, error) =>  {
            console.log(res, error);
            resolve(res);
        });
    
    });

  
    // const searchParams = request.nextUrl.searchParams;
    // return NextResponse.json({ hello: `success` });
  }