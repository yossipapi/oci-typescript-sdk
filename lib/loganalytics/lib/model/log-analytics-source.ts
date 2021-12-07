/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * LogAnalyticsSource
 */
export interface LogAnalyticsSource {
  /**
   * The label alert conditions.
   */
  "labelConditions"?: Array<model.LogAnalyticsSourceLabelCondition>;
  /**
   * The association count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "associationCount"?: number;
  /**
   * The association entities.
   */
  "associationEntity"?: Array<model.LogAnalyticsAssociation>;
  /**
   * The data filter definitions.
   */
  "dataFilterDefinitions"?: Array<model.LogAnalyticsSourceDataFilter>;
  /**
   * The database credential.
   */
  "databaseCredential"?: string;
  /**
   * The extended field definitions.
   */
  "extendedFieldDefinitions"?: Array<model.LogAnalyticsSourceExtendedFieldDefinition>;
  /**
   * A flag indicating whether or not this is a cloud source.
   *
   */
  "isForCloud"?: boolean;
  /**
   * The labels associated with the source.
   */
  "labels"?: Array<model.LogAnalyticsLabelView>;
  /**
   * The metric definitions.
   */
  "metricDefinitions"?: Array<model.LogAnalyticsMetric>;
  /**
   * The metric source map.
   */
  "metrics"?: Array<model.LogAnalyticsSourceMetric>;
  /**
   * The built in parsers associated with source.
   */
  "oobParsers"?: Array<model.LogAnalyticsParser>;
  /**
   * The source parameters.
   */
  "parameters"?: Array<model.LogAnalyticsParameter>;
  /**
   * The pattern count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "patternCount"?: number;
  /**
   * The source patterns.
   */
  "patterns"?: Array<model.LogAnalyticsSourcePattern>;
  /**
   * The source description.
   */
  "description"?: string;
  /**
   * The source display name.
   */
  "displayName"?: string;
  /**
   * The source edit version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "editVersion"?: number;
  /**
   * The source functions.
   */
  "functions"?: Array<model.LogAnalyticsSourceFunction>;
  /**
   * The source unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceId"?: number;
  /**
   * The source internal name.
   */
  "name"?: string;
  /**
   * A flag indicating whether or not the source content is secure.
   *
   */
  "isSecureContent"?: boolean;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The list of parsers used by the source.
   */
  "parsers"?: Array<model.LogAnalyticsParser>;
  /**
   * A flag indicating whether or not the source is marked for auto-association.
   *
   */
  "isAutoAssociationEnabled"?: boolean;
  /**
   * A flag indicating whether or not the auto-association state should be overriden.
   *
   */
  "isAutoAssociationOverride"?: boolean;
  /**
   * The rule unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ruleId"?: number;
  /**
   * The source type internal name.
   */
  "typeName"?: string;
  /**
   * The source type name.
   */
  "typeDisplayName"?: string;
  /**
   * The source warning configuration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "warningConfig"?: number;
  /**
   * The source metadata fields.
   */
  "metadataFields"?: Array<model.LogAnalyticsSourceMetadataField>;
  /**
   * The labls used by the source.
   */
  "labelDefinitions"?: Array<model.LogAnalyticsLabelDefinition>;
  /**
   * The entity types.
   */
  "entityTypes"?: Array<model.LogAnalyticsSourceEntityType>;
  /**
   * A flag indicating whether or not the source has a time zone override.
   *
   */
  "isTimezoneOverride"?: boolean;
  /**
   * An array of custom parsers.
   */
  "userParsers"?: Array<model.LogAnalyticsParser>;
  /**
   * The last updated date.
   */
  "timeUpdated"?: Date;
  /**
   * An array of event types.
   */
  "eventTypes"?: Array<model.EventType>;
  /**
   * An array of categories assigned to this source.
   * The isSystem flag denotes if each category assignment is user-created or Oracle-defined.
   *
   */
  "categories"?: Array<model.LogAnalyticsCategory>;
}

export namespace LogAnalyticsSource {
  export function getJsonObj(obj: LogAnalyticsSource): object {
    const jsonObj = {
      ...obj,
      ...{
        "labelConditions": obj.labelConditions
          ? obj.labelConditions.map(item => {
              return model.LogAnalyticsSourceLabelCondition.getJsonObj(item);
            })
          : undefined,

        "associationEntity": obj.associationEntity
          ? obj.associationEntity.map(item => {
              return model.LogAnalyticsAssociation.getJsonObj(item);
            })
          : undefined,
        "dataFilterDefinitions": obj.dataFilterDefinitions
          ? obj.dataFilterDefinitions.map(item => {
              return model.LogAnalyticsSourceDataFilter.getJsonObj(item);
            })
          : undefined,

        "extendedFieldDefinitions": obj.extendedFieldDefinitions
          ? obj.extendedFieldDefinitions.map(item => {
              return model.LogAnalyticsSourceExtendedFieldDefinition.getJsonObj(item);
            })
          : undefined,

        "labels": obj.labels
          ? obj.labels.map(item => {
              return model.LogAnalyticsLabelView.getJsonObj(item);
            })
          : undefined,
        "metricDefinitions": obj.metricDefinitions
          ? obj.metricDefinitions.map(item => {
              return model.LogAnalyticsMetric.getJsonObj(item);
            })
          : undefined,
        "metrics": obj.metrics
          ? obj.metrics.map(item => {
              return model.LogAnalyticsSourceMetric.getJsonObj(item);
            })
          : undefined,
        "oobParsers": obj.oobParsers
          ? obj.oobParsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.LogAnalyticsParameter.getJsonObj(item);
            })
          : undefined,

        "patterns": obj.patterns
          ? obj.patterns.map(item => {
              return model.LogAnalyticsSourcePattern.getJsonObj(item);
            })
          : undefined,

        "functions": obj.functions
          ? obj.functions.map(item => {
              return model.LogAnalyticsSourceFunction.getJsonObj(item);
            })
          : undefined,

        "parsers": obj.parsers
          ? obj.parsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined,

        "metadataFields": obj.metadataFields
          ? obj.metadataFields.map(item => {
              return model.LogAnalyticsSourceMetadataField.getJsonObj(item);
            })
          : undefined,
        "labelDefinitions": obj.labelDefinitions
          ? obj.labelDefinitions.map(item => {
              return model.LogAnalyticsLabelDefinition.getJsonObj(item);
            })
          : undefined,
        "entityTypes": obj.entityTypes
          ? obj.entityTypes.map(item => {
              return model.LogAnalyticsSourceEntityType.getJsonObj(item);
            })
          : undefined,

        "userParsers": obj.userParsers
          ? obj.userParsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined,

        "eventTypes": obj.eventTypes
          ? obj.eventTypes.map(item => {
              return model.EventType.getJsonObj(item);
            })
          : undefined,
        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsSource): object {
    const jsonObj = {
      ...obj,
      ...{
        "labelConditions": obj.labelConditions
          ? obj.labelConditions.map(item => {
              return model.LogAnalyticsSourceLabelCondition.getDeserializedJsonObj(item);
            })
          : undefined,

        "associationEntity": obj.associationEntity
          ? obj.associationEntity.map(item => {
              return model.LogAnalyticsAssociation.getDeserializedJsonObj(item);
            })
          : undefined,
        "dataFilterDefinitions": obj.dataFilterDefinitions
          ? obj.dataFilterDefinitions.map(item => {
              return model.LogAnalyticsSourceDataFilter.getDeserializedJsonObj(item);
            })
          : undefined,

        "extendedFieldDefinitions": obj.extendedFieldDefinitions
          ? obj.extendedFieldDefinitions.map(item => {
              return model.LogAnalyticsSourceExtendedFieldDefinition.getDeserializedJsonObj(item);
            })
          : undefined,

        "labels": obj.labels
          ? obj.labels.map(item => {
              return model.LogAnalyticsLabelView.getDeserializedJsonObj(item);
            })
          : undefined,
        "metricDefinitions": obj.metricDefinitions
          ? obj.metricDefinitions.map(item => {
              return model.LogAnalyticsMetric.getDeserializedJsonObj(item);
            })
          : undefined,
        "metrics": obj.metrics
          ? obj.metrics.map(item => {
              return model.LogAnalyticsSourceMetric.getDeserializedJsonObj(item);
            })
          : undefined,
        "oobParsers": obj.oobParsers
          ? obj.oobParsers.map(item => {
              return model.LogAnalyticsParser.getDeserializedJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.LogAnalyticsParameter.getDeserializedJsonObj(item);
            })
          : undefined,

        "patterns": obj.patterns
          ? obj.patterns.map(item => {
              return model.LogAnalyticsSourcePattern.getDeserializedJsonObj(item);
            })
          : undefined,

        "functions": obj.functions
          ? obj.functions.map(item => {
              return model.LogAnalyticsSourceFunction.getDeserializedJsonObj(item);
            })
          : undefined,

        "parsers": obj.parsers
          ? obj.parsers.map(item => {
              return model.LogAnalyticsParser.getDeserializedJsonObj(item);
            })
          : undefined,

        "metadataFields": obj.metadataFields
          ? obj.metadataFields.map(item => {
              return model.LogAnalyticsSourceMetadataField.getDeserializedJsonObj(item);
            })
          : undefined,
        "labelDefinitions": obj.labelDefinitions
          ? obj.labelDefinitions.map(item => {
              return model.LogAnalyticsLabelDefinition.getDeserializedJsonObj(item);
            })
          : undefined,
        "entityTypes": obj.entityTypes
          ? obj.entityTypes.map(item => {
              return model.LogAnalyticsSourceEntityType.getDeserializedJsonObj(item);
            })
          : undefined,

        "userParsers": obj.userParsers
          ? obj.userParsers.map(item => {
              return model.LogAnalyticsParser.getDeserializedJsonObj(item);
            })
          : undefined,

        "eventTypes": obj.eventTypes
          ? obj.eventTypes.map(item => {
              return model.EventType.getDeserializedJsonObj(item);
            })
          : undefined,
        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
