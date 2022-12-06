/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * The properties of a new Java installation site.
 */
export interface NewInstallationSite {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the related managed instance.
   *
   */
  "managedInstanceId": string;
  /**
   * The release version of the Java Runtime.
   */
  "releaseVersion": string;
  /**
   * Artifact content type for the Java version.
   */
  "artifactContentType"?: model.ArtifactContentType;
}

export namespace NewInstallationSite {
  export function getJsonObj(obj: NewInstallationSite): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NewInstallationSite): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
