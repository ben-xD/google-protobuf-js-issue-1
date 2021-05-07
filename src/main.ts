const { BytesMessage } = require('./protobuf/BytesMessage_pb');

const message = new BytesMessage();
const int16Array = new Int16Array([0, 1000, 2000]);
const dataView = new DataView(int16Array.buffer);
const uint8 = new Uint8Array(dataView.buffer);
message.setSomeBytes(uint8);
const bytes = message.serializeBinary();

const uint8before = message.getSomeBytes() as Uint8Array;
const int16Before = new Int16Array(new DataView(uint8before.buffer).buffer);

const deserializedMessage = BytesMessage.deserializeBinary(bytes);
const uint8after = deserializedMessage.getSomeBytes() as Uint8Array;
const int16After = new Int16Array(new DataView(uint8after.buffer).buffer);
console.log({ uint8before, uint8after });
console.log({ int16Before, int16After });
