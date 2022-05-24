/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * The saved schedule run.
 */
export interface ScheduledRun {
  /**
   * The ocid representing unique shedule run
   */
  "id": string;
  /**
   * The ocid representing unique shedule
   */
  "scheduleId": string;
  /**
   * The time when schedule started executing
   */
  "timeCreated": Date;
  /**
   * The time when schedule finished executing
   */
  "timeFinished": Date;
  /**
   * Specifies if the schedule job was run successfully or not.
   */
  "lifecycleState": ScheduledRun.LifecycleState;
  /**
   * Additional details about scheduled run failure
   */
  "lifecycleDetails": string;
}

export namespace ScheduledRun {
  export enum LifecycleState {
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ScheduledRun): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledRun): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}