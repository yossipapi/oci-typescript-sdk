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
 * The information about new ContainerInstance.
 */
export interface CreateContainerInstanceDetails {
  /**
   * Human-readable name for the ContainerInstance. If none is provided,
   * OCI will select one for you.
   *
   */
  "displayName"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Availability Domain where the ContainerInstance should be created.
   */
  "availabilityDomain": string;
  /**
   * Fault Domain where the ContainerInstance should run.
   *
   */
  "faultDomain"?: string;
  /**
   * The shape of the Container Instance. The shape determines the resources available to the Container Instance.
   */
  "shape": string;
  "shapeConfig": model.CreateContainerInstanceShapeConfigDetails;
  /**
   * A Volume represents a directory with data that is accessible across multiple containers in a
   * ContainerInstance.
   * Up to 32 volumes can be attached to single container instance.
   *
   */
  "volumes"?: Array<model.CreateContainerVolumeDetails>;
  /**
   * The Containers to create on this Instance.
   */
  "containers": Array<model.CreateContainerDetails>;
  /**
   * The networks to make available to containers on this Instance.
   */
  "vnics": Array<model.CreateContainerVnicDetails>;
  "dnsConfig"?: model.CreateContainerDnsConfigDetails;
  /**
   * Duration in seconds processes within a Container have to gracefully terminate. This applies whenever a Container must be halted, such as when the Container Instance is deleted. Processes will first be sent a termination signal. After this timeout is reached, the processes will be sent a termination signal. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gracefulShutdownTimeoutInSeconds"?: number;
  /**
   * The image pull secrets for accessing private registry to pull images for containers
   */
  "imagePullSecrets"?: Array<model.CreateImagePullSecretDetails>;
  /**
   * Container restart policy
   */
  "containerRestartPolicy"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateContainerInstanceDetails {
  export function getJsonObj(obj: CreateContainerInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.CreateContainerInstanceShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined,
        "volumes": obj.volumes
          ? obj.volumes.map(item => {
              return model.CreateContainerVolumeDetails.getJsonObj(item);
            })
          : undefined,
        "containers": obj.containers
          ? obj.containers.map(item => {
              return model.CreateContainerDetails.getJsonObj(item);
            })
          : undefined,
        "vnics": obj.vnics
          ? obj.vnics.map(item => {
              return model.CreateContainerVnicDetails.getJsonObj(item);
            })
          : undefined,
        "dnsConfig": obj.dnsConfig
          ? model.CreateContainerDnsConfigDetails.getJsonObj(obj.dnsConfig)
          : undefined,

        "imagePullSecrets": obj.imagePullSecrets
          ? obj.imagePullSecrets.map(item => {
              return model.CreateImagePullSecretDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateContainerInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.CreateContainerInstanceShapeConfigDetails.getDeserializedJsonObj(obj.shapeConfig)
          : undefined,
        "volumes": obj.volumes
          ? obj.volumes.map(item => {
              return model.CreateContainerVolumeDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "containers": obj.containers
          ? obj.containers.map(item => {
              return model.CreateContainerDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "vnics": obj.vnics
          ? obj.vnics.map(item => {
              return model.CreateContainerVnicDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "dnsConfig": obj.dnsConfig
          ? model.CreateContainerDnsConfigDetails.getDeserializedJsonObj(obj.dnsConfig)
          : undefined,

        "imagePullSecrets": obj.imagePullSecrets
          ? obj.imagePullSecrets.map(item => {
              return model.CreateImagePullSecretDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}