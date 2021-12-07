/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Log analytics scheduled task resource.
 *
 */
export interface ScheduledTask {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the data plane resource.
   *
   */
  "id": string;
  /**
   * A user-friendly name that is changeable and that does not have to be unique.
   * Format: a leading alphanumeric, followed by zero or more
   * alphanumerics, underscores, spaces, backslashes, or hyphens in any order).
   * No trailing spaces allowed.
   *
   */
  "displayName": string;
  /**
   * Task type.
   */
  "taskType": model.TaskType;
  /**
   * Schedules.
   */
  "schedules": Array<model.Schedule>;
  "action": model.PurgeAction | model.StreamAction;
  /**
   * Status of the scheduled task.
   */
  "taskStatus"?: ScheduledTask.TaskStatus;
  /**
   * reason for taskStatus PAUSED.
   */
  "pauseReason"?: ScheduledTask.PauseReason;
  /**
   * most recent Work Request Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the asynchronous request.
   */
  "workRequestId"?: string;
  /**
   * Number of execution occurrences. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numOccurrences"?: number;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The date and time the scheduled task was created, in the format defined by RFC3339.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the scheduled task was last updated, in the format defined by RFC3339.
   *
   */
  "timeUpdated": Date;
  /**
   * The date and time the scheduled task will execute next,
   * in the format defined by RFC3339.
   *
   */
  "timeOfNextExecution"?: Date;
  /**
   * The current state of the scheduled task.
   */
  "lifecycleState": ScheduledTask.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "kind": string;
}

export namespace ScheduledTask {
  export enum TaskStatus {
    Ready = "READY",
    Paused = "PAUSED",
    Completed = "COMPLETED",
    Blocked = "BLOCKED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PauseReason {
    MetricExtractionNotValid = "METRIC_EXTRACTION_NOT_VALID",
    SavedSearchNotValid = "SAVED_SEARCH_NOT_VALID",
    SavedSearchNotFound = "SAVED_SEARCH_NOT_FOUND",
    QueryStringNotValid = "QUERY_STRING_NOT_VALID",
    UserAction = "USER_ACTION",
    TenancyLifecycle = "TENANCY_LIFECYCLE",
    PurgeResourceNotFound = "PURGE_RESOURCE_NOT_FOUND",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ScheduledTask): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.Schedule.getJsonObj(item);
            })
          : undefined,
        "action": obj.action ? model.Action.getJsonObj(obj.action) : undefined
      }
    };

    if ("kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "STANDARD":
          return model.StandardTask.getJsonObj(<model.StandardTask>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledTask): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.Schedule.getDeserializedJsonObj(item);
            })
          : undefined,
        "action": obj.action ? model.Action.getDeserializedJsonObj(obj.action) : undefined
      }
    };

    if ("kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "STANDARD":
          return model.StandardTask.getDeserializedJsonObj(
            <model.StandardTask>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
}
