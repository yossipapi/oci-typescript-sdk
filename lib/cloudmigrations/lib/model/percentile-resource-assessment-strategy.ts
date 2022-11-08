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
 * The strategy based on percentile usage.
 */
export interface PercentileResourceAssessmentStrategy extends model.ResourceAssessmentStrategy {
  /**
   * Percentile value
   */
  "percentile": PercentileResourceAssessmentStrategy.Percentile;
  /**
   * The real resource usage is multiplied to this number before making any recommendation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "adjustmentMultiplier"?: number;
  /**
   * The current state of the migration plan.
   */
  "metricTimeWindow"?: model.MetricTimeWindow;

  "strategyType": string;
}

export namespace PercentileResourceAssessmentStrategy {
  export enum Percentile {
    P50 = "P50",
    P90 = "P90",
    P95 = "P95",
    P99 = "P99",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: PercentileResourceAssessmentStrategy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceAssessmentStrategy.getJsonObj(
            obj
          ) as PercentileResourceAssessmentStrategy)),
      ...{}
    };

    return jsonObj;
  }
  export const strategyType = "PERCENTILE";
  export function getDeserializedJsonObj(
    obj: PercentileResourceAssessmentStrategy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceAssessmentStrategy.getDeserializedJsonObj(
            obj
          ) as PercentileResourceAssessmentStrategy)),
      ...{}
    };

    return jsonObj;
  }
}