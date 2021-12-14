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
 * A step of a SQL execution plan.
 */
export interface SqlTuningTaskSqlExecutionPlanStep {
  /**
   * Numerical representation of the execution plan Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "planHashValue"?: number;
  /**
   * Identification number for this step in the execution plan. It is unique within the execution plan.
   * It is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "stepId"?: number;
  /**
   * ID of the next step that operates on the results of this step.
   * It is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parentStepId"?: number;
  /**
   * Order of processing for steps with the same parent ID. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "position"?: number;
  /**
   * Name of the operation performed at this step
   */
  "operation"?: string;
  /**
   * Options used for the operation performed at this step.
   */
  "options"?: string;
  /**
   * Current mode of the optimizer, such as all_rows, first_rows_n (where n = 1, 10, 100, 1000 etc).
   */
  "optimizerMode"?: string;
  /**
   * Cost of the current operation estimated by the cost-based optimizer (CBO). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cost"?: number;
  /**
   * Number of rows returned by the current operation (estimated by the CBO). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cardinality"?: number;
  /**
   * Number of bytes returned by the current operation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bytes"?: number;
  /**
   * The CPU cost of the current operation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCost"?: number;
  /**
   * The I/O cost of the current operation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ioCost"?: number;
  /**
   * Temporary space usage (in bytes) of the operation (sort or hash-join) as estimated by the CBO. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tempSpace"?: number;
  /**
   * Elapsed time (in seconds) of the operation as estimated by the CBO. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "time"?: number;
  /**
   * Name of the database link used to reference the object.
   */
  "objectNode"?: string;
  /**
   * Owner of the object.
   */
  "objectOwner"?: string;
  /**
   * Name of the object.
   */
  "objectName"?: string;
  /**
   * Numbered position of the object name in the original SQL statement. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectPosition"?: number;
  /**
   * Descriptive modifier that further describes the type of object.
   */
  "objectType"?: string;
  /**
   * A step may get data from a range of partitions of a partitioned object, such table or index,
   * based on predicates and sorting order. The partionStart is the starting partition of the range.
   * The partitionStop is the ending partition of the range
   *
   */
  "partitionStart"?: string;
  /**
   * A step may get data from a range of partitions of a partitioned object, such table or index,
   * based on predicates and sorting order. The partionStart is the starting partition of the range.
   * The partitionStop is the ending partition of the range
   *
   */
  "partitionStop"?: string;
  /**
   * The id of the step in the execution plan that has computed the pair of values of the partitionStart and partitionStop
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "partitionId"?: number;
  /**
   * Place for comments that can be added to the steps of the execution plan.
   */
  "remarks"?: string;
  /**
   * Number of index columns with start and stop keys (that is, the number of columns with matching predicates)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfSearchColumn"?: number;
  /**
   * Information about parallel execution servers and parallel queries
   */
  "other"?: string;
  /**
   * Describes the function of the SQL text in the OTHER column.
   */
  "otherTag"?: string;
  /**
   * Text string identifying the type of the execution plan.
   */
  "attribute"?: string;
  /**
   * Predicates used to locate rows in an access structure. For example,
   * start or stop predicates for an index range scan.
   *
   */
  "accessPredicates"?: string;
  /**
   * Predicates used to filter rows before producing them.
   */
  "filterPredicates"?: string;
}

export namespace SqlTuningTaskSqlExecutionPlanStep {
  export function getJsonObj(obj: SqlTuningTaskSqlExecutionPlanStep): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningTaskSqlExecutionPlanStep): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}