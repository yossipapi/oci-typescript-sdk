/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * Information about a new deployment artifact.
 */
export interface CreateDeployArtifactDetails {
  /**
   * Optional description about the deployment artifact.
   */
  "description"?: string;
  /**
   * Deployment artifact display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Type of the deployment artifact.
   */
  "deployArtifactType": string;
  "deployArtifactSource":
    | model.GenericDeployArtifactSource
    | model.OcirDeployArtifactSource
    | model.InlineDeployArtifactSource;
  /**
   * Mode for artifact parameter substitution.
   */
  "argumentSubstitutionMode": string;
  /**
   * The OCID of a project.
   */
  "projectId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDeployArtifactDetails {
  export function getJsonObj(obj: CreateDeployArtifactDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployArtifactSource": obj.deployArtifactSource
          ? model.DeployArtifactSource.getJsonObj(obj.deployArtifactSource)
          : undefined
      }
    };

    return jsonObj;
  }
}
