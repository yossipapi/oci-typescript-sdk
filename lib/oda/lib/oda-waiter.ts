/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { OdaClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class OdaWaiter {
  public constructor(private client: OdaClient, private readonly config?: WaiterConfiguration) {}

  /**
   * Waits forOdaInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOdaInstanceResponse | null (null in case of 404 response)
   */
  public async forOdaInstance(
    request: serviceRequests.GetOdaInstanceRequest,
    ...targetStates: models.OdaInstance.LifecycleState[]
  ): Promise<serviceResponses.GetOdaInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOdaInstance(request),
      response => targetStates.exists(response.odaInstance.lifecycleState),
      targetStates.includes(models.OdaInstance.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
