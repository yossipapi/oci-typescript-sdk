/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * An instance that is to be detached from an instance pool.
 *
 */
export interface DetachInstancePoolInstanceDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the instance.
   */
  "instanceId": string;
  /**
   * Whether to decrease the size of the instance pool when the instance is detached. If `true`, the
   * pool size is decreased. If `false`, the pool will provision a new, replacement instance
   * using the pool's instance configuration as a template. Default is `true`.
   *
   */
  "isDecrementSize"?: boolean;
  /**
   * Whether to permanently terminate (delete) the instance and its attached boot volume
   * when detaching it from the instance pool. Default is `false`.
   *
   */
  "isAutoTerminate"?: boolean;
}

export namespace DetachInstancePoolInstanceDetails {
  export function getJsonObj(obj: DetachInstancePoolInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
