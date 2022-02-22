/**
 * OneSubscription API Billing Schedule
 * OneSubscription API for Billing Schedule information

 * OpenAPI spec version: 20210501
 * Contact: kuaskum_org_ww@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum BillingScheduleApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class BillingScheduleClient {
  protected static serviceEndpointTemplate = "https://csaap-e.oracle.com";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/oalapp/service/onesubs/proxy/20210501";
    if (this.logger) this.logger.info(`BillingScheduleClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      BillingScheduleClient.serviceEndpointTemplate,
      region,
      BillingScheduleClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      BillingScheduleClient.serviceEndpointTemplate,
      regionId,
      BillingScheduleClient.endpointServiceName
    );
  }

  /**
   * This list API returns all billing schedules for given subscription id and
   * for a particular Subscribed Service if provided
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListBillingSchedulesRequest
   * @return ListBillingSchedulesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubbillingschedule/ListBillingSchedules.ts.html |here} to see how to use ListBillingSchedules API.
   */
  public async listBillingSchedules(
    listBillingSchedulesRequest: requests.ListBillingSchedulesRequest
  ): Promise<responses.ListBillingSchedulesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation BillingScheduleClient#listBillingSchedules.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listBillingSchedulesRequest.compartmentId,
      "subscriptionId": listBillingSchedulesRequest.subscriptionId,
      "subscribedServiceId": listBillingSchedulesRequest.subscribedServiceId,
      "limit": listBillingSchedulesRequest.limit,
      "page": listBillingSchedulesRequest.page,
      "sortOrder": listBillingSchedulesRequest.sortOrder,
      "sortBy": listBillingSchedulesRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listBillingSchedulesRequest.opcRequestId,
      "x-one-origin-region": listBillingSchedulesRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listBillingSchedulesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/billingSchedules",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListBillingSchedulesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.BillingScheduleSummary,
        type: "Array<model.BillingScheduleSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listBillingSchedulesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.BillingScheduleSummary objects
   * contained in responses from the listBillingSchedules operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllBillingSchedules(
    request: requests.ListBillingSchedulesRequest
  ): AsyncIterableIterator<model.BillingScheduleSummary> {
    return paginateRecords(request, req => this.listBillingSchedules(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listBillingSchedulesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listBillingSchedules operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllBillingSchedulesResponses(
    request: requests.ListBillingSchedulesRequest
  ): AsyncIterableIterator<responses.ListBillingSchedulesResponse> {
    return paginateResponses(request, req => this.listBillingSchedules(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.BillingScheduleSummary objects
   * contained in responses from the listBillingSchedules operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listBillingSchedulesRecordIterator(
    request: requests.ListBillingSchedulesRequest
  ): AsyncIterableIterator<model.BillingScheduleSummary> {
    return paginateRecords(request, req => this.listBillingSchedules(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listBillingSchedules operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listBillingSchedulesResponseIterator(
    request: requests.ListBillingSchedulesRequest
  ): AsyncIterableIterator<responses.ListBillingSchedulesResponse> {
    return paginateResponses(request, req => this.listBillingSchedules(req));
  }
}