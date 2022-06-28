/**
 *
 *
 * OpenAPI spec version: 20180222
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/containerengine/UpdateNodePool.ts.html |here} to see how to use UpdateNodePoolRequest.
 */
export interface UpdateNodePoolRequest extends common.BaseRequest {
  /**
   * The OCID of the node pool.
   */
  "nodePoolId": string;
  /**
   * The fields to update in a node pool.
   */
  "updateNodePoolDetails": model.UpdateNodePoolDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match`
   * parameter to the value of the etag from a previous GET or POST response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Duration after which OKE will give up eviction of the pods on the node.
   * PT0M will indicate you want to delete the node without cordon and drain. Default PT60M, Min PT0M, Max: PT60M. Format ISO 8601 e.g PT30M
   *
   */
  "overrideEvictionGraceDuration"?: string;
  /**
   * If the underlying compute instance should be deleted if you cannot evict all the pods in grace period
   */
  "isForceDeletionAfterOverrideGraceDuration"?: boolean;
}
