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
 * A list of basic masking formats compatible with and grouped by the supported data types. The data types are grouped into
 * the following categories -
 *   Character - Includes CHAR, NCHAR, VARCHAR2, and NVARCHAR2
 *   Numeric - Includes NUMBER, FLOAT, RAW, BINARY_FLOAT, and BINARY_DOUBLE
 *   Date - Includes DATE and TIMESTAMP
 *   LOB - Includes BLOB, CLOB, and NCLOB
 *   All - Includes all the supported data types
 *
 */
export interface CompatibleFormatsForDataTypes {
  /**
   * An array of lists of basic masking formats compatible with the supported data types.
   */
  "formatsForDataType": Array<model.FormatsForDataType>;
}

export namespace CompatibleFormatsForDataTypes {
  export function getJsonObj(obj: CompatibleFormatsForDataTypes): object {
    const jsonObj = {
      ...obj,
      ...{
        "formatsForDataType": obj.formatsForDataType
          ? obj.formatsForDataType.map(item => {
              return model.FormatsForDataType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CompatibleFormatsForDataTypes): object {
    const jsonObj = {
      ...obj,
      ...{
        "formatsForDataType": obj.formatsForDataType
          ? obj.formatsForDataType.map(item => {
              return model.FormatsForDataType.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
