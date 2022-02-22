/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A masking policy defines the approach to mask data in a target database. It's basically
 * a collection of columns to be masked, called masking columns, and the associated masking
 * formats to be used to mask these columns. A masking policy can be used to mask multiple
 * databases provided that they have the same schema design. For more information, see
 * <a href=\"https://docs.oracle.com/en/cloud/paas/data-safe/udscs/masking-policies.html\">Masking Policies </a>
 * in the Oracle Data Safe documentation.
 *
 */
export interface MaskingPolicy {
  /**
   * The OCID of the masking policy.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the masking policy.
   */
  "compartmentId": string;
  /**
   * The display name of the masking policy.
   */
  "displayName": string;
  /**
   * The date and time the masking policy was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The current state of the masking policy.
   */
  "lifecycleState": model.MaskingLifecycleState;
  /**
   * The date and time the masking policy was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339)
   *
   */
  "timeUpdated": Date;
  /**
   * The description of the masking policy.
   */
  "description"?: string;
  /**
   * Indicates if the temporary tables created during a masking operation should be dropped after masking. It's enabled by default.
   * Set this attribute to false to preserve the temporary tables. Masking creates temporary tables that map the original sensitive
   * data values to mask values. By default, these temporary tables are dropped after masking. But, in some cases, you may want
   * to preserve this information to track how masking changed your data. Note that doing so compromises security. These tables
   * must be dropped before the database is available for unprivileged users.
   *
   */
  "isDropTempTablesEnabled": boolean;
  /**
   * Indicates if redo logging is enabled during a masking operation. It's disabled by default. Set this attribute to true to
   * enable redo logging. By default, masking disables redo logging and flashback logging to purge any original unmasked
   * data from logs. However, in certain circumstances when you only want to test masking, rollback changes, and retry masking,
   * you could enable logging and use a flashback database to retrieve the original unmasked data after it has been masked.
   *
   */
  "isRedoLoggingEnabled": boolean;
  /**
   * Indicates if statistics gathering is enabled. It's enabled by default. Set this attribute to false to disable statistics
   * gathering. The masking process gathers statistics on masked database tables after masking completes.
   *
   */
  "isRefreshStatsEnabled": boolean;
  /**
   * Specifies options to enable parallel execution when running data masking. Allowed values are 'NONE' (no parallelism),
   * 'DEFAULT' (the Oracle Database computes the optimum degree of parallelism) or an integer value to be used as the degree
   * of parallelism. Parallel execution helps effectively use multiple CPUsi and improve masking performance. Refer to the
   * Oracle Database parallel execution framework when choosing an explicit degree of parallelism.
   *
   */
  "parallelDegree": string;
  /**
   * Specifies how to recompile invalid objects post data masking. Allowed values are 'SERIAL' (recompile in serial),
   * 'PARALLEL' (recompile in parallel), 'NONE' (do not recompile). If it's set to PARALLEL, the value of parallelDegree
   * attribute is used.
   *
   */
  "recompile": MaskingPolicy.Recompile;
  /**
   * A pre-masking script, which can contain SQL and PL/SQL statements. It's executed before
   * the core masking script generated using the masking policy. It's usually used to perform
   * any preparation or prerequisite work before masking data.
   *
   */
  "preMaskingScript"?: string;
  /**
   * A post-masking script, which can contain SQL and PL/SQL statements. It's executed after
   * the core masking script generated using the masking policy. It's usually used to perform
   * additional transformation or cleanup work after masking.
   *
   */
  "postMaskingScript"?: string;
  "columnSource"?: model.ColumnSourceFromSdmDetails | model.ColumnSourceFromTargetDetails;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MaskingPolicy {
  export enum Recompile {
    Serial = "SERIAL",
    Parallel = "PARALLEL",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MaskingPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnSource": obj.columnSource
          ? model.ColumnSourceDetails.getJsonObj(obj.columnSource)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaskingPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnSource": obj.columnSource
          ? model.ColumnSourceDetails.getDeserializedJsonObj(obj.columnSource)
          : undefined
      }
    };

    return jsonObj;
  }
}