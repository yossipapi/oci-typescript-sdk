/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * Container Http headers for Http health check.
 */
export interface HealthCheckHttpHeader {
  /**
   * Container Http header Key.
   */
  "name": string;
  /**
   * Container Http header value.
   */
  "value": string;
}

export namespace HealthCheckHttpHeader {
  export function getJsonObj(obj: HealthCheckHttpHeader): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HealthCheckHttpHeader): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
