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
 * Type of document analysis.
 */
export interface DocumentFeature {
  "featureType": string;
}

export namespace DocumentFeature {
  export function getJsonObj(obj: DocumentFeature): object {
    const jsonObj = { ...obj, ...{} };

    if ("featureType" in obj && obj.featureType) {
      switch (obj.featureType) {
        case "TABLE_DETECTION":
          return model.DocumentTableDetectionFeature.getJsonObj(
            <model.DocumentTableDetectionFeature>(<object>jsonObj),
            true
          );
        case "KEY_VALUE_DETECTION":
          return model.DocumentKeyValueDetectionFeature.getJsonObj(
            <model.DocumentKeyValueDetectionFeature>(<object>jsonObj),
            true
          );
        case "DOCUMENT_CLASSIFICATION":
          return model.DocumentClassificationFeature.getJsonObj(
            <model.DocumentClassificationFeature>(<object>jsonObj),
            true
          );
        case "TEXT_DETECTION":
          return model.DocumentTextDetectionFeature.getJsonObj(
            <model.DocumentTextDetectionFeature>(<object>jsonObj),
            true
          );
        case "LANGUAGE_CLASSIFICATION":
          return model.DocumentLanguageClassificationFeature.getJsonObj(
            <model.DocumentLanguageClassificationFeature>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.featureType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DocumentFeature): object {
    const jsonObj = { ...obj, ...{} };

    if ("featureType" in obj && obj.featureType) {
      switch (obj.featureType) {
        case "TABLE_DETECTION":
          return model.DocumentTableDetectionFeature.getDeserializedJsonObj(
            <model.DocumentTableDetectionFeature>(<object>jsonObj),
            true
          );
        case "KEY_VALUE_DETECTION":
          return model.DocumentKeyValueDetectionFeature.getDeserializedJsonObj(
            <model.DocumentKeyValueDetectionFeature>(<object>jsonObj),
            true
          );
        case "DOCUMENT_CLASSIFICATION":
          return model.DocumentClassificationFeature.getDeserializedJsonObj(
            <model.DocumentClassificationFeature>(<object>jsonObj),
            true
          );
        case "TEXT_DETECTION":
          return model.DocumentTextDetectionFeature.getDeserializedJsonObj(
            <model.DocumentTextDetectionFeature>(<object>jsonObj),
            true
          );
        case "LANGUAGE_CLASSIFICATION":
          return model.DocumentLanguageClassificationFeature.getDeserializedJsonObj(
            <model.DocumentLanguageClassificationFeature>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.featureType);
      }
    }
    return jsonObj;
  }
}
