/**
 * Managed Access API
 * Use the Managed Access API to approve access requests, create and manage templates, and manage resource approval settings. For more information, see [Managed Access Overview](https://docs.oracle.com/en-us/iaas/managed-access/overview.htm).

Use the table of contents and search tool to explore the Managed Access API.

 * OpenAPI spec version: 20220126
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
 * Summary info for an approval tmeplate.
 */
export interface ApprovalTemplateSummary {
  /**
   * The unique identifier (OCID) of the approval template, which can't be changed after creation.
   */
  "id": string;
  /**
   * The approval template display name.
   */
  "displayName": string;
  /**
   * The current state of the approval template.
   */
  "lifecycleState"?: string;
  "approverLevels": model.ApproverLevels;
  /**
   * The unique identifier (OCID) of the customer compartment where the approval template is located.
   */
  "compartmentId": string;
  /**
   * The auto approval state of the lockbox.
   */
  "autoApprovalState"?: model.LockboxAutoApprovalState;
  /**
   * The time the the approval template was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the approval template was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ApprovalTemplateSummary {
  export function getJsonObj(obj: ApprovalTemplateSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "approverLevels": obj.approverLevels
          ? model.ApproverLevels.getJsonObj(obj.approverLevels)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApprovalTemplateSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "approverLevels": obj.approverLevels
          ? model.ApproverLevels.getDeserializedJsonObj(obj.approverLevels)
          : undefined
      }
    };

    return jsonObj;
  }
}