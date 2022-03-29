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
 * The list of Java installation sites to remove.
 */
export interface RemoveFleetInstallationSitesDetails {
  /**
   * The list of installation sites to remove.
   */
  "installationSites": Array<model.ExistingInstallationSiteId>;
}

export namespace RemoveFleetInstallationSitesDetails {
  export function getJsonObj(obj: RemoveFleetInstallationSitesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "installationSites": obj.installationSites
          ? obj.installationSites.map(item => {
              return model.ExistingInstallationSiteId.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemoveFleetInstallationSitesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "installationSites": obj.installationSites
          ? obj.installationSites.map(item => {
              return model.ExistingInstallationSiteId.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
