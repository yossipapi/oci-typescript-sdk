/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The summary for a SQL Tuning Advisor task.
 */
export interface SqlTuningAdvisorTaskSummary {
  /**
   * Unique identifier of the task. It is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sqlTuningAdvisorTaskId": number;
  /**
   * The instance id of the task. It is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceId"?: number;
  /**
   * The name of the task.
   */
  "name"?: string;
  /**
   * The description of the task.
   */
  "description"?: string;
  /**
   * The owner of the task.
   */
  "owner"?: string;
  /**
   * Creation date of the task.
   */
  "timeCreated"?: Date;
  /**
   * The status of the task.
   */
  "taskStatus"?: model.SqlTuningTaskStatusTypes;
  /**
   * Days to expire the task. If the value equals -1 then the task has no expiration time (UNLIMITED). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "daysToExpire"?: number;
  /**
   * Start timestamp of task execution.
   */
  "timeExecutionStarted"?: Date;
  /**
   * End timestamp of task execution.
   */
  "timeExecutionEnded"?: Date;
  /**
   * The total number of SQL statements related to the SQL tuning advisor task. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSqlStatements"?: number;
  /**
   * Number of recommendations produced. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recommendationCount"?: number;
}

export namespace SqlTuningAdvisorTaskSummary {
  export function getJsonObj(obj: SqlTuningAdvisorTaskSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningAdvisorTaskSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}