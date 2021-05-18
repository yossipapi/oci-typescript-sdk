/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Database insight resource.
 */
export interface DatabaseInsight {
  /**
   * Database insight identifier
   */
  "id": string;
  /**
   * Compartment identifier of the database
   */
  "compartmentId": string;
  /**
   * Indicates the status of a database insight in Operations Insights
   */
  "status": model.ResourceStatus;
  /**
   * Operations Insights internal representation of the database type.
   */
  "databaseType"?: string;
  /**
   * The version of the database.
   */
  "databaseVersion"?: string;
  /**
   * Processor count. This is the OCPU count for Autonomous Database and CPU core count for other database types. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "processorCount"?: number;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The time the the database insight was first enabled. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the database insight was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the database.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;

  "entitySource": string;
}

export namespace DatabaseInsight {
  export function getJsonObj(obj: DatabaseInsight): object {
    const jsonObj = { ...obj, ...{} };

    if ("entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.EmManagedExternalDatabaseInsight.getJsonObj(
            <model.EmManagedExternalDatabaseInsight>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_EXTERNAL_DATABASE":
          return model.MacsManagedExternalDatabaseInsight.getJsonObj(
            <model.MacsManagedExternalDatabaseInsight>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.AutonomousDatabaseInsight.getJsonObj(
            <model.AutonomousDatabaseInsight>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entitySource);
      }
    }
    return jsonObj;
  }
}