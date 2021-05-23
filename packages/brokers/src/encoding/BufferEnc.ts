/*
	Copyright (c) 2020, Will Nelson
	Source from: https://github.com/spec-tacles/spectacles.js/blob/master/packages/util/src/encode.ts
*/

import { Buffer } from "https://deno.land/std@0.97.0/node/buffer.ts";

/**
 * @since 0.4.1
 * @internal
 */
// deno-lint-ignore no-explicit-any
export function encode(data: any): Buffer {
  if (Buffer.isBuffer(data)) return data;
  return Buffer.from(JSON.stringify(data));
}

/**
 * @since 0.4.1
 * @internal
 */
// deno-lint-ignore no-explicit-any
export function decode<T = any>(
  data: ArrayBuffer | string | Buffer[] | Buffer | Uint8Array,
): T {
  if (data instanceof ArrayBuffer) data = Buffer.from(data);
  else if (Array.isArray(data)) data = Buffer.concat(data);

  if (Buffer.isBuffer(data)) data = data.toString();
  else if (typeof data !== "string") data = Buffer.from(data).toString();
  return JSON.parse(data);
}
