/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The request of DiscoveryJob Resource details.
 */
export interface DiscoveryDetails {
  /**
   * The OCID of Management Agent
   */
  "agentId": string;
  /**
   * Resource Type.
   */
  "resourceType": DiscoveryDetails.ResourceType;
  /**
   * The Name of resource type
   */
  "resourceName": string;
  "properties": model.PropertyDetails;
  "credentials"?: model.CredentialCollection;
  "tags"?: model.PropertyDetails;
}

export namespace DiscoveryDetails {
  export enum ResourceType {
    WeblogicDomain = "WEBLOGIC_DOMAIN",
    EbsInstance = "EBS_INSTANCE",
    OracleDatabase = "ORACLE_DATABASE",
    OciOracleDb = "OCI_ORACLE_DB",
    OciOracleCdb = "OCI_ORACLE_CDB",
    OciOraclePdb = "OCI_ORACLE_PDB",
    Host = "HOST",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DiscoveryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties ? model.PropertyDetails.getJsonObj(obj.properties) : undefined,
        "credentials": obj.credentials
          ? model.CredentialCollection.getJsonObj(obj.credentials)
          : undefined,
        "tags": obj.tags ? model.PropertyDetails.getJsonObj(obj.tags) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? model.PropertyDetails.getDeserializedJsonObj(obj.properties)
          : undefined,
        "credentials": obj.credentials
          ? model.CredentialCollection.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "tags": obj.tags ? model.PropertyDetails.getDeserializedJsonObj(obj.tags) : undefined
      }
    };

    return jsonObj;
  }
}
