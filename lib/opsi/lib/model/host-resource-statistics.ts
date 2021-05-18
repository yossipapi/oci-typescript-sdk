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
 * Contains host resource base statistics.
 *
 */
export interface HostResourceStatistics {
  /**
   * Total amount used of the resource metric type (CPU, STORAGE).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usage": number;
  /**
   * The maximum allocated amount of the resource metric type  (CPU, STORAGE).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "capacity": number;
  /**
   * Resource utilization in percentage.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "utilizationPercent": number;
  /**
   * Change in resource utilization in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usageChangePercent": number;

  "resourceName": string;
}

export namespace HostResourceStatistics {
  export function getJsonObj(obj: HostResourceStatistics): object {
    const jsonObj = { ...obj, ...{} };

    if ("resourceName" in obj && obj.resourceName) {
      switch (obj.resourceName) {
        case "HOST_MEMORY_STATISTICS":
          return model.HostMemoryStatistics.getJsonObj(
            <model.HostMemoryStatistics>(<object>jsonObj),
            true
          );
        case "HOST_CPU_STATISTICS":
          return model.HostCpuStatistics.getJsonObj(
            <model.HostCpuStatistics>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.resourceName);
      }
    }
    return jsonObj;
  }
}