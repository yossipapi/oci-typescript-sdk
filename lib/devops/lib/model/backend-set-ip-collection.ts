/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * Collection of backend environment IP addresses.
 */
export interface BackendSetIpCollection {
  /**
   * The IP address of the backend server. A server could be a compute instance or a load balancer.
   */
  "items"?: Array<string>;
}

export namespace BackendSetIpCollection {
  export function getJsonObj(obj: BackendSetIpCollection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
