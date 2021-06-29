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
 * Specifies a failure policy by count for a compute instance group rolling deployment stage.
 */
export interface ComputeInstanceGroupFailurePolicyByCount
  extends model.ComputeInstanceGroupFailurePolicy {
  /**
   * The threshold count of failed instances in the group, which when reached or exceeded sets the stage as FAILED. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failureCount": number;

  "policyType": string;
}

export namespace ComputeInstanceGroupFailurePolicyByCount {
  export function getJsonObj(
    obj: ComputeInstanceGroupFailurePolicyByCount,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ComputeInstanceGroupFailurePolicy.getJsonObj(
            obj
          ) as ComputeInstanceGroupFailurePolicyByCount)),
      ...{}
    };

    return jsonObj;
  }
  export const policyType = "COMPUTE_INSTANCE_GROUP_FAILURE_POLICY_BY_COUNT";
}
