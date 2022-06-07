/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details for updating the cloud VM cluster. Applies to Exadata Cloud Service instances only.
 *
 */
export interface UpdateCloudVmClusterDetails {
  /**
   * The user-friendly name for the cloud VM cluster. The name does not need to be unique.
   *
   */
  "displayName"?: string;
  /**
   * The number of CPU cores to enable for the cloud VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The number of OCPU cores to enable for a cloud VM cluster. Only 1 decimal place is allowed for the fractional part. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuCount"?: number;
  /**
   * The Oracle license model that applies to the cloud VM cluster. The default is BRING_YOUR_OWN_LICENSE. Applies to Exadata Cloud Service instances only.
   *
   */
  "licenseModel"?: UpdateCloudVmClusterDetails.LicenseModel;
  /**
   * The public key portion of one or more key pairs used for SSH access to the cloud VM cluster.
   */
  "sshPublicKeys"?: Array<string>;
  "updateDetails"?: model.UpdateDetails;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
   * The list of compute servers to be added to the cloud VM cluster.
   */
  "computeNodes"?: Array<string>;
  /**
   * The disk group size to be allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageSizeInGBs"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateCloudVmClusterDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: UpdateCloudVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "updateDetails": obj.updateDetails
          ? model.UpdateDetails.getJsonObj(obj.updateDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCloudVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "updateDetails": obj.updateDetails
          ? model.UpdateDetails.getDeserializedJsonObj(obj.updateDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
