/**
 * Threat Intelligence API
 * Use the Threat Intelligence API to view indicators of compromise and related items. For more information, see [Overview of Threat Intelligence](/Content/ThreatIntelligence/Concepts/threatintelligenceoverview.htm).
 * OpenAPI spec version: 20210831
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
 * a reference to a resource or other entity
 */
export interface EntityReference {
  "type": string;
}

export namespace EntityReference {
  export function getJsonObj(obj: EntityReference): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "INDICATOR":
          return model.IndicatorReference.getJsonObj(
            <model.IndicatorReference>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityReference): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "INDICATOR":
          return model.IndicatorReference.getDeserializedJsonObj(
            <model.IndicatorReference>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
