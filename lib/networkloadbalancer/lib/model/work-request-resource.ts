/**
 * NetworkLoadBalancer API
 * A description of the network load balancer API
 * OpenAPI spec version: 20200501
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
 * A resource that a work request creates or on which the work request operates.
 */
export interface WorkRequestResource {
  /**
   * The resource type that the work request affects.
   */
  "entityType": string;
  /**
   * The way in which this resource is affected by the work tracked in the work request.
   * A resource being created, updated, or deleted remains in the IN_PROGRESS state until
   * work is complete for that resource, at which point the resource transitions to CREATED, UPDATED,
   * or DELETED, respectively.
   *
   */
  "actionType": model.ActionType;
  /**
   * The identifier of the resource the work request affects.
   */
  "identifier": string;
  /**
   * The URI path on which the user can perform a GET request to access the resource metadata.
   */
  "entityUri"?: string;
}

export namespace WorkRequestResource {
  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
