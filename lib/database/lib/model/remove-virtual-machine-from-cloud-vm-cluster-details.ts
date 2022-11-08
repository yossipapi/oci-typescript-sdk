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
 * Details of removing Virtual Machines from the Cloud VM Cluster. Applies to Exadata Cloud instances only.
 *
 */
export interface RemoveVirtualMachineFromCloudVmClusterDetails {
  /**
   * The list of ExaCS DB servers for the cluster to be removed.
   */
  "dbServers": Array<model.CloudDbServerDetails>;
}

export namespace RemoveVirtualMachineFromCloudVmClusterDetails {
  export function getJsonObj(obj: RemoveVirtualMachineFromCloudVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServers": obj.dbServers
          ? obj.dbServers.map(item => {
              return model.CloudDbServerDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: RemoveVirtualMachineFromCloudVmClusterDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServers": obj.dbServers
          ? obj.dbServers.map(item => {
              return model.CloudDbServerDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}