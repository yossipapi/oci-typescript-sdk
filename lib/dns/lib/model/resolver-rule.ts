/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * A rule for a resolver. Specifying both qnameCoverConditions and clientAddressConditions is not allowed.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface ResolverRule {
  /**
   * A list of CIDR blocks. The query must come from a client within one of the blocks in order for the rule action
   * to apply.
   *
   */
  "clientAddressConditions": Array<string>;
  /**
   * A list of domain names. The query must be covered by one of the domains in order for the rule action to apply.
   *
   */
  "qnameCoverConditions": Array<string>;

  "action": string;
}

export namespace ResolverRule {
  export function getJsonObj(obj: ResolverRule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "action" in obj && obj.action) {
      switch (obj.action) {
        case "FORWARD":
          return model.ResolverForwardRule.getJsonObj(
            <model.ResolverForwardRule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.action}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResolverRule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "action" in obj && obj.action) {
      switch (obj.action) {
        case "FORWARD":
          return model.ResolverForwardRule.getDeserializedJsonObj(
            <model.ResolverForwardRule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.action}`);
      }
    }
    return jsonObj;
  }
}
