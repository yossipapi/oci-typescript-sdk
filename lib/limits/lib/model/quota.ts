/**
 * Service Limits APIs
 * APIs that interact with the resource limits of a specific resource type.
 * OpenAPI spec version: 20181025
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
 * Quotas are applied on top of the service limits and inherited through the nested compartment hierarchy.
 * Quotas allow compartment admins to limit resource consumption and set boundaries around acceptable resource use.
 * The term \"quota\" can be interpreted as the following:
 *   * An individual statement written in the declarative language.
 *   * A collection of statements in a single, named \"quota\" object (which has an Oracle Cloud ID (OCID) assigned to it).
 *   * The overall body of quotas your organization uses to control access to resources.
 *
 */
export interface Quota {
  /**
   * The OCID of the quota.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the resource this quota applies to.
   *
   */
  "compartmentId": string;
  /**
   * The name you assign to the quota during creation. The name must be unique across all quotas
   * in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * An array of one or more quota statements written in the declarative quota statement language.
   */
  "statements": Array<string>;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
  /**
   * The description you assign to the quota.
   */
  "description": string;
  /**
   * Date and time the quota was created, in the format defined by RFC 3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The quota's current state. After creating a quota, make sure its `lifecycleState` is set to
   * ACTIVE before using it.
   *
   */
  "lifecycleState"?: Quota.LifecycleState;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Quota {
  export enum LifecycleState {
    Active = "ACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Quota): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Quota): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
