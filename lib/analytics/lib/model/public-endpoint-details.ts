/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
 * 
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
 * Public endpoint configuration details.
 *
 */
export interface PublicEndpointDetails extends model.NetworkEndpointDetails {
  /**
   * Source IP addresses or IP address ranges igress rules.
   *
   */
  "whitelistedIps"?: Array<string>;
  /**
   * Virtual Cloud Networks allowed to access this network endpoint.
   *
   */
  "whitelistedVcns"?: Array<model.VirtualCloudNetwork>;

  "networkEndpointType": string;
}

export namespace PublicEndpointDetails {
  export function getJsonObj(obj: PublicEndpointDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.NetworkEndpointDetails.getJsonObj(obj) as PublicEndpointDetails)),
      ...{
        "whitelistedVcns": obj.whitelistedVcns
          ? obj.whitelistedVcns.map(item => {
              return model.VirtualCloudNetwork.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const networkEndpointType = "PUBLIC";
}