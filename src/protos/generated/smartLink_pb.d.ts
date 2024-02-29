import * as jspb from 'google-protobuf'



export class ReloadMessage extends jspb.Message {
  getRequestTime(): string;
  setRequestTime(value: string): ReloadMessage;

  getRequestType(): string;
  setRequestType(value: string): ReloadMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadMessage): ReloadMessage.AsObject;
  static serializeBinaryToWriter(message: ReloadMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadMessage;
  static deserializeBinaryFromReader(message: ReloadMessage, reader: jspb.BinaryReader): ReloadMessage;
}

export namespace ReloadMessage {
  export type AsObject = {
    requestTime: string,
    requestType: string,
  }
}

export class Equipment extends jspb.Message {
  getAct(): string;
  setAct(value: string): Equipment;

  getEquipmentId(): number;
  setEquipmentId(value: number): Equipment;

  getEquipmentType(): string;
  setEquipmentType(value: string): Equipment;

  getName(): string;
  setName(value: string): Equipment;

  getStatusRegisterStart(): number;
  setStatusRegisterStart(value: number): Equipment;

  getControlRegisterStart(): number;
  setControlRegisterStart(value: number): Equipment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Equipment.AsObject;
  static toObject(includeInstance: boolean, msg: Equipment): Equipment.AsObject;
  static serializeBinaryToWriter(message: Equipment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Equipment;
  static deserializeBinaryFromReader(message: Equipment, reader: jspb.BinaryReader): Equipment;
}

export namespace Equipment {
  export type AsObject = {
    act: string,
    equipmentId: number,
    equipmentType: string,
    name: string,
    statusRegisterStart: number,
    controlRegisterStart: number,
  }
}

export class EquipmentGroup extends jspb.Message {
  getAct(): string;
  setAct(value: string): EquipmentGroup;

  getEquipmentGroupId(): number;
  setEquipmentGroupId(value: number): EquipmentGroup;

  getEquipmentType(): string;
  setEquipmentType(value: string): EquipmentGroup;

  getName(): string;
  setName(value: string): EquipmentGroup;

  getEquipmentIdsList(): Array<number>;
  setEquipmentIdsList(value: Array<number>): EquipmentGroup;
  clearEquipmentIdsList(): EquipmentGroup;
  addEquipmentIds(value: number, index?: number): EquipmentGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EquipmentGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EquipmentGroup): EquipmentGroup.AsObject;
  static serializeBinaryToWriter(message: EquipmentGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EquipmentGroup;
  static deserializeBinaryFromReader(message: EquipmentGroup, reader: jspb.BinaryReader): EquipmentGroup;
}

export namespace EquipmentGroup {
  export type AsObject = {
    act: string,
    equipmentGroupId: number,
    equipmentType: string,
    name: string,
    equipmentIdsList: Array<number>,
  }
}

export class Window extends jspb.Message {
  getEquipmentId(): number;
  setEquipmentId(value: number): Window;

  getOpenTime(): number;
  setOpenTime(value: number): Window;

  getCloseTime(): number;
  setCloseTime(value: number): Window;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Window.AsObject;
  static toObject(includeInstance: boolean, msg: Window): Window.AsObject;
  static serializeBinaryToWriter(message: Window, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Window;
  static deserializeBinaryFromReader(message: Window, reader: jspb.BinaryReader): Window;
}

export namespace Window {
  export type AsObject = {
    equipmentId: number,
    openTime: number,
    closeTime: number,
  }
}

export class Schedule extends jspb.Message {
  getScheduleId(): number;
  setScheduleId(value: number): Schedule;

  getName(): string;
  setName(value: string): Schedule;

  getType(): string;
  setType(value: string): Schedule;

  getTimecondition(): TimeCondition | undefined;
  setTimecondition(value?: TimeCondition): Schedule;
  hasTimecondition(): boolean;
  clearTimecondition(): Schedule;

  getSensorconditionsList(): Array<SensorConditions>;
  setSensorconditionsList(value: Array<SensorConditions>): Schedule;
  clearSensorconditionsList(): Schedule;
  addSensorconditions(value?: SensorConditions, index?: number): SensorConditions;

  getOrdersList(): Array<AllOrder>;
  setOrdersList(value: Array<AllOrder>): Schedule;
  clearOrdersList(): Schedule;
  addOrders(value?: AllOrder, index?: number): AllOrder;

  getAct(): string;
  setAct(value: string): Schedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    scheduleId: number,
    name: string,
    type: string,
    timecondition?: TimeCondition.AsObject,
    sensorconditionsList: Array<SensorConditions.AsObject>,
    ordersList: Array<AllOrder.AsObject>,
    act: string,
  }
}

export class TimeCondition extends jspb.Message {
  getStartTime(): TimeInfo | undefined;
  setStartTime(value?: TimeInfo): TimeCondition;
  hasStartTime(): boolean;
  clearStartTime(): TimeCondition;

  getEndTime(): TimeInfo | undefined;
  setEndTime(value?: TimeInfo): TimeCondition;
  hasEndTime(): boolean;
  clearEndTime(): TimeCondition;

  getInterval(): Interval | undefined;
  setInterval(value?: Interval): TimeCondition;
  hasInterval(): boolean;
  clearInterval(): TimeCondition;

  getDayList(): Array<number>;
  setDayList(value: Array<number>): TimeCondition;
  clearDayList(): TimeCondition;
  addDay(value: number, index?: number): TimeCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeCondition.AsObject;
  static toObject(includeInstance: boolean, msg: TimeCondition): TimeCondition.AsObject;
  static serializeBinaryToWriter(message: TimeCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeCondition;
  static deserializeBinaryFromReader(message: TimeCondition, reader: jspb.BinaryReader): TimeCondition;
}

export namespace TimeCondition {
  export type AsObject = {
    startTime?: TimeInfo.AsObject,
    endTime?: TimeInfo.AsObject,
    interval?: Interval.AsObject,
    dayList: Array<number>,
  }
}

export class TimeInfo extends jspb.Message {
  getHour(): number;
  setHour(value: number): TimeInfo;

  getMinute(): number;
  setMinute(value: number): TimeInfo;

  getSuninfo(): SunInfo | undefined;
  setSuninfo(value?: SunInfo): TimeInfo;
  hasSuninfo(): boolean;
  clearSuninfo(): TimeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TimeInfo): TimeInfo.AsObject;
  static serializeBinaryToWriter(message: TimeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeInfo;
  static deserializeBinaryFromReader(message: TimeInfo, reader: jspb.BinaryReader): TimeInfo;
}

export namespace TimeInfo {
  export type AsObject = {
    hour: number,
    minute: number,
    suninfo?: SunInfo.AsObject,
  }
}

export class SunInfo extends jspb.Message {
  getSunType(): string;
  setSunType(value: string): SunInfo;

  getTime(): string;
  setTime(value: string): SunInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SunInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SunInfo): SunInfo.AsObject;
  static serializeBinaryToWriter(message: SunInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SunInfo;
  static deserializeBinaryFromReader(message: SunInfo, reader: jspb.BinaryReader): SunInfo;
}

export namespace SunInfo {
  export type AsObject = {
    sunType: string,
    time: string,
  }
}

export class Interval extends jspb.Message {
  getSelectDate(): string;
  setSelectDate(value: string): Interval;

  getUnit(): string;
  setUnit(value: string): Interval;

  getValue(): number;
  setValue(value: number): Interval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Interval.AsObject;
  static toObject(includeInstance: boolean, msg: Interval): Interval.AsObject;
  static serializeBinaryToWriter(message: Interval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Interval;
  static deserializeBinaryFromReader(message: Interval, reader: jspb.BinaryReader): Interval;
}

export namespace Interval {
  export type AsObject = {
    selectDate: string,
    unit: string,
    value: number,
  }
}

export class SensorConditions extends jspb.Message {
  getSensorconditionList(): Array<SensorCondition>;
  setSensorconditionList(value: Array<SensorCondition>): SensorConditions;
  clearSensorconditionList(): SensorConditions;
  addSensorcondition(value?: SensorCondition, index?: number): SensorCondition;

  getSensorgroupconditionList(): Array<SensorGroupCondition>;
  setSensorgroupconditionList(value: Array<SensorGroupCondition>): SensorConditions;
  clearSensorgroupconditionList(): SensorConditions;
  addSensorgroupcondition(value?: SensorGroupCondition, index?: number): SensorGroupCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorConditions.AsObject;
  static toObject(includeInstance: boolean, msg: SensorConditions): SensorConditions.AsObject;
  static serializeBinaryToWriter(message: SensorConditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorConditions;
  static deserializeBinaryFromReader(message: SensorConditions, reader: jspb.BinaryReader): SensorConditions;
}

export namespace SensorConditions {
  export type AsObject = {
    sensorconditionList: Array<SensorCondition.AsObject>,
    sensorgroupconditionList: Array<SensorGroupCondition.AsObject>,
  }
}

export class SensorCondition extends jspb.Message {
  getSensorId(): string;
  setSensorId(value: string): SensorCondition;

  getSensorUp(): number;
  setSensorUp(value: number): SensorCondition;

  getSensorDown(): number;
  setSensorDown(value: number): SensorCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorCondition.AsObject;
  static toObject(includeInstance: boolean, msg: SensorCondition): SensorCondition.AsObject;
  static serializeBinaryToWriter(message: SensorCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorCondition;
  static deserializeBinaryFromReader(message: SensorCondition, reader: jspb.BinaryReader): SensorCondition;
}

export namespace SensorCondition {
  export type AsObject = {
    sensorId: string,
    sensorUp: number,
    sensorDown: number,
  }
}

export class SensorGroupCondition extends jspb.Message {
  getSensorGroupId(): string;
  setSensorGroupId(value: string): SensorGroupCondition;

  getSensorUse(): string;
  setSensorUse(value: string): SensorGroupCondition;

  getSensorGroupUp(): number;
  setSensorGroupUp(value: number): SensorGroupCondition;

  getSensorGroupDown(): number;
  setSensorGroupDown(value: number): SensorGroupCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorGroupCondition.AsObject;
  static toObject(includeInstance: boolean, msg: SensorGroupCondition): SensorGroupCondition.AsObject;
  static serializeBinaryToWriter(message: SensorGroupCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorGroupCondition;
  static deserializeBinaryFromReader(message: SensorGroupCondition, reader: jspb.BinaryReader): SensorGroupCondition;
}

export namespace SensorGroupCondition {
  export type AsObject = {
    sensorGroupId: string,
    sensorUse: string,
    sensorGroupUp: number,
    sensorGroupDown: number,
  }
}

export class Order extends jspb.Message {
  getEquipmentId(): number;
  setEquipmentId(value: number): Order;

  getAct(): string;
  setAct(value: string): Order;

  getValue(): number;
  setValue(value: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    equipmentId: number,
    act: string,
    value: number,
  }
}

export class GroupOrder extends jspb.Message {
  getEquipmentGroupId(): number;
  setEquipmentGroupId(value: number): GroupOrder;

  getAct(): string;
  setAct(value: string): GroupOrder;

  getValue(): number;
  setValue(value: number): GroupOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupOrder.AsObject;
  static toObject(includeInstance: boolean, msg: GroupOrder): GroupOrder.AsObject;
  static serializeBinaryToWriter(message: GroupOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupOrder;
  static deserializeBinaryFromReader(message: GroupOrder, reader: jspb.BinaryReader): GroupOrder;
}

export namespace GroupOrder {
  export type AsObject = {
    equipmentGroupId: number,
    act: string,
    value: number,
  }
}

export class AllOrder extends jspb.Message {
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): AllOrder;
  clearOrdersList(): AllOrder;
  addOrders(value?: Order, index?: number): Order;

  getGroupordersList(): Array<GroupOrder>;
  setGroupordersList(value: Array<GroupOrder>): AllOrder;
  clearGroupordersList(): AllOrder;
  addGrouporders(value?: GroupOrder, index?: number): GroupOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllOrder.AsObject;
  static toObject(includeInstance: boolean, msg: AllOrder): AllOrder.AsObject;
  static serializeBinaryToWriter(message: AllOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllOrder;
  static deserializeBinaryFromReader(message: AllOrder, reader: jspb.BinaryReader): AllOrder;
}

export namespace AllOrder {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
    groupordersList: Array<GroupOrder.AsObject>,
  }
}

export class ResultReply extends jspb.Message {
  getRequestName(): string;
  setRequestName(value: string): ResultReply;

  getSuccess(): boolean;
  setSuccess(value: boolean): ResultReply;

  getLog(): string;
  setLog(value: string): ResultReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultReply.AsObject;
  static toObject(includeInstance: boolean, msg: ResultReply): ResultReply.AsObject;
  static serializeBinaryToWriter(message: ResultReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultReply;
  static deserializeBinaryFromReader(message: ResultReply, reader: jspb.BinaryReader): ResultReply;
}

export namespace ResultReply {
  export type AsObject = {
    requestName: string,
    success: boolean,
    log: string,
  }
}

