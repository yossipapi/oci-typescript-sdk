/**
 * Email Delivery API
 * API for the Email Delivery service. Use this API to send high-volume, application-generated
emails. For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).


**Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
import { EmailClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class EmailWaiter {
  public constructor(private client: EmailClient, private readonly config?: WaiterConfiguration) {}

  /**
   * Waits forDkim till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDkimResponse | null (null in case of 404 response)
   */
  public async forDkim(
    request: serviceRequests.GetDkimRequest,
    ...targetStates: models.Dkim.LifecycleState[]
  ): Promise<serviceResponses.GetDkimResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDkim(request),
      response => targetStates.includes(response.dkim.lifecycleState!),
      targetStates.includes(models.Dkim.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forEmailDomain till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetEmailDomainResponse | null (null in case of 404 response)
   */
  public async forEmailDomain(
    request: serviceRequests.GetEmailDomainRequest,
    ...targetStates: models.EmailDomain.LifecycleState[]
  ): Promise<serviceResponses.GetEmailDomainResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getEmailDomain(request),
      response => targetStates.includes(response.emailDomain.lifecycleState!),
      targetStates.includes(models.EmailDomain.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forSender till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetSenderResponse | null (null in case of 404 response)
   */
  public async forSender(
    request: serviceRequests.GetSenderRequest,
    ...targetStates: models.Sender.LifecycleState[]
  ): Promise<serviceResponses.GetSenderResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getSender(request),
      response => targetStates.includes(response.sender.lifecycleState!),
      targetStates.includes(models.Sender.LifecycleState.Deleted)
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
