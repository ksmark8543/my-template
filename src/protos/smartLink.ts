/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "requester";

export interface ReloadMessage {
  requestTime: string;
  requestType: string;
}

export interface Equipment {
  act: string;
  equipmentId: number;
  equipmentType: string;
  name: string;
  statusRegisterStart: number;
  controlRegisterStart: number;
}

export interface EquipmentGroup {
  act: string;
  equipmentGroupId: number;
  equipmentType: string;
  name: string;
  equipmentIds: number[];
}

export interface Window {
  equipmentId: number;
  openTime: number;
  closeTime: number;
}

export interface Schedule {
  scheduleId: number;
  name: string;
  type: string;
  timeCondition: TimeCondition | undefined;
  sensorConditions: SensorConditions[];
  orders: AllOrder[];
  act: string;
}

export interface TimeCondition {
  startTime: TimeInfo | undefined;
  endTime: TimeInfo | undefined;
  interval: Interval | undefined;
  day: number[];
}

export interface TimeInfo {
  hour: number;
  minute: number;
  sunInfo: SunInfo | undefined;
}

export interface SunInfo {
  sunType: string;
  time: string;
}

export interface Interval {
  selectDate: string;
  unit: string;
  value: number;
}

export interface SensorConditions {
  sensorCondition: SensorCondition[];
  sensorGroupCondition: SensorGroupCondition[];
}

export interface SensorCondition {
  /** int32 sensor_id =1; */
  sensorId: string;
  sensorUp: number;
  sensorDown: number;
}

export interface SensorGroupCondition {
  /** int32 sensor_group_id = 1; */
  sensorGroupId: string;
  sensorUse: string;
  sensorGroupUp: number;
  sensorGroupDown: number;
}

export interface Order {
  equipmentId: number;
  act: string;
  value: number;
}

export interface GroupOrder {
  equipmentGroupId: number;
  act: string;
  value: number;
}

export interface AllOrder {
  orders: Order[];
  groupOrders: GroupOrder[];
}

export interface ResultReply {
  requestName: string;
  success: boolean;
  log: string;
}

function createBaseReloadMessage(): ReloadMessage {
  return { requestTime: "", requestType: "" };
}

export const ReloadMessage = {
  encode(message: ReloadMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestTime !== "") {
      writer.uint32(10).string(message.requestTime);
    }
    if (message.requestType !== "") {
      writer.uint32(18).string(message.requestType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReloadMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReloadMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestTime = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requestType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReloadMessage {
    return {
      requestTime: isSet(object.requestTime) ? globalThis.String(object.requestTime) : "",
      requestType: isSet(object.requestType) ? globalThis.String(object.requestType) : "",
    };
  },

  toJSON(message: ReloadMessage): unknown {
    const obj: any = {};
    if (message.requestTime !== "") {
      obj.requestTime = message.requestTime;
    }
    if (message.requestType !== "") {
      obj.requestType = message.requestType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReloadMessage>, I>>(base?: I): ReloadMessage {
    return ReloadMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReloadMessage>, I>>(object: I): ReloadMessage {
    const message = createBaseReloadMessage();
    message.requestTime = object.requestTime ?? "";
    message.requestType = object.requestType ?? "";
    return message;
  },
};

function createBaseEquipment(): Equipment {
  return { act: "", equipmentId: 0, equipmentType: "", name: "", statusRegisterStart: 0, controlRegisterStart: 0 };
}

export const Equipment = {
  encode(message: Equipment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.act !== "") {
      writer.uint32(10).string(message.act);
    }
    if (message.equipmentId !== 0) {
      writer.uint32(16).int32(message.equipmentId);
    }
    if (message.equipmentType !== "") {
      writer.uint32(26).string(message.equipmentType);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.statusRegisterStart !== 0) {
      writer.uint32(40).int32(message.statusRegisterStart);
    }
    if (message.controlRegisterStart !== 0) {
      writer.uint32(48).int32(message.controlRegisterStart);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Equipment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.act = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.equipmentId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.equipmentType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.statusRegisterStart = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.controlRegisterStart = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Equipment {
    return {
      act: isSet(object.act) ? globalThis.String(object.act) : "",
      equipmentId: isSet(object.equipmentId) ? globalThis.Number(object.equipmentId) : 0,
      equipmentType: isSet(object.equipmentType) ? globalThis.String(object.equipmentType) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      statusRegisterStart: isSet(object.statusRegisterStart) ? globalThis.Number(object.statusRegisterStart) : 0,
      controlRegisterStart: isSet(object.controlRegisterStart) ? globalThis.Number(object.controlRegisterStart) : 0,
    };
  },

  toJSON(message: Equipment): unknown {
    const obj: any = {};
    if (message.act !== "") {
      obj.act = message.act;
    }
    if (message.equipmentId !== 0) {
      obj.equipmentId = Math.round(message.equipmentId);
    }
    if (message.equipmentType !== "") {
      obj.equipmentType = message.equipmentType;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.statusRegisterStart !== 0) {
      obj.statusRegisterStart = Math.round(message.statusRegisterStart);
    }
    if (message.controlRegisterStart !== 0) {
      obj.controlRegisterStart = Math.round(message.controlRegisterStart);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Equipment>, I>>(base?: I): Equipment {
    return Equipment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Equipment>, I>>(object: I): Equipment {
    const message = createBaseEquipment();
    message.act = object.act ?? "";
    message.equipmentId = object.equipmentId ?? 0;
    message.equipmentType = object.equipmentType ?? "";
    message.name = object.name ?? "";
    message.statusRegisterStart = object.statusRegisterStart ?? 0;
    message.controlRegisterStart = object.controlRegisterStart ?? 0;
    return message;
  },
};

function createBaseEquipmentGroup(): EquipmentGroup {
  return { act: "", equipmentGroupId: 0, equipmentType: "", name: "", equipmentIds: [] };
}

export const EquipmentGroup = {
  encode(message: EquipmentGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.act !== "") {
      writer.uint32(10).string(message.act);
    }
    if (message.equipmentGroupId !== 0) {
      writer.uint32(16).int32(message.equipmentGroupId);
    }
    if (message.equipmentType !== "") {
      writer.uint32(26).string(message.equipmentType);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    writer.uint32(42).fork();
    for (const v of message.equipmentIds) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EquipmentGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipmentGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.act = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.equipmentGroupId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.equipmentType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag === 40) {
            message.equipmentIds.push(reader.int32());

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.equipmentIds.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EquipmentGroup {
    return {
      act: isSet(object.act) ? globalThis.String(object.act) : "",
      equipmentGroupId: isSet(object.equipmentGroupId) ? globalThis.Number(object.equipmentGroupId) : 0,
      equipmentType: isSet(object.equipmentType) ? globalThis.String(object.equipmentType) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      equipmentIds: globalThis.Array.isArray(object?.equipmentIds)
        ? object.equipmentIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: EquipmentGroup): unknown {
    const obj: any = {};
    if (message.act !== "") {
      obj.act = message.act;
    }
    if (message.equipmentGroupId !== 0) {
      obj.equipmentGroupId = Math.round(message.equipmentGroupId);
    }
    if (message.equipmentType !== "") {
      obj.equipmentType = message.equipmentType;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.equipmentIds?.length) {
      obj.equipmentIds = message.equipmentIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipmentGroup>, I>>(base?: I): EquipmentGroup {
    return EquipmentGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipmentGroup>, I>>(object: I): EquipmentGroup {
    const message = createBaseEquipmentGroup();
    message.act = object.act ?? "";
    message.equipmentGroupId = object.equipmentGroupId ?? 0;
    message.equipmentType = object.equipmentType ?? "";
    message.name = object.name ?? "";
    message.equipmentIds = object.equipmentIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseWindow(): Window {
  return { equipmentId: 0, openTime: 0, closeTime: 0 };
}

export const Window = {
  encode(message: Window, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.equipmentId !== 0) {
      writer.uint32(8).int32(message.equipmentId);
    }
    if (message.openTime !== 0) {
      writer.uint32(16).int32(message.openTime);
    }
    if (message.closeTime !== 0) {
      writer.uint32(24).int32(message.closeTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Window {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.equipmentId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.openTime = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.closeTime = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Window {
    return {
      equipmentId: isSet(object.equipmentId) ? globalThis.Number(object.equipmentId) : 0,
      openTime: isSet(object.openTime) ? globalThis.Number(object.openTime) : 0,
      closeTime: isSet(object.closeTime) ? globalThis.Number(object.closeTime) : 0,
    };
  },

  toJSON(message: Window): unknown {
    const obj: any = {};
    if (message.equipmentId !== 0) {
      obj.equipmentId = Math.round(message.equipmentId);
    }
    if (message.openTime !== 0) {
      obj.openTime = Math.round(message.openTime);
    }
    if (message.closeTime !== 0) {
      obj.closeTime = Math.round(message.closeTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Window>, I>>(base?: I): Window {
    return Window.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Window>, I>>(object: I): Window {
    const message = createBaseWindow();
    message.equipmentId = object.equipmentId ?? 0;
    message.openTime = object.openTime ?? 0;
    message.closeTime = object.closeTime ?? 0;
    return message;
  },
};

function createBaseSchedule(): Schedule {
  return { scheduleId: 0, name: "", type: "", timeCondition: undefined, sensorConditions: [], orders: [], act: "" };
}

export const Schedule = {
  encode(message: Schedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scheduleId !== 0) {
      writer.uint32(8).int32(message.scheduleId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.timeCondition !== undefined) {
      TimeCondition.encode(message.timeCondition, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sensorConditions) {
      SensorConditions.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.orders) {
      AllOrder.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.act !== "") {
      writer.uint32(58).string(message.act);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.scheduleId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timeCondition = TimeCondition.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sensorConditions.push(SensorConditions.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.orders.push(AllOrder.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.act = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Schedule {
    return {
      scheduleId: isSet(object.scheduleId) ? globalThis.Number(object.scheduleId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      timeCondition: isSet(object.timeCondition) ? TimeCondition.fromJSON(object.timeCondition) : undefined,
      sensorConditions: globalThis.Array.isArray(object?.sensorConditions)
        ? object.sensorConditions.map((e: any) => SensorConditions.fromJSON(e))
        : [],
      orders: globalThis.Array.isArray(object?.orders) ? object.orders.map((e: any) => AllOrder.fromJSON(e)) : [],
      act: isSet(object.act) ? globalThis.String(object.act) : "",
    };
  },

  toJSON(message: Schedule): unknown {
    const obj: any = {};
    if (message.scheduleId !== 0) {
      obj.scheduleId = Math.round(message.scheduleId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.timeCondition !== undefined) {
      obj.timeCondition = TimeCondition.toJSON(message.timeCondition);
    }
    if (message.sensorConditions?.length) {
      obj.sensorConditions = message.sensorConditions.map((e) => SensorConditions.toJSON(e));
    }
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => AllOrder.toJSON(e));
    }
    if (message.act !== "") {
      obj.act = message.act;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Schedule>, I>>(base?: I): Schedule {
    return Schedule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Schedule>, I>>(object: I): Schedule {
    const message = createBaseSchedule();
    message.scheduleId = object.scheduleId ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.timeCondition = (object.timeCondition !== undefined && object.timeCondition !== null)
      ? TimeCondition.fromPartial(object.timeCondition)
      : undefined;
    message.sensorConditions = object.sensorConditions?.map((e) => SensorConditions.fromPartial(e)) || [];
    message.orders = object.orders?.map((e) => AllOrder.fromPartial(e)) || [];
    message.act = object.act ?? "";
    return message;
  },
};

function createBaseTimeCondition(): TimeCondition {
  return { startTime: undefined, endTime: undefined, interval: undefined, day: [] };
}

export const TimeCondition = {
  encode(message: TimeCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      TimeInfo.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      TimeInfo.encode(message.endTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.interval !== undefined) {
      Interval.encode(message.interval, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.day) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeCondition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startTime = TimeInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endTime = TimeInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.interval = Interval.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag === 32) {
            message.day.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.day.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeCondition {
    return {
      startTime: isSet(object.startTime) ? TimeInfo.fromJSON(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? TimeInfo.fromJSON(object.endTime) : undefined,
      interval: isSet(object.interval) ? Interval.fromJSON(object.interval) : undefined,
      day: globalThis.Array.isArray(object?.day) ? object.day.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: TimeCondition): unknown {
    const obj: any = {};
    if (message.startTime !== undefined) {
      obj.startTime = TimeInfo.toJSON(message.startTime);
    }
    if (message.endTime !== undefined) {
      obj.endTime = TimeInfo.toJSON(message.endTime);
    }
    if (message.interval !== undefined) {
      obj.interval = Interval.toJSON(message.interval);
    }
    if (message.day?.length) {
      obj.day = message.day.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimeCondition>, I>>(base?: I): TimeCondition {
    return TimeCondition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimeCondition>, I>>(object: I): TimeCondition {
    const message = createBaseTimeCondition();
    message.startTime = (object.startTime !== undefined && object.startTime !== null)
      ? TimeInfo.fromPartial(object.startTime)
      : undefined;
    message.endTime = (object.endTime !== undefined && object.endTime !== null)
      ? TimeInfo.fromPartial(object.endTime)
      : undefined;
    message.interval = (object.interval !== undefined && object.interval !== null)
      ? Interval.fromPartial(object.interval)
      : undefined;
    message.day = object.day?.map((e) => e) || [];
    return message;
  },
};

function createBaseTimeInfo(): TimeInfo {
  return { hour: 0, minute: 0, sunInfo: undefined };
}

export const TimeInfo = {
  encode(message: TimeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hour !== 0) {
      writer.uint32(8).int32(message.hour);
    }
    if (message.minute !== 0) {
      writer.uint32(16).int32(message.minute);
    }
    if (message.sunInfo !== undefined) {
      SunInfo.encode(message.sunInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hour = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minute = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sunInfo = SunInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeInfo {
    return {
      hour: isSet(object.hour) ? globalThis.Number(object.hour) : 0,
      minute: isSet(object.minute) ? globalThis.Number(object.minute) : 0,
      sunInfo: isSet(object.sunInfo) ? SunInfo.fromJSON(object.sunInfo) : undefined,
    };
  },

  toJSON(message: TimeInfo): unknown {
    const obj: any = {};
    if (message.hour !== 0) {
      obj.hour = Math.round(message.hour);
    }
    if (message.minute !== 0) {
      obj.minute = Math.round(message.minute);
    }
    if (message.sunInfo !== undefined) {
      obj.sunInfo = SunInfo.toJSON(message.sunInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimeInfo>, I>>(base?: I): TimeInfo {
    return TimeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimeInfo>, I>>(object: I): TimeInfo {
    const message = createBaseTimeInfo();
    message.hour = object.hour ?? 0;
    message.minute = object.minute ?? 0;
    message.sunInfo = (object.sunInfo !== undefined && object.sunInfo !== null)
      ? SunInfo.fromPartial(object.sunInfo)
      : undefined;
    return message;
  },
};

function createBaseSunInfo(): SunInfo {
  return { sunType: "", time: "" };
}

export const SunInfo = {
  encode(message: SunInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sunType !== "") {
      writer.uint32(10).string(message.sunType);
    }
    if (message.time !== "") {
      writer.uint32(18).string(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SunInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSunInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sunType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.time = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SunInfo {
    return {
      sunType: isSet(object.sunType) ? globalThis.String(object.sunType) : "",
      time: isSet(object.time) ? globalThis.String(object.time) : "",
    };
  },

  toJSON(message: SunInfo): unknown {
    const obj: any = {};
    if (message.sunType !== "") {
      obj.sunType = message.sunType;
    }
    if (message.time !== "") {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SunInfo>, I>>(base?: I): SunInfo {
    return SunInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SunInfo>, I>>(object: I): SunInfo {
    const message = createBaseSunInfo();
    message.sunType = object.sunType ?? "";
    message.time = object.time ?? "";
    return message;
  },
};

function createBaseInterval(): Interval {
  return { selectDate: "", unit: "", value: 0 };
}

export const Interval = {
  encode(message: Interval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectDate !== "") {
      writer.uint32(10).string(message.selectDate);
    }
    if (message.unit !== "") {
      writer.uint32(18).string(message.unit);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Interval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selectDate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.unit = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Interval {
    return {
      selectDate: isSet(object.selectDate) ? globalThis.String(object.selectDate) : "",
      unit: isSet(object.unit) ? globalThis.String(object.unit) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: Interval): unknown {
    const obj: any = {};
    if (message.selectDate !== "") {
      obj.selectDate = message.selectDate;
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Interval>, I>>(base?: I): Interval {
    return Interval.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Interval>, I>>(object: I): Interval {
    const message = createBaseInterval();
    message.selectDate = object.selectDate ?? "";
    message.unit = object.unit ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSensorConditions(): SensorConditions {
  return { sensorCondition: [], sensorGroupCondition: [] };
}

export const SensorConditions = {
  encode(message: SensorConditions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sensorCondition) {
      SensorCondition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sensorGroupCondition) {
      SensorGroupCondition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorConditions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSensorConditions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sensorCondition.push(SensorCondition.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sensorGroupCondition.push(SensorGroupCondition.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SensorConditions {
    return {
      sensorCondition: globalThis.Array.isArray(object?.sensorCondition)
        ? object.sensorCondition.map((e: any) => SensorCondition.fromJSON(e))
        : [],
      sensorGroupCondition: globalThis.Array.isArray(object?.sensorGroupCondition)
        ? object.sensorGroupCondition.map((e: any) => SensorGroupCondition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SensorConditions): unknown {
    const obj: any = {};
    if (message.sensorCondition?.length) {
      obj.sensorCondition = message.sensorCondition.map((e) => SensorCondition.toJSON(e));
    }
    if (message.sensorGroupCondition?.length) {
      obj.sensorGroupCondition = message.sensorGroupCondition.map((e) => SensorGroupCondition.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SensorConditions>, I>>(base?: I): SensorConditions {
    return SensorConditions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SensorConditions>, I>>(object: I): SensorConditions {
    const message = createBaseSensorConditions();
    message.sensorCondition = object.sensorCondition?.map((e) => SensorCondition.fromPartial(e)) || [];
    message.sensorGroupCondition = object.sensorGroupCondition?.map((e) => SensorGroupCondition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSensorCondition(): SensorCondition {
  return { sensorId: "", sensorUp: 0, sensorDown: 0 };
}

export const SensorCondition = {
  encode(message: SensorCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sensorId !== "") {
      writer.uint32(10).string(message.sensorId);
    }
    if (message.sensorUp !== 0) {
      writer.uint32(16).int32(message.sensorUp);
    }
    if (message.sensorDown !== 0) {
      writer.uint32(24).int32(message.sensorDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorCondition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSensorCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sensorId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sensorUp = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sensorDown = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SensorCondition {
    return {
      sensorId: isSet(object.sensorId) ? globalThis.String(object.sensorId) : "",
      sensorUp: isSet(object.sensorUp) ? globalThis.Number(object.sensorUp) : 0,
      sensorDown: isSet(object.sensorDown) ? globalThis.Number(object.sensorDown) : 0,
    };
  },

  toJSON(message: SensorCondition): unknown {
    const obj: any = {};
    if (message.sensorId !== "") {
      obj.sensorId = message.sensorId;
    }
    if (message.sensorUp !== 0) {
      obj.sensorUp = Math.round(message.sensorUp);
    }
    if (message.sensorDown !== 0) {
      obj.sensorDown = Math.round(message.sensorDown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SensorCondition>, I>>(base?: I): SensorCondition {
    return SensorCondition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SensorCondition>, I>>(object: I): SensorCondition {
    const message = createBaseSensorCondition();
    message.sensorId = object.sensorId ?? "";
    message.sensorUp = object.sensorUp ?? 0;
    message.sensorDown = object.sensorDown ?? 0;
    return message;
  },
};

function createBaseSensorGroupCondition(): SensorGroupCondition {
  return { sensorGroupId: "", sensorUse: "", sensorGroupUp: 0, sensorGroupDown: 0 };
}

export const SensorGroupCondition = {
  encode(message: SensorGroupCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sensorGroupId !== "") {
      writer.uint32(10).string(message.sensorGroupId);
    }
    if (message.sensorUse !== "") {
      writer.uint32(18).string(message.sensorUse);
    }
    if (message.sensorGroupUp !== 0) {
      writer.uint32(24).int32(message.sensorGroupUp);
    }
    if (message.sensorGroupDown !== 0) {
      writer.uint32(32).int32(message.sensorGroupDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorGroupCondition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSensorGroupCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sensorGroupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sensorUse = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sensorGroupUp = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sensorGroupDown = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SensorGroupCondition {
    return {
      sensorGroupId: isSet(object.sensorGroupId) ? globalThis.String(object.sensorGroupId) : "",
      sensorUse: isSet(object.sensorUse) ? globalThis.String(object.sensorUse) : "",
      sensorGroupUp: isSet(object.sensorGroupUp) ? globalThis.Number(object.sensorGroupUp) : 0,
      sensorGroupDown: isSet(object.sensorGroupDown) ? globalThis.Number(object.sensorGroupDown) : 0,
    };
  },

  toJSON(message: SensorGroupCondition): unknown {
    const obj: any = {};
    if (message.sensorGroupId !== "") {
      obj.sensorGroupId = message.sensorGroupId;
    }
    if (message.sensorUse !== "") {
      obj.sensorUse = message.sensorUse;
    }
    if (message.sensorGroupUp !== 0) {
      obj.sensorGroupUp = Math.round(message.sensorGroupUp);
    }
    if (message.sensorGroupDown !== 0) {
      obj.sensorGroupDown = Math.round(message.sensorGroupDown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SensorGroupCondition>, I>>(base?: I): SensorGroupCondition {
    return SensorGroupCondition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SensorGroupCondition>, I>>(object: I): SensorGroupCondition {
    const message = createBaseSensorGroupCondition();
    message.sensorGroupId = object.sensorGroupId ?? "";
    message.sensorUse = object.sensorUse ?? "";
    message.sensorGroupUp = object.sensorGroupUp ?? 0;
    message.sensorGroupDown = object.sensorGroupDown ?? 0;
    return message;
  },
};

function createBaseOrder(): Order {
  return { equipmentId: 0, act: "", value: 0 };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.equipmentId !== 0) {
      writer.uint32(8).int32(message.equipmentId);
    }
    if (message.act !== "") {
      writer.uint32(18).string(message.act);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.equipmentId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.act = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      equipmentId: isSet(object.equipmentId) ? globalThis.Number(object.equipmentId) : 0,
      act: isSet(object.act) ? globalThis.String(object.act) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.equipmentId !== 0) {
      obj.equipmentId = Math.round(message.equipmentId);
    }
    if (message.act !== "") {
      obj.act = message.act;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Order>, I>>(base?: I): Order {
    return Order.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.equipmentId = object.equipmentId ?? 0;
    message.act = object.act ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseGroupOrder(): GroupOrder {
  return { equipmentGroupId: 0, act: "", value: 0 };
}

export const GroupOrder = {
  encode(message: GroupOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.equipmentGroupId !== 0) {
      writer.uint32(8).int32(message.equipmentGroupId);
    }
    if (message.act !== "") {
      writer.uint32(18).string(message.act);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.equipmentGroupId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.act = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupOrder {
    return {
      equipmentGroupId: isSet(object.equipmentGroupId) ? globalThis.Number(object.equipmentGroupId) : 0,
      act: isSet(object.act) ? globalThis.String(object.act) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: GroupOrder): unknown {
    const obj: any = {};
    if (message.equipmentGroupId !== 0) {
      obj.equipmentGroupId = Math.round(message.equipmentGroupId);
    }
    if (message.act !== "") {
      obj.act = message.act;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupOrder>, I>>(base?: I): GroupOrder {
    return GroupOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupOrder>, I>>(object: I): GroupOrder {
    const message = createBaseGroupOrder();
    message.equipmentGroupId = object.equipmentGroupId ?? 0;
    message.act = object.act ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseAllOrder(): AllOrder {
  return { orders: [], groupOrders: [] };
}

export const AllOrder = {
  encode(message: AllOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groupOrders) {
      GroupOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groupOrders.push(GroupOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllOrder {
    return {
      orders: globalThis.Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      groupOrders: globalThis.Array.isArray(object?.groupOrders)
        ? object.groupOrders.map((e: any) => GroupOrder.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AllOrder): unknown {
    const obj: any = {};
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => Order.toJSON(e));
    }
    if (message.groupOrders?.length) {
      obj.groupOrders = message.groupOrders.map((e) => GroupOrder.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AllOrder>, I>>(base?: I): AllOrder {
    return AllOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AllOrder>, I>>(object: I): AllOrder {
    const message = createBaseAllOrder();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.groupOrders = object.groupOrders?.map((e) => GroupOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResultReply(): ResultReply {
  return { requestName: "", success: false, log: "" };
}

export const ResultReply = {
  encode(message: ResultReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestName !== "") {
      writer.uint32(10).string(message.requestName);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResultReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResultReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.log = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResultReply {
    return {
      requestName: isSet(object.requestName) ? globalThis.String(object.requestName) : "",
      success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
      log: isSet(object.log) ? globalThis.String(object.log) : "",
    };
  },

  toJSON(message: ResultReply): unknown {
    const obj: any = {};
    if (message.requestName !== "") {
      obj.requestName = message.requestName;
    }
    if (message.success === true) {
      obj.success = message.success;
    }
    if (message.log !== "") {
      obj.log = message.log;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResultReply>, I>>(base?: I): ResultReply {
    return ResultReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResultReply>, I>>(object: I): ResultReply {
    const message = createBaseResultReply();
    message.requestName = object.requestName ?? "";
    message.success = object.success ?? false;
    message.log = object.log ?? "";
    return message;
  },
};

export type RequesterService = typeof RequesterService;
export const RequesterService = {
  /** 개별 장비 수동제어 */
  processSchedule: {
    path: "/requester.Requester/process_schedule",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Schedule) => Buffer.from(Schedule.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Schedule.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
  equipmentControl: {
    path: "/requester.Requester/equipment_control",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Order) => Buffer.from(Order.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Order.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
  equipmentGroupControl: {
    path: "/requester.Requester/equipment_group_control",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GroupOrder) => Buffer.from(GroupOrder.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GroupOrder.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
  setEquipment: {
    path: "/requester.Requester/set_equipment",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Equipment) => Buffer.from(Equipment.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Equipment.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
  setEquipmentGroup: {
    path: "/requester.Requester/set_equipment_group",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EquipmentGroup) => Buffer.from(EquipmentGroup.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EquipmentGroup.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
  setWindowOpenClose: {
    path: "/requester.Requester/set_window_open_close",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Window) => Buffer.from(Window.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Window.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
  reloadEquipmentRequest: {
    path: "/requester.Requester/reload_equipment_request",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReloadMessage) => Buffer.from(ReloadMessage.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReloadMessage.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
  reloadScheduleRequest: {
    path: "/requester.Requester/reload_schedule_request",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReloadMessage) => Buffer.from(ReloadMessage.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReloadMessage.decode(value),
    responseSerialize: (value: ResultReply) => Buffer.from(ResultReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ResultReply.decode(value),
  },
} as const;

export interface RequesterServer extends UntypedServiceImplementation {
  /** 개별 장비 수동제어 */
  processSchedule: handleUnaryCall<Schedule, ResultReply>;
  equipmentControl: handleUnaryCall<Order, ResultReply>;
  equipmentGroupControl: handleUnaryCall<GroupOrder, ResultReply>;
  setEquipment: handleUnaryCall<Equipment, ResultReply>;
  setEquipmentGroup: handleUnaryCall<EquipmentGroup, ResultReply>;
  setWindowOpenClose: handleUnaryCall<Window, ResultReply>;
  reloadEquipmentRequest: handleUnaryCall<ReloadMessage, ResultReply>;
  reloadScheduleRequest: handleUnaryCall<ReloadMessage, ResultReply>;
}

export interface RequesterClient extends Client {
  /** 개별 장비 수동제어 */
  processSchedule(
    request: Schedule,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  processSchedule(
    request: Schedule,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  processSchedule(
    request: Schedule,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  equipmentControl(
    request: Order,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  equipmentControl(
    request: Order,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  equipmentControl(
    request: Order,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  equipmentGroupControl(
    request: GroupOrder,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  equipmentGroupControl(
    request: GroupOrder,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  equipmentGroupControl(
    request: GroupOrder,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setEquipment(
    request: Equipment,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setEquipment(
    request: Equipment,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setEquipment(
    request: Equipment,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setEquipmentGroup(
    request: EquipmentGroup,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setEquipmentGroup(
    request: EquipmentGroup,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setEquipmentGroup(
    request: EquipmentGroup,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setWindowOpenClose(
    request: Window,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setWindowOpenClose(
    request: Window,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  setWindowOpenClose(
    request: Window,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  reloadEquipmentRequest(
    request: ReloadMessage,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  reloadEquipmentRequest(
    request: ReloadMessage,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  reloadEquipmentRequest(
    request: ReloadMessage,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  reloadScheduleRequest(
    request: ReloadMessage,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  reloadScheduleRequest(
    request: ReloadMessage,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
  reloadScheduleRequest(
    request: ReloadMessage,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ResultReply) => void,
  ): ClientUnaryCall;
}

export const RequesterClient = makeGenericClientConstructor(RequesterService, "requester.Requester") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RequesterClient;
  service: typeof RequesterService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
