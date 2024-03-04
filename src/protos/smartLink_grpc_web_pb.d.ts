import * as grpcWeb from 'grpc-web';

import * as smartLink_pb from './smartLink_pb';


export class RequesterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  process_schedule(
    request: smartLink_pb.Schedule,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

  equipment_control(
    request: smartLink_pb.Order,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

  equipment_group_control(
    request: smartLink_pb.GroupOrder,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

  set_equipment(
    request: smartLink_pb.Equipment,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

  set_equipment_group(
    request: smartLink_pb.EquipmentGroup,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

  set_window_open_close(
    request: smartLink_pb.Window,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

  reload_equipment_request(
    request: smartLink_pb.ReloadMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

  reload_schedule_request(
    request: smartLink_pb.ReloadMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: smartLink_pb.ResultReply) => void
  ): grpcWeb.ClientReadableStream<smartLink_pb.ResultReply>;

}

export class RequesterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  process_schedule(
    request: smartLink_pb.Schedule,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

  equipment_control(
    request: smartLink_pb.Order,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

  equipment_group_control(
    request: smartLink_pb.GroupOrder,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

  set_equipment(
    request: smartLink_pb.Equipment,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

  set_equipment_group(
    request: smartLink_pb.EquipmentGroup,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

  set_window_open_close(
    request: smartLink_pb.Window,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

  reload_equipment_request(
    request: smartLink_pb.ReloadMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

  reload_schedule_request(
    request: smartLink_pb.ReloadMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<smartLink_pb.ResultReply>;

}

