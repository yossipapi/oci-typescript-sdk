/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * The 'As-Is' based strategy.
 */
export interface AsIsResourceAssessmentStrategy extends model.ResourceAssessmentStrategy {
  /**
   * The real resource usage is multiplied to this number before making any recommendation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "adjustmentMultiplier"?: number;

  "strategyType": string;
}

export namespace AsIsResourceAssessmentStrategy {
  export function getJsonObj(
    obj: AsIsResourceAssessmentStrategy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceAssessmentStrategy.getJsonObj(obj) as AsIsResourceAssessmentStrategy)),
      ...{}
    };

    return jsonObj;
  }
  export const strategyType = "AS_IS";
  export function getDeserializedJsonObj(
    obj: AsIsResourceAssessmentStrategy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceAssessmentStrategy.getDeserializedJsonObj(
            obj
          ) as AsIsResourceAssessmentStrategy)),
      ...{}
    };

    return jsonObj;
  }
}