/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the data operation.
 */
export interface AbstractDataOperationConfig {
  /**
   * This map is used for passing extra metatdata configuration that is required by read / write operation.
   */
  "metadataConfigProperties"?: { [key: string]: string };
  /**
   * this map is used for passing BIP report parameter values.
   */
  "derivedAttributes"?: { [key: string]: string };
  "callAttribute"?: model.BipCallAttribute;

  "modelType": string;
}

export namespace AbstractDataOperationConfig {
  export function getJsonObj(obj: AbstractDataOperationConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "callAttribute": obj.callAttribute
          ? model.BipCallAttribute.getJsonObj(obj.callAttribute)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "WRITE_OPERATION_CONFIG":
          return model.WriteOperationConfig.getJsonObj(
            <model.WriteOperationConfig>(<object>jsonObj),
            true
          );
        case "READ_OPERATION_CONFIG":
          return model.ReadOperationConfig.getJsonObj(
            <model.ReadOperationConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AbstractDataOperationConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "callAttribute": obj.callAttribute
          ? model.BipCallAttribute.getDeserializedJsonObj(obj.callAttribute)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "WRITE_OPERATION_CONFIG":
          return model.WriteOperationConfig.getDeserializedJsonObj(
            <model.WriteOperationConfig>(<object>jsonObj),
            true
          );
        case "READ_OPERATION_CONFIG":
          return model.ReadOperationConfig.getDeserializedJsonObj(
            <model.ReadOperationConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
