/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
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
 * The parameters for creating a domain governance entity.
 */
export interface CreateDomainGovernanceDetails {
  /**
   * OCID of the tenancy.
   */
  "compartmentId": string;
  /**
   * OCID of the domain.
   */
  "domainId": string;
  /**
   * The email to notify the user, and that the ONS subscription will be created with.
   */
  "subscriptionEmail": string;
  /**
   * The ONS topic associated with this domain governance entity.
   */
  "onsTopicId": string;
  /**
   * The ONS subscription associated with this domain governance entity.
   */
  "onsSubscriptionId": string;
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

export namespace CreateDomainGovernanceDetails {
  export function getJsonObj(obj: CreateDomainGovernanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
