/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
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
 * An error encountered while executing a work request.
 */
export interface WorkRequestError {
  /**
   * The identifier of the work request erorr.
   */
  "id": string;
  /**
   * The OCID of the work request.
   */
  "workRequestId": string;
  /**
   * A machine-usable code for the error that occured. Error codes are listed on
   * (https://docs.us-phoenix-1.oraclecloud.com/Content/API/References/apierrors.htm)
   *
   */
  "code": string;
  /**
   * A human readable description of the issue encountered.
   */
  "message": string;
  /**
   * To determine the work request error is retryable or not
   */
  "isRetryable"?: boolean;
  /**
   * The time the error occured.
   * An RFC3339 formatted datetime string. The precision for the time object is milliseconds.
   *
   */
  "timestamp": Date;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
