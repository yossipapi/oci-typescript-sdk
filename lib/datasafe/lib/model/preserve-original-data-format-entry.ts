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
 * The Preserve Original Data masking format retains the original values in a column.
 * It is useful in conditional masking when you want to preserve a subset of values
 * in a column and mask the remaining values using some other masking formats. To
 * learn more, check Preserve Original Data in the Data Safe documentation.
 *
 */
export interface PreserveOriginalDataFormatEntry extends model.FormatEntry {
  "type": string;
}

export namespace PreserveOriginalDataFormatEntry {
  export function getJsonObj(
    obj: PreserveOriginalDataFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getJsonObj(obj) as PreserveOriginalDataFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "PRESERVE_ORIGINAL_DATA";
  export function getDeserializedJsonObj(
    obj: PreserveOriginalDataFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as PreserveOriginalDataFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}
