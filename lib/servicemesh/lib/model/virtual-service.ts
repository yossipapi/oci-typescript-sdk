/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20210930
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
 * This resource represents a customer-managed service in the Service Mesh. Each virtual service declares multiple running versions of the service and maps to a group of instances/pods running a specific version of the actual service.
 */
export interface VirtualService {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * The OCID of the service mesh in which this virtual service is created.
   */
  "meshId": string;
  /**
    * A user-friendly name. The name has to be unique within the same service mesh and cannot be changed after creation.
* Avoid entering confidential information.
* <p>
Example: `My unique resource name`
* 
    */
  "name": string;
  /**
    * Description of the resource. It can be changed after creation.
* Avoid entering confidential information.
* <p>
Example: `This is my new resource`
* 
    */
  "description"?: string;
  "defaultRoutingPolicy"?: model.DefaultVirtualServiceRoutingPolicy;
  /**
   * The DNS hostnames of the virtual service that is used by its callers.
   * Wildcard hostnames are supported in the prefix form.
   * Examples of valid hostnames are \"www.example.com\", \"*.example.com\", \"*.com\".
   * Can be omitted if the virtual service will only have TCP virtual deployments.
   *
   */
  "hosts"?: Array<string>;
  "mtls"?: model.MutualTransportLayerSecurity;
  /**
   * The time when this resource was created in an RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when this resource was updated in an RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The current state of the Resource.
   */
  "lifecycleState": VirtualService.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in a Failed state.
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
}

export namespace VirtualService {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VirtualService): object {
    const jsonObj = {
      ...obj,
      ...{
        "defaultRoutingPolicy": obj.defaultRoutingPolicy
          ? model.DefaultVirtualServiceRoutingPolicy.getJsonObj(obj.defaultRoutingPolicy)
          : undefined,

        "mtls": obj.mtls ? model.MutualTransportLayerSecurity.getJsonObj(obj.mtls) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VirtualService): object {
    const jsonObj = {
      ...obj,
      ...{
        "defaultRoutingPolicy": obj.defaultRoutingPolicy
          ? model.DefaultVirtualServiceRoutingPolicy.getDeserializedJsonObj(
              obj.defaultRoutingPolicy
            )
          : undefined,

        "mtls": obj.mtls
          ? model.MutualTransportLayerSecurity.getDeserializedJsonObj(obj.mtls)
          : undefined
      }
    };

    return jsonObj;
  }
}