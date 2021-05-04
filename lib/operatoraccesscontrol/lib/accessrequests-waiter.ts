/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { AccessRequestsClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class AccessRequestsWaiter {
  public constructor(
    private client: AccessRequestsClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAccessRequest till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAccessRequestResponse
   */
  public async forAccessRequest(
    request: serviceRequests.GetAccessRequestRequest,
    ...targetStates: models.AccessRequestLifecycleStates[]
  ): Promise<serviceResponses.GetAccessRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getAccessRequest(request),
      response => targetStates.includes(response.accessRequest.lifecycleState!)
    );
  }
}
