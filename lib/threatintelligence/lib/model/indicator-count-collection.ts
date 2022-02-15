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
 * A list of indicator counts by indicator type.
 */
export interface IndicatorCountCollection {
  /**
   * The list of aggregated indicator counts.
   */
  "items": Array<model.IndicatorCountSummary>;
}

export namespace IndicatorCountCollection {
  export function getJsonObj(obj: IndicatorCountCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.IndicatorCountSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IndicatorCountCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.IndicatorCountSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
