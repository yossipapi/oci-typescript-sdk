/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of removing Virtual Machines from the VM Cluster. Applies to Exadata Cloud@Customer instances only.
 *
 */
export interface RemoveVirtualMachineFromVmClusterDetails {
  /**
   * The list of Exacc DB servers for the cluster to be removed.
   */
  "dbServers": Array<model.DbServerDetails>;
}

export namespace RemoveVirtualMachineFromVmClusterDetails {
  export function getJsonObj(obj: RemoveVirtualMachineFromVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServers": obj.dbServers
          ? obj.dbServers.map(item => {
              return model.DbServerDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemoveVirtualMachineFromVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServers": obj.dbServers
          ? obj.dbServers.map(item => {
              return model.DbServerDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}