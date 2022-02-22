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
 * Details of the target database that's used as the source of masking columns.
 */
export interface ColumnSourceFromTargetDetails extends model.ColumnSourceDetails {
  /**
   * The OCID of the target database that's used as the source of masking columns.
   */
  "targetId": string;

  "columnSource": string;
}

export namespace ColumnSourceFromTargetDetails {
  export function getJsonObj(
    obj: ColumnSourceFromTargetDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ColumnSourceDetails.getJsonObj(obj) as ColumnSourceFromTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const columnSource = "TARGET";
  export function getDeserializedJsonObj(
    obj: ColumnSourceFromTargetDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ColumnSourceDetails.getDeserializedJsonObj(obj) as ColumnSourceFromTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
}