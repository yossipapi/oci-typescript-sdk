/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * An OpenSearch cluster resource. An OpenSearch cluster is set of instances that provide OpenSearch functionality in OCI Search Service with OpenSearch.
 * For more information, see [About Search Service with OpenSearch](https://docs.cloud.oracle.com/iaas/Content/search-opensearch/Concepts/ociopensearch.htm).
 *
 */
export interface OpensearchCluster {
  /**
   * The OCID of the cluster.
   */
  "id": string;
  /**
   * The name of the cluster. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the compartment where the cluster is located.
   */
  "compartmentId": string;
  /**
   * The current state of the cluster.
   */
  "lifecycleState": OpensearchCluster.LifecycleState;
  /**
   * The amount of time in milliseconds since the cluster was created.
   */
  "timeCreated": Date;
  /**
   * The amount of time in milliseconds since the cluster was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The amount of time in milliseconds since the cluster was updated.
   */
  "timeDeleted"?: Date;
  /**
   * Additional information about the current lifecycle state of the cluster.
   */
  "lifecycleDetails"?: string;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The software version the cluster is running.
   */
  "softwareVersion": string;
  /**
   * The size in GB of the cluster's total storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalStorageGB": number;
  /**
   * The fully qualified domain name (FQDN) for the cluster's API endpoint.
   */
  "opensearchFqdn": string;
  /**
   * The cluster's private IP address.
   */
  "opensearchPrivateIp": string;
  /**
   * The fully qualified domain name (FQDN) for the cluster's OpenSearch Dashboard API endpoint.
   */
  "opendashboardFqdn": string;
  /**
   * The private IP address for the cluster's OpenSearch Dashboard.
   */
  "opendashboardPrivateIp": string;
  /**
   * The number of master nodes configured for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeCount": number;
  /**
   * The instance type for the cluster's master nodes.
   */
  "masterNodeHostType": model.MasterNodeHostType;
  /**
   * The bare metal shape for the cluster's master nodes.
   */
  "masterNodeHostBareMetalShape"?: string;
  /**
   * The number of OCPUs configured for cluster's master nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeHostOcpuCount": number;
  /**
   * The amount of memory in GB, for the cluster's master nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeHostMemoryGB": number;
  /**
   * The number of data nodes configured for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeCount": number;
  /**
   * The instance type for the cluster's data nodes.
   */
  "dataNodeHostType": model.DataNodeHostType;
  /**
   * The bare metal shape for the cluster's data nodes.
   */
  "dataNodeHostBareMetalShape"?: string;
  /**
   * The number of OCPUs configured for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeHostOcpuCount": number;
  /**
   * The amount of memory in GB, for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeHostMemoryGB": number;
  /**
   * The amount of storage in GB, to configure per node for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeStorageGB": number;
  /**
   * The number of OpenSearch Dashboard nodes configured for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeCount": number;
  /**
   * The amount of memory in GB, for the cluster's OpenSearch Dashboard nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeHostOcpuCount": number;
  /**
   * The amount of memory in GB, for the cluster's OpenSearch Dashboard nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeHostMemoryGB": number;
  /**
   * The OCID of the cluster's VCN.
   */
  "vcnId": string;
  /**
   * The OCID of the cluster's subnet.
   */
  "subnetId": string;
  /**
   * The OCID for the compartment where the cluster's VCN is located.
   */
  "vcnCompartmentId": string;
  /**
   * The OCID for the compartment where the cluster's subnet is located.
   */
  "subnetCompartmentId": string;
  /**
   * The fully qualified domain name (FQDN) for the cluster's API endpoint.
   */
  "fqdn"?: string;
  /**
   * The availability domains to distribute the cluser nodes across.
   */
  "availabilityDomains": Array<string>;
}

export namespace OpensearchCluster {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OpensearchCluster): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpensearchCluster): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
