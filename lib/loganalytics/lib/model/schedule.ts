/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Schedule for scheduled task.
 */
export interface Schedule {
  /**
   * Schedule misfire retry policy.
   */
  "misfirePolicy"?: Schedule.MisfirePolicy;
  /**
   * The date and time the scheduled task should execute first time after create or update;
   * thereafter the task will execute as specified in the schedule.
   *
   */
  "timeOfFirstExecution"?: Date;

  "type": string;
}

export namespace Schedule {
  export enum MisfirePolicy {
    RetryOnce = "RETRY_ONCE",
    RetryIndefinitely = "RETRY_INDEFINITELY",
    Skip = "SKIP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Schedule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "CRON":
          return model.CronSchedule.getJsonObj(<model.CronSchedule>(<object>jsonObj), true);
        case "FIXED_FREQUENCY":
          return model.FixedFrequencySchedule.getJsonObj(
            <model.FixedFrequencySchedule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Schedule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "CRON":
          return model.CronSchedule.getDeserializedJsonObj(
            <model.CronSchedule>(<object>jsonObj),
            true
          );
        case "FIXED_FREQUENCY":
          return model.FixedFrequencySchedule.getDeserializedJsonObj(
            <model.FixedFrequencySchedule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
