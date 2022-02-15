/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The Substring masking format extracts a portion of the original column
 * value and uses it to replace the original value. It internally uses the
 * Oracle SUBSTR function. It takes the start position and length as input,
 * extracts substring from the original value using SUBSTR, and uses the
 * substring to replace the original value. To learn more, check Substring
 * in the Data Safe documentation.
 *
 */
export interface SubstringFormatEntry extends model.FormatEntry {
  /**
   * The starting position in the original string from where the substring
   * should be extracted. It can be either a positive or a negative integer.
   * If It's negative, the counting starts from the end of the string.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startPosition": number;
  /**
   * The number of characters that should be there in the substring. It should
   * be an integer and greater than zero.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "length": number;

  "type": string;
}

export namespace SubstringFormatEntry {
  export function getJsonObj(obj: SubstringFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as SubstringFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SUBSTRING";
  export function getDeserializedJsonObj(
    obj: SubstringFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as SubstringFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}
