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
 * Summary of the deployment stage.
 */
export interface DeployStageSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Optional description about the deployment stage.
   */
  "description"?: string;
  /**
   * Deployment stage display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of a project.
   */
  "projectId": string;
  /**
   * The OCID of a pipeline.
   */
  "deployPipelineId": string;
  /**
   * The OCID of a compartment.
   */
  "compartmentId": string;
  /**
   * Time the deployment stage was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * Time the deployment stage was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the deployment stage.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  "deployStagePredecessorCollection"?: model.DeployStagePredecessorCollection;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "deployStageType": string;
}

export namespace DeployStageSummary {
  export function getJsonObj(obj: DeployStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessorCollection": obj.deployStagePredecessorCollection
          ? model.DeployStagePredecessorCollection.getJsonObj(obj.deployStagePredecessorCollection)
          : undefined
      }
    };

    if ("deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT":
          return model.ComputeInstanceGroupBlueGreenDeployStageSummary.getJsonObj(
            <model.ComputeInstanceGroupBlueGreenDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageSummary.getJsonObj(
            <model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_DEPLOYMENT":
          return model.OkeBlueGreenDeployStageSummary.getJsonObj(
            <model.OkeBlueGreenDeployStageSummary>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.WaitDeployStageSummary.getJsonObj(
            <model.WaitDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.OkeDeployStageSummary.getJsonObj(
            <model.OkeDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_APPROVAL":
          return model.ComputeInstanceGroupCanaryApprovalDeployStageSummary.getJsonObj(
            <model.ComputeInstanceGroupCanaryApprovalDeployStageSummary>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.InvokeFunctionDeployStageSummary.getJsonObj(
            <model.InvokeFunctionDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_TRAFFIC_SHIFT":
          return model.OkeCanaryTrafficShiftDeployStageSummary.getJsonObj(
            <model.OkeCanaryTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.ComputeInstanceGroupDeployStageSummary.getJsonObj(
            <model.ComputeInstanceGroupDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT":
          return model.ComputeInstanceGroupCanaryDeployStageSummary.getJsonObj(
            <model.ComputeInstanceGroupCanaryDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_APPROVAL":
          return model.OkeCanaryApprovalDeployStageSummary.getJsonObj(
            <model.OkeCanaryApprovalDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_DEPLOYMENT":
          return model.OkeCanaryDeployStageSummary.getJsonObj(
            <model.OkeCanaryDeployStageSummary>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.LoadBalancerTrafficShiftDeployStageSummary.getJsonObj(
            <model.LoadBalancerTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "MANUAL_APPROVAL":
          return model.ManualApprovalDeployStageSummary.getJsonObj(
            <model.ManualApprovalDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.OkeBlueGreenTrafficShiftDeployStageSummary.getJsonObj(
            <model.OkeBlueGreenTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.FunctionDeployStageSummary.getJsonObj(
            <model.FunctionDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupCanaryTrafficShiftDeployStageSummary.getJsonObj(
            <model.ComputeInstanceGroupCanaryTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployStageType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeployStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessorCollection": obj.deployStagePredecessorCollection
          ? model.DeployStagePredecessorCollection.getDeserializedJsonObj(
              obj.deployStagePredecessorCollection
            )
          : undefined
      }
    };

    if ("deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT":
          return model.ComputeInstanceGroupBlueGreenDeployStageSummary.getDeserializedJsonObj(
            <model.ComputeInstanceGroupBlueGreenDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageSummary.getDeserializedJsonObj(
            <model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_DEPLOYMENT":
          return model.OkeBlueGreenDeployStageSummary.getDeserializedJsonObj(
            <model.OkeBlueGreenDeployStageSummary>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.WaitDeployStageSummary.getDeserializedJsonObj(
            <model.WaitDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.OkeDeployStageSummary.getDeserializedJsonObj(
            <model.OkeDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_APPROVAL":
          return model.ComputeInstanceGroupCanaryApprovalDeployStageSummary.getDeserializedJsonObj(
            <model.ComputeInstanceGroupCanaryApprovalDeployStageSummary>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.InvokeFunctionDeployStageSummary.getDeserializedJsonObj(
            <model.InvokeFunctionDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_TRAFFIC_SHIFT":
          return model.OkeCanaryTrafficShiftDeployStageSummary.getDeserializedJsonObj(
            <model.OkeCanaryTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.ComputeInstanceGroupDeployStageSummary.getDeserializedJsonObj(
            <model.ComputeInstanceGroupDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT":
          return model.ComputeInstanceGroupCanaryDeployStageSummary.getDeserializedJsonObj(
            <model.ComputeInstanceGroupCanaryDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_APPROVAL":
          return model.OkeCanaryApprovalDeployStageSummary.getDeserializedJsonObj(
            <model.OkeCanaryApprovalDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_DEPLOYMENT":
          return model.OkeCanaryDeployStageSummary.getDeserializedJsonObj(
            <model.OkeCanaryDeployStageSummary>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.LoadBalancerTrafficShiftDeployStageSummary.getDeserializedJsonObj(
            <model.LoadBalancerTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "MANUAL_APPROVAL":
          return model.ManualApprovalDeployStageSummary.getDeserializedJsonObj(
            <model.ManualApprovalDeployStageSummary>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.OkeBlueGreenTrafficShiftDeployStageSummary.getDeserializedJsonObj(
            <model.OkeBlueGreenTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.FunctionDeployStageSummary.getDeserializedJsonObj(
            <model.FunctionDeployStageSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupCanaryTrafficShiftDeployStageSummary.getDeserializedJsonObj(
            <model.ComputeInstanceGroupCanaryTrafficShiftDeployStageSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployStageType);
      }
    }
    return jsonObj;
  }
}
