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
 * Details about the execution progress of a stage in a deployment.
 */
export interface DeployStageExecutionProgress {
  /**
   * Stage display name. Avoid entering confidential information.
   */
  "deployStageDisplayName"?: string;
  /**
   * The OCID of the stage.
   */
  "deployStageId"?: string;
  /**
   * Time the stage started executing. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeStarted"?: Date;
  /**
   * Time the stage finished executing. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeFinished"?: Date;
  /**
   * The current state of the stage.
   */
  "status"?: DeployStageExecutionProgress.Status;
  "deployStagePredecessors"?: model.DeployStagePredecessorCollection;
  /**
   * Details about stage execution for all the target environments.
   */
  "deployStageExecutionProgressDetails"?: Array<model.DeployStageExecutionProgressDetails>;

  "deployStageType": string;
}

export namespace DeployStageExecutionProgress {
  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    RollbackInProgress = "ROLLBACK_IN_PROGRESS",
    RollbackSucceeded = "ROLLBACK_SUCCEEDED",
    RollbackFailed = "ROLLBACK_FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DeployStageExecutionProgress): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessors": obj.deployStagePredecessors
          ? model.DeployStagePredecessorCollection.getJsonObj(obj.deployStagePredecessors)
          : undefined,
        "deployStageExecutionProgressDetails": obj.deployStageExecutionProgressDetails
          ? obj.deployStageExecutionProgressDetails.map(item => {
              return model.DeployStageExecutionProgressDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    if ("deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageExecutionProgress.getJsonObj(
            <model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageExecutionProgress>(
              (<object>jsonObj)
            ),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT":
          return model.ComputeInstanceGroupCanaryDeployStageExecutionProgress.getJsonObj(
            <model.ComputeInstanceGroupCanaryDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_DEPLOYMENT":
          return model.OkeBlueGreenDeployStageExecutionProgress.getJsonObj(
            <model.OkeBlueGreenDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.ComputeInstanceGroupDeployStageExecutionProgress.getJsonObj(
            <model.ComputeInstanceGroupDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_DEPLOYMENT":
          return model.OkeCanaryDeployStageExecutionProgress.getJsonObj(
            <model.OkeCanaryDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.LoadBalancerTrafficShiftDeployStageExecutionProgress.getJsonObj(
            <model.LoadBalancerTrafficShiftDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.WaitDeployStageExecutionProgress.getJsonObj(
            <model.WaitDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupCanaryTrafficShiftDeployStageExecutionProgress.getJsonObj(
            <model.ComputeInstanceGroupCanaryTrafficShiftDeployStageExecutionProgress>(
              (<object>jsonObj)
            ),
            true
          );
        case "OKE_CANARY_APPROVAL":
          return model.OkeCanaryApprovalDeployStageExecutionProgress.getJsonObj(
            <model.OkeCanaryApprovalDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "MANUAL_APPROVAL":
          return model.ManualApprovalDeployStageExecutionProgress.getJsonObj(
            <model.ManualApprovalDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.OkeDeployStageExecutionProgress.getJsonObj(
            <model.OkeDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.FunctionDeployStageExecutionProgress.getJsonObj(
            <model.FunctionDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.OkeBlueGreenTrafficShiftDeployStageExecutionProgress.getJsonObj(
            <model.OkeBlueGreenTrafficShiftDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.InvokeFunctionDeployStageExecutionProgress.getJsonObj(
            <model.InvokeFunctionDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_TRAFFIC_SHIFT":
          return model.OkeCanaryTrafficShiftDeployStageExecutionProgress.getJsonObj(
            <model.OkeCanaryTrafficShiftDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_APPROVAL":
          return model.ComputeInstanceGroupCanaryApprovalDeployStageExecutionProgress.getJsonObj(
            <model.ComputeInstanceGroupCanaryApprovalDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT":
          return model.ComputeInstanceGroupBlueGreenDeployStageExecutionProgress.getJsonObj(
            <model.ComputeInstanceGroupBlueGreenDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployStageType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeployStageExecutionProgress): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessors": obj.deployStagePredecessors
          ? model.DeployStagePredecessorCollection.getDeserializedJsonObj(
              obj.deployStagePredecessors
            )
          : undefined,
        "deployStageExecutionProgressDetails": obj.deployStageExecutionProgressDetails
          ? obj.deployStageExecutionProgressDetails.map(item => {
              return model.DeployStageExecutionProgressDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if ("deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.ComputeInstanceGroupBlueGreenTrafficShiftDeployStageExecutionProgress>(
              (<object>jsonObj)
            ),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT":
          return model.ComputeInstanceGroupCanaryDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.ComputeInstanceGroupCanaryDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_DEPLOYMENT":
          return model.OkeBlueGreenDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.OkeBlueGreenDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.ComputeInstanceGroupDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.ComputeInstanceGroupDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_DEPLOYMENT":
          return model.OkeCanaryDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.OkeCanaryDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.LoadBalancerTrafficShiftDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.LoadBalancerTrafficShiftDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.WaitDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.WaitDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT":
          return model.ComputeInstanceGroupCanaryTrafficShiftDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.ComputeInstanceGroupCanaryTrafficShiftDeployStageExecutionProgress>(
              (<object>jsonObj)
            ),
            true
          );
        case "OKE_CANARY_APPROVAL":
          return model.OkeCanaryApprovalDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.OkeCanaryApprovalDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "MANUAL_APPROVAL":
          return model.ManualApprovalDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.ManualApprovalDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.OkeDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.OkeDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.FunctionDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.FunctionDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.OkeBlueGreenTrafficShiftDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.OkeBlueGreenTrafficShiftDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.InvokeFunctionDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.InvokeFunctionDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_TRAFFIC_SHIFT":
          return model.OkeCanaryTrafficShiftDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.OkeCanaryTrafficShiftDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_APPROVAL":
          return model.ComputeInstanceGroupCanaryApprovalDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.ComputeInstanceGroupCanaryApprovalDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT":
          return model.ComputeInstanceGroupBlueGreenDeployStageExecutionProgress.getDeserializedJsonObj(
            <model.ComputeInstanceGroupBlueGreenDeployStageExecutionProgress>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployStageType);
      }
    }
    return jsonObj;
  }
}
