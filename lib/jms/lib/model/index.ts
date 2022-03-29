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

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as ApplicationSortBy from "./application-sort-by";
export import ApplicationSortBy = ApplicationSortBy.ApplicationSortBy;
import * as ApplicationUsage from "./application-usage";
export import ApplicationUsage = ApplicationUsage.ApplicationUsage;
import * as ApplicationUsageCollection from "./application-usage-collection";
export import ApplicationUsageCollection = ApplicationUsageCollection.ApplicationUsageCollection;
import * as Blocklist from "./blocklist";
export import Blocklist = Blocklist.Blocklist;
import * as BlocklistCollection from "./blocklist-collection";
export import BlocklistCollection = BlocklistCollection.BlocklistCollection;
import * as BlocklistEntry from "./blocklist-entry";
export import BlocklistEntry = BlocklistEntry.BlocklistEntry;
import * as BlocklistSortBy from "./blocklist-sort-by";
export import BlocklistSortBy = BlocklistSortBy.BlocklistSortBy;
import * as BlocklistTarget from "./blocklist-target";
export import BlocklistTarget = BlocklistTarget.BlocklistTarget;
import * as ChangeFleetCompartmentDetails from "./change-fleet-compartment-details";
export import ChangeFleetCompartmentDetails = ChangeFleetCompartmentDetails.ChangeFleetCompartmentDetails;
import * as CreateBlocklistDetails from "./create-blocklist-details";
export import CreateBlocklistDetails = CreateBlocklistDetails.CreateBlocklistDetails;
import * as CreateFleetDetails from "./create-fleet-details";
export import CreateFleetDetails = CreateFleetDetails.CreateFleetDetails;
import * as CustomLog from "./custom-log";
export import CustomLog = CustomLog.CustomLog;
import * as ExistingInstallationSiteId from "./existing-installation-site-id";
export import ExistingInstallationSiteId = ExistingInstallationSiteId.ExistingInstallationSiteId;
import * as Fleet from "./fleet";
export import Fleet = Fleet.Fleet;
import * as FleetAgentConfiguration from "./fleet-agent-configuration";
export import FleetAgentConfiguration = FleetAgentConfiguration.FleetAgentConfiguration;
import * as FleetAgentOsConfiguration from "./fleet-agent-os-configuration";
export import FleetAgentOsConfiguration = FleetAgentOsConfiguration.FleetAgentOsConfiguration;
import * as FleetCollection from "./fleet-collection";
export import FleetCollection = FleetCollection.FleetCollection;
import * as FleetSummary from "./fleet-summary";
export import FleetSummary = FleetSummary.FleetSummary;
import * as InstallationSite from "./installation-site";
export import InstallationSite = InstallationSite.InstallationSite;
import * as InstallationSiteCollection from "./installation-site-collection";
export import InstallationSiteCollection = InstallationSiteCollection.InstallationSiteCollection;
import * as InstallationSiteSortBy from "./installation-site-sort-by";
export import InstallationSiteSortBy = InstallationSiteSortBy.InstallationSiteSortBy;
import * as InstallationSiteSummary from "./installation-site-summary";
export import InstallationSiteSummary = InstallationSiteSummary.InstallationSiteSummary;
import * as InstallationSortBy from "./installation-sort-by";
export import InstallationSortBy = InstallationSortBy.InstallationSortBy;
import * as InstallationUsage from "./installation-usage";
export import InstallationUsage = InstallationUsage.InstallationUsage;
import * as InstallationUsageCollection from "./installation-usage-collection";
export import InstallationUsageCollection = InstallationUsageCollection.InstallationUsageCollection;
import * as JavaRuntimeId from "./java-runtime-id";
export import JavaRuntimeId = JavaRuntimeId.JavaRuntimeId;
import * as JreSecurityStatus from "./jre-security-status";
export import JreSecurityStatus = JreSecurityStatus.JreSecurityStatus;
import * as JreSortBy from "./jre-sort-by";
export import JreSortBy = JreSortBy.JreSortBy;
import * as JreUsage from "./jre-usage";
export import JreUsage = JreUsage.JreUsage;
import * as JreUsageCollection from "./jre-usage-collection";
export import JreUsageCollection = JreUsageCollection.JreUsageCollection;
import * as LifecycleState from "./lifecycle-state";
export import LifecycleState = LifecycleState.LifecycleState;
import * as ManagedInstanceSortBy from "./managed-instance-sort-by";
export import ManagedInstanceSortBy = ManagedInstanceSortBy.ManagedInstanceSortBy;
import * as ManagedInstanceType from "./managed-instance-type";
export import ManagedInstanceType = ManagedInstanceType.ManagedInstanceType;
import * as ManagedInstanceUsage from "./managed-instance-usage";
export import ManagedInstanceUsage = ManagedInstanceUsage.ManagedInstanceUsage;
import * as ManagedInstanceUsageCollection from "./managed-instance-usage-collection";
export import ManagedInstanceUsageCollection = ManagedInstanceUsageCollection.ManagedInstanceUsageCollection;
import * as OperatingSystem from "./operating-system";
export import OperatingSystem = OperatingSystem.OperatingSystem;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as OsFamily from "./os-family";
export import OsFamily = OsFamily.OsFamily;
import * as Principal from "./principal";
export import Principal = Principal.Principal;
import * as RemoveFleetInstallationSitesDetails from "./remove-fleet-installation-sites-details";
export import RemoveFleetInstallationSitesDetails = RemoveFleetInstallationSitesDetails.RemoveFleetInstallationSitesDetails;
import * as ResourceInventory from "./resource-inventory";
export import ResourceInventory = ResourceInventory.ResourceInventory;
import * as SortBy from "./sort-by";
export import SortBy = SortBy.SortBy;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as SummarizeApplicationUsageFields from "./summarize-application-usage-fields";
export import SummarizeApplicationUsageFields = SummarizeApplicationUsageFields.SummarizeApplicationUsageFields;
import * as SummarizeInstallationUsageFields from "./summarize-installation-usage-fields";
export import SummarizeInstallationUsageFields = SummarizeInstallationUsageFields.SummarizeInstallationUsageFields;
import * as SummarizeJreUsageFields from "./summarize-jre-usage-fields";
export import SummarizeJreUsageFields = SummarizeJreUsageFields.SummarizeJreUsageFields;
import * as SummarizeManagedInstanceUsageFields from "./summarize-managed-instance-usage-fields";
export import SummarizeManagedInstanceUsageFields = SummarizeManagedInstanceUsageFields.SummarizeManagedInstanceUsageFields;
import * as UpdateFleetAgentConfigurationDetails from "./update-fleet-agent-configuration-details";
export import UpdateFleetAgentConfigurationDetails = UpdateFleetAgentConfigurationDetails.UpdateFleetAgentConfigurationDetails;
import * as UpdateFleetDetails from "./update-fleet-details";
export import UpdateFleetDetails = UpdateFleetDetails.UpdateFleetDetails;
import * as WorkItemCollection from "./work-item-collection";
export import WorkItemCollection = WorkItemCollection.WorkItemCollection;
import * as WorkItemStatus from "./work-item-status";
export import WorkItemStatus = WorkItemStatus.WorkItemStatus;
import * as WorkItemSummary from "./work-item-summary";
export import WorkItemSummary = WorkItemSummary.WorkItemSummary;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
