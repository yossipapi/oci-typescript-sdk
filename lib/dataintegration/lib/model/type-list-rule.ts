/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The type list rule which defines how fields are projected.
 */
export interface TypeListRule extends model.ProjectionRule {
  /**
   * skipRemainingRulesOnMatch
   */
  "isSkipRemainingRulesOnMatch"?: boolean;
  /**
   * Reference to a typed object, this can be either a key value to an object within the document, a shall referenced to a TypedObject or a full TypedObject definition.
   */
  "scope"?: any;
  /**
   * cascade
   */
  "isCascade"?: boolean;
  /**
   * matchingStrategy
   */
  "matchingStrategy"?: TypeListRule.MatchingStrategy;
  /**
   * caseSensitive
   */
  "isCaseSensitive"?: boolean;
  /**
   * ruleType
   */
  "ruleType"?: TypeListRule.RuleType;
  /**
   * types
   */
  "types"?: Array<model.BaseType>;

  "modelType": string;
}

export namespace TypeListRule {
  export enum MatchingStrategy {
    NameOrTags = "NAME_OR_TAGS",
    TagsOnly = "TAGS_ONLY",
    NameOnly = "NAME_ONLY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RuleType {
    Include = "INCLUDE",
    Exclude = "EXCLUDE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TypeListRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ProjectionRule.getJsonObj(obj) as TypeListRule)),
      ...{
        "types": obj.types
          ? obj.types.map(item => {
              return model.BaseType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "TYPE_LIST_RULE";
}