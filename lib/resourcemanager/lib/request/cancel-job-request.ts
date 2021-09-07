/**
 *
 *
 * OpenAPI spec version: 20180917
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcemanager/CancelJob.ts.html |here} to see how to use CancelJobRequest.
 */
export interface CancelJobRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the job.
   */
  "jobId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * For optimistic concurrency control. In the `PUT` or `DELETE` call for a resource, set the `if-match`
   * parameter to the value of the etag from a previous `GET` or `POST` response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * Indicates whether a forced cancellation is requested for the job while it was running.
   * A forced cancellation can result in an incorrect state file.
   * For example, the state file might not reflect the exact state of the provisioned resources.
   *
   */
  "isForced"?: boolean;
}
