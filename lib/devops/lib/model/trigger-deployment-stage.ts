/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
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
 * Specifies the Trigger Deployment stage, which runs another pipeline of the application.
 */
export interface TriggerDeploymentStage extends model.BuildPipelineStage {
  /**
   * A target deployment pipeline OCID that will run in this stage.
   */
  "deployPipelineId": string;
  /**
   * A boolean flag that specifies whether all the parameters must be passed when the deployment is triggered.
   */
  "isPassAllParametersEnabled": boolean;

  "buildPipelineStageType": string;
}

export namespace TriggerDeploymentStage {
  export function getJsonObj(obj: TriggerDeploymentStage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildPipelineStage.getJsonObj(obj) as TriggerDeploymentStage)),
      ...{}
    };

    return jsonObj;
  }
  export const buildPipelineStageType = "TRIGGER_DEPLOYMENT_PIPELINE";
  export function getDeserializedJsonObj(
    obj: TriggerDeploymentStage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildPipelineStage.getDeserializedJsonObj(obj) as TriggerDeploymentStage)),
      ...{}
    };

    return jsonObj;
  }
}