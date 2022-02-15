/**
 * VisionService API
 * A description of the VisionService API.
 * OpenAPI spec version: 20220125
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
 * Array of field values.
 */
export interface ValueArray extends model.FieldValue {
  "items": Array<model.DocumentField>;

  "valueType": string;
}

export namespace ValueArray {
  export function getJsonObj(obj: ValueArray, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FieldValue.getJsonObj(obj) as ValueArray)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DocumentField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const valueType = "ARRAY";
  export function getDeserializedJsonObj(obj: ValueArray, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FieldValue.getDeserializedJsonObj(obj) as ValueArray)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DocumentField.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
