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
 * Details about how to analyze an image.
 */
export interface AnalyzeImageDetails {
  /**
   * Types of image analysis.
   */
  "features": Array<model.ImageFeature>;
  "image": model.ObjectStorageImageDetails | model.InlineImageDetails;
  /**
   * The ocid of the compartment that calls the API.
   */
  "compartmentId"?: string;
}

export namespace AnalyzeImageDetails {
  export function getJsonObj(obj: AnalyzeImageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "features": obj.features
          ? obj.features.map(item => {
              return model.ImageFeature.getJsonObj(item);
            })
          : undefined,
        "image": obj.image ? model.ImageDetails.getJsonObj(obj.image) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyzeImageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "features": obj.features
          ? obj.features.map(item => {
              return model.ImageFeature.getDeserializedJsonObj(item);
            })
          : undefined,
        "image": obj.image ? model.ImageDetails.getDeserializedJsonObj(obj.image) : undefined
      }
    };

    return jsonObj;
  }
}