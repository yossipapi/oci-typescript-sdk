/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * This is used to specify runtime parameters for data entities such as files that need both the data entity and the format.
 */
export interface EnrichedEntity {
  "entity"?: model.DataEntityFromTable | model.DataEntityFromView | model.DataEntityFromFile;
  "dataFormat"?: model.DataFormat;
}

export namespace EnrichedEntity {
  export function getJsonObj(obj: EnrichedEntity): object {
    const jsonObj = {
      ...obj,
      ...{
        "entity": obj.entity ? model.DataEntity.getJsonObj(obj.entity) : undefined,
        "dataFormat": obj.dataFormat ? model.DataFormat.getJsonObj(obj.dataFormat) : undefined
      }
    };

    return jsonObj;
  }
}