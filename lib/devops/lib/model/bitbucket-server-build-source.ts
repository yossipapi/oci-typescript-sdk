/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Bitbucket Server Build Source for Build Stage
 */
export interface BitbucketServerBuildSource extends model.BuildSource {
  /**
   * Connection identifier pertinent to Bitbucket Server source provider
   */
  "connectionId": string;

  "connectionType": string;
}

export namespace BitbucketServerBuildSource {
  export function getJsonObj(obj: BitbucketServerBuildSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildSource.getJsonObj(obj) as BitbucketServerBuildSource)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "BITBUCKET_SERVER";
  export function getDeserializedJsonObj(
    obj: BitbucketServerBuildSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildSource.getDeserializedJsonObj(obj) as BitbucketServerBuildSource)),
      ...{}
    };

    return jsonObj;
  }
}