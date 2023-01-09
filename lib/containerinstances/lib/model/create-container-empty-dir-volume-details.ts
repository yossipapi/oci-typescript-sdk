/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * The empty directory for container instance
 */
export interface CreateContainerEmptyDirVolumeDetails extends model.CreateContainerVolumeDetails {
  /**
   * Volume type that we are using for empty dir where it could be either File Storage or Memory
   */
  "backingStore"?: string;

  "volumeType": string;
}

export namespace CreateContainerEmptyDirVolumeDetails {
  export function getJsonObj(
    obj: CreateContainerEmptyDirVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerVolumeDetails.getJsonObj(
            obj
          ) as CreateContainerEmptyDirVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const volumeType = "EMPTYDIR";
  export function getDeserializedJsonObj(
    obj: CreateContainerEmptyDirVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerVolumeDetails.getDeserializedJsonObj(
            obj
          ) as CreateContainerEmptyDirVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
}