/**
 * VisionService API
 * A description of the VisionService API.
 * OpenAPI spec version: 20220125
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
 * Metadata about the project.
 */
export interface ProjectSummary {
  /**
   * Unique identifier that is immutable after creation.
   */
  "id": string;
  /**
   * Human-friendly name for the project, which can be changed.
   */
  "displayName"?: string;
  /**
   * Compartment identifier.
   */
  "compartmentId": string;
  /**
   * When the project was created, as an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * When the project was created, as an RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the project.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail which can provide actionable information if creation failed.
   */
  "lifecycleDetails"?: string;
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

export namespace ProjectSummary {
  export function getJsonObj(obj: ProjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}