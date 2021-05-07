PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
protobuf_directory="./protobuf"
OUT_DIR="./src/protobuf"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    --proto_path="$protobuf_directory" \
    "$protobuf_directory/BytesMessage.proto"