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
 * The data entity shape object.
 */
export interface EntityShape {
  "metadata"?: model.ObjectMetadata;

  "modelType": string;
}

export namespace EntityShape {
  export function getJsonObj(obj: EntityShape): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "SQL_ENTITY":
          return model.EntityShapeFromSQL.getJsonObj(
            <model.EntityShapeFromSQL>(<object>jsonObj),
            true
          );
        case "FILE_ENTITY":
          return model.EntityShapeFromFile.getJsonObj(
            <model.EntityShapeFromFile>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityShape): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "SQL_ENTITY":
          return model.EntityShapeFromSQL.getDeserializedJsonObj(
            <model.EntityShapeFromSQL>(<object>jsonObj),
            true
          );
        case "FILE_ENTITY":
          return model.EntityShapeFromFile.getDeserializedJsonObj(
            <model.EntityShapeFromFile>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
