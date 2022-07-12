/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Defines the details required for a COMPUTE_INSTANCE-type `Endpoint`.
 *
 */
export interface ComputeInstanceEndpoint extends model.Endpoint {
  /**
   * The IPv4 address of the COMPUTE_INSTANCE-type `Endpoint` object.
   *
   */
  "address": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compute instance.
   *
   */
  "instanceId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VNIC attached to the compute instance.
   *
   */
  "vnicId": string;

  "type": string;
}

export namespace ComputeInstanceEndpoint {
  export function getJsonObj(obj: ComputeInstanceEndpoint, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Endpoint.getJsonObj(obj) as ComputeInstanceEndpoint)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "COMPUTE_INSTANCE";
  export function getDeserializedJsonObj(
    obj: ComputeInstanceEndpoint,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Endpoint.getDeserializedJsonObj(obj) as ComputeInstanceEndpoint)),
      ...{}
    };

    return jsonObj;
  }
}