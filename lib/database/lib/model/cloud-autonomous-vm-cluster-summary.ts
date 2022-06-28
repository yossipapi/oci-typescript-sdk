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
 * Details of the cloud Autonomous VM cluster.
 *
 */
export interface CloudAutonomousVmClusterSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Cloud Autonomous VM cluster.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * User defined description of the cloud Autonomous VM cluster.
   */
  "description"?: string;
  /**
   * The name of the availability domain that the cloud Autonomous VM cluster is located in.
   */
  "availabilityDomain": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the cloud Autonomous VM Cluster is associated with.
* <p>
**Subnet Restrictions:**
* - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and backup subnet.
* 
    */
  "subnetId": string;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance update history. This value is updated when a maintenance update starts.
   */
  "lastUpdateHistoryEntryId"?: string;
  /**
   * The current state of the cloud Autonomous VM cluster.
   */
  "lifecycleState": CloudAutonomousVmClusterSummary.LifecycleState;
  /**
   * The user-friendly name for the cloud Autonomous VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The date and time that the cloud Autonomous VM cluster was created.
   */
  "timeCreated"?: Date;
  /**
   * The last date and time that the cloud Autonomous VM cluster was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The time zone of the Cloud Autonomous VM Cluster.
   */
  "clusterTimeZone"?: string;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The hostname for the cloud Autonomous VM cluster.
   */
  "hostname"?: string;
  /**
   * The domain name for the cloud Autonomous VM cluster.
   */
  "domain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.
   */
  "cloudExadataInfrastructureId": string;
  /**
   * The model name of the Exadata hardware running the cloud Autonomous VM cluster.
   *
   */
  "shape"?: string;
  /**
   * The number of database servers in the cloud VM cluster.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount"?: number;
  /**
   * The total data storage allocated, in terabytes (TB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * The total data storage allocated, in gigabytes (GB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * The number of CPU cores enabled on the cloud Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The number of CPU cores enabled on the cloud Autonomous VM cluster. Only 1 decimal place is allowed for the fractional part. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuCount"?: number;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The Oracle license model that applies to the Oracle Autonomous Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle PaaS and IaaS services in the cloud.
   * License Included allows you to subscribe to new Oracle Database software licenses and the Database service.
   * Note that when provisioning an Autonomous Database on [dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null because the attribute is already set at the
   * Autonomous Exadata Infrastructure level. When using [shared Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), if a value is not specified, the system will supply the value of `BRING_YOUR_OWN_LICENSE`.
   *
   */
  "licenseModel"?: CloudAutonomousVmClusterSummary.LicenseModel;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance run.
   */
  "lastMaintenanceRunId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the next maintenance run.
   */
  "nextMaintenanceRunId"?: string;
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
  /**
   * CPU cores available for allocation to Autonomous Databases. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * CPU cores that continue to be included in the count of OCPUs available to the Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down. You can release them to the available OCPUs at its parent AVMC level by restarting the Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * The number of Autonomous Container Databases that can be created with the currently available local storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableContainerDatabases"?: number;
  /**
   * The total number of Autonomous Container Databases that can be created with the allocated local storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalContainerDatabases"?: number;
  /**
   * The data disk group size available for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableAutonomousDataStorageSizeInTBs"?: number;
  /**
   * The data disk group size allocated for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autonomousDataStorageSizeInTBs"?: number;
  /**
   * The local node storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The amount of memory (in GBs) enabled per each OCPU core. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryPerOracleComputeUnitInGBs"?: number;
}

export namespace CloudAutonomousVmClusterSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CloudAutonomousVmClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CloudAutonomousVmClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
