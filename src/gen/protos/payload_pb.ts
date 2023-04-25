// @generated by protoc-gen-es v1.2.0 with parameter "target=ts,import_extension="
// @generated from file protos/payload.proto (package protoc, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { SignTransaction } from "./transaction_pb";
import { SignTransactionResult } from "./sign_transaction_result_pb";

/**
 * @generated from message protoc.Payload
 */
export class Payload extends Message<Payload> {
  /**
   * @generated from field: protoc.Payload.Type type = 1;
   */
  type = Payload_Type.RESERVE;

  /**
   * @generated from field: string xfp = 2;
   */
  xfp = "";

  /**
   * @generated from oneof protoc.Payload.Content
   */
  Content: {
    /**
     * Sync sync = 3;
     *
     * @generated from field: protoc.SignTransaction signTx = 4;
     */
    value: SignTransaction;
    case: "signTx";
  } | {
    /**
     * SignMessage signMsg = 5;
     * VerifyAddress verifyAddr = 6;
     *
     * @generated from field: protoc.SignTransactionResult signTxResult = 7;
     */
    value: SignTransactionResult;
    case: "signTxResult";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Payload>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protoc.Payload";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(Payload_Type) },
    { no: 2, name: "xfp", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "signTx", kind: "message", T: SignTransaction, oneof: "Content" },
    { no: 7, name: "signTxResult", kind: "message", T: SignTransactionResult, oneof: "Content" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Payload {
    return new Payload().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Payload {
    return new Payload().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Payload {
    return new Payload().fromJsonString(jsonString, options);
  }

  static equals(a: Payload | PlainMessage<Payload> | undefined, b: Payload | PlainMessage<Payload> | undefined): boolean {
    return proto3.util.equals(Payload, a, b);
  }
}

/**
 * @generated from enum protoc.Payload.Type
 */
export enum Payload_Type {
  /**
   * @generated from enum value: TYPE_RESERVE = 0;
   */
  RESERVE = 0,

  /**
   * @generated from enum value: TYPE_SYNC = 1;
   */
  SYNC = 1,

  /**
   * @generated from enum value: TYPE_SIGN_TX = 2;
   */
  SIGN_TX = 2,

  /**
   * @generated from enum value: TYPE_SIGN_MSG = 3;
   */
  SIGN_MSG = 3,

  /**
   * @generated from enum value: TYPE_SIGN_MULTI_SIG = 4;
   */
  SIGN_MULTI_SIG = 4,

  /**
   * @generated from enum value: TYPE_SYNC_MULTI_SIG_MSG = 5;
   */
  SYNC_MULTI_SIG_MSG = 5,

  /**
   * @generated from enum value: TYPE_SIGN_ETH_MULTI_SIG_MSG = 6;
   */
  SIGN_ETH_MULTI_SIG_MSG = 6,

  /**
   * @generated from enum value: TYPE_VERIFY_ADDRESS = 7;
   */
  VERIFY_ADDRESS = 7,

  /**
   * @generated from enum value: TYPE_STAKING = 8;
   */
  STAKING = 8,

  /**
   * @generated from enum value: TYPE_SIGN_TX_RESULT = 9;
   */
  SIGN_TX_RESULT = 9,
}
// Retrieve enum metadata with: proto3.getEnumType(Payload_Type)
proto3.util.setEnumType(Payload_Type, "protoc.Payload.Type", [
  { no: 0, name: "TYPE_RESERVE" },
  { no: 1, name: "TYPE_SYNC" },
  { no: 2, name: "TYPE_SIGN_TX" },
  { no: 3, name: "TYPE_SIGN_MSG" },
  { no: 4, name: "TYPE_SIGN_MULTI_SIG" },
  { no: 5, name: "TYPE_SYNC_MULTI_SIG_MSG" },
  { no: 6, name: "TYPE_SIGN_ETH_MULTI_SIG_MSG" },
  { no: 7, name: "TYPE_VERIFY_ADDRESS" },
  { no: 8, name: "TYPE_STAKING" },
  { no: 9, name: "TYPE_SIGN_TX_RESULT" },
]);

