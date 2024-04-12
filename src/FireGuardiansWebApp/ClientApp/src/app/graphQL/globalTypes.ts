export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  CkAttributeId: { input: string; output: string; }
  CkEnumId: { input: string; output: string; }
  CkRecordId: { input: string; output: string; }
  CkTypeId: { input: string; output: string; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  LargeBinary: { input: any; output: any; }
  OctoObjectId: { input: string; output: string; }
  Seconds: { input: any; output: any; }
  SimpleScalarType: { input: any; output: any; }
  Uri: { input: any; output: any; }
};

/** Defines the aggregation type */
export enum AggregationTypeDto {
  AvgDto = 'AVG',
  MaxDto = 'MAX',
  MinDto = 'MIN'
}

/** Defines the type of modification during write operations */
export enum AssociationModOptionsDto {
  CreateDto = 'CREATE',
  DeleteDto = 'DELETE'
}

export type AttributeArgumentDto = {
  aggregationType?: InputMaybe<AggregationTypeDto>;
  sortOrder?: InputMaybe<SortOrderDto>;
  /**  Defines the priority of the sort. Lower values are sorted first; null values aren't sorted at all. */
  sortPriority?: InputMaybe<Scalars['Int']['input']>;
};

/** Enum of valid attribute types */
export enum AttributeValueTypeDto {
  BinaryDto = 'BINARY',
  BinaryLinkedDto = 'BINARY_LINKED',
  BooleanDto = 'BOOLEAN',
  DateTimeDto = 'DATE_TIME',
  DateTimeOffsetDto = 'DATE_TIME_OFFSET',
  DoubleDto = 'DOUBLE',
  EnumDto = 'ENUM',
  GeospatialPointDto = 'GEOSPATIAL_POINT',
  IntDto = 'INT',
  Int_64Dto = 'INT_64',
  IntArrayDto = 'INT_ARRAY',
  RecordDto = 'RECORD',
  RecordArrayDto = 'RECORD_ARRAY',
  StringDto = 'STRING',
  StringArrayDto = 'STRING_ARRAY',
  TimeSpanDto = 'TIME_SPAN'
}

/** Runtime entities of construction kit record 'Basic/Address' */
export type BasicAddressDto = {
  __typename?: 'BasicAddress';
  addressOfAdditionalLink?: Maybe<Scalars['String']['output']>;
  addressRemarks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cityTown?: Maybe<Scalars['String']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  department?: Maybe<Scalars['String']['output']>;
  eMail?: Maybe<BasicEMailDto>;
  fax?: Maybe<BasicFaxNumberDto>;
  nationalCode?: Maybe<Scalars['String']['output']>;
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<BasicPhoneNumberDto>;
  stateCounty?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  vATnumber?: Maybe<Scalars['String']['output']>;
  zipOfPOBox?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['Int']['output']>;
};

export type BasicAddressInputDto = {
  addressOfAdditionalLink?: InputMaybe<Scalars['String']['input']>;
  addressRemarks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cityTown?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  eMail?: InputMaybe<BasicEMailInputDto>;
  fax?: InputMaybe<BasicFaxNumberInputDto>;
  nationalCode?: InputMaybe<Scalars['String']['input']>;
  pOBox?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<BasicPhoneNumberInputDto>;
  stateCounty?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  vATnumber?: InputMaybe<Scalars['String']['input']>;
  zipOfPOBox?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['Int']['input']>;
};

/** Runtime entities of construction kit type 'Basic/Asset' */
export type BasicAssetDto = {
  __typename?: 'BasicAsset';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicAsset_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<BasicAsset_EventsUnionDto>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<BasicAsset_ParentUnionDto>;
  relatesTo?: Maybe<BasicAsset_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `BasicAsset`. */
export type BasicAssetConnectionDto = {
  __typename?: 'BasicAssetConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicAssetEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicAssetDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicAsset`. */
export type BasicAssetEdgeDto = {
  __typename?: 'BasicAssetEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicAssetDto>;
};

export type BasicAssetInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicAssetInputUpdateDto = {
  /** Item to update */
  item: BasicAssetInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicAssetMutationsDto = {
  __typename?: 'BasicAssetMutations';
  /** Creates new entities of type 'BasicAsset'. */
  create?: Maybe<Array<Maybe<BasicAssetDto>>>;
  /** Deletes an entity of type 'BasicAsset'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicAsset'. */
  update?: Maybe<Array<Maybe<BasicAssetDto>>>;
};


export type BasicAssetMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicAssetInputDto>>;
};


export type BasicAssetMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicAssetMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicAssetInputUpdateDto>>;
};

export type BasicAssetUpdateDto = {
  __typename?: 'BasicAssetUpdate';
  /** The corresponding item */
  item?: Maybe<BasicAssetDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicAssetUpdateMessageDto = {
  __typename?: 'BasicAssetUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicAssetUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicAsset */
export type BasicAsset_ConfiguredByUnionDto = {
  __typename?: 'BasicAsset_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicAsset */
export type BasicAsset_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type BasicAsset */
export type BasicAsset_EventsUnionDto = {
  __typename?: 'BasicAsset_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type BasicAsset */
export type BasicAsset_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type BasicAsset */
export type BasicAsset_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicAsset */
export type BasicAsset_ParentUnionDto = {
  __typename?: 'BasicAsset_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicAsset */
export type BasicAsset_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionDto = {
  __typename?: 'BasicAsset_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit record 'Basic/EMail' */
export type BasicEMailDto = {
  __typename?: 'BasicEMail';
  constructionKitType?: Maybe<CkTypeDto>;
  eMail?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  typeOfEMail?: Maybe<BasicTypeOfTelephoneBasicDto>;
  typeOfPublicKey?: Maybe<Scalars['String']['output']>;
};

export type BasicEMailInputDto = {
  eMail?: InputMaybe<Scalars['String']['input']>;
  publicKey?: InputMaybe<Scalars['String']['input']>;
  typeOfEMail?: InputMaybe<BasicTypeOfTelephoneBasicDto>;
  typeOfPublicKey?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit type 'Basic/Equipment' */
export type BasicEquipmentDto = {
  __typename?: 'BasicEquipment';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicEquipment_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<BasicEquipment_ParentUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `BasicEquipment`. */
export type BasicEquipmentConnectionDto = {
  __typename?: 'BasicEquipmentConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicEquipmentEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicEquipmentDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicEquipment`. */
export type BasicEquipmentEdgeDto = {
  __typename?: 'BasicEquipmentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicEquipmentDto>;
};

/** Runtime entities of construction kit type 'Basic/EquipmentGroup' */
export type BasicEquipmentGroupDto = {
  __typename?: 'BasicEquipmentGroup';
  children?: Maybe<BasicEquipmentGroup_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicEquipmentGroup_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<BasicEquipmentGroup_ParentUnionDto>;
  relatesFrom?: Maybe<BasicEquipmentGroup_RelatesFromUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `BasicEquipmentGroup`. */
export type BasicEquipmentGroupConnectionDto = {
  __typename?: 'BasicEquipmentGroupConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicEquipmentGroupEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicEquipmentGroupDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicEquipmentGroup`. */
export type BasicEquipmentGroupEdgeDto = {
  __typename?: 'BasicEquipmentGroupEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicEquipmentGroupDto>;
};

export type BasicEquipmentGroupInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicEquipmentGroupInputUpdateDto = {
  /** Item to update */
  item: BasicEquipmentGroupInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEquipmentGroupMutationsDto = {
  __typename?: 'BasicEquipmentGroupMutations';
  /** Creates new entities of type 'BasicEquipmentGroup'. */
  create?: Maybe<Array<Maybe<BasicEquipmentGroupDto>>>;
  /** Deletes an entity of type 'BasicEquipmentGroup'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicEquipmentGroup'. */
  update?: Maybe<Array<Maybe<BasicEquipmentGroupDto>>>;
};


export type BasicEquipmentGroupMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicEquipmentGroupInputDto>>;
};


export type BasicEquipmentGroupMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicEquipmentGroupMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicEquipmentGroupInputUpdateDto>>;
};

export type BasicEquipmentGroupUpdateDto = {
  __typename?: 'BasicEquipmentGroupUpdate';
  /** The corresponding item */
  item?: Maybe<BasicEquipmentGroupDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicEquipmentGroupUpdateMessageDto = {
  __typename?: 'BasicEquipmentGroupUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicEquipmentGroupUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionDto = {
  __typename?: 'BasicEquipmentGroup_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicEquipment?: Maybe<BasicEquipmentConnectionDto>;
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  industryBasicMachine?: Maybe<IndustryBasicMachineConnectionDto>;
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyEnergyMeter?: Maybe<IndustryEnergyEnergyMeterConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaic?: Maybe<IndustryEnergyPhotovoltaicConnectionDto>;
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
  industryFluidHeatMeter?: Maybe<IndustryFluidHeatMeterConnectionDto>;
  industryFluidWaterMeter?: Maybe<IndustryFluidWaterMeterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionBasicEquipmentArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryBasicMachineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryEnergyPhotovoltaicArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryFluidHeatMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ChildrenUnionIndustryFluidWaterMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ConfiguredByUnionDto = {
  __typename?: 'BasicEquipmentGroup_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ParentUnionDto = {
  __typename?: 'BasicEquipmentGroup_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  basicEquipmentModel?: Maybe<BasicEquipmentModelConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_ParentUnionBasicEquipmentModelArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionDto = {
  __typename?: 'BasicEquipmentGroup_RelatesFromUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  industryBasicMachine?: Maybe<IndustryBasicMachineConnectionDto>;
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyEnergyMeter?: Maybe<IndustryEnergyEnergyMeterConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaic?: Maybe<IndustryEnergyPhotovoltaicConnectionDto>;
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
  industryFluidHeatMeter?: Maybe<IndustryFluidHeatMeterConnectionDto>;
  industryFluidWaterMeter?: Maybe<IndustryFluidWaterMeterConnectionDto>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryBasicMachineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryEnergyPhotovoltaicArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryFluidHeatMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedEquipment (Inbound) of entity type BasicEquipmentGroup */
export type BasicEquipmentGroup_RelatesFromUnionIndustryFluidWaterMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Basic/EquipmentModel' */
export type BasicEquipmentModelDto = {
  __typename?: 'BasicEquipmentModel';
  children?: Maybe<BasicEquipmentModel_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicEquipmentModel_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `BasicEquipmentModel`. */
export type BasicEquipmentModelConnectionDto = {
  __typename?: 'BasicEquipmentModelConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicEquipmentModelEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicEquipmentModelDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicEquipmentModel`. */
export type BasicEquipmentModelEdgeDto = {
  __typename?: 'BasicEquipmentModelEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicEquipmentModelDto>;
};

export type BasicEquipmentModelInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicEquipmentModelInputUpdateDto = {
  /** Item to update */
  item: BasicEquipmentModelInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEquipmentModelMutationsDto = {
  __typename?: 'BasicEquipmentModelMutations';
  /** Creates new entities of type 'BasicEquipmentModel'. */
  create?: Maybe<Array<Maybe<BasicEquipmentModelDto>>>;
  /** Deletes an entity of type 'BasicEquipmentModel'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicEquipmentModel'. */
  update?: Maybe<Array<Maybe<BasicEquipmentModelDto>>>;
};


export type BasicEquipmentModelMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicEquipmentModelInputDto>>;
};


export type BasicEquipmentModelMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicEquipmentModelMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicEquipmentModelInputUpdateDto>>;
};

export type BasicEquipmentModelUpdateDto = {
  __typename?: 'BasicEquipmentModelUpdate';
  /** The corresponding item */
  item?: Maybe<BasicEquipmentModelDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicEquipmentModelUpdateMessageDto = {
  __typename?: 'BasicEquipmentModelUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicEquipmentModelUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicEquipmentModel */
export type BasicEquipmentModel_ChildrenUnionDto = {
  __typename?: 'BasicEquipmentModel_ChildrenUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicEquipmentModel */
export type BasicEquipmentModel_ChildrenUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicEquipmentModel */
export type BasicEquipmentModel_ConfiguredByUnionDto = {
  __typename?: 'BasicEquipmentModel_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicEquipmentModel */
export type BasicEquipmentModel_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type BasicEquipmentUpdateDto = {
  __typename?: 'BasicEquipmentUpdate';
  /** The corresponding item */
  item?: Maybe<BasicEquipmentDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicEquipmentUpdateMessageDto = {
  __typename?: 'BasicEquipmentUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicEquipmentUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicEquipment */
export type BasicEquipment_ConfiguredByUnionDto = {
  __typename?: 'BasicEquipment_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicEquipment */
export type BasicEquipment_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicEquipment */
export type BasicEquipment_ParentUnionDto = {
  __typename?: 'BasicEquipment_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicEquipment */
export type BasicEquipment_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit record 'Basic/FaxNumber' */
export type BasicFaxNumberDto = {
  __typename?: 'BasicFaxNumber';
  constructionKitType?: Maybe<CkTypeDto>;
  number?: Maybe<Scalars['String']['output']>;
  type?: Maybe<BasicTypeOfTelephoneBasicDto>;
};

export type BasicFaxNumberInputDto = {
  number?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BasicTypeOfTelephoneBasicDto>;
};

/** Runtime entities of construction kit record 'Basic/Marking' */
export type BasicMarkingDto = {
  __typename?: 'BasicMarking';
  additionalText?: Maybe<Scalars['String']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  file?: Maybe<Scalars['OctoObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BasicMarkingInputDto = {
  additionalText?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['OctoObjectId']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit record 'Basic/NamePlate' */
export type BasicNamePlateDto = {
  __typename?: 'BasicNamePlate';
  address?: Maybe<BasicAddressDto>;
  assetSpecificProperties?: Maybe<Array<Maybe<BasicMarkingDto>>>;
  constructionKitType?: Maybe<CkTypeDto>;
  manufacturerName?: Maybe<Scalars['String']['output']>;
  manufacturerProductDesignation?: Maybe<Scalars['String']['output']>;
  manufacturerProductFamily?: Maybe<Scalars['String']['output']>;
  markings?: Maybe<Array<Maybe<BasicMarkingDto>>>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  yearOfConstruction?: Maybe<Scalars['String']['output']>;
};

export type BasicNamePlateInputDto = {
  address?: InputMaybe<BasicAddressInputDto>;
  assetSpecificProperties?: InputMaybe<Array<InputMaybe<BasicMarkingInputDto>>>;
  manufacturerName?: InputMaybe<Scalars['String']['input']>;
  manufacturerProductDesignation?: InputMaybe<Scalars['String']['input']>;
  manufacturerProductFamily?: InputMaybe<Scalars['String']['input']>;
  markings?: InputMaybe<Array<InputMaybe<BasicMarkingInputDto>>>;
  serialNumber?: InputMaybe<Scalars['String']['input']>;
  yearOfConstruction?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit type 'Basic/NamedEntity' */
export type BasicNamedEntityDto = {
  __typename?: 'BasicNamedEntity';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicNamedEntity_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `BasicNamedEntity`. */
export type BasicNamedEntityConnectionDto = {
  __typename?: 'BasicNamedEntityConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicNamedEntityEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicNamedEntityDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicNamedEntity`. */
export type BasicNamedEntityEdgeDto = {
  __typename?: 'BasicNamedEntityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicNamedEntityDto>;
};

export type BasicNamedEntityUpdateDto = {
  __typename?: 'BasicNamedEntityUpdate';
  /** The corresponding item */
  item?: Maybe<BasicNamedEntityDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicNamedEntityUpdateMessageDto = {
  __typename?: 'BasicNamedEntityUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicNamedEntityUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicNamedEntity */
export type BasicNamedEntity_ConfiguredByUnionDto = {
  __typename?: 'BasicNamedEntity_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicNamedEntity */
export type BasicNamedEntity_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit record 'Basic/PhoneNumber' */
export type BasicPhoneNumberDto = {
  __typename?: 'BasicPhoneNumber';
  constructionKitType?: Maybe<CkTypeDto>;
  number?: Maybe<Scalars['String']['output']>;
  type?: Maybe<BasicTypeOfTelephoneEnhancedDto>;
};

export type BasicPhoneNumberInputDto = {
  number?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BasicTypeOfTelephoneEnhancedDto>;
};

/** Runtime entities of construction kit enum 'Basic/TypeOfTelephoneBasic' */
export enum BasicTypeOfTelephoneBasicDto {
  HomeDto = 'HOME',
  OfficeDto = 'OFFICE',
  SecretaryDto = 'SECRETARY',
  SubstituteDto = 'SUBSTITUTE'
}

/** Runtime entities of construction kit enum 'Basic/TypeOfTelephoneEnhanced' */
export enum BasicTypeOfTelephoneEnhancedDto {
  HomeDto = 'HOME',
  OfficeDto = 'OFFICE',
  OfficeMobileDto = 'OFFICE_MOBILE',
  PrivateMobileDto = 'PRIVATE_MOBILE',
  SecretaryDto = 'SECRETARY',
  SubstituteDto = 'SUBSTITUTE'
}

/** Construction kit attribute definitions */
export type CkAttributeDto = {
  __typename?: 'CkAttribute';
  /** Value type of the attribute. */
  attributeValueType: AttributeValueTypeDto;
  /** Construction kit attribute id. */
  ckAttributeId: Scalars['CkAttributeId']['output'];
  /** Optional enum id of the attribute value type. */
  ckEnum?: Maybe<CkEnumDto>;
  /** Optional record id of the attribute value type. */
  ckRecord?: Maybe<CkRecordDto>;
  /** Default values of the attribute. */
  defaultValues?: Maybe<Array<Maybe<Scalars['SimpleScalarType']['output']>>>;
  /** Optional description of the attribute. */
  description?: Maybe<Scalars['String']['output']>;
  /** Optional flag that tells if an attribute is a data stream. */
  isDataStream?: Maybe<Scalars['Boolean']['output']>;
  /** Optional meta data of the attribute. */
  metaData?: Maybe<Array<Maybe<CkAttributeMetaDataDto>>>;
};

/** A connection from an object to a list of objects of type `CkAttributeDto`. */
export type CkAttributeDtoConnectionDto = {
  __typename?: 'CkAttributeDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CkAttributeDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CkAttributeDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CkAttributeDto`. */
export type CkAttributeDtoEdgeDto = {
  __typename?: 'CkAttributeDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CkAttributeDto>;
};

/** Construction kit attribute meta data */
export type CkAttributeMetaDataDto = {
  __typename?: 'CkAttributeMetaData';
  /** Optional description of the meta data. */
  description?: Maybe<Scalars['String']['output']>;
  /** Key of the meta data. */
  key: Scalars['ID']['output'];
  /** Value of the meta data. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A construction kit enum */
export type CkEnumDto = {
  __typename?: 'CkEnum';
  /** Unique id of the enum. */
  ckEnumId: Scalars['CkEnumId']['output'];
  /** Use flags for the enum. */
  useFlags: Scalars['Boolean']['output'];
  /** Value of the enum */
  values: Array<Maybe<CkEnumValueDto>>;
};

/** A connection from an object to a list of objects of type `CkEnumDto`. */
export type CkEnumDtoConnectionDto = {
  __typename?: 'CkEnumDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CkEnumDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CkEnumDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CkEnumDto`. */
export type CkEnumDtoEdgeDto = {
  __typename?: 'CkEnumDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CkEnumDto>;
};

/** A construction kit enum value */
export type CkEnumValueDto = {
  __typename?: 'CkEnumValue';
  /** Description of the enum */
  description?: Maybe<Scalars['String']['output']>;
  /** Key of the enum */
  key?: Maybe<Scalars['Int']['output']>;
  /** Value of the enum */
  name?: Maybe<Scalars['String']['output']>;
};

/** A construction kit record */
export type CkRecordDto = {
  __typename?: 'CkRecord';
  attributes?: Maybe<CkTypeAttributeDtoConnectionDto>;
  baseRecordTypes?: Maybe<CkTypeDto>;
  /** Unique id of the object. */
  ckRecordId: Scalars['CkRecordId']['output'];
  derivedRecordTypes?: Maybe<CkTypeDtoConnectionDto>;
  isAbstract: Scalars['Boolean']['output'];
  isFinal: Scalars['Boolean']['output'];
};


/** A construction kit record */
export type CkRecordAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** A construction kit record */
export type CkRecordDerivedRecordTypesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection from an object to a list of objects of type `CkRecordDto`. */
export type CkRecordDtoConnectionDto = {
  __typename?: 'CkRecordDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CkRecordDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CkRecordDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CkRecordDto`. */
export type CkRecordDtoEdgeDto = {
  __typename?: 'CkRecordDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CkRecordDto>;
};

/** A construction kit type */
export type CkTypeDto = {
  __typename?: 'CkType';
  attributes?: Maybe<CkTypeAttributeDtoConnectionDto>;
  baseType?: Maybe<CkTypeDto>;
  /** Unique id of the object. */
  ckTypeId: Scalars['CkTypeId']['output'];
  derivedTypes?: Maybe<CkTypeDtoConnectionDto>;
  isAbstract: Scalars['Boolean']['output'];
  isFinal: Scalars['Boolean']['output'];
};


/** A construction kit type */
export type CkTypeAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** A construction kit type */
export type CkTypeDerivedTypesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Attributes of a construction kit type */
export type CkTypeAttributeDto = {
  __typename?: 'CkTypeAttribute';
  /** The construction kit attribute definition */
  attribute?: Maybe<CkAttributeDto>;
  /** Attribute name within the entity. */
  attributeName: Scalars['String']['output'];
  /** Value type of the attribute. */
  attributeValueType: AttributeValueTypeDto;
  /** Auto complete values for the attribute. */
  autoCompleteValues?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Auto increment reference for the attribute. */
  autoIncrementReference?: Maybe<Scalars['String']['output']>;
  /** Construction kit attribute id. */
  ckAttributeId: Scalars['CkAttributeId']['output'];
  /** Defines if the attribute is optional. */
  isOptional: Scalars['Boolean']['output'];
};

/** A connection from an object to a list of objects of type `CkTypeAttributeDto`. */
export type CkTypeAttributeDtoConnectionDto = {
  __typename?: 'CkTypeAttributeDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CkTypeAttributeDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CkTypeAttributeDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CkTypeAttributeDto`. */
export type CkTypeAttributeDtoEdgeDto = {
  __typename?: 'CkTypeAttributeDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CkTypeAttributeDto>;
};

/** A connection from an object to a list of objects of type `CkTypeDto`. */
export type CkTypeDtoConnectionDto = {
  __typename?: 'CkTypeDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CkTypeDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CkTypeDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CkTypeDto`. */
export type CkTypeDtoEdgeDto = {
  __typename?: 'CkTypeDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CkTypeDto>;
};

export type ConstructionKitDto = {
  __typename?: 'ConstructionKit';
  attributes?: Maybe<CkAttributeDtoConnectionDto>;
  enums?: Maybe<CkEnumDtoConnectionDto>;
  records?: Maybe<CkRecordDtoConnectionDto>;
  types?: Maybe<CkTypeDtoConnectionDto>;
};


export type ConstructionKitAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type ConstructionKitEnumsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type ConstructionKitRecordsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type ConstructionKitTypesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type FieldFilterDto = {
  attributeName: Scalars['String']['input'];
  comparisonValue?: InputMaybe<Scalars['SimpleScalarType']['input']>;
  operator?: InputMaybe<FieldFilterOperatorsDto>;
};

/** Defines the operator of field compare */
export enum FieldFilterOperatorsDto {
  AnyEqDto = 'ANY_EQ',
  EqualsDto = 'EQUALS',
  GreaterEqualThanDto = 'GREATER_EQUAL_THAN',
  GreaterThanDto = 'GREATER_THAN',
  InDto = 'IN',
  LessEqualThanDto = 'LESS_EQUAL_THAN',
  LessThanDto = 'LESS_THAN',
  LikeDto = 'LIKE',
  MatchRegExDto = 'MATCH_REG_EX',
  NotEqualsDto = 'NOT_EQUALS',
  NotInDto = 'NOT_IN'
}

/** Runtime entities of construction kit type 'FireGuardians/Restaurant' */
export type FireGuardiansRestaurantDto = {
  __typename?: 'FireGuardiansRestaurant';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<FireGuardiansRestaurant_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  location?: Maybe<RtGeospatialValueDtoTypeDto>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `FireGuardiansRestaurant`. */
export type FireGuardiansRestaurantConnectionDto = {
  __typename?: 'FireGuardiansRestaurantConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<FireGuardiansRestaurantEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<FireGuardiansRestaurantDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `FireGuardiansRestaurant`. */
export type FireGuardiansRestaurantEdgeDto = {
  __typename?: 'FireGuardiansRestaurantEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FireGuardiansRestaurantDto>;
};

export type FireGuardiansRestaurantInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<PointInputDto>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type FireGuardiansRestaurantInputUpdateDto = {
  /** Item to update */
  item: FireGuardiansRestaurantInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type FireGuardiansRestaurantMutationsDto = {
  __typename?: 'FireGuardiansRestaurantMutations';
  /** Creates new entities of type 'FireGuardiansRestaurant'. */
  create?: Maybe<Array<Maybe<FireGuardiansRestaurantDto>>>;
  /** Deletes an entity of type 'FireGuardiansRestaurant'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'FireGuardiansRestaurant'. */
  update?: Maybe<Array<Maybe<FireGuardiansRestaurantDto>>>;
};


export type FireGuardiansRestaurantMutationsCreateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansRestaurantInputDto>>;
};


export type FireGuardiansRestaurantMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type FireGuardiansRestaurantMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansRestaurantInputUpdateDto>>;
};

export type FireGuardiansRestaurantUpdateDto = {
  __typename?: 'FireGuardiansRestaurantUpdate';
  /** The corresponding item */
  item?: Maybe<FireGuardiansRestaurantDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type FireGuardiansRestaurantUpdateMessageDto = {
  __typename?: 'FireGuardiansRestaurantUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<FireGuardiansRestaurantUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansRestaurant */
export type FireGuardiansRestaurant_ConfiguredByUnionDto = {
  __typename?: 'FireGuardiansRestaurant_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansRestaurant */
export type FireGuardiansRestaurant_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type GroupByDto = {
  avgAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupByAttributeNameList: Array<InputMaybe<Scalars['String']['input']>>;
  maxValueAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minValueAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Runtime entities of construction kit type 'Industry.Basic/Alarm' */
export type IndustryBasicAlarmDto = {
  __typename?: 'IndustryBasicAlarm';
  cause?: Maybe<Scalars['String']['output']>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryBasicAlarm_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  eventSource?: Maybe<IndustryBasicAlarm_EventSourceUnionDto>;
  group?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reactivatedCount?: Maybe<Scalars['Int']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  source?: Maybe<IndustryBasicEventAlarmSourceDto>;
  state?: Maybe<IndustryBasicEventAlarmStateDto>;
  time?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<IndustryBasicEventAlarmTypeDto>;
};

/** A connection to `IndustryBasicAlarm`. */
export type IndustryBasicAlarmConnectionDto = {
  __typename?: 'IndustryBasicAlarmConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryBasicAlarmEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryBasicAlarmDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryBasicAlarm`. */
export type IndustryBasicAlarmEdgeDto = {
  __typename?: 'IndustryBasicAlarmEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryBasicAlarmDto>;
};

export type IndustryBasicAlarmInputDto = {
  cause?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventSource?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  group?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reactivatedCount?: InputMaybe<Scalars['Int']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<IndustryBasicEventAlarmSourceDto>;
  state?: InputMaybe<IndustryBasicEventAlarmStateDto>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<IndustryBasicEventAlarmTypeDto>;
};

export type IndustryBasicAlarmInputUpdateDto = {
  /** Item to update */
  item: IndustryBasicAlarmInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryBasicAlarmMutationsDto = {
  __typename?: 'IndustryBasicAlarmMutations';
  /** Creates new entities of type 'IndustryBasicAlarm'. */
  create?: Maybe<Array<Maybe<IndustryBasicAlarmDto>>>;
  /** Deletes an entity of type 'IndustryBasicAlarm'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryBasicAlarm'. */
  update?: Maybe<Array<Maybe<IndustryBasicAlarmDto>>>;
};


export type IndustryBasicAlarmMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryBasicAlarmInputDto>>;
};


export type IndustryBasicAlarmMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryBasicAlarmMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryBasicAlarmInputUpdateDto>>;
};

export type IndustryBasicAlarmUpdateDto = {
  __typename?: 'IndustryBasicAlarmUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryBasicAlarmDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryBasicAlarmUpdateMessageDto = {
  __typename?: 'IndustryBasicAlarmUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryBasicAlarmUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_ConfiguredByUnionDto = {
  __typename?: 'IndustryBasicAlarm_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionDto = {
  __typename?: 'IndustryBasicAlarm_EventSourceUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  industryBasicMachine?: Maybe<IndustryBasicMachineConnectionDto>;
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyEnergyMeter?: Maybe<IndustryEnergyEnergyMeterConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaic?: Maybe<IndustryEnergyPhotovoltaicConnectionDto>;
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
  industryFluidHeatMeter?: Maybe<IndustryFluidHeatMeterConnectionDto>;
  industryFluidWaterMeter?: Maybe<IndustryFluidWaterMeterConnectionDto>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryBasicMachineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryEnergyPhotovoltaicArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryFluidHeatMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicAlarm */
export type IndustryBasicAlarm_EventSourceUnionIndustryFluidWaterMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Industry.Basic/Event' */
export type IndustryBasicEventDto = {
  __typename?: 'IndustryBasicEvent';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryBasicEvent_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  eventSource?: Maybe<IndustryBasicEvent_EventSourceUnionDto>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

/** Runtime entities of construction kit enum 'Industry.Basic/EventAlarmSource' */
export enum IndustryBasicEventAlarmSourceDto {
  ControlSystemDto = 'CONTROL_SYSTEM',
  FieldDeviceDto = 'FIELD_DEVICE',
  HmiDto = 'HMI',
  InternalDto = 'INTERNAL'
}

/** Runtime entities of construction kit enum 'Industry.Basic/EventAlarmState' */
export enum IndustryBasicEventAlarmStateDto {
  /** The acknowledged alarm state should not use an audible indication. The acknowledged alarm state visual indication should be clearly distinguishable from the normal state indication by using symbols (e.g., shape or text), and should be identical in colour to the unacknowledged alarm indication. A blinking element should not be used in the visual indication for an acknowledged alarm. */
  AcknowledgedDto = 'ACKNOWLEDGED',
  /** The normal state should not use an audible indication. The normal state visual indication should be the same as indications without alarms. */
  NormalDto = 'NORMAL',
  /** The out-of-service alarm state should be visually indicated in the HMI. The visual indication for an out-of-service alarm should not include a blinking element. The out-of-service alarm state indication should be distinct from the unacknowledged and acknowledged state indications. No audible indication should be used to identify out-of-service alarms. */
  OutOfServiceDto = 'OUT_OF_SERVICE',
  /** The return-to-normal unacknowledged state should not use an audible indication. The return to-normal unacknowledged state visual indication may be the same as the normal state or it may indicate an unacknowledged status with a blinking element. */
  ReturnToNormalDto = 'RETURN_TO_NORMAL',
  /** The shelved alarm state should be visually indicated in the HMI. The visual indication for a shelved alarm should not include a blinking element. The shelved alarm state indication should be distinct. No audible indication should be used to identify shelved alarms. */
  ShelvedDto = 'SHELVED',
  /** The suppressed-by-design alarm state should be visually indicated in the HMI. The visual indication for an alarm suppressed by design should not include a blinking element. The suppressed-by-design alarm state indication should be distinct from the unacknowledged and acknowledged state indications. No audible indication should be used to identify alarms suppressed by design. */
  SuppressedByDesignDto = 'SUPPRESSED_BY_DESIGN',
  /** The unacknowledged alarm state should use both an audible indication and visual indication. The audible indication should be silenced with a silence action or acknowledge action by the operator. The visual indication should be clearly distinguishable from the normal state indication by using colours and symbols (e.g., shape or text). The visual indication for an unacknowledged alarm should include a blinking element. There are some environments in which an audible indication is not an effective indicator of unacknowledged alarms. */
  UnacknowledgedDto = 'UNACKNOWLEDGED'
}

/** Runtime entities of construction kit enum 'Industry.Basic/EventAlarmType' */
export enum IndustryBasicEventAlarmTypeDto {
  AbsoluteDto = 'ABSOLUTE',
  AdaptiveDto = 'ADAPTIVE',
  AdjustableDto = 'ADJUSTABLE',
  BadMeasurementDto = 'BAD_MEASUREMENT',
  BitPatternDto = 'BIT_PATTERN',
  CalculatedDto = 'CALCULATED',
  ControllerOutputDto = 'CONTROLLER_OUTPUT',
  DeviationDto = 'DEVIATION',
  DiscrepancyDto = 'DISCREPANCY',
  FirstOutDto = 'FIRST_OUT',
  InstrumentDiagnosticDto = 'INSTRUMENT_DIAGNOSTIC',
  RateOfChangeDto = 'RATE_OF_CHANGE',
  RecipeDrivenDto = 'RECIPE_DRIVEN',
  ReAlarmingDto = 'RE_ALARMING',
  StatisticalDto = 'STATISTICAL',
  SystemDiagnosticDto = 'SYSTEM_DIAGNOSTIC'
}

/** A connection to `IndustryBasicEvent`. */
export type IndustryBasicEventConnectionDto = {
  __typename?: 'IndustryBasicEventConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryBasicEventEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryBasicEventDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryBasicEvent`. */
export type IndustryBasicEventEdgeDto = {
  __typename?: 'IndustryBasicEventEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryBasicEventDto>;
};

export type IndustryBasicEventInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventSource?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IndustryBasicEventInputUpdateDto = {
  /** Item to update */
  item: IndustryBasicEventInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryBasicEventMutationsDto = {
  __typename?: 'IndustryBasicEventMutations';
  /** Creates new entities of type 'IndustryBasicEvent'. */
  create?: Maybe<Array<Maybe<IndustryBasicEventDto>>>;
  /** Deletes an entity of type 'IndustryBasicEvent'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryBasicEvent'. */
  update?: Maybe<Array<Maybe<IndustryBasicEventDto>>>;
};


export type IndustryBasicEventMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryBasicEventInputDto>>;
};


export type IndustryBasicEventMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryBasicEventMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryBasicEventInputUpdateDto>>;
};

export type IndustryBasicEventUpdateDto = {
  __typename?: 'IndustryBasicEventUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryBasicEventDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryBasicEventUpdateMessageDto = {
  __typename?: 'IndustryBasicEventUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryBasicEventUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_ConfiguredByUnionDto = {
  __typename?: 'IndustryBasicEvent_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionDto = {
  __typename?: 'IndustryBasicEvent_EventSourceUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  industryBasicMachine?: Maybe<IndustryBasicMachineConnectionDto>;
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyEnergyMeter?: Maybe<IndustryEnergyEnergyMeterConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaic?: Maybe<IndustryEnergyPhotovoltaicConnectionDto>;
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
  industryFluidHeatMeter?: Maybe<IndustryFluidHeatMeterConnectionDto>;
  industryFluidWaterMeter?: Maybe<IndustryFluidWaterMeterConnectionDto>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryBasicMachineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryEnergyPhotovoltaicArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryFluidHeatMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Outbound) of entity type IndustryBasicEvent */
export type IndustryBasicEvent_EventSourceUnionIndustryFluidWaterMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Industry.Basic/Machine' */
export type IndustryBasicMachineDto = {
  __typename?: 'IndustryBasicMachine';
  children?: Maybe<IndustryBasicMachine_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryBasicMachine_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryBasicMachine_EventsUnionDto>;
  name?: Maybe<Scalars['String']['output']>;
  namePlate?: Maybe<BasicNamePlateDto>;
  operatingHours?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryBasicMachine_ParentUnionDto>;
  relatesTo?: Maybe<IndustryBasicMachine_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  standStillCounter?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<IndustryBasicStateDto>;
};

/** A connection to `IndustryBasicMachine`. */
export type IndustryBasicMachineConnectionDto = {
  __typename?: 'IndustryBasicMachineConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryBasicMachineEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryBasicMachineDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryBasicMachine`. */
export type IndustryBasicMachineEdgeDto = {
  __typename?: 'IndustryBasicMachineEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryBasicMachineDto>;
};

export type IndustryBasicMachineInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInputDto>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<IndustryBasicStateDto>;
};

export type IndustryBasicMachineInputUpdateDto = {
  /** Item to update */
  item: IndustryBasicMachineInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryBasicMachineMutationsDto = {
  __typename?: 'IndustryBasicMachineMutations';
  /** Creates new entities of type 'IndustryBasicMachine'. */
  create?: Maybe<Array<Maybe<IndustryBasicMachineDto>>>;
  /** Deletes an entity of type 'IndustryBasicMachine'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryBasicMachine'. */
  update?: Maybe<Array<Maybe<IndustryBasicMachineDto>>>;
};


export type IndustryBasicMachineMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryBasicMachineInputDto>>;
};


export type IndustryBasicMachineMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryBasicMachineMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryBasicMachineInputUpdateDto>>;
};

export type IndustryBasicMachineUpdateDto = {
  __typename?: 'IndustryBasicMachineUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryBasicMachineDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryBasicMachineUpdateMessageDto = {
  __typename?: 'IndustryBasicMachineUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryBasicMachineUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_ChildrenUnionDto = {
  __typename?: 'IndustryBasicMachine_ChildrenUnion';
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_ConfiguredByUnionDto = {
  __typename?: 'IndustryBasicMachine_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_EventsUnionDto = {
  __typename?: 'IndustryBasicMachine_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_ParentUnionDto = {
  __typename?: 'IndustryBasicMachine_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_RelatesToUnionDto = {
  __typename?: 'IndustryBasicMachine_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryBasicMachine */
export type IndustryBasicMachine_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit enum 'Industry.Basic/State' */
export enum IndustryBasicStateDto {
  ErrorDto = 'ERROR',
  IdleDto = 'IDLE',
  OffDto = 'OFF',
  OnDto = 'ON',
  UnknownDto = 'UNKNOWN'
}

/** Runtime entities of construction kit type 'Industry.Energy/Battery' */
export type IndustryEnergyBatteryDto = {
  __typename?: 'IndustryEnergyBattery';
  ampere?: Maybe<Scalars['Decimal']['output']>;
  capacity?: Maybe<Scalars['Decimal']['output']>;
  children?: Maybe<IndustryEnergyBattery_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryEnergyBattery_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryEnergyBattery_EventsUnionDto>;
  exportedEnergy?: Maybe<Scalars['Decimal']['output']>;
  importedEnergy?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namePlate?: Maybe<BasicNamePlateDto>;
  numofCycles?: Maybe<Scalars['Int']['output']>;
  operatingHours?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryEnergyBattery_ParentUnionDto>;
  power?: Maybe<Scalars['Decimal']['output']>;
  relatesTo?: Maybe<IndustryEnergyBattery_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  soC?: Maybe<Scalars['Int']['output']>;
  soH?: Maybe<Scalars['Int']['output']>;
  standStillCounter?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<IndustryBasicStateDto>;
  temperature?: Maybe<Scalars['Decimal']['output']>;
  voltage?: Maybe<Scalars['Decimal']['output']>;
};

/** A connection to `IndustryEnergyBattery`. */
export type IndustryEnergyBatteryConnectionDto = {
  __typename?: 'IndustryEnergyBatteryConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryEnergyBatteryEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryEnergyBatteryDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryEnergyBattery`. */
export type IndustryEnergyBatteryEdgeDto = {
  __typename?: 'IndustryEnergyBatteryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryEnergyBatteryDto>;
};

export type IndustryEnergyBatteryInputDto = {
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  capacity?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  exportedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  importedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInputDto>;
  numofCycles?: InputMaybe<Scalars['Int']['input']>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  soC?: InputMaybe<Scalars['Int']['input']>;
  soH?: InputMaybe<Scalars['Int']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<IndustryBasicStateDto>;
  temperature?: InputMaybe<Scalars['Decimal']['input']>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryEnergyBatteryInputUpdateDto = {
  /** Item to update */
  item: IndustryEnergyBatteryInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyBatteryMutationsDto = {
  __typename?: 'IndustryEnergyBatteryMutations';
  /** Creates new entities of type 'IndustryEnergyBattery'. */
  create?: Maybe<Array<Maybe<IndustryEnergyBatteryDto>>>;
  /** Deletes an entity of type 'IndustryEnergyBattery'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryEnergyBattery'. */
  update?: Maybe<Array<Maybe<IndustryEnergyBatteryDto>>>;
};


export type IndustryEnergyBatteryMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyBatteryInputDto>>;
};


export type IndustryEnergyBatteryMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryEnergyBatteryMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyBatteryInputUpdateDto>>;
};

export type IndustryEnergyBatteryUpdateDto = {
  __typename?: 'IndustryEnergyBatteryUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryEnergyBatteryDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryEnergyBatteryUpdateMessageDto = {
  __typename?: 'IndustryEnergyBatteryUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryEnergyBatteryUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_ChildrenUnionDto = {
  __typename?: 'IndustryEnergyBattery_ChildrenUnion';
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_ConfiguredByUnionDto = {
  __typename?: 'IndustryEnergyBattery_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_EventsUnionDto = {
  __typename?: 'IndustryEnergyBattery_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_ParentUnionDto = {
  __typename?: 'IndustryEnergyBattery_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_ParentUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_RelatesToUnionDto = {
  __typename?: 'IndustryEnergyBattery_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyBattery */
export type IndustryEnergyBattery_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Industry.Energy/EnergyMeter' */
export type IndustryEnergyEnergyMeterDto = {
  __typename?: 'IndustryEnergyEnergyMeter';
  aCL1?: Maybe<IndustryEnergyPhaseInfoDto>;
  aCL2?: Maybe<IndustryEnergyPhaseInfoDto>;
  aCL3?: Maybe<IndustryEnergyPhaseInfoDto>;
  ampere?: Maybe<Scalars['Decimal']['output']>;
  apparentPower?: Maybe<Scalars['Decimal']['output']>;
  children?: Maybe<IndustryEnergyEnergyMeter_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryEnergyEnergyMeter_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryEnergyEnergyMeter_EventsUnionDto>;
  exportedEnergy?: Maybe<Scalars['Decimal']['output']>;
  frequency?: Maybe<Scalars['Decimal']['output']>;
  importedEnergy?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namePlate?: Maybe<BasicNamePlateDto>;
  operatingHours?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryEnergyEnergyMeter_ParentUnionDto>;
  power?: Maybe<Scalars['Decimal']['output']>;
  reactivePower?: Maybe<Scalars['Decimal']['output']>;
  relatesTo?: Maybe<IndustryEnergyEnergyMeter_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  standStillCounter?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<IndustryBasicStateDto>;
  voltage?: Maybe<Scalars['Decimal']['output']>;
};

/** A connection to `IndustryEnergyEnergyMeter`. */
export type IndustryEnergyEnergyMeterConnectionDto = {
  __typename?: 'IndustryEnergyEnergyMeterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryEnergyEnergyMeterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryEnergyEnergyMeterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryEnergyEnergyMeter`. */
export type IndustryEnergyEnergyMeterEdgeDto = {
  __typename?: 'IndustryEnergyEnergyMeterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryEnergyEnergyMeterDto>;
};

export type IndustryEnergyEnergyMeterInputDto = {
  aCL1?: InputMaybe<IndustryEnergyPhaseInfoInputDto>;
  aCL2?: InputMaybe<IndustryEnergyPhaseInfoInputDto>;
  aCL3?: InputMaybe<IndustryEnergyPhaseInfoInputDto>;
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  apparentPower?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  exportedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  frequency?: InputMaybe<Scalars['Decimal']['input']>;
  importedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInputDto>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  reactivePower?: InputMaybe<Scalars['Decimal']['input']>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<IndustryBasicStateDto>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryEnergyEnergyMeterInputUpdateDto = {
  /** Item to update */
  item: IndustryEnergyEnergyMeterInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyEnergyMeterMutationsDto = {
  __typename?: 'IndustryEnergyEnergyMeterMutations';
  /** Creates new entities of type 'IndustryEnergyEnergyMeter'. */
  create?: Maybe<Array<Maybe<IndustryEnergyEnergyMeterDto>>>;
  /** Deletes an entity of type 'IndustryEnergyEnergyMeter'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryEnergyEnergyMeter'. */
  update?: Maybe<Array<Maybe<IndustryEnergyEnergyMeterDto>>>;
};


export type IndustryEnergyEnergyMeterMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyEnergyMeterInputDto>>;
};


export type IndustryEnergyEnergyMeterMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryEnergyEnergyMeterMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyEnergyMeterInputUpdateDto>>;
};

export type IndustryEnergyEnergyMeterUpdateDto = {
  __typename?: 'IndustryEnergyEnergyMeterUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryEnergyEnergyMeterDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryEnergyEnergyMeterUpdateMessageDto = {
  __typename?: 'IndustryEnergyEnergyMeterUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryEnergyEnergyMeterUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_ChildrenUnionDto = {
  __typename?: 'IndustryEnergyEnergyMeter_ChildrenUnion';
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_ConfiguredByUnionDto = {
  __typename?: 'IndustryEnergyEnergyMeter_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_EventsUnionDto = {
  __typename?: 'IndustryEnergyEnergyMeter_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_ParentUnionDto = {
  __typename?: 'IndustryEnergyEnergyMeter_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_RelatesToUnionDto = {
  __typename?: 'IndustryEnergyEnergyMeter_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyEnergyMeter */
export type IndustryEnergyEnergyMeter_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Industry.Energy/Inverter' */
export type IndustryEnergyInverterDto = {
  __typename?: 'IndustryEnergyInverter';
  aCL1?: Maybe<IndustryEnergyPhaseInfoDto>;
  aCL2?: Maybe<IndustryEnergyPhaseInfoDto>;
  aCL3?: Maybe<IndustryEnergyPhaseInfoDto>;
  ampere?: Maybe<Scalars['Decimal']['output']>;
  children?: Maybe<IndustryEnergyInverter_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryEnergyInverter_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  dCAmpere?: Maybe<Scalars['Decimal']['output']>;
  dCVoltage?: Maybe<Scalars['Decimal']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryEnergyInverter_EventsUnionDto>;
  maximumPower?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namePlate?: Maybe<BasicNamePlateDto>;
  operatingHours?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryEnergyInverter_ParentUnionDto>;
  power?: Maybe<Scalars['Decimal']['output']>;
  relatesTo?: Maybe<IndustryEnergyInverter_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  standStillCounter?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<IndustryBasicStateDto>;
  voltage?: Maybe<Scalars['Decimal']['output']>;
};

/** A connection to `IndustryEnergyInverter`. */
export type IndustryEnergyInverterConnectionDto = {
  __typename?: 'IndustryEnergyInverterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryEnergyInverterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryEnergyInverterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryEnergyInverter`. */
export type IndustryEnergyInverterEdgeDto = {
  __typename?: 'IndustryEnergyInverterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryEnergyInverterDto>;
};

export type IndustryEnergyInverterInputDto = {
  aCL1?: InputMaybe<IndustryEnergyPhaseInfoInputDto>;
  aCL2?: InputMaybe<IndustryEnergyPhaseInfoInputDto>;
  aCL3?: InputMaybe<IndustryEnergyPhaseInfoInputDto>;
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  dCAmpere?: InputMaybe<Scalars['Decimal']['input']>;
  dCVoltage?: InputMaybe<Scalars['Decimal']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  maximumPower?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInputDto>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<IndustryBasicStateDto>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryEnergyInverterInputUpdateDto = {
  /** Item to update */
  item: IndustryEnergyInverterInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyInverterMutationsDto = {
  __typename?: 'IndustryEnergyInverterMutations';
  /** Creates new entities of type 'IndustryEnergyInverter'. */
  create?: Maybe<Array<Maybe<IndustryEnergyInverterDto>>>;
  /** Deletes an entity of type 'IndustryEnergyInverter'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryEnergyInverter'. */
  update?: Maybe<Array<Maybe<IndustryEnergyInverterDto>>>;
};


export type IndustryEnergyInverterMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyInverterInputDto>>;
};


export type IndustryEnergyInverterMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryEnergyInverterMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyInverterInputUpdateDto>>;
};

export type IndustryEnergyInverterUpdateDto = {
  __typename?: 'IndustryEnergyInverterUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryEnergyInverterDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryEnergyInverterUpdateMessageDto = {
  __typename?: 'IndustryEnergyInverterUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryEnergyInverterUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ChildrenUnionDto = {
  __typename?: 'IndustryEnergyInverter_ChildrenUnion';
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ChildrenUnionIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ChildrenUnionIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ConfiguredByUnionDto = {
  __typename?: 'IndustryEnergyInverter_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_EventsUnionDto = {
  __typename?: 'IndustryEnergyInverter_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionDto = {
  __typename?: 'IndustryEnergyInverter_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  industryBasicMachine?: Maybe<IndustryBasicMachineConnectionDto>;
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyEnergyMeter?: Maybe<IndustryEnergyEnergyMeterConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaic?: Maybe<IndustryEnergyPhotovoltaicConnectionDto>;
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
  industryFluidHeatMeter?: Maybe<IndustryFluidHeatMeterConnectionDto>;
  industryFluidWaterMeter?: Maybe<IndustryFluidWaterMeterConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryBasicMachineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryEnergyPhotovoltaicArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryFluidHeatMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_ParentUnionIndustryFluidWaterMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_RelatesToUnionDto = {
  __typename?: 'IndustryEnergyInverter_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyInverter */
export type IndustryEnergyInverter_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit record 'Industry.Energy/PhaseInfo' */
export type IndustryEnergyPhaseInfoDto = {
  __typename?: 'IndustryEnergyPhaseInfo';
  ampere?: Maybe<Scalars['Decimal']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  frequency?: Maybe<Scalars['Decimal']['output']>;
  power?: Maybe<Scalars['Decimal']['output']>;
  voltage?: Maybe<Scalars['Decimal']['output']>;
};

export type IndustryEnergyPhaseInfoInputDto = {
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  frequency?: InputMaybe<Scalars['Decimal']['input']>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

/** Runtime entities of construction kit type 'Industry.Energy/Photovoltaic' */
export type IndustryEnergyPhotovoltaicDto = {
  __typename?: 'IndustryEnergyPhotovoltaic';
  children?: Maybe<IndustryEnergyPhotovoltaic_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryEnergyPhotovoltaic_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryEnergyPhotovoltaic_EventsUnionDto>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<IndustryEnergyPhotovoltaic_ParentUnionDto>;
  relatesTo?: Maybe<IndustryEnergyPhotovoltaic_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `IndustryEnergyPhotovoltaic`. */
export type IndustryEnergyPhotovoltaicConnectionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryEnergyPhotovoltaic`. */
export type IndustryEnergyPhotovoltaicEdgeDto = {
  __typename?: 'IndustryEnergyPhotovoltaicEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryEnergyPhotovoltaicDto>;
};

export type IndustryEnergyPhotovoltaicInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type IndustryEnergyPhotovoltaicInputUpdateDto = {
  /** Item to update */
  item: IndustryEnergyPhotovoltaicInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit type 'Industry.Energy/Photovoltaic.Module' */
export type IndustryEnergyPhotovoltaicModuleDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModule';
  children?: Maybe<IndustryEnergyPhotovoltaicModule_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryEnergyPhotovoltaicModule_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryEnergyPhotovoltaicModule_EventsUnionDto>;
  name?: Maybe<Scalars['String']['output']>;
  namePlate?: Maybe<BasicNamePlateDto>;
  operatingHours?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryEnergyPhotovoltaicModule_ParentUnionDto>;
  peakPower?: Maybe<Scalars['Decimal']['output']>;
  power?: Maybe<Scalars['Decimal']['output']>;
  relatesTo?: Maybe<IndustryEnergyPhotovoltaicModule_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  standStillCounter?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<IndustryBasicStateDto>;
};

/** A connection to `IndustryEnergyPhotovoltaicModule`. */
export type IndustryEnergyPhotovoltaicModuleConnectionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModuleConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicModuleEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicModuleDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryEnergyPhotovoltaicModule`. */
export type IndustryEnergyPhotovoltaicModuleEdgeDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModuleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryEnergyPhotovoltaicModuleDto>;
};

export type IndustryEnergyPhotovoltaicModuleInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInputDto>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  peakPower?: InputMaybe<Scalars['Decimal']['input']>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<IndustryBasicStateDto>;
};

export type IndustryEnergyPhotovoltaicModuleInputUpdateDto = {
  /** Item to update */
  item: IndustryEnergyPhotovoltaicModuleInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyPhotovoltaicModuleMutationsDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModuleMutations';
  /** Creates new entities of type 'IndustryEnergyPhotovoltaicModule'. */
  create?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicModuleDto>>>;
  /** Deletes an entity of type 'IndustryEnergyPhotovoltaicModule'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryEnergyPhotovoltaicModule'. */
  update?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicModuleDto>>>;
};


export type IndustryEnergyPhotovoltaicModuleMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyPhotovoltaicModuleInputDto>>;
};


export type IndustryEnergyPhotovoltaicModuleMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryEnergyPhotovoltaicModuleMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyPhotovoltaicModuleInputUpdateDto>>;
};

export type IndustryEnergyPhotovoltaicModuleUpdateDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModuleUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryEnergyPhotovoltaicModuleDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryEnergyPhotovoltaicModuleUpdateMessageDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModuleUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicModuleUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_ChildrenUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModule_ChildrenUnion';
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_ConfiguredByUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModule_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_EventsUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModule_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_ParentUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModule_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_ParentUnionIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_RelatesToUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicModule_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyPhotovoltaicModule */
export type IndustryEnergyPhotovoltaicModule_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type IndustryEnergyPhotovoltaicMutationsDto = {
  __typename?: 'IndustryEnergyPhotovoltaicMutations';
  /** Creates new entities of type 'IndustryEnergyPhotovoltaic'. */
  create?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicDto>>>;
  /** Deletes an entity of type 'IndustryEnergyPhotovoltaic'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryEnergyPhotovoltaic'. */
  update?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicDto>>>;
};


export type IndustryEnergyPhotovoltaicMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyPhotovoltaicInputDto>>;
};


export type IndustryEnergyPhotovoltaicMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryEnergyPhotovoltaicMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyPhotovoltaicInputUpdateDto>>;
};

/** Runtime entities of construction kit type 'Industry.Energy/Photovoltaic.String' */
export type IndustryEnergyPhotovoltaicStringDto = {
  __typename?: 'IndustryEnergyPhotovoltaicString';
  children?: Maybe<IndustryEnergyPhotovoltaicString_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryEnergyPhotovoltaicString_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryEnergyPhotovoltaicString_EventsUnionDto>;
  name?: Maybe<Scalars['String']['output']>;
  numOfModules?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryEnergyPhotovoltaicString_ParentUnionDto>;
  power?: Maybe<Scalars['Decimal']['output']>;
  relatesTo?: Maybe<IndustryEnergyPhotovoltaicString_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `IndustryEnergyPhotovoltaicString`. */
export type IndustryEnergyPhotovoltaicStringConnectionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicStringConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicStringEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicStringDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryEnergyPhotovoltaicString`. */
export type IndustryEnergyPhotovoltaicStringEdgeDto = {
  __typename?: 'IndustryEnergyPhotovoltaicStringEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryEnergyPhotovoltaicStringDto>;
};

export type IndustryEnergyPhotovoltaicStringInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  numOfModules?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type IndustryEnergyPhotovoltaicStringInputUpdateDto = {
  /** Item to update */
  item: IndustryEnergyPhotovoltaicStringInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyPhotovoltaicStringMutationsDto = {
  __typename?: 'IndustryEnergyPhotovoltaicStringMutations';
  /** Creates new entities of type 'IndustryEnergyPhotovoltaicString'. */
  create?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicStringDto>>>;
  /** Deletes an entity of type 'IndustryEnergyPhotovoltaicString'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryEnergyPhotovoltaicString'. */
  update?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicStringDto>>>;
};


export type IndustryEnergyPhotovoltaicStringMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyPhotovoltaicStringInputDto>>;
};


export type IndustryEnergyPhotovoltaicStringMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryEnergyPhotovoltaicStringMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryEnergyPhotovoltaicStringInputUpdateDto>>;
};

export type IndustryEnergyPhotovoltaicStringUpdateDto = {
  __typename?: 'IndustryEnergyPhotovoltaicStringUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryEnergyPhotovoltaicStringDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryEnergyPhotovoltaicStringUpdateMessageDto = {
  __typename?: 'IndustryEnergyPhotovoltaicStringUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicStringUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_ChildrenUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicString_ChildrenUnion';
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_ChildrenUnionIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_ConfiguredByUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicString_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_EventsUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicString_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_ParentUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicString_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_ParentUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_RelatesToUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaicString_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyPhotovoltaicString */
export type IndustryEnergyPhotovoltaicString_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type IndustryEnergyPhotovoltaicUpdateDto = {
  __typename?: 'IndustryEnergyPhotovoltaicUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryEnergyPhotovoltaicDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryEnergyPhotovoltaicUpdateMessageDto = {
  __typename?: 'IndustryEnergyPhotovoltaicUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryEnergyPhotovoltaicUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_ChildrenUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaic_ChildrenUnion';
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_ConfiguredByUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaic_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_EventsUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaic_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_ParentUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaic_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_RelatesToUnionDto = {
  __typename?: 'IndustryEnergyPhotovoltaic_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryEnergyPhotovoltaic */
export type IndustryEnergyPhotovoltaic_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Industry.Fluid/HeatMeter' */
export type IndustryFluidHeatMeterDto = {
  __typename?: 'IndustryFluidHeatMeter';
  children?: Maybe<IndustryFluidHeatMeter_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryFluidHeatMeter_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryFluidHeatMeter_EventsUnionDto>;
  flow?: Maybe<Scalars['Decimal']['output']>;
  flowTemperature?: Maybe<Scalars['Decimal']['output']>;
  importedEnergy?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namePlate?: Maybe<BasicNamePlateDto>;
  operatingHours?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryFluidHeatMeter_ParentUnionDto>;
  power?: Maybe<Scalars['Decimal']['output']>;
  relatesTo?: Maybe<IndustryFluidHeatMeter_RelatesToUnionDto>;
  returnTemperature?: Maybe<Scalars['Decimal']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  standStillCounter?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<IndustryBasicStateDto>;
  volume?: Maybe<Scalars['Decimal']['output']>;
};

/** A connection to `IndustryFluidHeatMeter`. */
export type IndustryFluidHeatMeterConnectionDto = {
  __typename?: 'IndustryFluidHeatMeterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryFluidHeatMeterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryFluidHeatMeterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryFluidHeatMeter`. */
export type IndustryFluidHeatMeterEdgeDto = {
  __typename?: 'IndustryFluidHeatMeterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryFluidHeatMeterDto>;
};

export type IndustryFluidHeatMeterInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  flow?: InputMaybe<Scalars['Decimal']['input']>;
  flowTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  importedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInputDto>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  returnTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<IndustryBasicStateDto>;
  volume?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryFluidHeatMeterInputUpdateDto = {
  /** Item to update */
  item: IndustryFluidHeatMeterInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryFluidHeatMeterMutationsDto = {
  __typename?: 'IndustryFluidHeatMeterMutations';
  /** Creates new entities of type 'IndustryFluidHeatMeter'. */
  create?: Maybe<Array<Maybe<IndustryFluidHeatMeterDto>>>;
  /** Deletes an entity of type 'IndustryFluidHeatMeter'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryFluidHeatMeter'. */
  update?: Maybe<Array<Maybe<IndustryFluidHeatMeterDto>>>;
};


export type IndustryFluidHeatMeterMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryFluidHeatMeterInputDto>>;
};


export type IndustryFluidHeatMeterMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryFluidHeatMeterMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryFluidHeatMeterInputUpdateDto>>;
};

export type IndustryFluidHeatMeterUpdateDto = {
  __typename?: 'IndustryFluidHeatMeterUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryFluidHeatMeterDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryFluidHeatMeterUpdateMessageDto = {
  __typename?: 'IndustryFluidHeatMeterUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryFluidHeatMeterUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_ChildrenUnionDto = {
  __typename?: 'IndustryFluidHeatMeter_ChildrenUnion';
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_ConfiguredByUnionDto = {
  __typename?: 'IndustryFluidHeatMeter_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_EventsUnionDto = {
  __typename?: 'IndustryFluidHeatMeter_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_ParentUnionDto = {
  __typename?: 'IndustryFluidHeatMeter_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_RelatesToUnionDto = {
  __typename?: 'IndustryFluidHeatMeter_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryFluidHeatMeter */
export type IndustryFluidHeatMeter_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Industry.Fluid/WaterMeter' */
export type IndustryFluidWaterMeterDto = {
  __typename?: 'IndustryFluidWaterMeter';
  avgWaterTemperature?: Maybe<Scalars['Decimal']['output']>;
  children?: Maybe<IndustryFluidWaterMeter_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<IndustryFluidWaterMeter_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<IndustryFluidWaterMeter_EventsUnionDto>;
  maxWaterTemperature?: Maybe<Scalars['Decimal']['output']>;
  minWaterTemperature?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namePlate?: Maybe<BasicNamePlateDto>;
  netVolume?: Maybe<Scalars['Decimal']['output']>;
  operatingHours?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<IndustryFluidWaterMeter_ParentUnionDto>;
  relatesTo?: Maybe<IndustryFluidWaterMeter_RelatesToUnionDto>;
  reverseVolume?: Maybe<Scalars['Decimal']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  standStillCounter?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<IndustryBasicStateDto>;
  volume?: Maybe<Scalars['Decimal']['output']>;
};

/** A connection to `IndustryFluidWaterMeter`. */
export type IndustryFluidWaterMeterConnectionDto = {
  __typename?: 'IndustryFluidWaterMeterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<IndustryFluidWaterMeterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IndustryFluidWaterMeterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `IndustryFluidWaterMeter`. */
export type IndustryFluidWaterMeterEdgeDto = {
  __typename?: 'IndustryFluidWaterMeterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndustryFluidWaterMeterDto>;
};

export type IndustryFluidWaterMeterInputDto = {
  avgWaterTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  maxWaterTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  minWaterTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInputDto>;
  netVolume?: InputMaybe<Scalars['Decimal']['input']>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  reverseVolume?: InputMaybe<Scalars['Decimal']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<IndustryBasicStateDto>;
  volume?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryFluidWaterMeterInputUpdateDto = {
  /** Item to update */
  item: IndustryFluidWaterMeterInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryFluidWaterMeterMutationsDto = {
  __typename?: 'IndustryFluidWaterMeterMutations';
  /** Creates new entities of type 'IndustryFluidWaterMeter'. */
  create?: Maybe<Array<Maybe<IndustryFluidWaterMeterDto>>>;
  /** Deletes an entity of type 'IndustryFluidWaterMeter'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'IndustryFluidWaterMeter'. */
  update?: Maybe<Array<Maybe<IndustryFluidWaterMeterDto>>>;
};


export type IndustryFluidWaterMeterMutationsCreateArgsDto = {
  entities: Array<InputMaybe<IndustryFluidWaterMeterInputDto>>;
};


export type IndustryFluidWaterMeterMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type IndustryFluidWaterMeterMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<IndustryFluidWaterMeterInputUpdateDto>>;
};

export type IndustryFluidWaterMeterUpdateDto = {
  __typename?: 'IndustryFluidWaterMeterUpdate';
  /** The corresponding item */
  item?: Maybe<IndustryFluidWaterMeterDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type IndustryFluidWaterMeterUpdateMessageDto = {
  __typename?: 'IndustryFluidWaterMeterUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<IndustryFluidWaterMeterUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_ChildrenUnionDto = {
  __typename?: 'IndustryFluidWaterMeter_ChildrenUnion';
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_ChildrenUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_ConfiguredByUnionDto = {
  __typename?: 'IndustryFluidWaterMeter_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_EventsUnionDto = {
  __typename?: 'IndustryFluidWaterMeter_EventsUnion';
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_EventsUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Industry.Basic/EventSource (Inbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_EventsUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_ParentUnionDto = {
  __typename?: 'IndustryFluidWaterMeter_ParentUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_ParentUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_RelatesToUnionDto = {
  __typename?: 'IndustryFluidWaterMeter_RelatesToUnion';
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
};


/** Association Basic/RelatedEquipment (Outbound) of entity type IndustryFluidWaterMeter */
export type IndustryFluidWaterMeter_RelatesToUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Meta information for large binaries */
export type LargeBinaryInfoDto = {
  __typename?: 'LargeBinaryInfo';
  /** Returns the id of binary */
  binaryId: Scalars['OctoObjectId']['output'];
  /** Returns the content type of the binary */
  contentType: Scalars['String']['output'];
  /** Returns the download link of the binary */
  downloadUri: Scalars['Uri']['output'];
  /** Returns the filename of the binary */
  filename: Scalars['String']['output'];
  /** Returns the lengths of the binary */
  length: Scalars['BigInt']['output'];
  /** Returns the uploaded date time of the binary */
  uploadDateTime: Scalars['DateTime']['output'];
};

/** A connection from an object to a list of objects of type `LargeBinaryInfoDto`. */
export type LargeBinaryInfoDtoConnectionDto = {
  __typename?: 'LargeBinaryInfoDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<LargeBinaryInfoDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<LargeBinaryInfoDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `LargeBinaryInfoDto`. */
export type LargeBinaryInfoDtoEdgeDto = {
  __typename?: 'LargeBinaryInfoDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LargeBinaryInfoDto>;
};

export type NearGeospatialFilterDto = {
  attributeName: Scalars['String']['input'];
  maxDistance?: InputMaybe<Scalars['Float']['input']>;
  minDistance?: InputMaybe<Scalars['Float']['input']>;
  point: PointInputDto;
};

export type OctoMutationDto = {
  __typename?: 'OctoMutation';
  runtime?: Maybe<RuntimeDto>;
  /** Uploads a large binary and stores it. ID of file is returned. */
  sysCreateLargeBinary?: Maybe<Scalars['OctoObjectId']['output']>;
};


export type OctoMutationSysCreateLargeBinaryArgsDto = {
  binaryData: Scalars['LargeBinary']['input'];
};

export type OctoQueryDto = {
  __typename?: 'OctoQuery';
  constructionKit?: Maybe<ConstructionKitDto>;
  runtime?: Maybe<RuntimeModelQueryDto>;
  streamData?: Maybe<TimeseriesModelQueryDto>;
  sysLargeBinaries?: Maybe<LargeBinaryInfoDtoConnectionDto>;
};


export type OctoQuerySysLargeBinariesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  largeBinaryId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type OctoSubscriptionsDto = {
  __typename?: 'OctoSubscriptions';
  basicAssetEvents?: Maybe<BasicAssetUpdateMessageDto>;
  basicEquipmentEvents?: Maybe<BasicEquipmentUpdateMessageDto>;
  basicEquipmentGroupEvents?: Maybe<BasicEquipmentGroupUpdateMessageDto>;
  basicEquipmentModelEvents?: Maybe<BasicEquipmentModelUpdateMessageDto>;
  basicNamedEntityEvents?: Maybe<BasicNamedEntityUpdateMessageDto>;
  fireGuardiansRestaurantEvents?: Maybe<FireGuardiansRestaurantUpdateMessageDto>;
  industryBasicAlarmEvents?: Maybe<IndustryBasicAlarmUpdateMessageDto>;
  industryBasicEventEvents?: Maybe<IndustryBasicEventUpdateMessageDto>;
  industryBasicMachineEvents?: Maybe<IndustryBasicMachineUpdateMessageDto>;
  industryEnergyBatteryEvents?: Maybe<IndustryEnergyBatteryUpdateMessageDto>;
  industryEnergyEnergyMeterEvents?: Maybe<IndustryEnergyEnergyMeterUpdateMessageDto>;
  industryEnergyInverterEvents?: Maybe<IndustryEnergyInverterUpdateMessageDto>;
  industryEnergyPhotovoltaicEvents?: Maybe<IndustryEnergyPhotovoltaicUpdateMessageDto>;
  industryEnergyPhotovoltaicModuleEvents?: Maybe<IndustryEnergyPhotovoltaicModuleUpdateMessageDto>;
  industryEnergyPhotovoltaicStringEvents?: Maybe<IndustryEnergyPhotovoltaicStringUpdateMessageDto>;
  industryFluidHeatMeterEvents?: Maybe<IndustryFluidHeatMeterUpdateMessageDto>;
  industryFluidWaterMeterEvents?: Maybe<IndustryFluidWaterMeterUpdateMessageDto>;
  systemAutoIncrementEvents?: Maybe<SystemAutoIncrementUpdateMessageDto>;
  systemBotAttributeAggregateConfigurationEvents?: Maybe<SystemBotAttributeAggregateConfigurationUpdateMessageDto>;
  systemBotServiceHookEvents?: Maybe<SystemBotServiceHookUpdateMessageDto>;
  systemCommunicationAdapterEvents?: Maybe<SystemCommunicationAdapterUpdateMessageDto>;
  systemCommunicationDataPipelineEvents?: Maybe<SystemCommunicationDataPipelineUpdateMessageDto>;
  systemCommunicationDataPipelineTriggerEvents?: Maybe<SystemCommunicationDataPipelineTriggerUpdateMessageDto>;
  systemCommunicationDeployableEntityEvents?: Maybe<SystemCommunicationDeployableEntityUpdateMessageDto>;
  systemCommunicationEdgeAdapterEvents?: Maybe<SystemCommunicationEdgeAdapterUpdateMessageDto>;
  systemCommunicationEdgePipelineEvents?: Maybe<SystemCommunicationEdgePipelineUpdateMessageDto>;
  systemCommunicationMeshAdapterEvents?: Maybe<SystemCommunicationMeshAdapterUpdateMessageDto>;
  systemCommunicationMeshPipelineEvents?: Maybe<SystemCommunicationMeshPipelineUpdateMessageDto>;
  systemCommunicationPipelineEvents?: Maybe<SystemCommunicationPipelineUpdateMessageDto>;
  systemCommunicationPoolEvents?: Maybe<SystemCommunicationPoolUpdateMessageDto>;
  systemConfigurationEvents?: Maybe<SystemConfigurationUpdateMessageDto>;
  systemEntityEvents?: Maybe<SystemEntityUpdateMessageDto>;
  systemNotificationNotificationMessageEvents?: Maybe<SystemNotificationNotificationMessageUpdateMessageDto>;
  systemNotificationNotificationTemplateEvents?: Maybe<SystemNotificationNotificationTemplateUpdateMessageDto>;
  systemQueryEvents?: Maybe<SystemQueryUpdateMessageDto>;
  systemTenantEvents?: Maybe<SystemTenantUpdateMessageDto>;
};


export type OctoSubscriptionsBasicAssetEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicEquipmentEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicEquipmentGroupEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicEquipmentModelEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicNamedEntityEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsFireGuardiansRestaurantEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryBasicAlarmEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryBasicEventEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryBasicMachineEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryEnergyBatteryEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryEnergyEnergyMeterEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryEnergyInverterEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryEnergyPhotovoltaicEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryEnergyPhotovoltaicModuleEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryEnergyPhotovoltaicStringEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryFluidHeatMeterEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsIndustryFluidWaterMeterEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemAutoIncrementEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemBotAttributeAggregateConfigurationEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemBotServiceHookEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationAdapterEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationDataPipelineEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationDataPipelineTriggerEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationDeployableEntityEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationEdgeAdapterEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationEdgePipelineEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationMeshAdapterEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationMeshPipelineEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationPipelineEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemCommunicationPoolEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemConfigurationEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemEntityEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemNotificationNotificationMessageEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemNotificationNotificationTemplateEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemQueryEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemTenantEventsArgsDto = {
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};

/** Information about pagination in a connection. */
export type PageInfoDto = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PointDto = {
  __typename?: 'Point';
  coordinates?: Maybe<PositionDto>;
};

export type PointInputDto = {
  coordinates: PositionInputDto;
};

export type PositionDto = {
  __typename?: 'Position';
  altitude?: Maybe<Scalars['Float']['output']>;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type PositionInputDto = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

/** Input field for associations */
export type RtAssociationInputDto = {
  /** Type of modification. */
  modOption?: InputMaybe<AssociationModOptionsDto>;
  /** Runtime ID of the target entity */
  target: RtEntityIdDto;
};

/** A runtime entity type of Octo */
export type RtEntityDto = {
  __typename?: 'RtEntity';
  attributes?: Maybe<RtEntityAttributeDtoConnectionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId?: Maybe<Scalars['OctoObjectId']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** A runtime entity type of Octo */
export type RtEntityAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Attribute of a runtime entity */
export type RtEntityAttributeDto = {
  __typename?: 'RtEntityAttribute';
  /** Attribute name within the entity. */
  attributeName?: Maybe<Scalars['String']['output']>;
  /** Value of a scalar attribute. */
  value?: Maybe<Scalars['SimpleScalarType']['output']>;
};

/** A connection from an object to a list of objects of type `RtEntityAttributeDto`. */
export type RtEntityAttributeDtoConnectionDto = {
  __typename?: 'RtEntityAttributeDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<RtEntityAttributeDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<RtEntityAttributeDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `RtEntityAttributeDto`. */
export type RtEntityAttributeDtoEdgeDto = {
  __typename?: 'RtEntityAttributeDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<RtEntityAttributeDto>;
};

/** A connection from an object to a list of objects of type `RtEntityGenericDto`. */
export type RtEntityGenericDtoConnectionDto = {
  __typename?: 'RtEntityGenericDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<RtEntityGenericDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<RtEntityDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `RtEntityGenericDto`. */
export type RtEntityGenericDtoEdgeDto = {
  __typename?: 'RtEntityGenericDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<RtEntityDto>;
};

/** Id information consists of CkTypeId and RtId */
export type RtEntityIdDto = {
  /** Construction kit type id of the object. */
  ckTypeId: Scalars['CkTypeId']['input'];
  /** Unique id of the object. */
  rtId: Scalars['OctoObjectId']['input'];
};

export type RtGeospatialValueDtoTypeDto = {
  __typename?: 'RtGeospatialValueDtoType';
  distance?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<PointDto>;
};

export type RuntimeDto = {
  __typename?: 'Runtime';
  /** Mutation for entities of type 'BasicAsset'. */
  basicAssets?: Maybe<BasicAssetMutationsDto>;
  /** Mutation for entities of type 'BasicEquipmentGroup'. */
  basicEquipmentGroups?: Maybe<BasicEquipmentGroupMutationsDto>;
  /** Mutation for entities of type 'BasicEquipmentModel'. */
  basicEquipmentModels?: Maybe<BasicEquipmentModelMutationsDto>;
  /** Mutation for entities of type 'FireGuardiansRestaurant'. */
  fireGuardiansRestaurants?: Maybe<FireGuardiansRestaurantMutationsDto>;
  /** Mutation for entities of type 'IndustryBasicAlarm'. */
  industryBasicAlarms?: Maybe<IndustryBasicAlarmMutationsDto>;
  /** Mutation for entities of type 'IndustryBasicEvent'. */
  industryBasicEvents?: Maybe<IndustryBasicEventMutationsDto>;
  /** Mutation for entities of type 'IndustryBasicMachine'. */
  industryBasicMachines?: Maybe<IndustryBasicMachineMutationsDto>;
  /** Mutation for entities of type 'IndustryEnergyBattery'. */
  industryEnergyBatterys?: Maybe<IndustryEnergyBatteryMutationsDto>;
  /** Mutation for entities of type 'IndustryEnergyEnergyMeter'. */
  industryEnergyEnergyMeters?: Maybe<IndustryEnergyEnergyMeterMutationsDto>;
  /** Mutation for entities of type 'IndustryEnergyInverter'. */
  industryEnergyInverters?: Maybe<IndustryEnergyInverterMutationsDto>;
  /** Mutation for entities of type 'IndustryEnergyPhotovoltaicModule'. */
  industryEnergyPhotovoltaicModules?: Maybe<IndustryEnergyPhotovoltaicModuleMutationsDto>;
  /** Mutation for entities of type 'IndustryEnergyPhotovoltaicString'. */
  industryEnergyPhotovoltaicStrings?: Maybe<IndustryEnergyPhotovoltaicStringMutationsDto>;
  /** Mutation for entities of type 'IndustryEnergyPhotovoltaic'. */
  industryEnergyPhotovoltaics?: Maybe<IndustryEnergyPhotovoltaicMutationsDto>;
  /** Mutation for entities of type 'IndustryFluidHeatMeter'. */
  industryFluidHeatMeters?: Maybe<IndustryFluidHeatMeterMutationsDto>;
  /** Mutation for entities of type 'IndustryFluidWaterMeter'. */
  industryFluidWaterMeters?: Maybe<IndustryFluidWaterMeterMutationsDto>;
  /** Mutation for entities of type 'SystemAutoIncrement'. */
  systemAutoIncrements?: Maybe<SystemAutoIncrementMutationsDto>;
  /** Mutation for entities of type 'SystemBotAttributeAggregateConfiguration'. */
  systemBotAttributeAggregateConfigurations?: Maybe<SystemBotAttributeAggregateConfigurationMutationsDto>;
  /** Mutation for entities of type 'SystemBotServiceHook'. */
  systemBotServiceHooks?: Maybe<SystemBotServiceHookMutationsDto>;
  /** Mutation for entities of type 'SystemCommunicationDataPipelineTrigger'. */
  systemCommunicationDataPipelineTriggers?: Maybe<SystemCommunicationDataPipelineTriggerMutationsDto>;
  /** Mutation for entities of type 'SystemCommunicationDataPipeline'. */
  systemCommunicationDataPipelines?: Maybe<SystemCommunicationDataPipelineMutationsDto>;
  /** Mutation for entities of type 'SystemCommunicationEdgeAdapter'. */
  systemCommunicationEdgeAdapters?: Maybe<SystemCommunicationEdgeAdapterMutationsDto>;
  /** Mutation for entities of type 'SystemCommunicationEdgePipeline'. */
  systemCommunicationEdgePipelines?: Maybe<SystemCommunicationEdgePipelineMutationsDto>;
  /** Mutation for entities of type 'SystemCommunicationMeshAdapter'. */
  systemCommunicationMeshAdapters?: Maybe<SystemCommunicationMeshAdapterMutationsDto>;
  /** Mutation for entities of type 'SystemCommunicationMeshPipeline'. */
  systemCommunicationMeshPipelines?: Maybe<SystemCommunicationMeshPipelineMutationsDto>;
  /** Mutation for entities of type 'SystemCommunicationPool'. */
  systemCommunicationPools?: Maybe<SystemCommunicationPoolMutationsDto>;
  /** Mutation for entities of type 'SystemConfiguration'. */
  systemConfigurations?: Maybe<SystemConfigurationMutationsDto>;
  /** Mutation for entities of type 'SystemNotificationNotificationMessage'. */
  systemNotificationNotificationMessages?: Maybe<SystemNotificationNotificationMessageMutationsDto>;
  /** Mutation for entities of type 'SystemNotificationNotificationTemplate'. */
  systemNotificationNotificationTemplates?: Maybe<SystemNotificationNotificationTemplateMutationsDto>;
  /** Mutation for entities of type 'SystemQuery'. */
  systemQuerys?: Maybe<SystemQueryMutationsDto>;
  /** Mutation for entities of type 'SystemTenant'. */
  systemTenants?: Maybe<SystemTenantMutationsDto>;
};

export type RuntimeModelQueryDto = {
  __typename?: 'RuntimeModelQuery';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicEquipment?: Maybe<BasicEquipmentConnectionDto>;
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  basicEquipmentModel?: Maybe<BasicEquipmentModelConnectionDto>;
  basicNamedEntity?: Maybe<BasicNamedEntityConnectionDto>;
  fireGuardiansRestaurant?: Maybe<FireGuardiansRestaurantConnectionDto>;
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
  industryBasicMachine?: Maybe<IndustryBasicMachineConnectionDto>;
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyEnergyMeter?: Maybe<IndustryEnergyEnergyMeterConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaic?: Maybe<IndustryEnergyPhotovoltaicConnectionDto>;
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
  industryFluidHeatMeter?: Maybe<IndustryFluidHeatMeterConnectionDto>;
  industryFluidWaterMeter?: Maybe<IndustryFluidWaterMeterConnectionDto>;
  runtimeEntities?: Maybe<RtEntityGenericDtoConnectionDto>;
  systemAutoIncrement?: Maybe<SystemAutoIncrementConnectionDto>;
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
  systemBotServiceHook?: Maybe<SystemBotServiceHookConnectionDto>;
  systemCommunicationAdapter?: Maybe<SystemCommunicationAdapterConnectionDto>;
  systemCommunicationDataPipeline?: Maybe<SystemCommunicationDataPipelineConnectionDto>;
  systemCommunicationDataPipelineTrigger?: Maybe<SystemCommunicationDataPipelineTriggerConnectionDto>;
  systemCommunicationDeployableEntity?: Maybe<SystemCommunicationDeployableEntityConnectionDto>;
  systemCommunicationEdgeAdapter?: Maybe<SystemCommunicationEdgeAdapterConnectionDto>;
  systemCommunicationEdgePipeline?: Maybe<SystemCommunicationEdgePipelineConnectionDto>;
  systemCommunicationMeshAdapter?: Maybe<SystemCommunicationMeshAdapterConnectionDto>;
  systemCommunicationMeshPipeline?: Maybe<SystemCommunicationMeshPipelineConnectionDto>;
  systemCommunicationPipeline?: Maybe<SystemCommunicationPipelineConnectionDto>;
  systemCommunicationPool?: Maybe<SystemCommunicationPoolConnectionDto>;
  systemConfiguration?: Maybe<SystemConfigurationConnectionDto>;
  systemEntity?: Maybe<SystemEntityConnectionDto>;
  systemNotificationNotificationMessage?: Maybe<SystemNotificationNotificationMessageConnectionDto>;
  systemNotificationNotificationTemplate?: Maybe<SystemNotificationNotificationTemplateConnectionDto>;
  systemQuery?: Maybe<SystemQueryConnectionDto>;
  systemTenant?: Maybe<SystemTenantConnectionDto>;
};


export type RuntimeModelQueryBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryBasicEquipmentArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryBasicEquipmentModelArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryBasicNamedEntityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryFireGuardiansRestaurantArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryBasicMachineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryEnergyPhotovoltaicArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryFluidHeatMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryIndustryFluidWaterMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQueryRuntimeEntitiesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemAutoIncrementArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemBotServiceHookArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationDataPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationDataPipelineTriggerArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationDeployableEntityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationEdgeAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationEdgePipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationMeshAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationMeshPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemCommunicationPoolArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemEntityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemNotificationNotificationMessageArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemNotificationNotificationTemplateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemQueryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type RuntimeModelQuerySystemTenantArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geoNearFilter?: InputMaybe<NearGeospatialFilterDto>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type SearchFilterDto = {
  attributeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  searchTerm: Scalars['String']['input'];
  type?: InputMaybe<SearchFilterTypesDto>;
};

/** The type of search that is used (a text based search using text analysis (high performance, scoring, maybe more false positives) or filtering of attributes (lower performance, more exact results) */
export enum SearchFilterTypesDto {
  AttributeFilterDto = 'ATTRIBUTE_FILTER',
  TextSearchDto = 'TEXT_SEARCH'
}

export type SortDto = {
  attributeName: Scalars['String']['input'];
  sortOrder?: InputMaybe<SortOrdersDto>;
};

/** Defines the sort order */
export enum SortOrderDto {
  AscendingDto = 'ASCENDING',
  DescendingDto = 'DESCENDING'
}

/** Defines the sort order */
export enum SortOrdersDto {
  AscendingDto = 'ASCENDING',
  DefaultDto = 'DEFAULT',
  DescendingDto = 'DESCENDING'
}

/** Runtime entities of construction kit type 'System/AutoIncrement' */
export type SystemAutoIncrementDto = {
  __typename?: 'SystemAutoIncrement';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemAutoIncrement_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  currentValue?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['Int']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
};

/** A connection to `SystemAutoIncrement`. */
export type SystemAutoIncrementConnectionDto = {
  __typename?: 'SystemAutoIncrementConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemAutoIncrementEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemAutoIncrementDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemAutoIncrement`. */
export type SystemAutoIncrementEdgeDto = {
  __typename?: 'SystemAutoIncrementEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemAutoIncrementDto>;
};

export type SystemAutoIncrementInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  currentValue?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemAutoIncrementInputUpdateDto = {
  /** Item to update */
  item: SystemAutoIncrementInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAutoIncrementMutationsDto = {
  __typename?: 'SystemAutoIncrementMutations';
  /** Creates new entities of type 'SystemAutoIncrement'. */
  create?: Maybe<Array<Maybe<SystemAutoIncrementDto>>>;
  /** Deletes an entity of type 'SystemAutoIncrement'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemAutoIncrement'. */
  update?: Maybe<Array<Maybe<SystemAutoIncrementDto>>>;
};


export type SystemAutoIncrementMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemAutoIncrementInputDto>>;
};


export type SystemAutoIncrementMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemAutoIncrementMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemAutoIncrementInputUpdateDto>>;
};

export type SystemAutoIncrementUpdateDto = {
  __typename?: 'SystemAutoIncrementUpdate';
  /** The corresponding item */
  item?: Maybe<SystemAutoIncrementDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemAutoIncrementUpdateMessageDto = {
  __typename?: 'SystemAutoIncrementUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemAutoIncrementUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemAutoIncrement */
export type SystemAutoIncrement_ConfiguredByUnionDto = {
  __typename?: 'SystemAutoIncrement_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemAutoIncrement */
export type SystemAutoIncrement_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Bot/AttributeAggregateConfiguration' */
export type SystemBotAttributeAggregateConfigurationDto = {
  __typename?: 'SystemBotAttributeAggregateConfiguration';
  autoCompleteFilter?: Maybe<Scalars['String']['output']>;
  autoCompleteLimit?: Maybe<Scalars['Int']['output']>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemBotAttributeAggregateConfiguration_ConfiguredByUnionDto>;
  configures?: Maybe<SystemBotAttributeAggregateConfiguration_ConfiguresUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  isAutoCompleteEnabled?: Maybe<Scalars['Boolean']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemBotAttributeAggregateConfiguration`. */
export type SystemBotAttributeAggregateConfigurationConnectionDto = {
  __typename?: 'SystemBotAttributeAggregateConfigurationConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemBotAttributeAggregateConfigurationEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemBotAttributeAggregateConfigurationDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemBotAttributeAggregateConfiguration`. */
export type SystemBotAttributeAggregateConfigurationEdgeDto = {
  __typename?: 'SystemBotAttributeAggregateConfigurationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemBotAttributeAggregateConfigurationDto>;
};

export type SystemBotAttributeAggregateConfigurationInputDto = {
  autoCompleteFilter?: InputMaybe<Scalars['String']['input']>;
  autoCompleteLimit?: InputMaybe<Scalars['Int']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configures?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  isAutoCompleteEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemBotAttributeAggregateConfigurationInputUpdateDto = {
  /** Item to update */
  item: SystemBotAttributeAggregateConfigurationInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemBotAttributeAggregateConfigurationMutationsDto = {
  __typename?: 'SystemBotAttributeAggregateConfigurationMutations';
  /** Creates new entities of type 'SystemBotAttributeAggregateConfiguration'. */
  create?: Maybe<Array<Maybe<SystemBotAttributeAggregateConfigurationDto>>>;
  /** Deletes an entity of type 'SystemBotAttributeAggregateConfiguration'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemBotAttributeAggregateConfiguration'. */
  update?: Maybe<Array<Maybe<SystemBotAttributeAggregateConfigurationDto>>>;
};


export type SystemBotAttributeAggregateConfigurationMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemBotAttributeAggregateConfigurationInputDto>>;
};


export type SystemBotAttributeAggregateConfigurationMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemBotAttributeAggregateConfigurationMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemBotAttributeAggregateConfigurationInputUpdateDto>>;
};

export type SystemBotAttributeAggregateConfigurationUpdateDto = {
  __typename?: 'SystemBotAttributeAggregateConfigurationUpdate';
  /** The corresponding item */
  item?: Maybe<SystemBotAttributeAggregateConfigurationDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemBotAttributeAggregateConfigurationUpdateMessageDto = {
  __typename?: 'SystemBotAttributeAggregateConfigurationUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemBotAttributeAggregateConfigurationUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguredByUnionDto = {
  __typename?: 'SystemBotAttributeAggregateConfiguration_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionDto = {
  __typename?: 'SystemBotAttributeAggregateConfiguration_ConfiguresUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicEquipment?: Maybe<BasicEquipmentConnectionDto>;
  basicEquipmentGroup?: Maybe<BasicEquipmentGroupConnectionDto>;
  basicEquipmentModel?: Maybe<BasicEquipmentModelConnectionDto>;
  basicNamedEntity?: Maybe<BasicNamedEntityConnectionDto>;
  fireGuardiansRestaurant?: Maybe<FireGuardiansRestaurantConnectionDto>;
  industryBasicAlarm?: Maybe<IndustryBasicAlarmConnectionDto>;
  industryBasicEvent?: Maybe<IndustryBasicEventConnectionDto>;
  industryBasicMachine?: Maybe<IndustryBasicMachineConnectionDto>;
  industryEnergyBattery?: Maybe<IndustryEnergyBatteryConnectionDto>;
  industryEnergyEnergyMeter?: Maybe<IndustryEnergyEnergyMeterConnectionDto>;
  industryEnergyInverter?: Maybe<IndustryEnergyInverterConnectionDto>;
  industryEnergyPhotovoltaic?: Maybe<IndustryEnergyPhotovoltaicConnectionDto>;
  industryEnergyPhotovoltaicModule?: Maybe<IndustryEnergyPhotovoltaicModuleConnectionDto>;
  industryEnergyPhotovoltaicString?: Maybe<IndustryEnergyPhotovoltaicStringConnectionDto>;
  industryFluidHeatMeter?: Maybe<IndustryFluidHeatMeterConnectionDto>;
  industryFluidWaterMeter?: Maybe<IndustryFluidWaterMeterConnectionDto>;
  systemAutoIncrement?: Maybe<SystemAutoIncrementConnectionDto>;
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
  systemBotServiceHook?: Maybe<SystemBotServiceHookConnectionDto>;
  systemCommunicationAdapter?: Maybe<SystemCommunicationAdapterConnectionDto>;
  systemCommunicationDataPipeline?: Maybe<SystemCommunicationDataPipelineConnectionDto>;
  systemCommunicationDataPipelineTrigger?: Maybe<SystemCommunicationDataPipelineTriggerConnectionDto>;
  systemCommunicationDeployableEntity?: Maybe<SystemCommunicationDeployableEntityConnectionDto>;
  systemCommunicationEdgeAdapter?: Maybe<SystemCommunicationEdgeAdapterConnectionDto>;
  systemCommunicationEdgePipeline?: Maybe<SystemCommunicationEdgePipelineConnectionDto>;
  systemCommunicationMeshAdapter?: Maybe<SystemCommunicationMeshAdapterConnectionDto>;
  systemCommunicationMeshPipeline?: Maybe<SystemCommunicationMeshPipelineConnectionDto>;
  systemCommunicationPipeline?: Maybe<SystemCommunicationPipelineConnectionDto>;
  systemCommunicationPool?: Maybe<SystemCommunicationPoolConnectionDto>;
  systemConfiguration?: Maybe<SystemConfigurationConnectionDto>;
  systemEntity?: Maybe<SystemEntityConnectionDto>;
  systemNotificationNotificationMessage?: Maybe<SystemNotificationNotificationMessageConnectionDto>;
  systemNotificationNotificationTemplate?: Maybe<SystemNotificationNotificationTemplateConnectionDto>;
  systemQuery?: Maybe<SystemQueryConnectionDto>;
  systemTenant?: Maybe<SystemTenantConnectionDto>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicEquipmentArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicEquipmentGroupArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicEquipmentModelArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicNamedEntityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionFireGuardiansRestaurantArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryBasicEventArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryBasicMachineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryEnergyPhotovoltaicArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryEnergyPhotovoltaicModuleArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryEnergyPhotovoltaicStringArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryFluidHeatMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionIndustryFluidWaterMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemAutoIncrementArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemBotServiceHookArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationDataPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationDataPipelineTriggerArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationDeployableEntityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationEdgeAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationEdgePipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationMeshAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationMeshPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemCommunicationPoolArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemEntityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemNotificationNotificationMessageArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemNotificationNotificationTemplateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemQueryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemTenantArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Bot/ServiceHook' */
export type SystemBotServiceHookDto = {
  __typename?: 'SystemBotServiceHook';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemBotServiceHook_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  fieldFilter?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  queryCkTypeId?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  serviceHookAction?: Maybe<Scalars['String']['output']>;
  serviceHookApiKey?: Maybe<Scalars['String']['output']>;
  serviceHookBaseUri?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemBotServiceHook`. */
export type SystemBotServiceHookConnectionDto = {
  __typename?: 'SystemBotServiceHookConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemBotServiceHookEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemBotServiceHookDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemBotServiceHook`. */
export type SystemBotServiceHookEdgeDto = {
  __typename?: 'SystemBotServiceHookEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemBotServiceHookDto>;
};

export type SystemBotServiceHookInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  fieldFilter?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  serviceHookAction?: InputMaybe<Scalars['String']['input']>;
  serviceHookApiKey?: InputMaybe<Scalars['String']['input']>;
  serviceHookBaseUri?: InputMaybe<Scalars['String']['input']>;
};

export type SystemBotServiceHookInputUpdateDto = {
  /** Item to update */
  item: SystemBotServiceHookInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemBotServiceHookMutationsDto = {
  __typename?: 'SystemBotServiceHookMutations';
  /** Creates new entities of type 'SystemBotServiceHook'. */
  create?: Maybe<Array<Maybe<SystemBotServiceHookDto>>>;
  /** Deletes an entity of type 'SystemBotServiceHook'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemBotServiceHook'. */
  update?: Maybe<Array<Maybe<SystemBotServiceHookDto>>>;
};


export type SystemBotServiceHookMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemBotServiceHookInputDto>>;
};


export type SystemBotServiceHookMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemBotServiceHookMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemBotServiceHookInputUpdateDto>>;
};

export type SystemBotServiceHookUpdateDto = {
  __typename?: 'SystemBotServiceHookUpdate';
  /** The corresponding item */
  item?: Maybe<SystemBotServiceHookDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemBotServiceHookUpdateMessageDto = {
  __typename?: 'SystemBotServiceHookUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemBotServiceHookUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemBotServiceHook */
export type SystemBotServiceHook_ConfiguredByUnionDto = {
  __typename?: 'SystemBotServiceHook_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemBotServiceHook */
export type SystemBotServiceHook_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Communication/Adapter' */
export type SystemCommunicationAdapterDto = {
  __typename?: 'SystemCommunicationAdapter';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  communicationState?: Maybe<SystemCommunicationCommunicationStateDto>;
  configuration?: Maybe<Scalars['String']['output']>;
  configurationState?: Maybe<SystemCommunicationConfigurationStateDto>;
  configuredBy?: Maybe<SystemCommunicationAdapter_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  executes?: Maybe<SystemCommunicationAdapter_ExecutesUnionDto>;
  imageName?: Maybe<Scalars['String']['output']>;
  imageVersion?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<SystemCommunicationAdapter_ParentUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationAdapter`. */
export type SystemCommunicationAdapterConnectionDto = {
  __typename?: 'SystemCommunicationAdapterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationAdapterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationAdapterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationAdapter`. */
export type SystemCommunicationAdapterEdgeDto = {
  __typename?: 'SystemCommunicationAdapterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationAdapterDto>;
};

export type SystemCommunicationAdapterUpdateDto = {
  __typename?: 'SystemCommunicationAdapterUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationAdapterDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationAdapterUpdateMessageDto = {
  __typename?: 'SystemCommunicationAdapterUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationAdapterUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationAdapter_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ExecutesUnionDto = {
  __typename?: 'SystemCommunicationAdapter_ExecutesUnion';
  systemCommunicationEdgePipeline?: Maybe<SystemCommunicationEdgePipelineConnectionDto>;
  systemCommunicationMeshPipeline?: Maybe<SystemCommunicationMeshPipelineConnectionDto>;
  systemCommunicationPipeline?: Maybe<SystemCommunicationPipelineConnectionDto>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ExecutesUnionSystemCommunicationEdgePipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ExecutesUnionSystemCommunicationMeshPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ExecutesUnionSystemCommunicationPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ParentUnionDto = {
  __typename?: 'SystemCommunicationAdapter_ParentUnion';
  systemCommunicationPool?: Maybe<SystemCommunicationPoolConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type SystemCommunicationAdapter */
export type SystemCommunicationAdapter_ParentUnionSystemCommunicationPoolArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit enum 'System.Communication/CommunicationState' */
export enum SystemCommunicationCommunicationStateDto {
  OfflineDto = 'OFFLINE',
  OnlineDto = 'ONLINE',
  UnregisteredDto = 'UNREGISTERED'
}

/** Runtime entities of construction kit enum 'System.Communication/ConfigurationState' */
export enum SystemCommunicationConfigurationStateDto {
  DisabledDto = 'DISABLED',
  EnabledDto = 'ENABLED'
}

/** Runtime entities of construction kit type 'System.Communication/DataPipeline' */
export type SystemCommunicationDataPipelineDto = {
  __typename?: 'SystemCommunicationDataPipeline';
  children?: Maybe<SystemCommunicationDataPipeline_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemCommunicationDataPipeline_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationDataPipeline`. */
export type SystemCommunicationDataPipelineConnectionDto = {
  __typename?: 'SystemCommunicationDataPipelineConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationDataPipelineEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationDataPipelineDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationDataPipeline`. */
export type SystemCommunicationDataPipelineEdgeDto = {
  __typename?: 'SystemCommunicationDataPipelineEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationDataPipelineDto>;
};

export type SystemCommunicationDataPipelineInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationDataPipelineInputUpdateDto = {
  /** Item to update */
  item: SystemCommunicationDataPipelineInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationDataPipelineMutationsDto = {
  __typename?: 'SystemCommunicationDataPipelineMutations';
  /** Creates new entities of type 'SystemCommunicationDataPipeline'. */
  create?: Maybe<Array<Maybe<SystemCommunicationDataPipelineDto>>>;
  /** Deletes an entity of type 'SystemCommunicationDataPipeline'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemCommunicationDataPipeline'. */
  update?: Maybe<Array<Maybe<SystemCommunicationDataPipelineDto>>>;
};


export type SystemCommunicationDataPipelineMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationDataPipelineInputDto>>;
};


export type SystemCommunicationDataPipelineMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemCommunicationDataPipelineMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationDataPipelineInputUpdateDto>>;
};

/** Runtime entities of construction kit type 'System.Communication/DataPipelineTrigger' */
export type SystemCommunicationDataPipelineTriggerDto = {
  __typename?: 'SystemCommunicationDataPipelineTrigger';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemCommunicationDataPipelineTrigger_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  cronExpression?: Maybe<Scalars['String']['output']>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  triggers?: Maybe<SystemCommunicationDataPipelineTrigger_TriggersUnionDto>;
};

/** A connection to `SystemCommunicationDataPipelineTrigger`. */
export type SystemCommunicationDataPipelineTriggerConnectionDto = {
  __typename?: 'SystemCommunicationDataPipelineTriggerConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationDataPipelineTriggerEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationDataPipelineTriggerDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationDataPipelineTrigger`. */
export type SystemCommunicationDataPipelineTriggerEdgeDto = {
  __typename?: 'SystemCommunicationDataPipelineTriggerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationDataPipelineTriggerDto>;
};

export type SystemCommunicationDataPipelineTriggerInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  cronExpression?: InputMaybe<Scalars['String']['input']>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentStateDto>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  triggers?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
};

export type SystemCommunicationDataPipelineTriggerInputUpdateDto = {
  /** Item to update */
  item: SystemCommunicationDataPipelineTriggerInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationDataPipelineTriggerMutationsDto = {
  __typename?: 'SystemCommunicationDataPipelineTriggerMutations';
  /** Creates new entities of type 'SystemCommunicationDataPipelineTrigger'. */
  create?: Maybe<Array<Maybe<SystemCommunicationDataPipelineTriggerDto>>>;
  /** Deletes an entity of type 'SystemCommunicationDataPipelineTrigger'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemCommunicationDataPipelineTrigger'. */
  update?: Maybe<Array<Maybe<SystemCommunicationDataPipelineTriggerDto>>>;
};


export type SystemCommunicationDataPipelineTriggerMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationDataPipelineTriggerInputDto>>;
};


export type SystemCommunicationDataPipelineTriggerMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemCommunicationDataPipelineTriggerMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationDataPipelineTriggerInputUpdateDto>>;
};

export type SystemCommunicationDataPipelineTriggerUpdateDto = {
  __typename?: 'SystemCommunicationDataPipelineTriggerUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationDataPipelineTriggerDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationDataPipelineTriggerUpdateMessageDto = {
  __typename?: 'SystemCommunicationDataPipelineTriggerUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationDataPipelineTriggerUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationDataPipelineTrigger */
export type SystemCommunicationDataPipelineTrigger_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationDataPipelineTrigger_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationDataPipelineTrigger */
export type SystemCommunicationDataPipelineTrigger_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Triggers (Inbound) of entity type SystemCommunicationDataPipelineTrigger */
export type SystemCommunicationDataPipelineTrigger_TriggersUnionDto = {
  __typename?: 'SystemCommunicationDataPipelineTrigger_TriggersUnion';
  systemCommunicationMeshPipeline?: Maybe<SystemCommunicationMeshPipelineConnectionDto>;
};


/** Association System.Communication/Triggers (Inbound) of entity type SystemCommunicationDataPipelineTrigger */
export type SystemCommunicationDataPipelineTrigger_TriggersUnionSystemCommunicationMeshPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type SystemCommunicationDataPipelineUpdateDto = {
  __typename?: 'SystemCommunicationDataPipelineUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationDataPipelineDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationDataPipelineUpdateMessageDto = {
  __typename?: 'SystemCommunicationDataPipelineUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationDataPipelineUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type SystemCommunicationDataPipeline */
export type SystemCommunicationDataPipeline_ChildrenUnionDto = {
  __typename?: 'SystemCommunicationDataPipeline_ChildrenUnion';
  systemCommunicationEdgePipeline?: Maybe<SystemCommunicationEdgePipelineConnectionDto>;
  systemCommunicationMeshPipeline?: Maybe<SystemCommunicationMeshPipelineConnectionDto>;
  systemCommunicationPipeline?: Maybe<SystemCommunicationPipelineConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type SystemCommunicationDataPipeline */
export type SystemCommunicationDataPipeline_ChildrenUnionSystemCommunicationEdgePipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type SystemCommunicationDataPipeline */
export type SystemCommunicationDataPipeline_ChildrenUnionSystemCommunicationMeshPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type SystemCommunicationDataPipeline */
export type SystemCommunicationDataPipeline_ChildrenUnionSystemCommunicationPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationDataPipeline */
export type SystemCommunicationDataPipeline_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationDataPipeline_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationDataPipeline */
export type SystemCommunicationDataPipeline_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Communication/DeployableEntity' */
export type SystemCommunicationDeployableEntityDto = {
  __typename?: 'SystemCommunicationDeployableEntity';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemCommunicationDeployableEntity_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationDeployableEntity`. */
export type SystemCommunicationDeployableEntityConnectionDto = {
  __typename?: 'SystemCommunicationDeployableEntityConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationDeployableEntityEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationDeployableEntityDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationDeployableEntity`. */
export type SystemCommunicationDeployableEntityEdgeDto = {
  __typename?: 'SystemCommunicationDeployableEntityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationDeployableEntityDto>;
};

export type SystemCommunicationDeployableEntityUpdateDto = {
  __typename?: 'SystemCommunicationDeployableEntityUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationDeployableEntityDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationDeployableEntityUpdateMessageDto = {
  __typename?: 'SystemCommunicationDeployableEntityUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationDeployableEntityUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationDeployableEntity */
export type SystemCommunicationDeployableEntity_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationDeployableEntity_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationDeployableEntity */
export type SystemCommunicationDeployableEntity_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit enum 'System.Communication/DeploymentState' */
export enum SystemCommunicationDeploymentStateDto {
  DeployedDto = 'DEPLOYED',
  ErrorDto = 'ERROR',
  PendingDto = 'PENDING',
  UnknownDto = 'UNKNOWN'
}

/** Runtime entities of construction kit type 'System.Communication/EdgeAdapter' */
export type SystemCommunicationEdgeAdapterDto = {
  __typename?: 'SystemCommunicationEdgeAdapter';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  communicationState?: Maybe<SystemCommunicationCommunicationStateDto>;
  configuration?: Maybe<Scalars['String']['output']>;
  configurationState?: Maybe<SystemCommunicationConfigurationStateDto>;
  configuredBy?: Maybe<SystemCommunicationEdgeAdapter_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  executes?: Maybe<SystemCommunicationEdgeAdapter_ExecutesUnionDto>;
  imageName?: Maybe<Scalars['String']['output']>;
  imageVersion?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<SystemCommunicationEdgeAdapter_ParentUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationEdgeAdapter`. */
export type SystemCommunicationEdgeAdapterConnectionDto = {
  __typename?: 'SystemCommunicationEdgeAdapterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationEdgeAdapterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationEdgeAdapterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationEdgeAdapter`. */
export type SystemCommunicationEdgeAdapterEdgeDto = {
  __typename?: 'SystemCommunicationEdgeAdapterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationEdgeAdapterDto>;
};

export type SystemCommunicationEdgeAdapterInputDto = {
  communicationState?: InputMaybe<SystemCommunicationCommunicationStateDto>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  configurationState?: InputMaybe<SystemCommunicationConfigurationStateDto>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentStateDto>;
  description?: InputMaybe<Scalars['String']['input']>;
  executes?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  imageName?: InputMaybe<Scalars['String']['input']>;
  imageVersion?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationEdgeAdapterInputUpdateDto = {
  /** Item to update */
  item: SystemCommunicationEdgeAdapterInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationEdgeAdapterMutationsDto = {
  __typename?: 'SystemCommunicationEdgeAdapterMutations';
  /** Creates new entities of type 'SystemCommunicationEdgeAdapter'. */
  create?: Maybe<Array<Maybe<SystemCommunicationEdgeAdapterDto>>>;
  /** Deletes an entity of type 'SystemCommunicationEdgeAdapter'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemCommunicationEdgeAdapter'. */
  update?: Maybe<Array<Maybe<SystemCommunicationEdgeAdapterDto>>>;
};


export type SystemCommunicationEdgeAdapterMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationEdgeAdapterInputDto>>;
};


export type SystemCommunicationEdgeAdapterMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemCommunicationEdgeAdapterMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationEdgeAdapterInputUpdateDto>>;
};

export type SystemCommunicationEdgeAdapterUpdateDto = {
  __typename?: 'SystemCommunicationEdgeAdapterUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationEdgeAdapterDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationEdgeAdapterUpdateMessageDto = {
  __typename?: 'SystemCommunicationEdgeAdapterUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationEdgeAdapterUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationEdgeAdapter_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ExecutesUnionDto = {
  __typename?: 'SystemCommunicationEdgeAdapter_ExecutesUnion';
  systemCommunicationEdgePipeline?: Maybe<SystemCommunicationEdgePipelineConnectionDto>;
  systemCommunicationMeshPipeline?: Maybe<SystemCommunicationMeshPipelineConnectionDto>;
  systemCommunicationPipeline?: Maybe<SystemCommunicationPipelineConnectionDto>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ExecutesUnionSystemCommunicationEdgePipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ExecutesUnionSystemCommunicationMeshPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ExecutesUnionSystemCommunicationPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ParentUnionDto = {
  __typename?: 'SystemCommunicationEdgeAdapter_ParentUnion';
  systemCommunicationPool?: Maybe<SystemCommunicationPoolConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type SystemCommunicationEdgeAdapter */
export type SystemCommunicationEdgeAdapter_ParentUnionSystemCommunicationPoolArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Communication/EdgePipeline' */
export type SystemCommunicationEdgePipelineDto = {
  __typename?: 'SystemCommunicationEdgePipeline';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemCommunicationEdgePipeline_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  executedBy?: Maybe<SystemCommunicationEdgePipeline_ExecutedByUnionDto>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<SystemCommunicationEdgePipeline_ParentUnionDto>;
  pipelineDefinition?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationEdgePipeline`. */
export type SystemCommunicationEdgePipelineConnectionDto = {
  __typename?: 'SystemCommunicationEdgePipelineConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationEdgePipelineEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationEdgePipelineDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationEdgePipeline`. */
export type SystemCommunicationEdgePipelineEdgeDto = {
  __typename?: 'SystemCommunicationEdgePipelineEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationEdgePipelineDto>;
};

export type SystemCommunicationEdgePipelineInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentStateDto>;
  description?: InputMaybe<Scalars['String']['input']>;
  executedBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  lastSeen?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  pipelineDefinition?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationEdgePipelineInputUpdateDto = {
  /** Item to update */
  item: SystemCommunicationEdgePipelineInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationEdgePipelineMutationsDto = {
  __typename?: 'SystemCommunicationEdgePipelineMutations';
  /** Creates new entities of type 'SystemCommunicationEdgePipeline'. */
  create?: Maybe<Array<Maybe<SystemCommunicationEdgePipelineDto>>>;
  /** Deletes an entity of type 'SystemCommunicationEdgePipeline'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemCommunicationEdgePipeline'. */
  update?: Maybe<Array<Maybe<SystemCommunicationEdgePipelineDto>>>;
};


export type SystemCommunicationEdgePipelineMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationEdgePipelineInputDto>>;
};


export type SystemCommunicationEdgePipelineMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemCommunicationEdgePipelineMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationEdgePipelineInputUpdateDto>>;
};

export type SystemCommunicationEdgePipelineUpdateDto = {
  __typename?: 'SystemCommunicationEdgePipelineUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationEdgePipelineDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationEdgePipelineUpdateMessageDto = {
  __typename?: 'SystemCommunicationEdgePipelineUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationEdgePipelineUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationEdgePipeline_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ExecutedByUnionDto = {
  __typename?: 'SystemCommunicationEdgePipeline_ExecutedByUnion';
  systemCommunicationAdapter?: Maybe<SystemCommunicationAdapterConnectionDto>;
  systemCommunicationEdgeAdapter?: Maybe<SystemCommunicationEdgeAdapterConnectionDto>;
  systemCommunicationMeshAdapter?: Maybe<SystemCommunicationMeshAdapterConnectionDto>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ExecutedByUnionSystemCommunicationAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ExecutedByUnionSystemCommunicationEdgeAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ExecutedByUnionSystemCommunicationMeshAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ParentUnionDto = {
  __typename?: 'SystemCommunicationEdgePipeline_ParentUnion';
  systemCommunicationDataPipeline?: Maybe<SystemCommunicationDataPipelineConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type SystemCommunicationEdgePipeline */
export type SystemCommunicationEdgePipeline_ParentUnionSystemCommunicationDataPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Communication/MeshAdapter' */
export type SystemCommunicationMeshAdapterDto = {
  __typename?: 'SystemCommunicationMeshAdapter';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  communicationState?: Maybe<SystemCommunicationCommunicationStateDto>;
  configuration?: Maybe<Scalars['String']['output']>;
  configurationState?: Maybe<SystemCommunicationConfigurationStateDto>;
  configuredBy?: Maybe<SystemCommunicationMeshAdapter_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  executes?: Maybe<SystemCommunicationMeshAdapter_ExecutesUnionDto>;
  imageName?: Maybe<Scalars['String']['output']>;
  imageVersion?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<SystemCommunicationMeshAdapter_ParentUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationMeshAdapter`. */
export type SystemCommunicationMeshAdapterConnectionDto = {
  __typename?: 'SystemCommunicationMeshAdapterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationMeshAdapterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationMeshAdapterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationMeshAdapter`. */
export type SystemCommunicationMeshAdapterEdgeDto = {
  __typename?: 'SystemCommunicationMeshAdapterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationMeshAdapterDto>;
};

export type SystemCommunicationMeshAdapterInputDto = {
  communicationState?: InputMaybe<SystemCommunicationCommunicationStateDto>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  configurationState?: InputMaybe<SystemCommunicationConfigurationStateDto>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentStateDto>;
  description?: InputMaybe<Scalars['String']['input']>;
  executes?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  imageName?: InputMaybe<Scalars['String']['input']>;
  imageVersion?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationMeshAdapterInputUpdateDto = {
  /** Item to update */
  item: SystemCommunicationMeshAdapterInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationMeshAdapterMutationsDto = {
  __typename?: 'SystemCommunicationMeshAdapterMutations';
  /** Creates new entities of type 'SystemCommunicationMeshAdapter'. */
  create?: Maybe<Array<Maybe<SystemCommunicationMeshAdapterDto>>>;
  /** Deletes an entity of type 'SystemCommunicationMeshAdapter'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemCommunicationMeshAdapter'. */
  update?: Maybe<Array<Maybe<SystemCommunicationMeshAdapterDto>>>;
};


export type SystemCommunicationMeshAdapterMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationMeshAdapterInputDto>>;
};


export type SystemCommunicationMeshAdapterMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemCommunicationMeshAdapterMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationMeshAdapterInputUpdateDto>>;
};

export type SystemCommunicationMeshAdapterUpdateDto = {
  __typename?: 'SystemCommunicationMeshAdapterUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationMeshAdapterDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationMeshAdapterUpdateMessageDto = {
  __typename?: 'SystemCommunicationMeshAdapterUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationMeshAdapterUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationMeshAdapter_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ExecutesUnionDto = {
  __typename?: 'SystemCommunicationMeshAdapter_ExecutesUnion';
  systemCommunicationEdgePipeline?: Maybe<SystemCommunicationEdgePipelineConnectionDto>;
  systemCommunicationMeshPipeline?: Maybe<SystemCommunicationMeshPipelineConnectionDto>;
  systemCommunicationPipeline?: Maybe<SystemCommunicationPipelineConnectionDto>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ExecutesUnionSystemCommunicationEdgePipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ExecutesUnionSystemCommunicationMeshPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Inbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ExecutesUnionSystemCommunicationPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ParentUnionDto = {
  __typename?: 'SystemCommunicationMeshAdapter_ParentUnion';
  systemCommunicationPool?: Maybe<SystemCommunicationPoolConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type SystemCommunicationMeshAdapter */
export type SystemCommunicationMeshAdapter_ParentUnionSystemCommunicationPoolArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Communication/MeshPipeline' */
export type SystemCommunicationMeshPipelineDto = {
  __typename?: 'SystemCommunicationMeshPipeline';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemCommunicationMeshPipeline_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  executedBy?: Maybe<SystemCommunicationMeshPipeline_ExecutedByUnionDto>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<SystemCommunicationMeshPipeline_ParentUnionDto>;
  pipelineDefinition?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  triggeredBy?: Maybe<SystemCommunicationMeshPipeline_TriggeredByUnionDto>;
};

/** A connection to `SystemCommunicationMeshPipeline`. */
export type SystemCommunicationMeshPipelineConnectionDto = {
  __typename?: 'SystemCommunicationMeshPipelineConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationMeshPipelineEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationMeshPipelineDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationMeshPipeline`. */
export type SystemCommunicationMeshPipelineEdgeDto = {
  __typename?: 'SystemCommunicationMeshPipelineEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationMeshPipelineDto>;
};

export type SystemCommunicationMeshPipelineInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentStateDto>;
  description?: InputMaybe<Scalars['String']['input']>;
  executedBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  lastSeen?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  pipelineDefinition?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  triggeredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
};

export type SystemCommunicationMeshPipelineInputUpdateDto = {
  /** Item to update */
  item: SystemCommunicationMeshPipelineInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationMeshPipelineMutationsDto = {
  __typename?: 'SystemCommunicationMeshPipelineMutations';
  /** Creates new entities of type 'SystemCommunicationMeshPipeline'. */
  create?: Maybe<Array<Maybe<SystemCommunicationMeshPipelineDto>>>;
  /** Deletes an entity of type 'SystemCommunicationMeshPipeline'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemCommunicationMeshPipeline'. */
  update?: Maybe<Array<Maybe<SystemCommunicationMeshPipelineDto>>>;
};


export type SystemCommunicationMeshPipelineMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationMeshPipelineInputDto>>;
};


export type SystemCommunicationMeshPipelineMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemCommunicationMeshPipelineMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationMeshPipelineInputUpdateDto>>;
};

export type SystemCommunicationMeshPipelineUpdateDto = {
  __typename?: 'SystemCommunicationMeshPipelineUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationMeshPipelineDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationMeshPipelineUpdateMessageDto = {
  __typename?: 'SystemCommunicationMeshPipelineUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationMeshPipelineUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationMeshPipeline_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ExecutedByUnionDto = {
  __typename?: 'SystemCommunicationMeshPipeline_ExecutedByUnion';
  systemCommunicationAdapter?: Maybe<SystemCommunicationAdapterConnectionDto>;
  systemCommunicationEdgeAdapter?: Maybe<SystemCommunicationEdgeAdapterConnectionDto>;
  systemCommunicationMeshAdapter?: Maybe<SystemCommunicationMeshAdapterConnectionDto>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ExecutedByUnionSystemCommunicationAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ExecutedByUnionSystemCommunicationEdgeAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ExecutedByUnionSystemCommunicationMeshAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ParentUnionDto = {
  __typename?: 'SystemCommunicationMeshPipeline_ParentUnion';
  systemCommunicationDataPipeline?: Maybe<SystemCommunicationDataPipelineConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_ParentUnionSystemCommunicationDataPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Triggers (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_TriggeredByUnionDto = {
  __typename?: 'SystemCommunicationMeshPipeline_TriggeredByUnion';
  systemCommunicationDataPipelineTrigger?: Maybe<SystemCommunicationDataPipelineTriggerConnectionDto>;
};


/** Association System.Communication/Triggers (Outbound) of entity type SystemCommunicationMeshPipeline */
export type SystemCommunicationMeshPipeline_TriggeredByUnionSystemCommunicationDataPipelineTriggerArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Communication/Pipeline' */
export type SystemCommunicationPipelineDto = {
  __typename?: 'SystemCommunicationPipeline';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemCommunicationPipeline_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  executedBy?: Maybe<SystemCommunicationPipeline_ExecutedByUnionDto>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<SystemCommunicationPipeline_ParentUnionDto>;
  pipelineDefinition?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationPipeline`. */
export type SystemCommunicationPipelineConnectionDto = {
  __typename?: 'SystemCommunicationPipelineConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationPipelineEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationPipelineDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationPipeline`. */
export type SystemCommunicationPipelineEdgeDto = {
  __typename?: 'SystemCommunicationPipelineEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationPipelineDto>;
};

export type SystemCommunicationPipelineUpdateDto = {
  __typename?: 'SystemCommunicationPipelineUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationPipelineDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationPipelineUpdateMessageDto = {
  __typename?: 'SystemCommunicationPipelineUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationPipelineUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationPipeline_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ExecutedByUnionDto = {
  __typename?: 'SystemCommunicationPipeline_ExecutedByUnion';
  systemCommunicationAdapter?: Maybe<SystemCommunicationAdapterConnectionDto>;
  systemCommunicationEdgeAdapter?: Maybe<SystemCommunicationEdgeAdapterConnectionDto>;
  systemCommunicationMeshAdapter?: Maybe<SystemCommunicationMeshAdapterConnectionDto>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ExecutedByUnionSystemCommunicationAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ExecutedByUnionSystemCommunicationEdgeAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System.Communication/Executes (Outbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ExecutedByUnionSystemCommunicationMeshAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ParentUnionDto = {
  __typename?: 'SystemCommunicationPipeline_ParentUnion';
  systemCommunicationDataPipeline?: Maybe<SystemCommunicationDataPipelineConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type SystemCommunicationPipeline */
export type SystemCommunicationPipeline_ParentUnionSystemCommunicationDataPipelineArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Communication/Pool' */
export type SystemCommunicationPoolDto = {
  __typename?: 'SystemCommunicationPool';
  children?: Maybe<SystemCommunicationPool_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  communicationState?: Maybe<SystemCommunicationCommunicationStateDto>;
  configurationState?: Maybe<SystemCommunicationConfigurationStateDto>;
  configuredBy?: Maybe<SystemCommunicationPool_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  deploymentState?: Maybe<SystemCommunicationDeploymentStateDto>;
  description?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemCommunicationPool`. */
export type SystemCommunicationPoolConnectionDto = {
  __typename?: 'SystemCommunicationPoolConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemCommunicationPoolEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemCommunicationPoolDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemCommunicationPool`. */
export type SystemCommunicationPoolEdgeDto = {
  __typename?: 'SystemCommunicationPoolEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemCommunicationPoolDto>;
};

export type SystemCommunicationPoolInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  communicationState?: InputMaybe<SystemCommunicationCommunicationStateDto>;
  configurationState?: InputMaybe<SystemCommunicationConfigurationStateDto>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentStateDto>;
  description?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationPoolInputUpdateDto = {
  /** Item to update */
  item: SystemCommunicationPoolInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationPoolMutationsDto = {
  __typename?: 'SystemCommunicationPoolMutations';
  /** Creates new entities of type 'SystemCommunicationPool'. */
  create?: Maybe<Array<Maybe<SystemCommunicationPoolDto>>>;
  /** Deletes an entity of type 'SystemCommunicationPool'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemCommunicationPool'. */
  update?: Maybe<Array<Maybe<SystemCommunicationPoolDto>>>;
};


export type SystemCommunicationPoolMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationPoolInputDto>>;
};


export type SystemCommunicationPoolMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemCommunicationPoolMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemCommunicationPoolInputUpdateDto>>;
};

export type SystemCommunicationPoolUpdateDto = {
  __typename?: 'SystemCommunicationPoolUpdate';
  /** The corresponding item */
  item?: Maybe<SystemCommunicationPoolDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemCommunicationPoolUpdateMessageDto = {
  __typename?: 'SystemCommunicationPoolUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemCommunicationPoolUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type SystemCommunicationPool */
export type SystemCommunicationPool_ChildrenUnionDto = {
  __typename?: 'SystemCommunicationPool_ChildrenUnion';
  systemCommunicationAdapter?: Maybe<SystemCommunicationAdapterConnectionDto>;
  systemCommunicationEdgeAdapter?: Maybe<SystemCommunicationEdgeAdapterConnectionDto>;
  systemCommunicationMeshAdapter?: Maybe<SystemCommunicationMeshAdapterConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type SystemCommunicationPool */
export type SystemCommunicationPool_ChildrenUnionSystemCommunicationAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type SystemCommunicationPool */
export type SystemCommunicationPool_ChildrenUnionSystemCommunicationEdgeAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type SystemCommunicationPool */
export type SystemCommunicationPool_ChildrenUnionSystemCommunicationMeshAdapterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationPool */
export type SystemCommunicationPool_ConfiguredByUnionDto = {
  __typename?: 'SystemCommunicationPool_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemCommunicationPool */
export type SystemCommunicationPool_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System/Configuration' */
export type SystemConfigurationDto = {
  __typename?: 'SystemConfiguration';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configurationValue?: Maybe<Scalars['String']['output']>;
  configuredBy?: Maybe<SystemConfiguration_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemConfiguration`. */
export type SystemConfigurationConnectionDto = {
  __typename?: 'SystemConfigurationConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemConfigurationEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemConfigurationDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemConfiguration`. */
export type SystemConfigurationEdgeDto = {
  __typename?: 'SystemConfigurationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemConfigurationDto>;
};

export type SystemConfigurationInputDto = {
  configurationValue?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemConfigurationInputUpdateDto = {
  /** Item to update */
  item: SystemConfigurationInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemConfigurationMutationsDto = {
  __typename?: 'SystemConfigurationMutations';
  /** Creates new entities of type 'SystemConfiguration'. */
  create?: Maybe<Array<Maybe<SystemConfigurationDto>>>;
  /** Deletes an entity of type 'SystemConfiguration'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemConfiguration'. */
  update?: Maybe<Array<Maybe<SystemConfigurationDto>>>;
};


export type SystemConfigurationMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemConfigurationInputDto>>;
};


export type SystemConfigurationMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemConfigurationMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemConfigurationInputUpdateDto>>;
};

export type SystemConfigurationUpdateDto = {
  __typename?: 'SystemConfigurationUpdate';
  /** The corresponding item */
  item?: Maybe<SystemConfigurationDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemConfigurationUpdateMessageDto = {
  __typename?: 'SystemConfigurationUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemConfigurationUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemConfiguration */
export type SystemConfiguration_ConfiguredByUnionDto = {
  __typename?: 'SystemConfiguration_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemConfiguration */
export type SystemConfiguration_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System/Entity' */
export type SystemEntityDto = {
  __typename?: 'SystemEntity';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemEntity_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemEntity`. */
export type SystemEntityConnectionDto = {
  __typename?: 'SystemEntityConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemEntityEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemEntityDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemEntity`. */
export type SystemEntityEdgeDto = {
  __typename?: 'SystemEntityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemEntityDto>;
};

export type SystemEntityUpdateDto = {
  __typename?: 'SystemEntityUpdate';
  /** The corresponding item */
  item?: Maybe<SystemEntityDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemEntityUpdateMessageDto = {
  __typename?: 'SystemEntityUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemEntityUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemEntity */
export type SystemEntity_ConfiguredByUnionDto = {
  __typename?: 'SystemEntity_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemEntity */
export type SystemEntity_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Notification/NotificationMessage' */
export type SystemNotificationNotificationMessageDto = {
  __typename?: 'SystemNotificationNotificationMessage';
  bodyText?: Maybe<Scalars['String']['output']>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemNotificationNotificationMessage_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  errorText?: Maybe<Scalars['String']['output']>;
  lastTryDateTime?: Maybe<Scalars['DateTime']['output']>;
  notificationType?: Maybe<SystemNotificationNotificationTypesDto>;
  recipientAddress?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  sendStatus?: Maybe<SystemNotificationNotificationStatesDto>;
  sentDateTime?: Maybe<Scalars['DateTime']['output']>;
  subjectText?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemNotificationNotificationMessage`. */
export type SystemNotificationNotificationMessageConnectionDto = {
  __typename?: 'SystemNotificationNotificationMessageConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemNotificationNotificationMessageEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemNotificationNotificationMessageDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemNotificationNotificationMessage`. */
export type SystemNotificationNotificationMessageEdgeDto = {
  __typename?: 'SystemNotificationNotificationMessageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemNotificationNotificationMessageDto>;
};

export type SystemNotificationNotificationMessageInputDto = {
  bodyText?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  errorText?: InputMaybe<Scalars['String']['input']>;
  lastTryDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  notificationType?: InputMaybe<SystemNotificationNotificationTypesDto>;
  recipientAddress?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sendStatus?: InputMaybe<SystemNotificationNotificationStatesDto>;
  sentDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  subjectText?: InputMaybe<Scalars['String']['input']>;
};

export type SystemNotificationNotificationMessageInputUpdateDto = {
  /** Item to update */
  item: SystemNotificationNotificationMessageInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationNotificationMessageMutationsDto = {
  __typename?: 'SystemNotificationNotificationMessageMutations';
  /** Creates new entities of type 'SystemNotificationNotificationMessage'. */
  create?: Maybe<Array<Maybe<SystemNotificationNotificationMessageDto>>>;
  /** Deletes an entity of type 'SystemNotificationNotificationMessage'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemNotificationNotificationMessage'. */
  update?: Maybe<Array<Maybe<SystemNotificationNotificationMessageDto>>>;
};


export type SystemNotificationNotificationMessageMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationNotificationMessageInputDto>>;
};


export type SystemNotificationNotificationMessageMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemNotificationNotificationMessageMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationNotificationMessageInputUpdateDto>>;
};

export type SystemNotificationNotificationMessageUpdateDto = {
  __typename?: 'SystemNotificationNotificationMessageUpdate';
  /** The corresponding item */
  item?: Maybe<SystemNotificationNotificationMessageDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemNotificationNotificationMessageUpdateMessageDto = {
  __typename?: 'SystemNotificationNotificationMessageUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemNotificationNotificationMessageUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationNotificationMessage */
export type SystemNotificationNotificationMessage_ConfiguredByUnionDto = {
  __typename?: 'SystemNotificationNotificationMessage_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationNotificationMessage */
export type SystemNotificationNotificationMessage_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit enum 'System.Notification/NotificationStates' */
export enum SystemNotificationNotificationStatesDto {
  ErrorDto = 'ERROR',
  PendingDto = 'PENDING',
  SentDto = 'SENT'
}

/** Runtime entities of construction kit type 'System.Notification/NotificationTemplate' */
export type SystemNotificationNotificationTemplateDto = {
  __typename?: 'SystemNotificationNotificationTemplate';
  bodyTemplate?: Maybe<Scalars['String']['output']>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemNotificationNotificationTemplate_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  subjectTemplate?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemNotificationNotificationTypesDto>;
};

/** A connection to `SystemNotificationNotificationTemplate`. */
export type SystemNotificationNotificationTemplateConnectionDto = {
  __typename?: 'SystemNotificationNotificationTemplateConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemNotificationNotificationTemplateEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemNotificationNotificationTemplateDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemNotificationNotificationTemplate`. */
export type SystemNotificationNotificationTemplateEdgeDto = {
  __typename?: 'SystemNotificationNotificationTemplateEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemNotificationNotificationTemplateDto>;
};

export type SystemNotificationNotificationTemplateInputDto = {
  bodyTemplate?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  subjectTemplate?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemNotificationNotificationTypesDto>;
};

export type SystemNotificationNotificationTemplateInputUpdateDto = {
  /** Item to update */
  item: SystemNotificationNotificationTemplateInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationNotificationTemplateMutationsDto = {
  __typename?: 'SystemNotificationNotificationTemplateMutations';
  /** Creates new entities of type 'SystemNotificationNotificationTemplate'. */
  create?: Maybe<Array<Maybe<SystemNotificationNotificationTemplateDto>>>;
  /** Deletes an entity of type 'SystemNotificationNotificationTemplate'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemNotificationNotificationTemplate'. */
  update?: Maybe<Array<Maybe<SystemNotificationNotificationTemplateDto>>>;
};


export type SystemNotificationNotificationTemplateMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationNotificationTemplateInputDto>>;
};


export type SystemNotificationNotificationTemplateMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemNotificationNotificationTemplateMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationNotificationTemplateInputUpdateDto>>;
};

export type SystemNotificationNotificationTemplateUpdateDto = {
  __typename?: 'SystemNotificationNotificationTemplateUpdate';
  /** The corresponding item */
  item?: Maybe<SystemNotificationNotificationTemplateDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemNotificationNotificationTemplateUpdateMessageDto = {
  __typename?: 'SystemNotificationNotificationTemplateUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemNotificationNotificationTemplateUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationNotificationTemplate */
export type SystemNotificationNotificationTemplate_ConfiguredByUnionDto = {
  __typename?: 'SystemNotificationNotificationTemplate_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationNotificationTemplate */
export type SystemNotificationNotificationTemplate_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit enum 'System.Notification/NotificationTypes' */
export enum SystemNotificationNotificationTypesDto {
  EMailDto = 'E_MAIL',
  SmsDto = 'SMS'
}

/** Runtime entities of construction kit type 'System/Query' */
export type SystemQueryDto = {
  __typename?: 'SystemQuery';
  attributeSearchFilter?: Maybe<Scalars['String']['output']>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  columns?: Maybe<Scalars['String']['output']>;
  configuredBy?: Maybe<SystemQuery_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  fieldFilter?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  queryCkTypeId?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  sorting?: Maybe<Scalars['String']['output']>;
  textSearchFilter?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemQuery`. */
export type SystemQueryConnectionDto = {
  __typename?: 'SystemQueryConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemQueryEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemQueryDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemQuery`. */
export type SystemQueryEdgeDto = {
  __typename?: 'SystemQueryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemQueryDto>;
};

export type SystemQueryInputDto = {
  attributeSearchFilter?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  fieldFilter?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sorting?: InputMaybe<Scalars['String']['input']>;
  textSearchFilter?: InputMaybe<Scalars['String']['input']>;
};

export type SystemQueryInputUpdateDto = {
  /** Item to update */
  item: SystemQueryInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemQueryMutationsDto = {
  __typename?: 'SystemQueryMutations';
  /** Creates new entities of type 'SystemQuery'. */
  create?: Maybe<Array<Maybe<SystemQueryDto>>>;
  /** Deletes an entity of type 'SystemQuery'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemQuery'. */
  update?: Maybe<Array<Maybe<SystemQueryDto>>>;
};


export type SystemQueryMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemQueryInputDto>>;
};


export type SystemQueryMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemQueryMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemQueryInputUpdateDto>>;
};

export type SystemQueryUpdateDto = {
  __typename?: 'SystemQueryUpdate';
  /** The corresponding item */
  item?: Maybe<SystemQueryDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemQueryUpdateMessageDto = {
  __typename?: 'SystemQueryUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemQueryUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemQuery */
export type SystemQuery_ConfiguredByUnionDto = {
  __typename?: 'SystemQuery_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemQuery */
export type SystemQuery_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System/Tenant' */
export type SystemTenantDto = {
  __typename?: 'SystemTenant';
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemTenant_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  databaseName?: Maybe<Scalars['String']['output']>;
  parentTenantId?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
};

/** A connection to `SystemTenant`. */
export type SystemTenantConnectionDto = {
  __typename?: 'SystemTenantConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemTenantEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemTenantDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemTenant`. */
export type SystemTenantEdgeDto = {
  __typename?: 'SystemTenantEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemTenantDto>;
};

export type SystemTenantInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  parentTenantId?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemTenantInputUpdateDto = {
  /** Item to update */
  item: SystemTenantInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemTenantMutationsDto = {
  __typename?: 'SystemTenantMutations';
  /** Creates new entities of type 'SystemTenant'. */
  create?: Maybe<Array<Maybe<SystemTenantDto>>>;
  /** Deletes an entity of type 'SystemTenant'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemTenant'. */
  update?: Maybe<Array<Maybe<SystemTenantDto>>>;
};


export type SystemTenantMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemTenantInputDto>>;
};


export type SystemTenantMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemTenantMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemTenantInputUpdateDto>>;
};

export type SystemTenantUpdateDto = {
  __typename?: 'SystemTenantUpdate';
  /** The corresponding item */
  item?: Maybe<SystemTenantDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemTenantUpdateMessageDto = {
  __typename?: 'SystemTenantUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemTenantUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemTenant */
export type SystemTenant_ConfiguredByUnionDto = {
  __typename?: 'SystemTenant_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemTenant */
export type SystemTenant_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type TimeFilterDto = {
  from: Scalars['DateTime']['input'];
  interval?: InputMaybe<Scalars['Seconds']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  to: Scalars['DateTime']['input'];
};

export type TimeseriesModelQueryDto = {
  __typename?: 'TimeseriesModelQuery';
  tsIndustryBasicAlarm?: Maybe<TsIndustryBasicAlarmConnectionDto>;
  tsIndustryEnergyBattery?: Maybe<TsIndustryEnergyBatteryConnectionDto>;
  tsIndustryEnergyEnergyMeter?: Maybe<TsIndustryEnergyEnergyMeterConnectionDto>;
  tsIndustryEnergyInverter?: Maybe<TsIndustryEnergyInverterConnectionDto>;
};


export type TimeseriesModelQueryTsIndustryBasicAlarmArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
  timeSeriesFilter?: InputMaybe<TimeFilterDto>;
};


export type TimeseriesModelQueryTsIndustryEnergyBatteryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
  timeSeriesFilter?: InputMaybe<TimeFilterDto>;
};


export type TimeseriesModelQueryTsIndustryEnergyEnergyMeterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
  timeSeriesFilter?: InputMaybe<TimeFilterDto>;
};


export type TimeseriesModelQueryTsIndustryEnergyInverterArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
  timeSeriesFilter?: InputMaybe<TimeFilterDto>;
};

/** Enum of valid update types */
export enum UpdateTypeDto {
  DeleteDto = 'DELETE',
  InsertDto = 'INSERT',
  ReplaceDto = 'REPLACE',
  UndefinedDto = 'UNDEFINED',
  UpdateDto = 'UPDATE'
}

/** Grouping of items result */
export type GroupingDto = {
  __typename?: 'grouping';
  /** The average value of the given attribute names. */
  avgStatistics?: Maybe<Array<Maybe<StatisticsDto>>>;
  /** The count of entities in the group. */
  count: Scalars['Int']['output'];
  /** The count of value of the given attribute names that are not null. */
  countStatistics?: Maybe<Array<Maybe<StatisticsDto>>>;
  /** A list of attributes the items are grouped by. */
  groupByAttributeNames: Array<Maybe<Scalars['String']['output']>>;
  /** The key value of the group. */
  keys: Array<Maybe<Scalars['SimpleScalarType']['output']>>;
  /** The maximum value of the given attribute names. */
  maxStatistics?: Maybe<Array<Maybe<StatisticsDto>>>;
  /** The minimum value of the given attribute names. */
  minStatistics?: Maybe<Array<Maybe<StatisticsDto>>>;
};

/** Statistics of items result */
export type StatisticsDto = {
  __typename?: 'statistics';
  /** Attribute name of the statistic */
  attributeName?: Maybe<Scalars['String']['output']>;
  /** Statistic value */
  value?: Maybe<Scalars['SimpleScalarType']['output']>;
};

/** Time series entities of construction kit type 'Industry.Basic/Alarm' */
export type TsIndustryBasicAlarmDto = {
  __typename?: 'tsIndustryBasicAlarm';
  cause?: Maybe<Scalars['String']['output']>;
  ckTypeId: Scalars['CkTypeId']['output'];
  constructionKitType?: Maybe<CkTypeDto>;
  rtId: Scalars['OctoObjectId']['output'];
  timeStamp?: Maybe<Scalars['DateTime']['output']>;
};


/** Time series entities of construction kit type 'Industry.Basic/Alarm' */
export type TsIndustryBasicAlarmCauseArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};

/** A connection to `tsIndustryBasicAlarm`. */
export type TsIndustryBasicAlarmConnectionDto = {
  __typename?: 'tsIndustryBasicAlarmConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<TsIndustryBasicAlarmEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<TsIndustryBasicAlarmDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `tsIndustryBasicAlarm`. */
export type TsIndustryBasicAlarmEdgeDto = {
  __typename?: 'tsIndustryBasicAlarmEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TsIndustryBasicAlarmDto>;
};

/** Time series entities of construction kit type 'Industry.Energy/Battery' */
export type TsIndustryEnergyBatteryDto = {
  __typename?: 'tsIndustryEnergyBattery';
  ampere?: Maybe<Scalars['Decimal']['output']>;
  ckTypeId: Scalars['CkTypeId']['output'];
  constructionKitType?: Maybe<CkTypeDto>;
  rtId: Scalars['OctoObjectId']['output'];
  timeStamp?: Maybe<Scalars['DateTime']['output']>;
  voltage?: Maybe<Scalars['Decimal']['output']>;
};


/** Time series entities of construction kit type 'Industry.Energy/Battery' */
export type TsIndustryEnergyBatteryAmpereArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};


/** Time series entities of construction kit type 'Industry.Energy/Battery' */
export type TsIndustryEnergyBatteryVoltageArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};

/** A connection to `tsIndustryEnergyBattery`. */
export type TsIndustryEnergyBatteryConnectionDto = {
  __typename?: 'tsIndustryEnergyBatteryConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<TsIndustryEnergyBatteryEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<TsIndustryEnergyBatteryDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `tsIndustryEnergyBattery`. */
export type TsIndustryEnergyBatteryEdgeDto = {
  __typename?: 'tsIndustryEnergyBatteryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TsIndustryEnergyBatteryDto>;
};

/** Time series entities of construction kit type 'Industry.Energy/EnergyMeter' */
export type TsIndustryEnergyEnergyMeterDto = {
  __typename?: 'tsIndustryEnergyEnergyMeter';
  ampere?: Maybe<Scalars['Decimal']['output']>;
  ckTypeId: Scalars['CkTypeId']['output'];
  constructionKitType?: Maybe<CkTypeDto>;
  rtId: Scalars['OctoObjectId']['output'];
  timeStamp?: Maybe<Scalars['DateTime']['output']>;
  voltage?: Maybe<Scalars['Decimal']['output']>;
};


/** Time series entities of construction kit type 'Industry.Energy/EnergyMeter' */
export type TsIndustryEnergyEnergyMeterAmpereArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};


/** Time series entities of construction kit type 'Industry.Energy/EnergyMeter' */
export type TsIndustryEnergyEnergyMeterVoltageArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};

/** A connection to `tsIndustryEnergyEnergyMeter`. */
export type TsIndustryEnergyEnergyMeterConnectionDto = {
  __typename?: 'tsIndustryEnergyEnergyMeterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<TsIndustryEnergyEnergyMeterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<TsIndustryEnergyEnergyMeterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `tsIndustryEnergyEnergyMeter`. */
export type TsIndustryEnergyEnergyMeterEdgeDto = {
  __typename?: 'tsIndustryEnergyEnergyMeterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TsIndustryEnergyEnergyMeterDto>;
};

/** Time series entities of construction kit type 'Industry.Energy/Inverter' */
export type TsIndustryEnergyInverterDto = {
  __typename?: 'tsIndustryEnergyInverter';
  ampere?: Maybe<Scalars['Decimal']['output']>;
  ckTypeId: Scalars['CkTypeId']['output'];
  constructionKitType?: Maybe<CkTypeDto>;
  dCAmpere?: Maybe<Scalars['Decimal']['output']>;
  dCVoltage?: Maybe<Scalars['Decimal']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  timeStamp?: Maybe<Scalars['DateTime']['output']>;
  voltage?: Maybe<Scalars['Decimal']['output']>;
};


/** Time series entities of construction kit type 'Industry.Energy/Inverter' */
export type TsIndustryEnergyInverterAmpereArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};


/** Time series entities of construction kit type 'Industry.Energy/Inverter' */
export type TsIndustryEnergyInverterDcAmpereArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};


/** Time series entities of construction kit type 'Industry.Energy/Inverter' */
export type TsIndustryEnergyInverterDcVoltageArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};


/** Time series entities of construction kit type 'Industry.Energy/Inverter' */
export type TsIndustryEnergyInverterVoltageArgsDto = {
  timeSeriesAttributeArguments?: InputMaybe<AttributeArgumentDto>;
};

/** A connection to `tsIndustryEnergyInverter`. */
export type TsIndustryEnergyInverterConnectionDto = {
  __typename?: 'tsIndustryEnergyInverterConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<TsIndustryEnergyInverterEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<TsIndustryEnergyInverterDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `tsIndustryEnergyInverter`. */
export type TsIndustryEnergyInverterEdgeDto = {
  __typename?: 'tsIndustryEnergyInverterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TsIndustryEnergyInverterDto>;
};
