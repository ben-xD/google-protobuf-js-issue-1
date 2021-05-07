// package: 
// file: BytesMessage.proto

import * as jspb from "google-protobuf";

export class BytesMessage extends jspb.Message {
  getSomeBytes(): Uint8Array | string;
  getSomeBytes_asU8(): Uint8Array;
  getSomeBytes_asB64(): string;
  setSomeBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BytesMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BytesMessage): BytesMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BytesMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BytesMessage;
  static deserializeBinaryFromReader(message: BytesMessage, reader: jspb.BinaryReader): BytesMessage;
}

export namespace BytesMessage {
  export type AsObject = {
    someBytes: Uint8Array | string,
  }
}

