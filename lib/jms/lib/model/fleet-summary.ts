/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * The summary of the Fleet.
 * A Fleet is the primary collection with which users interact when using Java Management Service.
 *
 */
export interface FleetSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "id": string;
  /**
   * The name of the Fleet. The displayName must be unique for Fleets in the same compartment.
   */
  "displayName": string;
  /**
   * The Fleet's description.
   */
  "description": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment of the Fleet.
   *
   */
  "compartmentId": string;
  /**
   * The approximate count of all unique Java Runtimes in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and is not taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateJreCount": number;
  /**
   * The approximate count of all unique Java Installations in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and is not taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateInstallationCount": number;
  /**
   * The approximate count of all unique applications in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and is not taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateApplicationCount": number;
  /**
   * The approximate count of all unique managed instances in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and is not taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateManagedInstanceCount": number;
  "inventoryLog"?: model.CustomLog;
  "operationLog"?: model.CustomLog;
  /**
   * The creation date and time of the Fleet (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   *
   */
  "timeCreated": Date;
  /**
   * The lifecycle state of the Fleet.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. (See [Understanding Free-form Tags](https://docs.cloud.oracle.com/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm)).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`. (See [Managing Tags and Tag Namespaces](https://docs.cloud.oracle.com/Content/Tagging/Concepts/understandingfreeformtags.htm).)
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace FleetSummary {
  export function getJsonObj(obj: FleetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "inventoryLog": obj.inventoryLog ? model.CustomLog.getJsonObj(obj.inventoryLog) : undefined,
        "operationLog": obj.operationLog ? model.CustomLog.getJsonObj(obj.operationLog) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "inventoryLog": obj.inventoryLog
          ? model.CustomLog.getDeserializedJsonObj(obj.inventoryLog)
          : undefined,
        "operationLog": obj.operationLog
          ? model.CustomLog.getDeserializedJsonObj(obj.operationLog)
          : undefined
      }
    };

    return jsonObj;
  }
}
