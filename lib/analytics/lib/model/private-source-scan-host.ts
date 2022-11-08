/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Private source Scan Hostname model.
 *
 */
export interface PrivateSourceScanHost {
  /**
   * Private Source Scan hostname. Ex: db01-scan.corp.example.com, prd-db01-scan.mycompany.com.
   *
   */
  "scanHostname": string;
  /**
   * Private Source Scan host port. This is the source port where SCAN protocol will get connected (e.g. 1521).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanPort": number;
  /**
   * Description of private source scan host zone.
   *
   */
  "description"?: string;
}

export namespace PrivateSourceScanHost {
  export function getJsonObj(obj: PrivateSourceScanHost): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PrivateSourceScanHost): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}