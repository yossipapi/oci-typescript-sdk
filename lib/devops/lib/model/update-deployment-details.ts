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
 * The information to be updated.
 */
export interface UpdateDeploymentDetails {
  /**
   * Deployment display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "deploymentType": string;
}

export namespace UpdateDeploymentDetails {
  export function getJsonObj(obj: UpdateDeploymentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("deploymentType" in obj && obj.deploymentType) {
      switch (obj.deploymentType) {
        case "SINGLE_STAGE_DEPLOYMENT":
          return model.UpdateSingleDeployStageDeploymentDetails.getJsonObj(
            <model.UpdateSingleDeployStageDeploymentDetails>(<object>jsonObj),
            true
          );
        case "PIPELINE_REDEPLOYMENT":
          return model.UpdateDeployPipelineRedeploymentDetails.getJsonObj(
            <model.UpdateDeployPipelineRedeploymentDetails>(<object>jsonObj),
            true
          );
        case "PIPELINE_DEPLOYMENT":
          return model.UpdateDeployPipelineDeploymentDetails.getJsonObj(
            <model.UpdateDeployPipelineDeploymentDetails>(<object>jsonObj),
            true
          );
        case "SINGLE_STAGE_REDEPLOYMENT":
          return model.UpdateSingleDeployStageRedeploymentDetails.getJsonObj(
            <model.UpdateSingleDeployStageRedeploymentDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deploymentType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDeploymentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("deploymentType" in obj && obj.deploymentType) {
      switch (obj.deploymentType) {
        case "SINGLE_STAGE_DEPLOYMENT":
          return model.UpdateSingleDeployStageDeploymentDetails.getDeserializedJsonObj(
            <model.UpdateSingleDeployStageDeploymentDetails>(<object>jsonObj),
            true
          );
        case "PIPELINE_REDEPLOYMENT":
          return model.UpdateDeployPipelineRedeploymentDetails.getDeserializedJsonObj(
            <model.UpdateDeployPipelineRedeploymentDetails>(<object>jsonObj),
            true
          );
        case "PIPELINE_DEPLOYMENT":
          return model.UpdateDeployPipelineDeploymentDetails.getDeserializedJsonObj(
            <model.UpdateDeployPipelineDeploymentDetails>(<object>jsonObj),
            true
          );
        case "SINGLE_STAGE_REDEPLOYMENT":
          return model.UpdateSingleDeployStageRedeploymentDetails.getDeserializedJsonObj(
            <model.UpdateSingleDeployStageRedeploymentDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deploymentType);
      }
    }
    return jsonObj;
  }
}
