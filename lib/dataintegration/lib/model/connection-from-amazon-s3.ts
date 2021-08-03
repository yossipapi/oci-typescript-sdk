/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The connection details for Amazon s3 data asset.
 */
export interface ConnectionFromAmazonS3 extends model.Connection {
  "accessKey"?: model.SensitiveAttribute;
  "secretKey"?: model.SensitiveAttribute;

  "modelType": string;
}

export namespace ConnectionFromAmazonS3 {
  export function getJsonObj(obj: ConnectionFromAmazonS3, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getJsonObj(obj) as ConnectionFromAmazonS3)),
      ...{
        "accessKey": obj.accessKey ? model.SensitiveAttribute.getJsonObj(obj.accessKey) : undefined,
        "secretKey": obj.secretKey ? model.SensitiveAttribute.getJsonObj(obj.secretKey) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "AMAZON_S3_CONNECTION";
  export function getDeserializedJsonObj(
    obj: ConnectionFromAmazonS3,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as ConnectionFromAmazonS3)),
      ...{
        "accessKey": obj.accessKey
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.accessKey)
          : undefined,
        "secretKey": obj.secretKey
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.secretKey)
          : undefined
      }
    };

    return jsonObj;
  }
}