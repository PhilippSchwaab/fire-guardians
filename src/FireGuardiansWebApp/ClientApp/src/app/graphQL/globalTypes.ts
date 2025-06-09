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
  /** A construction kit id of type CkAttributeId. */
  CkAttributeId: { input: string; output: string; }
  /** A construction kit id of type CkEnumId. */
  CkEnumId: { input: string; output: string; }
  /** Identifies a construction kit model. */
  CkModelId: { input: any; output: any; }
  /** A construction kit id of type CkRecordId. */
  CkRecordId: { input: string; output: string; }
  /** A construction kit id of type CkTypeId. */
  CkTypeId: { input: string; output: string; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: any; output: any; }
  LargeBinary: { input: any; output: any; }
  /** A unique identifier for an runtime object. */
  OctoObjectId: { input: string; output: string; }
  SimpleScalar: { input: any; output: any; }
  ULong: { input: any; output: any; }
  Uri: { input: any; output: any; }
};

/** Defines the type of modification during write operations */
export enum AssociationModOptionsDto {
  CreateDto = 'CREATE',
  DeleteDto = 'DELETE'
}

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
  IntegerDto = 'INTEGER',
  Integer_64Dto = 'INTEGER_64',
  IntegerArrayDto = 'INTEGER_ARRAY',
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
  addressRemarks?: Maybe<Array<Scalars['String']['output']>>;
  cityTown: Scalars['String']['output'];
  constructionKitType?: Maybe<CkTypeDto>;
  department?: Maybe<Scalars['String']['output']>;
  eMail?: Maybe<BasicEMailDto>;
  fax?: Maybe<BasicFaxNumberDto>;
  nationalCode: Scalars['String']['output'];
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<BasicPhoneNumberDto>;
  stateCounty?: Maybe<Scalars['String']['output']>;
  street: Scalars['String']['output'];
  vATnumber?: Maybe<Scalars['String']['output']>;
  zipOfPOBox?: Maybe<Scalars['String']['output']>;
  zipcode: Scalars['Int']['output'];
};

export type BasicAddressInputDto = {
  addressOfAdditionalLink?: InputMaybe<Scalars['String']['input']>;
  addressRemarks?: InputMaybe<Array<Scalars['String']['input']>>;
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
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<BasicAsset_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicAsset_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<BasicAsset_ParentUnionDto>;
  relatesFrom?: Maybe<BasicAsset_RelatesFromUnionDto>;
  relatesTo?: Maybe<BasicAsset_RelatesToUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/Asset' */
export type BasicAssetAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
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

/** Association System/ParentChild (Inbound) of entity type BasicAsset */
export type BasicAsset_ChildrenUnionDto = {
  __typename?: 'BasicAsset_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicAsset */
export type BasicAsset_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicAsset */
export type BasicAsset_ChildrenUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicAsset */
export type BasicAsset_ChildrenUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicAsset */
export type BasicAsset_ChildrenUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicAsset */
export type BasicAsset_ChildrenUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicAsset */
export type BasicAsset_ChildrenUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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

/** Association System/ParentChild (Outbound) of entity type BasicAsset */
export type BasicAsset_ParentUnionDto = {
  __typename?: 'BasicAsset_ParentUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicAsset */
export type BasicAsset_ParentUnionBasicAssetArgsDto = {
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
export type BasicAsset_ParentUnionBasicCityArgsDto = {
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
export type BasicAsset_ParentUnionBasicCountryArgsDto = {
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
export type BasicAsset_ParentUnionBasicDistrictArgsDto = {
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
export type BasicAsset_ParentUnionBasicStateArgsDto = {
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
export type BasicAsset_ParentUnionBasicTreeArgsDto = {
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
export type BasicAsset_ParentUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedClassification (Inbound) of entity type BasicAsset */
export type BasicAsset_RelatesFromUnionDto = {
  __typename?: 'BasicAsset_RelatesFromUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
};


/** Association Basic/RelatedClassification (Inbound) of entity type BasicAsset */
export type BasicAsset_RelatesFromUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedClassification (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionDto = {
  __typename?: 'BasicAsset_RelatesToUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association Basic/RelatedClassification (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedClassification (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedClassification (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedClassification (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedClassification (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association Basic/RelatedClassification (Outbound) of entity type BasicAsset */
export type BasicAsset_RelatesToUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit record 'Basic/BankAccount' */
export type BasicBankAccountDto = {
  __typename?: 'BasicBankAccount';
  accountHolder: Scalars['String']['output'];
  bankName?: Maybe<Scalars['String']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  iban: Scalars['String']['output'];
  swiftCode?: Maybe<Scalars['String']['output']>;
};

export type BasicBankAccountInputDto = {
  accountHolder?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  swiftCode?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit type 'Basic/City' */
export type BasicCityDto = {
  __typename?: 'BasicCity';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<BasicCity_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicCity_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<BasicCity_ParentUnionDto>;
  relatesFrom?: Maybe<BasicCity_RelatesFromUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  zipcode: Scalars['Int']['output'];
};


/** Runtime entities of construction kit type 'Basic/City' */
export type BasicCityAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `BasicCity`. */
export type BasicCityConnectionDto = {
  __typename?: 'BasicCityConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicCityEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicCityDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicCity`. */
export type BasicCityEdgeDto = {
  __typename?: 'BasicCityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicCityDto>;
};

export type BasicCityInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['Int']['input']>;
};

export type BasicCityInputUpdateDto = {
  /** Item to update */
  item: BasicCityInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicCityMutationsDto = {
  __typename?: 'BasicCityMutations';
  /** Creates new entities of type 'BasicCity'. */
  create?: Maybe<Array<Maybe<BasicCityDto>>>;
  /** Deletes an entity of type 'BasicCity'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicCity'. */
  update?: Maybe<Array<Maybe<BasicCityDto>>>;
};


export type BasicCityMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicCityInputDto>>;
};


export type BasicCityMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicCityMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicCityInputUpdateDto>>;
};

export type BasicCityUpdateDto = {
  __typename?: 'BasicCityUpdate';
  /** The corresponding item */
  item?: Maybe<BasicCityDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicCityUpdateMessageDto = {
  __typename?: 'BasicCityUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicCityUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicCity */
export type BasicCity_ChildrenUnionDto = {
  __typename?: 'BasicCity_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCity */
export type BasicCity_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCity */
export type BasicCity_ChildrenUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCity */
export type BasicCity_ChildrenUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCity */
export type BasicCity_ChildrenUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCity */
export type BasicCity_ChildrenUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCity */
export type BasicCity_ChildrenUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicCity */
export type BasicCity_ConfiguredByUnionDto = {
  __typename?: 'BasicCity_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicCity */
export type BasicCity_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionDto = {
  __typename?: 'BasicCity_ParentUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionBasicTreeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCity */
export type BasicCity_ParentUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedClassification (Inbound) of entity type BasicCity */
export type BasicCity_RelatesFromUnionDto = {
  __typename?: 'BasicCity_RelatesFromUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
};


/** Association Basic/RelatedClassification (Inbound) of entity type BasicCity */
export type BasicCity_RelatesFromUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit record 'Basic/Contact' */
export type BasicContactDto = {
  __typename?: 'BasicContact';
  address: BasicAddressDto;
  companyName?: Maybe<Scalars['String']['output']>;
  companyRegisterNumber?: Maybe<Scalars['String']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  legalEntityType: BasicLegalEntityTypeDto;
  salutation?: Maybe<BasicSalutationDto>;
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
  titlePrefix?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
};

export type BasicContactInputDto = {
  address?: InputMaybe<BasicAddressInputDto>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyRegisterNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  legalEntityType?: InputMaybe<BasicLegalEntityTypeDto>;
  salutation?: InputMaybe<BasicSalutationDto>;
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  titlePrefix?: InputMaybe<Scalars['String']['input']>;
  titleSuffix?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit type 'Basic/Country' */
export type BasicCountryDto = {
  __typename?: 'BasicCountry';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<BasicCountry_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicCountry_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<BasicCountry_ParentUnionDto>;
  relatesFrom?: Maybe<BasicCountry_RelatesFromUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/Country' */
export type BasicCountryAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `BasicCountry`. */
export type BasicCountryConnectionDto = {
  __typename?: 'BasicCountryConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicCountryEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicCountryDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicCountry`. */
export type BasicCountryEdgeDto = {
  __typename?: 'BasicCountryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicCountryDto>;
};

export type BasicCountryInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicCountryInputUpdateDto = {
  /** Item to update */
  item: BasicCountryInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicCountryMutationsDto = {
  __typename?: 'BasicCountryMutations';
  /** Creates new entities of type 'BasicCountry'. */
  create?: Maybe<Array<Maybe<BasicCountryDto>>>;
  /** Deletes an entity of type 'BasicCountry'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicCountry'. */
  update?: Maybe<Array<Maybe<BasicCountryDto>>>;
};


export type BasicCountryMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicCountryInputDto>>;
};


export type BasicCountryMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicCountryMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicCountryInputUpdateDto>>;
};

export type BasicCountryUpdateDto = {
  __typename?: 'BasicCountryUpdate';
  /** The corresponding item */
  item?: Maybe<BasicCountryDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicCountryUpdateMessageDto = {
  __typename?: 'BasicCountryUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicCountryUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicCountry */
export type BasicCountry_ChildrenUnionDto = {
  __typename?: 'BasicCountry_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCountry */
export type BasicCountry_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCountry */
export type BasicCountry_ChildrenUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCountry */
export type BasicCountry_ChildrenUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCountry */
export type BasicCountry_ChildrenUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCountry */
export type BasicCountry_ChildrenUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicCountry */
export type BasicCountry_ChildrenUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicCountry */
export type BasicCountry_ConfiguredByUnionDto = {
  __typename?: 'BasicCountry_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicCountry */
export type BasicCountry_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionDto = {
  __typename?: 'BasicCountry_ParentUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionBasicTreeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicCountry */
export type BasicCountry_ParentUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedClassification (Inbound) of entity type BasicCountry */
export type BasicCountry_RelatesFromUnionDto = {
  __typename?: 'BasicCountry_RelatesFromUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
};


/** Association Basic/RelatedClassification (Inbound) of entity type BasicCountry */
export type BasicCountry_RelatesFromUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Basic/District' */
export type BasicDistrictDto = {
  __typename?: 'BasicDistrict';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<BasicDistrict_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicDistrict_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<BasicDistrict_ParentUnionDto>;
  relatesFrom?: Maybe<BasicDistrict_RelatesFromUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/District' */
export type BasicDistrictAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `BasicDistrict`. */
export type BasicDistrictConnectionDto = {
  __typename?: 'BasicDistrictConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicDistrictEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicDistrictDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicDistrict`. */
export type BasicDistrictEdgeDto = {
  __typename?: 'BasicDistrictEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicDistrictDto>;
};

export type BasicDistrictInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicDistrictInputUpdateDto = {
  /** Item to update */
  item: BasicDistrictInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicDistrictMutationsDto = {
  __typename?: 'BasicDistrictMutations';
  /** Creates new entities of type 'BasicDistrict'. */
  create?: Maybe<Array<Maybe<BasicDistrictDto>>>;
  /** Deletes an entity of type 'BasicDistrict'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicDistrict'. */
  update?: Maybe<Array<Maybe<BasicDistrictDto>>>;
};


export type BasicDistrictMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicDistrictInputDto>>;
};


export type BasicDistrictMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicDistrictMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicDistrictInputUpdateDto>>;
};

export type BasicDistrictUpdateDto = {
  __typename?: 'BasicDistrictUpdate';
  /** The corresponding item */
  item?: Maybe<BasicDistrictDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicDistrictUpdateMessageDto = {
  __typename?: 'BasicDistrictUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicDistrictUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ChildrenUnionDto = {
  __typename?: 'BasicDistrict_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ChildrenUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ChildrenUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ChildrenUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ChildrenUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ChildrenUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ConfiguredByUnionDto = {
  __typename?: 'BasicDistrict_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicDistrict */
export type BasicDistrict_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionDto = {
  __typename?: 'BasicDistrict_ParentUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionBasicTreeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicDistrict */
export type BasicDistrict_ParentUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedClassification (Inbound) of entity type BasicDistrict */
export type BasicDistrict_RelatesFromUnionDto = {
  __typename?: 'BasicDistrict_RelatesFromUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
};


/** Association Basic/RelatedClassification (Inbound) of entity type BasicDistrict */
export type BasicDistrict_RelatesFromUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'Basic/Document' */
export type BasicDocumentDto = {
  __typename?: 'BasicDocument';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicDocument_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  documentDate: Scalars['DateTime']['output'];
  documentNumber: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/Document' */
export type BasicDocumentAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `BasicDocument`. */
export type BasicDocumentConnectionDto = {
  __typename?: 'BasicDocumentConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicDocumentEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicDocumentDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicDocument`. */
export type BasicDocumentEdgeDto = {
  __typename?: 'BasicDocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicDocumentDto>;
};

export type BasicDocumentUpdateDto = {
  __typename?: 'BasicDocumentUpdate';
  /** The corresponding item */
  item?: Maybe<BasicDocumentDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicDocumentUpdateMessageDto = {
  __typename?: 'BasicDocumentUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicDocumentUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicDocument */
export type BasicDocument_ConfiguredByUnionDto = {
  __typename?: 'BasicDocument_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicDocument */
export type BasicDocument_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
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
  eMail: Scalars['String']['output'];
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

/** Runtime entities of construction kit record 'Basic/FaxNumber' */
export type BasicFaxNumberDto = {
  __typename?: 'BasicFaxNumber';
  constructionKitType?: Maybe<CkTypeDto>;
  number: Scalars['String']['output'];
  type?: Maybe<BasicTypeOfTelephoneBasicDto>;
};

export type BasicFaxNumberInputDto = {
  number?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BasicTypeOfTelephoneBasicDto>;
};

/** Runtime entities of construction kit enum 'Basic/LegalEntityType' */
export enum BasicLegalEntityTypeDto {
  /** Actor in economic life, such as any natural or legal person with UGB relevance. */
  CompanyDto = 'COMPANY',
  /** Legal structure with the characteristics of a person */
  LegalPersonDto = 'LEGAL_PERSON',
  /** Administrative unit with sovereign power such as municipality, federal state, republic. */
  LocalAuthorityDto = 'LOCAL_AUTHORITY',
  /** A natural person is a human being with legal capacity, in contrast to a legal person (such as a company, organization, or government entity). */
  NaturalPersonDto = 'NATURAL_PERSON'
}

/** Runtime entities of construction kit record 'Basic/Marking' */
export type BasicMarkingDto = {
  __typename?: 'BasicMarking';
  additionalText?: Maybe<Scalars['String']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  file: LargeBinaryInfoDto;
  name: Scalars['String']['output'];
};

export type BasicMarkingInputDto = {
  additionalText?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['LargeBinary']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit record 'Basic/NamePlate' */
export type BasicNamePlateDto = {
  __typename?: 'BasicNamePlate';
  address?: Maybe<BasicAddressDto>;
  assetSpecificProperties?: Maybe<Array<BasicMarkingDto>>;
  constructionKitType?: Maybe<CkTypeDto>;
  manufacturerName: Scalars['String']['output'];
  manufacturerProductDesignation: Scalars['String']['output'];
  manufacturerProductFamily: Scalars['String']['output'];
  markings?: Maybe<Array<BasicMarkingDto>>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  yearOfConstruction: Scalars['String']['output'];
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
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicNamedEntity_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/NamedEntity' */
export type BasicNamedEntityAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  number: Scalars['String']['output'];
  type?: Maybe<BasicTypeOfTelephoneEnhancedDto>;
};

export type BasicPhoneNumberInputDto = {
  number?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BasicTypeOfTelephoneEnhancedDto>;
};

/** Runtime entities of construction kit enum 'Basic/Salutation' */
export enum BasicSalutationDto {
  /** The salutation is female */
  FemaleDto = 'FEMALE',
  /** The salutation is male */
  MaleDto = 'MALE',
  /** The salutation is non-binary */
  NonBinaryDto = 'NON_BINARY',
  /** The salutation is unknown or not defined */
  UnknownDto = 'UNKNOWN'
}

/** Runtime entities of construction kit type 'Basic/State' */
export type BasicStateDto = {
  __typename?: 'BasicState';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<BasicState_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicState_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<BasicState_ParentUnionDto>;
  relatesFrom?: Maybe<BasicState_RelatesFromUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/State' */
export type BasicStateAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `BasicState`. */
export type BasicStateConnectionDto = {
  __typename?: 'BasicStateConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicStateEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicStateDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicState`. */
export type BasicStateEdgeDto = {
  __typename?: 'BasicStateEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicStateDto>;
};

export type BasicStateInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicStateInputUpdateDto = {
  /** Item to update */
  item: BasicStateInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicStateMutationsDto = {
  __typename?: 'BasicStateMutations';
  /** Creates new entities of type 'BasicState'. */
  create?: Maybe<Array<Maybe<BasicStateDto>>>;
  /** Deletes an entity of type 'BasicState'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicState'. */
  update?: Maybe<Array<Maybe<BasicStateDto>>>;
};


export type BasicStateMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicStateInputDto>>;
};


export type BasicStateMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicStateMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicStateInputUpdateDto>>;
};

export type BasicStateUpdateDto = {
  __typename?: 'BasicStateUpdate';
  /** The corresponding item */
  item?: Maybe<BasicStateDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicStateUpdateMessageDto = {
  __typename?: 'BasicStateUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicStateUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicState */
export type BasicState_ChildrenUnionDto = {
  __typename?: 'BasicState_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicState */
export type BasicState_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicState */
export type BasicState_ChildrenUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicState */
export type BasicState_ChildrenUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicState */
export type BasicState_ChildrenUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicState */
export type BasicState_ChildrenUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicState */
export type BasicState_ChildrenUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicState */
export type BasicState_ConfiguredByUnionDto = {
  __typename?: 'BasicState_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicState */
export type BasicState_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionDto = {
  __typename?: 'BasicState_ParentUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionBasicTreeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicState */
export type BasicState_ParentUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedClassification (Inbound) of entity type BasicState */
export type BasicState_RelatesFromUnionDto = {
  __typename?: 'BasicState_RelatesFromUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
};


/** Association Basic/RelatedClassification (Inbound) of entity type BasicState */
export type BasicState_RelatesFromUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit record 'Basic/TimeRange' */
export type BasicTimeRangeDto = {
  __typename?: 'BasicTimeRange';
  constructionKitType?: Maybe<CkTypeDto>;
  from: Scalars['DateTime']['output'];
  to: Scalars['DateTime']['output'];
};

export type BasicTimeRangeInputDto = {
  from?: InputMaybe<Scalars['DateTime']['input']>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Runtime entities of construction kit type 'Basic/Tree' */
export type BasicTreeDto = {
  __typename?: 'BasicTree';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<BasicTree_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicTree_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/Tree' */
export type BasicTreeAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `BasicTree`. */
export type BasicTreeConnectionDto = {
  __typename?: 'BasicTreeConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicTreeEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicTreeDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicTree`. */
export type BasicTreeEdgeDto = {
  __typename?: 'BasicTreeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicTreeDto>;
};

export type BasicTreeInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicTreeInputUpdateDto = {
  /** Item to update */
  item: BasicTreeInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicTreeMutationsDto = {
  __typename?: 'BasicTreeMutations';
  /** Creates new entities of type 'BasicTree'. */
  create?: Maybe<Array<Maybe<BasicTreeDto>>>;
  /** Deletes an entity of type 'BasicTree'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicTree'. */
  update?: Maybe<Array<Maybe<BasicTreeDto>>>;
};


export type BasicTreeMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicTreeInputDto>>;
};


export type BasicTreeMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicTreeMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicTreeInputUpdateDto>>;
};

/** Runtime entities of construction kit type 'Basic/TreeNode' */
export type BasicTreeNodeDto = {
  __typename?: 'BasicTreeNode';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<BasicTreeNode_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<BasicTreeNode_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<BasicTreeNode_ParentUnionDto>;
  relatesFrom?: Maybe<BasicTreeNode_RelatesFromUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'Basic/TreeNode' */
export type BasicTreeNodeAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `BasicTreeNode`. */
export type BasicTreeNodeConnectionDto = {
  __typename?: 'BasicTreeNodeConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<BasicTreeNodeEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BasicTreeNodeDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `BasicTreeNode`. */
export type BasicTreeNodeEdgeDto = {
  __typename?: 'BasicTreeNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BasicTreeNodeDto>;
};

export type BasicTreeNodeInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type BasicTreeNodeInputUpdateDto = {
  /** Item to update */
  item: BasicTreeNodeInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicTreeNodeMutationsDto = {
  __typename?: 'BasicTreeNodeMutations';
  /** Creates new entities of type 'BasicTreeNode'. */
  create?: Maybe<Array<Maybe<BasicTreeNodeDto>>>;
  /** Deletes an entity of type 'BasicTreeNode'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'BasicTreeNode'. */
  update?: Maybe<Array<Maybe<BasicTreeNodeDto>>>;
};


export type BasicTreeNodeMutationsCreateArgsDto = {
  entities: Array<InputMaybe<BasicTreeNodeInputDto>>;
};


export type BasicTreeNodeMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type BasicTreeNodeMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<BasicTreeNodeInputUpdateDto>>;
};

export type BasicTreeNodeUpdateDto = {
  __typename?: 'BasicTreeNodeUpdate';
  /** The corresponding item */
  item?: Maybe<BasicTreeNodeDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicTreeNodeUpdateMessageDto = {
  __typename?: 'BasicTreeNodeUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicTreeNodeUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ChildrenUnionDto = {
  __typename?: 'BasicTreeNode_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ChildrenUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ChildrenUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ChildrenUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ChildrenUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ChildrenUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ConfiguredByUnionDto = {
  __typename?: 'BasicTreeNode_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionDto = {
  __typename?: 'BasicTreeNode_ParentUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionBasicTreeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type BasicTreeNode */
export type BasicTreeNode_ParentUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association Basic/RelatedClassification (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_RelatesFromUnionDto = {
  __typename?: 'BasicTreeNode_RelatesFromUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
};


/** Association Basic/RelatedClassification (Inbound) of entity type BasicTreeNode */
export type BasicTreeNode_RelatesFromUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type BasicTreeUpdateDto = {
  __typename?: 'BasicTreeUpdate';
  /** The corresponding item */
  item?: Maybe<BasicTreeDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type BasicTreeUpdateMessageDto = {
  __typename?: 'BasicTreeUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<BasicTreeUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type BasicTree */
export type BasicTree_ChildrenUnionDto = {
  __typename?: 'BasicTree_ChildrenUnion';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTree */
export type BasicTree_ChildrenUnionBasicAssetArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTree */
export type BasicTree_ChildrenUnionBasicCityArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTree */
export type BasicTree_ChildrenUnionBasicCountryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTree */
export type BasicTree_ChildrenUnionBasicDistrictArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTree */
export type BasicTree_ChildrenUnionBasicStateArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Inbound) of entity type BasicTree */
export type BasicTree_ChildrenUnionBasicTreeNodeArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type BasicTree */
export type BasicTree_ConfiguredByUnionDto = {
  __typename?: 'BasicTree_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type BasicTree */
export type BasicTree_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  defaultValues?: Maybe<Array<Maybe<Scalars['SimpleScalar']['output']>>>;
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

/** Definition of a construction kit record with name and attributes. */
export type CkEnumDto = {
  __typename?: 'CkEnum';
  /** Construction kit enum id, the unique identifier of the enum. */
  ckEnumId: Scalars['CkEnumId']['output'];
  /** Optional description of the record. */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether the enum is extensible for customization. */
  isExtensible: Scalars['Boolean']['output'];
  /** Whether the enum is a flags enum */
  useFlags: Scalars['Boolean']['output'];
  /** Values of the enum. */
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

export type CkEnumMutationsDto = {
  __typename?: 'CkEnumMutations';
  /** Updates customizations of enum extensions. */
  updateValueExtensions?: Maybe<Array<Maybe<CkEnumDto>>>;
};


export type CkEnumMutationsUpdateValueExtensionsArgsDto = {
  values: Array<InputMaybe<CkEnumUpdateDto>>;
};

export type CkEnumUpdateDto = {
  operation?: InputMaybe<CkExtensionUpdateOperationsDto>;
  value?: InputMaybe<CkEnumValueInputDto>;
};

/** A construction kit enum value */
export type CkEnumValueDto = {
  __typename?: 'CkEnumValue';
  /** Description of enum value */
  description?: Maybe<Scalars['String']['output']>;
  /** True, when the enum value is a custom extension, otherwise false */
  isExtension?: Maybe<Scalars['Boolean']['output']>;
  /** Unique key of enum value */
  key?: Maybe<Scalars['Int']['output']>;
  /** Name of enum value */
  name?: Maybe<Scalars['String']['output']>;
};

/** A construction kit enum value */
export type CkEnumValueInputDto = {
  /** Description of enum value */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique key of enum value */
  key?: InputMaybe<Scalars['Int']['input']>;
  /** Name of enum value */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the possible operation operations to extend construction elements. */
export enum CkExtensionUpdateOperationsDto {
  DeleteDto = 'DELETE',
  InsertDto = 'INSERT'
}

/** A construction kit model */
export type CkModelDto = {
  __typename?: 'CkModel';
  attributes?: Maybe<CkAttributeDtoConnectionDto>;
  dependencies?: Maybe<Array<Maybe<Scalars['CkModelId']['output']>>>;
  /** Optional description of the model. */
  description?: Maybe<Scalars['String']['output']>;
  enums?: Maybe<CkEnumDtoConnectionDto>;
  /** Construction kit model id, the unique identifier of the model. */
  id: Scalars['CkModelId']['output'];
  /** Availability of the model within the repository. */
  modelState?: Maybe<ModelStateDto>;
  records?: Maybe<CkRecordDtoConnectionDto>;
  types?: Maybe<CkTypeDtoConnectionDto>;
};


/** A construction kit model */
export type CkModelAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** A construction kit model */
export type CkModelEnumsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** A construction kit model */
export type CkModelRecordsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** A construction kit model */
export type CkModelTypesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection from an object to a list of objects of type `CkModelDto`. */
export type CkModelDtoConnectionDto = {
  __typename?: 'CkModelDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CkModelDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CkModelDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CkModelDto`. */
export type CkModelDtoEdgeDto = {
  __typename?: 'CkModelDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CkModelDto>;
};

/** Definition of a construction kit record with name and attributes. */
export type CkRecordDto = {
  __typename?: 'CkRecord';
  attributes?: Maybe<CkTypeAttributeDtoConnectionDto>;
  /** The base record the current record is derived from. */
  baseRecordTypes?: Maybe<CkTypeDto>;
  /** Construction kit record id, the unique identifier of the record. */
  ckRecordId: Scalars['CkRecordId']['output'];
  /** Lists types that are derived from the current construction kit record. */
  derivedRecordTypes?: Maybe<CkTypeDtoConnectionDto>;
  /** Optional description of the record. */
  description?: Maybe<Scalars['String']['output']>;
  /** Indicates if the record is abstract. */
  isAbstract: Scalars['Boolean']['output'];
  /** Indicates if the record is final. */
  isFinal: Scalars['Boolean']['output'];
};


/** Definition of a construction kit record with name and attributes. */
export type CkRecordAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Definition of a construction kit record with name and attributes. */
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

/** Definition of a construction kit type with name, associations and attributes. */
export type CkTypeDto = {
  __typename?: 'CkType';
  attributes?: Maybe<CkTypeAttributeDtoConnectionDto>;
  availableQueryColumns?: Maybe<CkTypeQueryColumnDtoConnectionDto>;
  /** The base type the current type is derived from. */
  baseType?: Maybe<CkTypeDto>;
  /** Construction kit type id, the unique identifier of the type. */
  ckTypeId: Scalars['CkTypeId']['output'];
  /** Lists types that are derived from the current construction kit type. */
  derivedTypes?: Maybe<CkTypeDtoConnectionDto>;
  /** Optional description of the type. */
  description?: Maybe<Scalars['String']['output']>;
  /** Lists types that are derived directly or indirectly from the current construction kit type. */
  directAndIndirectDerivedTypes?: Maybe<CkTypeDtoConnectionDto>;
  /** Indicates if the type is abstract. */
  isAbstract: Scalars['Boolean']['output'];
  /** Indicates if the type is final. */
  isFinal: Scalars['Boolean']['output'];
};


/** Definition of a construction kit type with name, associations and attributes. */
export type CkTypeAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributeNameContains?: InputMaybe<Scalars['String']['input']>;
  attributeNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Definition of a construction kit type with name, associations and attributes. */
export type CkTypeAvailableQueryColumnsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributePathContains?: InputMaybe<Scalars['String']['input']>;
  attributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Definition of a construction kit type with name, associations and attributes. */
export type CkTypeDerivedTypesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ignoreAbstractTypes?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Definition of a construction kit type with name, associations and attributes. */
export type CkTypeDirectAndIndirectDerivedTypesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ignoreAbstractTypes?: InputMaybe<Scalars['Boolean']['input']>;
  includeSelf?: InputMaybe<Scalars['Boolean']['input']>;
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

/** Represents a possible column in a query result. */
export type CkTypeQueryColumnDto = {
  __typename?: 'CkTypeQueryColumn';
  /** Attribute path within the entity. */
  attributePath: Scalars['String']['output'];
  /** Value type of the attribute. */
  attributeValueType: AttributeValueTypeDto;
};

/** A connection from an object to a list of objects of type `CkTypeQueryColumnDto`. */
export type CkTypeQueryColumnDtoConnectionDto = {
  __typename?: 'CkTypeQueryColumnDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CkTypeQueryColumnDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CkTypeQueryColumnDto>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CkTypeQueryColumnDto`. */
export type CkTypeQueryColumnDtoEdgeDto = {
  __typename?: 'CkTypeQueryColumnDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CkTypeQueryColumnDto>;
};

/** Construction Kit element mutations */
export type ConstructionKitMutationsDto = {
  __typename?: 'ConstructionKitMutations';
  enums?: Maybe<CkEnumMutationsDto>;
};


/** Construction Kit element mutations */
export type ConstructionKitMutationsEnumsArgsDto = {
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ConstructionKitQueryDto = {
  __typename?: 'ConstructionKitQuery';
  attributes?: Maybe<CkAttributeDtoConnectionDto>;
  enums?: Maybe<CkEnumDtoConnectionDto>;
  models?: Maybe<CkModelDtoConnectionDto>;
  records?: Maybe<CkRecordDtoConnectionDto>;
  types?: Maybe<CkTypeDtoConnectionDto>;
};


export type ConstructionKitQueryAttributesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ckModelIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type ConstructionKitQueryEnumsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ckModelIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type ConstructionKitQueryModelsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type ConstructionKitQueryRecordsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ckModelIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


export type ConstructionKitQueryTypesArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId?: InputMaybe<Scalars['String']['input']>;
  ckIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ckModelIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type FieldFilterDto = {
  attributePath: Scalars['String']['input'];
  comparisonValue?: InputMaybe<Scalars['SimpleScalar']['input']>;
  operator: FieldFilterOperatorsDto;
};

/** Defines the operator of field compare */
export enum FieldFilterOperatorsDto {
  AnyEqDto = 'ANY_EQ',
  AnyLikeDto = 'ANY_LIKE',
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

/** Runtime entities of construction kit type 'FireGuardians/FireReport' */
export type FireGuardiansFireReportDto = {
  __typename?: 'FireGuardiansFireReport';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<FireGuardiansFireReport_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<LargeBinaryInfoDto>;
  initialNotificationSent?: Maybe<Scalars['Boolean']['output']>;
  location: RtGeospatialValueDtoDto;
  name: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'FireGuardians/FireReport' */
export type FireGuardiansFireReportAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `FireGuardiansFireReport`. */
export type FireGuardiansFireReportConnectionDto = {
  __typename?: 'FireGuardiansFireReportConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<FireGuardiansFireReportEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<FireGuardiansFireReportDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `FireGuardiansFireReport`. */
export type FireGuardiansFireReportEdgeDto = {
  __typename?: 'FireGuardiansFireReportEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FireGuardiansFireReportDto>;
};

export type FireGuardiansFireReportInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['LargeBinary']['input']>;
  initialNotificationSent?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<PointInputDto>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type FireGuardiansFireReportInputUpdateDto = {
  /** Item to update */
  item: FireGuardiansFireReportInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type FireGuardiansFireReportMutationsDto = {
  __typename?: 'FireGuardiansFireReportMutations';
  /** Creates new entities of type 'FireGuardiansFireReport'. */
  create?: Maybe<Array<Maybe<FireGuardiansFireReportDto>>>;
  /** Deletes an entity of type 'FireGuardiansFireReport'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'FireGuardiansFireReport'. */
  update?: Maybe<Array<Maybe<FireGuardiansFireReportDto>>>;
};


export type FireGuardiansFireReportMutationsCreateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansFireReportInputDto>>;
};


export type FireGuardiansFireReportMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type FireGuardiansFireReportMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansFireReportInputUpdateDto>>;
};

export type FireGuardiansFireReportUpdateDto = {
  __typename?: 'FireGuardiansFireReportUpdate';
  /** The corresponding item */
  item?: Maybe<FireGuardiansFireReportDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type FireGuardiansFireReportUpdateMessageDto = {
  __typename?: 'FireGuardiansFireReportUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<FireGuardiansFireReportUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansFireReport */
export type FireGuardiansFireReport_ConfiguredByUnionDto = {
  __typename?: 'FireGuardiansFireReport_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansFireReport */
export type FireGuardiansFireReport_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'FireGuardians/NotificationSubscription' */
export type FireGuardiansNotificationSubscriptionDto = {
  __typename?: 'FireGuardiansNotificationSubscription';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<FireGuardiansNotificationSubscription_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  endpoint: Scalars['String']['output'];
  parent?: Maybe<FireGuardiansNotificationSubscription_ParentUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  subscriptionConfiguration?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'FireGuardians/NotificationSubscription' */
export type FireGuardiansNotificationSubscriptionAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `FireGuardiansNotificationSubscription`. */
export type FireGuardiansNotificationSubscriptionConnectionDto = {
  __typename?: 'FireGuardiansNotificationSubscriptionConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<FireGuardiansNotificationSubscriptionEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<FireGuardiansNotificationSubscriptionDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `FireGuardiansNotificationSubscription`. */
export type FireGuardiansNotificationSubscriptionEdgeDto = {
  __typename?: 'FireGuardiansNotificationSubscriptionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FireGuardiansNotificationSubscriptionDto>;
};

export type FireGuardiansNotificationSubscriptionInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  endpoint?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  subscriptionConfiguration?: InputMaybe<Scalars['String']['input']>;
};

export type FireGuardiansNotificationSubscriptionInputUpdateDto = {
  /** Item to update */
  item: FireGuardiansNotificationSubscriptionInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type FireGuardiansNotificationSubscriptionMutationsDto = {
  __typename?: 'FireGuardiansNotificationSubscriptionMutations';
  /** Creates new entities of type 'FireGuardiansNotificationSubscription'. */
  create?: Maybe<Array<Maybe<FireGuardiansNotificationSubscriptionDto>>>;
  /** Deletes an entity of type 'FireGuardiansNotificationSubscription'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'FireGuardiansNotificationSubscription'. */
  update?: Maybe<Array<Maybe<FireGuardiansNotificationSubscriptionDto>>>;
};


export type FireGuardiansNotificationSubscriptionMutationsCreateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansNotificationSubscriptionInputDto>>;
};


export type FireGuardiansNotificationSubscriptionMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type FireGuardiansNotificationSubscriptionMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansNotificationSubscriptionInputUpdateDto>>;
};

export type FireGuardiansNotificationSubscriptionUpdateDto = {
  __typename?: 'FireGuardiansNotificationSubscriptionUpdate';
  /** The corresponding item */
  item?: Maybe<FireGuardiansNotificationSubscriptionDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type FireGuardiansNotificationSubscriptionUpdateMessageDto = {
  __typename?: 'FireGuardiansNotificationSubscriptionUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<FireGuardiansNotificationSubscriptionUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansNotificationSubscription */
export type FireGuardiansNotificationSubscription_ConfiguredByUnionDto = {
  __typename?: 'FireGuardiansNotificationSubscription_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansNotificationSubscription */
export type FireGuardiansNotificationSubscription_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type FireGuardiansNotificationSubscription */
export type FireGuardiansNotificationSubscription_ParentUnionDto = {
  __typename?: 'FireGuardiansNotificationSubscription_ParentUnion';
  fireGuardiansWallet?: Maybe<FireGuardiansWalletConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type FireGuardiansNotificationSubscription */
export type FireGuardiansNotificationSubscription_ParentUnionFireGuardiansWalletArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'FireGuardians/Wallet' */
export type FireGuardiansWalletDto = {
  __typename?: 'FireGuardiansWallet';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<FireGuardiansWallet_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<FireGuardiansWallet_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  description?: Maybe<Scalars['String']['output']>;
  identityId: Scalars['String']['output'];
  lastNotificationUpdate?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<RtGeospatialValueDtoDto>;
  name: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'FireGuardians/Wallet' */
export type FireGuardiansWalletAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `FireGuardiansWallet`. */
export type FireGuardiansWalletConnectionDto = {
  __typename?: 'FireGuardiansWalletConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<FireGuardiansWalletEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<FireGuardiansWalletDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `FireGuardiansWallet`. */
export type FireGuardiansWalletEdgeDto = {
  __typename?: 'FireGuardiansWalletEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FireGuardiansWalletDto>;
};

export type FireGuardiansWalletInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  identityId?: InputMaybe<Scalars['String']['input']>;
  lastNotificationUpdate?: InputMaybe<Scalars['DateTime']['input']>;
  location?: InputMaybe<PointInputDto>;
  name?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type FireGuardiansWalletInputUpdateDto = {
  /** Item to update */
  item: FireGuardiansWalletInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type FireGuardiansWalletMutationsDto = {
  __typename?: 'FireGuardiansWalletMutations';
  /** Creates new entities of type 'FireGuardiansWallet'. */
  create?: Maybe<Array<Maybe<FireGuardiansWalletDto>>>;
  /** Deletes an entity of type 'FireGuardiansWallet'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'FireGuardiansWallet'. */
  update?: Maybe<Array<Maybe<FireGuardiansWalletDto>>>;
};


export type FireGuardiansWalletMutationsCreateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansWalletInputDto>>;
};


export type FireGuardiansWalletMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type FireGuardiansWalletMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<FireGuardiansWalletInputUpdateDto>>;
};

export type FireGuardiansWalletUpdateDto = {
  __typename?: 'FireGuardiansWalletUpdate';
  /** The corresponding item */
  item?: Maybe<FireGuardiansWalletDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type FireGuardiansWalletUpdateMessageDto = {
  __typename?: 'FireGuardiansWalletUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<FireGuardiansWalletUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type FireGuardiansWallet */
export type FireGuardiansWallet_ChildrenUnionDto = {
  __typename?: 'FireGuardiansWallet_ChildrenUnion';
  fireGuardiansNotificationSubscription?: Maybe<FireGuardiansNotificationSubscriptionConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type FireGuardiansWallet */
export type FireGuardiansWallet_ChildrenUnionFireGuardiansNotificationSubscriptionArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansWallet */
export type FireGuardiansWallet_ConfiguredByUnionDto = {
  __typename?: 'FireGuardiansWallet_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type FireGuardiansWallet */
export type FireGuardiansWallet_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Enum of graph directions */
export enum GraphDirectionDto {
  AnyDto = 'ANY',
  InboundDto = 'INBOUND',
  OutboundDto = 'OUTBOUND'
}

export type GroupByDto = {
  avgAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupByAttributeNameList: Array<InputMaybe<Scalars['String']['input']>>;
  maxValueAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minValueAttributeNameList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  /** Returns the size of the binary */
  size: Scalars['BigInt']['output'];
};

/** Enum of the availability states of models. */
export enum ModelStateDto {
  AvailableDto = 'AVAILABLE',
  ImportingDto = 'IMPORTING'
}

export type NearGeospatialFilterDto = {
  attributeName: Scalars['String']['input'];
  maxDistance?: InputMaybe<Scalars['Float']['input']>;
  minDistance?: InputMaybe<Scalars['Float']['input']>;
  point: PointInputDto;
};

export type OctoMutationDto = {
  __typename?: 'OctoMutation';
  constructionKit?: Maybe<ConstructionKitMutationsDto>;
  runtime?: Maybe<RuntimeDto>;
};

export type OctoQueryDto = {
  __typename?: 'OctoQuery';
  constructionKit?: Maybe<ConstructionKitQueryDto>;
  runtime?: Maybe<RuntimeModelQueryDto>;
};

export type OctoSubscriptionsDto = {
  __typename?: 'OctoSubscriptions';
  basicAssetEvents?: Maybe<BasicAssetUpdateMessageDto>;
  basicCityEvents?: Maybe<BasicCityUpdateMessageDto>;
  basicCountryEvents?: Maybe<BasicCountryUpdateMessageDto>;
  basicDistrictEvents?: Maybe<BasicDistrictUpdateMessageDto>;
  basicDocumentEvents?: Maybe<BasicDocumentUpdateMessageDto>;
  basicNamedEntityEvents?: Maybe<BasicNamedEntityUpdateMessageDto>;
  basicStateEvents?: Maybe<BasicStateUpdateMessageDto>;
  basicTreeEvents?: Maybe<BasicTreeUpdateMessageDto>;
  basicTreeNodeEvents?: Maybe<BasicTreeNodeUpdateMessageDto>;
  fireGuardiansFireReportEvents?: Maybe<FireGuardiansFireReportUpdateMessageDto>;
  fireGuardiansNotificationSubscriptionEvents?: Maybe<FireGuardiansNotificationSubscriptionUpdateMessageDto>;
  fireGuardiansWalletEvents?: Maybe<FireGuardiansWalletUpdateMessageDto>;
  systemAutoIncrementEvents?: Maybe<SystemAutoIncrementUpdateMessageDto>;
  systemBotAttributeAggregateConfigurationEvents?: Maybe<SystemBotAttributeAggregateConfigurationUpdateMessageDto>;
  systemBotServiceHookEvents?: Maybe<SystemBotServiceHookUpdateMessageDto>;
  systemConfigurationEvents?: Maybe<SystemConfigurationUpdateMessageDto>;
  systemEntityEvents?: Maybe<SystemEntityUpdateMessageDto>;
  systemNotificationCssTemplateConfigurationEvents?: Maybe<SystemNotificationCssTemplateConfigurationUpdateMessageDto>;
  systemNotificationEventEvents?: Maybe<SystemNotificationEventUpdateMessageDto>;
  systemNotificationNotificationTemplateEvents?: Maybe<SystemNotificationNotificationTemplateUpdateMessageDto>;
  systemNotificationStatefulEventEvents?: Maybe<SystemNotificationStatefulEventUpdateMessageDto>;
  systemQueryEvents?: Maybe<SystemQueryUpdateMessageDto>;
  systemTenantConfigurationEvents?: Maybe<SystemTenantConfigurationUpdateMessageDto>;
  systemTenantEvents?: Maybe<SystemTenantUpdateMessageDto>;
  systemUIPageEvents?: Maybe<SystemUiPageUpdateMessageDto>;
  systemUIStudioRootEvents?: Maybe<SystemUiStudioRootUpdateMessageDto>;
  systemUIStudioTreeItemEvents?: Maybe<SystemUiStudioTreeItemUpdateMessageDto>;
  systemUIUIElementEvents?: Maybe<SystemUiuiElementUpdateMessageDto>;
};


export type OctoSubscriptionsBasicAssetEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicCityEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicCountryEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicDistrictEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicDocumentEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicNamedEntityEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicStateEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicTreeEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsBasicTreeNodeEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsFireGuardiansFireReportEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsFireGuardiansNotificationSubscriptionEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsFireGuardiansWalletEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemAutoIncrementEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemBotAttributeAggregateConfigurationEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemBotServiceHookEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemConfigurationEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemEntityEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemNotificationCssTemplateConfigurationEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemNotificationEventEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemNotificationNotificationTemplateEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemNotificationStatefulEventEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemQueryEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemTenantConfigurationEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemTenantEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemUiPageEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemUiStudioRootEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemUiStudioTreeItemEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  updateTypes: Array<InputMaybe<UpdateTypeDto>>;
};


export type OctoSubscriptionsSystemUiuiElementEventsArgsDto = {
  beforeFieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
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
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  attributes?: Maybe<RtEntityAttributeDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId?: Maybe<Scalars['OctoObjectId']['output']>;
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** A runtime entity type of Octo */
export type RtEntityAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  value?: Maybe<Scalars['SimpleScalar']['output']>;
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

export type RtGeospatialValueDtoDto = {
  __typename?: 'RtGeospatialValueDto';
  distance?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<PointDto>;
};

/** Represents a runtime query exection. */
export type RtQueryDto = {
  __typename?: 'RtQuery';
  associatedCkTypeId: Scalars['CkTypeId']['output'];
  columns: Array<RtQueryColumnDto>;
  queryRtId: Scalars['OctoObjectId']['output'];
  rows?: Maybe<RtQueryRowDtoConnectionDto>;
};


/** Represents a runtime query exection. */
export type RtQueryRowsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents a cell of a row within a runtime query execution. */
export type RtQueryCellDto = {
  __typename?: 'RtQueryCell';
  /** Path of the attribute within an entity. */
  attributePath: Scalars['String']['output'];
  /** Value of the cell. */
  value?: Maybe<Scalars['SimpleScalar']['output']>;
};

/** A connection from an object to a list of objects of type `RtQueryCellDto`. */
export type RtQueryCellDtoConnectionDto = {
  __typename?: 'RtQueryCellDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<RtQueryCellDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<RtQueryCellDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `RtQueryCellDto`. */
export type RtQueryCellDtoEdgeDto = {
  __typename?: 'RtQueryCellDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: RtQueryCellDto;
};

/** Represents the input for a cell a row within a runtime query. */
export type RtQueryCellInputDto = {
  /** Path of the attribute within an entity. */
  attributePath?: InputMaybe<Scalars['String']['input']>;
  /** Value of the cell. */
  value?: InputMaybe<Scalars['SimpleScalar']['input']>;
};

/** Represents a column within a query */
export type RtQueryColumnDto = {
  __typename?: 'RtQueryColumn';
  attributePath?: Maybe<Scalars['String']['output']>;
  attributeValueType?: Maybe<AttributeValueTypeDto>;
};

/** A connection from an object to a list of objects of type `RtQueryDto`. */
export type RtQueryDtoConnectionDto = {
  __typename?: 'RtQueryDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<RtQueryDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<RtQueryDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `RtQueryDto`. */
export type RtQueryDtoEdgeDto = {
  __typename?: 'RtQueryDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: RtQueryDto;
};

export type RtQueryMutationsDto = {
  __typename?: 'RtQueryMutations';
  /** Create entities of a runtime query. */
  create: Array<RtQueryRowDto>;
  /** Deletes entities of a runtime query. */
  delete: Scalars['Boolean']['output'];
  /** Updates entities of a runtime query. */
  update: Array<RtQueryRowDto>;
};


export type RtQueryMutationsCreateArgsDto = {
  entities: Array<RtQueryRowInputDto>;
};


export type RtQueryMutationsDeleteArgsDto = {
  entities: Array<RtEntityIdDto>;
};


export type RtQueryMutationsUpdateArgsDto = {
  entities: Array<RtQueryRowUpdateDto>;
};

/** Represents a row within a runtime query execution */
export type RtQueryRowDto = {
  __typename?: 'RtQueryRow';
  cells?: Maybe<RtQueryCellDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId?: Maybe<Scalars['OctoObjectId']['output']>;
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Represents a row within a runtime query execution */
export type RtQueryRowCellsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection from an object to a list of objects of type `RtQueryRowDto`. */
export type RtQueryRowDtoConnectionDto = {
  __typename?: 'RtQueryRowDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<RtQueryRowDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<RtQueryRowDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `RtQueryRowDto`. */
export type RtQueryRowDtoEdgeDto = {
  __typename?: 'RtQueryRowDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: RtQueryRowDto;
};

export type RtQueryRowInputDto = {
  cells: Array<InputMaybe<RtQueryCellInputDto>>;
  ckTypeId: Scalars['CkTypeId']['input'];
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type RtQueryRowUpdateDto = {
  /** Row as input to be updated within the query. */
  item?: InputMaybe<RtQueryRowInputDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Represents a runtime query exection. */
export type RtTransientQueryDto = {
  __typename?: 'RtTransientQuery';
  associatedCkTypeId: Scalars['CkTypeId']['output'];
  columns: Array<RtQueryColumnDto>;
  rows?: Maybe<RtQueryRowDtoConnectionDto>;
};


/** Represents a runtime query exection. */
export type RtTransientQueryRowsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection from an object to a list of objects of type `RtTransientQueryDto`. */
export type RtTransientQueryDtoConnectionDto = {
  __typename?: 'RtTransientQueryDtoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<RtTransientQueryDtoEdgeDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<RtTransientQueryDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoDto;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `RtTransientQueryDto`. */
export type RtTransientQueryDtoEdgeDto = {
  __typename?: 'RtTransientQueryDtoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: RtTransientQueryDto;
};

export type RuntimeDto = {
  __typename?: 'Runtime';
  /** Mutation for entities of type 'BasicAsset'. */
  basicAssets?: Maybe<BasicAssetMutationsDto>;
  /** Mutation for entities of type 'BasicCity'. */
  basicCitys?: Maybe<BasicCityMutationsDto>;
  /** Mutation for entities of type 'BasicCountry'. */
  basicCountrys?: Maybe<BasicCountryMutationsDto>;
  /** Mutation for entities of type 'BasicDistrict'. */
  basicDistricts?: Maybe<BasicDistrictMutationsDto>;
  /** Mutation for entities of type 'BasicState'. */
  basicStates?: Maybe<BasicStateMutationsDto>;
  /** Mutation for entities of type 'BasicTreeNode'. */
  basicTreeNodes?: Maybe<BasicTreeNodeMutationsDto>;
  /** Mutation for entities of type 'BasicTree'. */
  basicTrees?: Maybe<BasicTreeMutationsDto>;
  /** Mutation for entities of type 'FireGuardiansFireReport'. */
  fireGuardiansFireReports?: Maybe<FireGuardiansFireReportMutationsDto>;
  /** Mutation for entities of type 'FireGuardiansNotificationSubscription'. */
  fireGuardiansNotificationSubscriptions?: Maybe<FireGuardiansNotificationSubscriptionMutationsDto>;
  /** Mutation for entities of type 'FireGuardiansWallet'. */
  fireGuardiansWallets?: Maybe<FireGuardiansWalletMutationsDto>;
  runtimeQuery?: Maybe<RtQueryMutationsDto>;
  /** Mutation for entities of type 'SystemAutoIncrement'. */
  systemAutoIncrements?: Maybe<SystemAutoIncrementMutationsDto>;
  /** Mutation for entities of type 'SystemBotAttributeAggregateConfiguration'. */
  systemBotAttributeAggregateConfigurations?: Maybe<SystemBotAttributeAggregateConfigurationMutationsDto>;
  /** Mutation for entities of type 'SystemBotServiceHook'. */
  systemBotServiceHooks?: Maybe<SystemBotServiceHookMutationsDto>;
  /** Mutation for entities of type 'SystemNotificationCssTemplateConfiguration'. */
  systemNotificationCssTemplateConfigurations?: Maybe<SystemNotificationCssTemplateConfigurationMutationsDto>;
  /** Mutation for entities of type 'SystemNotificationEvent'. */
  systemNotificationEvents?: Maybe<SystemNotificationEventMutationsDto>;
  /** Mutation for entities of type 'SystemNotificationNotificationTemplate'. */
  systemNotificationNotificationTemplates?: Maybe<SystemNotificationNotificationTemplateMutationsDto>;
  /** Mutation for entities of type 'SystemNotificationStatefulEvent'. */
  systemNotificationStatefulEvents?: Maybe<SystemNotificationStatefulEventMutationsDto>;
  /** Mutation for entities of type 'SystemQuery'. */
  systemQuerys?: Maybe<SystemQueryMutationsDto>;
  /** Mutation for entities of type 'SystemTenantConfiguration'. */
  systemTenantConfigurations?: Maybe<SystemTenantConfigurationMutationsDto>;
  /** Mutation for entities of type 'SystemTenant'. */
  systemTenants?: Maybe<SystemTenantMutationsDto>;
  /** Mutation for entities of type 'SystemUIPage'. */
  systemUIPages?: Maybe<SystemUiPageMutationsDto>;
  /** Mutation for entities of type 'SystemUIStudioRoot'. */
  systemUIStudioRoots?: Maybe<SystemUiStudioRootMutationsDto>;
  /** Mutation for entities of type 'SystemUIStudioTreeItem'. */
  systemUIStudioTreeItems?: Maybe<SystemUiStudioTreeItemMutationsDto>;
};


export type RuntimeRuntimeQueryArgsDto = {
  rtId: Scalars['OctoObjectId']['input'];
};

export type RuntimeModelQueryDto = {
  __typename?: 'RuntimeModelQuery';
  basicAsset?: Maybe<BasicAssetConnectionDto>;
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicDocument?: Maybe<BasicDocumentConnectionDto>;
  basicNamedEntity?: Maybe<BasicNamedEntityConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
  fireGuardiansFireReport?: Maybe<FireGuardiansFireReportConnectionDto>;
  fireGuardiansNotificationSubscription?: Maybe<FireGuardiansNotificationSubscriptionConnectionDto>;
  fireGuardiansWallet?: Maybe<FireGuardiansWalletConnectionDto>;
  runtimeEntities?: Maybe<RtEntityGenericDtoConnectionDto>;
  runtimeQuery?: Maybe<RtQueryDtoConnectionDto>;
  systemAutoIncrement?: Maybe<SystemAutoIncrementConnectionDto>;
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
  systemBotServiceHook?: Maybe<SystemBotServiceHookConnectionDto>;
  systemConfiguration?: Maybe<SystemConfigurationConnectionDto>;
  systemEntity?: Maybe<SystemEntityConnectionDto>;
  systemNotificationCssTemplateConfiguration?: Maybe<SystemNotificationCssTemplateConfigurationConnectionDto>;
  systemNotificationEvent?: Maybe<SystemNotificationEventConnectionDto>;
  systemNotificationNotificationTemplate?: Maybe<SystemNotificationNotificationTemplateConnectionDto>;
  systemNotificationStatefulEvent?: Maybe<SystemNotificationStatefulEventConnectionDto>;
  systemQuery?: Maybe<SystemQueryConnectionDto>;
  systemTenant?: Maybe<SystemTenantConnectionDto>;
  systemTenantConfiguration?: Maybe<SystemTenantConfigurationConnectionDto>;
  systemUIPage?: Maybe<SystemUiPageConnectionDto>;
  systemUIStudioRoot?: Maybe<SystemUiStudioRootConnectionDto>;
  systemUIStudioTreeItem?: Maybe<SystemUiStudioTreeItemConnectionDto>;
  systemUIUIElement?: Maybe<SystemUiuiElementConnectionDto>;
  transientRuntimeQuery?: Maybe<RtTransientQueryDtoConnectionDto>;
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


export type RuntimeModelQueryBasicCityArgsDto = {
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


export type RuntimeModelQueryBasicCountryArgsDto = {
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


export type RuntimeModelQueryBasicDistrictArgsDto = {
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


export type RuntimeModelQueryBasicDocumentArgsDto = {
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


export type RuntimeModelQueryBasicStateArgsDto = {
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


export type RuntimeModelQueryBasicTreeArgsDto = {
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


export type RuntimeModelQueryBasicTreeNodeArgsDto = {
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


export type RuntimeModelQueryFireGuardiansFireReportArgsDto = {
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


export type RuntimeModelQueryFireGuardiansNotificationSubscriptionArgsDto = {
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


export type RuntimeModelQueryFireGuardiansWalletArgsDto = {
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


export type RuntimeModelQueryRuntimeQueryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  rtId: Scalars['OctoObjectId']['input'];
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


export type RuntimeModelQuerySystemNotificationCssTemplateConfigurationArgsDto = {
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


export type RuntimeModelQuerySystemNotificationEventArgsDto = {
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


export type RuntimeModelQuerySystemNotificationStatefulEventArgsDto = {
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


export type RuntimeModelQuerySystemTenantConfigurationArgsDto = {
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


export type RuntimeModelQuerySystemUiPageArgsDto = {
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


export type RuntimeModelQuerySystemUiStudioRootArgsDto = {
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


export type RuntimeModelQuerySystemUiStudioTreeItemArgsDto = {
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


export type RuntimeModelQuerySystemUiuiElementArgsDto = {
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


export type RuntimeModelQueryTransientRuntimeQueryArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  columnPaths: Array<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

export type SearchFilterDto = {
  attributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  attributePath: Scalars['String']['input'];
  sortOrder?: InputMaybe<SortOrdersDto>;
};

/** Defines the sort order */
export enum SortOrdersDto {
  AscendingDto = 'ASCENDING',
  DefaultDto = 'DEFAULT',
  DescendingDto = 'DESCENDING'
}

/** Runtime entities of construction kit record 'System/AttributeSearchFilter' */
export type SystemAttributeSearchFilterDto = {
  __typename?: 'SystemAttributeSearchFilter';
  attributePaths: Array<Scalars['String']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  searchValue: Scalars['String']['output'];
};

export type SystemAttributeSearchFilterInputDto = {
  attributePaths?: InputMaybe<Array<Scalars['String']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit type 'System/AutoIncrement' */
export type SystemAutoIncrementDto = {
  __typename?: 'SystemAutoIncrement';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemAutoIncrement_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  currentValue?: Maybe<Scalars['Int']['output']>;
  end: Scalars['Int']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  start: Scalars['Int']['output'];
};


/** Runtime entities of construction kit type 'System/AutoIncrement' */
export type SystemAutoIncrementAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  autoCompleteFilter: Scalars['String']['output'];
  autoCompleteLimit: Scalars['Int']['output'];
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemBotAttributeAggregateConfiguration_ConfiguredByUnionDto>;
  configures?: Maybe<SystemBotAttributeAggregateConfiguration_ConfiguresUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  isAutoCompleteEnabled: Scalars['Boolean']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'System.Bot/AttributeAggregateConfiguration' */
export type SystemBotAttributeAggregateConfigurationAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  basicCity?: Maybe<BasicCityConnectionDto>;
  basicCountry?: Maybe<BasicCountryConnectionDto>;
  basicDistrict?: Maybe<BasicDistrictConnectionDto>;
  basicDocument?: Maybe<BasicDocumentConnectionDto>;
  basicNamedEntity?: Maybe<BasicNamedEntityConnectionDto>;
  basicState?: Maybe<BasicStateConnectionDto>;
  basicTree?: Maybe<BasicTreeConnectionDto>;
  basicTreeNode?: Maybe<BasicTreeNodeConnectionDto>;
  fireGuardiansFireReport?: Maybe<FireGuardiansFireReportConnectionDto>;
  fireGuardiansNotificationSubscription?: Maybe<FireGuardiansNotificationSubscriptionConnectionDto>;
  fireGuardiansWallet?: Maybe<FireGuardiansWalletConnectionDto>;
  systemAutoIncrement?: Maybe<SystemAutoIncrementConnectionDto>;
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
  systemBotServiceHook?: Maybe<SystemBotServiceHookConnectionDto>;
  systemConfiguration?: Maybe<SystemConfigurationConnectionDto>;
  systemEntity?: Maybe<SystemEntityConnectionDto>;
  systemNotificationCssTemplateConfiguration?: Maybe<SystemNotificationCssTemplateConfigurationConnectionDto>;
  systemNotificationEvent?: Maybe<SystemNotificationEventConnectionDto>;
  systemNotificationNotificationTemplate?: Maybe<SystemNotificationNotificationTemplateConnectionDto>;
  systemNotificationStatefulEvent?: Maybe<SystemNotificationStatefulEventConnectionDto>;
  systemQuery?: Maybe<SystemQueryConnectionDto>;
  systemTenant?: Maybe<SystemTenantConnectionDto>;
  systemTenantConfiguration?: Maybe<SystemTenantConfigurationConnectionDto>;
  systemUIPage?: Maybe<SystemUiPageConnectionDto>;
  systemUIStudioRoot?: Maybe<SystemUiStudioRootConnectionDto>;
  systemUIStudioTreeItem?: Maybe<SystemUiStudioTreeItemConnectionDto>;
  systemUIUIElement?: Maybe<SystemUiuiElementConnectionDto>;
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicCityArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicCountryArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicDistrictArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicDocumentArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicStateArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicTreeArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionBasicTreeNodeArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionFireGuardiansFireReportArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionFireGuardiansNotificationSubscriptionArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionFireGuardiansWalletArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemNotificationCssTemplateConfigurationArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemNotificationEventArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemNotificationStatefulEventArgsDto = {
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


/** Association System.Bot/Configures (Outbound) of entity type SystemBotAttributeAggregateConfiguration */
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemTenantConfigurationArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemUiPageArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemUiStudioRootArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemUiStudioTreeItemArgsDto = {
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
export type SystemBotAttributeAggregateConfiguration_ConfiguresUnionSystemUiuiElementArgsDto = {
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
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemBotServiceHook_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  enabled: Scalars['Boolean']['output'];
  fieldFilter: Array<SystemFieldFilterDto>;
  name: Scalars['String']['output'];
  queryCkTypeId: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  serviceHookAction: Scalars['String']['output'];
  serviceHookApiKey?: Maybe<Scalars['String']['output']>;
  serviceHookBaseUri: Scalars['String']['output'];
};


/** Runtime entities of construction kit type 'System.Bot/ServiceHook' */
export type SystemBotServiceHookAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInputDto>>>;
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

/** Runtime entities of construction kit type 'System/Configuration' */
export type SystemConfigurationDto = {
  __typename?: 'SystemConfiguration';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemConfiguration_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'System/Configuration' */
export type SystemConfigurationAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemEntity_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'System/Entity' */
export type SystemEntityAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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

/** Runtime entities of construction kit record 'System/FieldFilter' */
export type SystemFieldFilterDto = {
  __typename?: 'SystemFieldFilter';
  attributePath: Scalars['String']['output'];
  comparisonValue?: Maybe<Scalars['String']['output']>;
  constructionKitType?: Maybe<CkTypeDto>;
  operator: SystemFieldFilterOperatorDto;
};

export type SystemFieldFilterInputDto = {
  attributePath?: InputMaybe<Scalars['String']['input']>;
  comparisonValue?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<SystemFieldFilterOperatorDto>;
};

/** Runtime entities of construction kit enum 'System/FieldFilterOperator' */
export enum SystemFieldFilterOperatorDto {
  /** Compares an array field with at least one element that matches the specified value. */
  AnyEqDto = 'ANY_EQ',
  /** Compares an array field with at least one element that matches the specified value using a pattern matching comparison. Use * as a wildcard character. */
  AnyLikeDto = 'ANY_LIKE',
  /** Compares the specified field to the specified value. */
  EqualsDto = 'EQUALS',
  /** Compares the specified field to the specified value and returns true if the field value is greater than or equal to the specified value. */
  GreaterEqualThanDto = 'GREATER_EQUAL_THAN',
  /** Compares the specified field to the specified value and returns true if the field value is greater than the specified value. */
  GreaterThanDto = 'GREATER_THAN',
  /** Compares a field to be equal any value in the specified array. */
  InDto = 'IN',
  /** Compares the specified field to the specified value and returns true if the field value is less than or equal to the specified value. */
  LessEqualThanDto = 'LESS_EQUAL_THAN',
  /** Compares the specified field to the specified value and returns true if the field value is less than the specified value. */
  LessThanDto = 'LESS_THAN',
  /** Compares a field to the specified value using a pattern matching comparison. Use * as a wildcard character. */
  LikeDto = 'LIKE',
  /** Matches an array field with at least one element that matches all the specified query criteria. */
  MatchDto = 'MATCH',
  /** Matches a field containing a value that matches the specified regular expression. */
  MatchRegExDto = 'MATCH_REG_EX',
  /** Compares the specified field to the specified value and returns true if the values are not equal. */
  NotEqualsDto = 'NOT_EQUALS',
  /** Compares a field to be not equal any value in the specified array. */
  NotInDto = 'NOT_IN'
}

/** Runtime entities of construction kit type 'System.Notification/CssTemplateConfiguration' */
export type SystemNotificationCssTemplateConfigurationDto = {
  __typename?: 'SystemNotificationCssTemplateConfiguration';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemNotificationCssTemplateConfiguration_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  cssStyle: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'System.Notification/CssTemplateConfiguration' */
export type SystemNotificationCssTemplateConfigurationAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemNotificationCssTemplateConfiguration`. */
export type SystemNotificationCssTemplateConfigurationConnectionDto = {
  __typename?: 'SystemNotificationCssTemplateConfigurationConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemNotificationCssTemplateConfigurationEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemNotificationCssTemplateConfigurationDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemNotificationCssTemplateConfiguration`. */
export type SystemNotificationCssTemplateConfigurationEdgeDto = {
  __typename?: 'SystemNotificationCssTemplateConfigurationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemNotificationCssTemplateConfigurationDto>;
};

export type SystemNotificationCssTemplateConfigurationInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  cssStyle?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemNotificationCssTemplateConfigurationInputUpdateDto = {
  /** Item to update */
  item: SystemNotificationCssTemplateConfigurationInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationCssTemplateConfigurationMutationsDto = {
  __typename?: 'SystemNotificationCssTemplateConfigurationMutations';
  /** Creates new entities of type 'SystemNotificationCssTemplateConfiguration'. */
  create?: Maybe<Array<Maybe<SystemNotificationCssTemplateConfigurationDto>>>;
  /** Deletes an entity of type 'SystemNotificationCssTemplateConfiguration'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemNotificationCssTemplateConfiguration'. */
  update?: Maybe<Array<Maybe<SystemNotificationCssTemplateConfigurationDto>>>;
};


export type SystemNotificationCssTemplateConfigurationMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationCssTemplateConfigurationInputDto>>;
};


export type SystemNotificationCssTemplateConfigurationMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemNotificationCssTemplateConfigurationMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationCssTemplateConfigurationInputUpdateDto>>;
};

export type SystemNotificationCssTemplateConfigurationUpdateDto = {
  __typename?: 'SystemNotificationCssTemplateConfigurationUpdate';
  /** The corresponding item */
  item?: Maybe<SystemNotificationCssTemplateConfigurationDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemNotificationCssTemplateConfigurationUpdateMessageDto = {
  __typename?: 'SystemNotificationCssTemplateConfigurationUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemNotificationCssTemplateConfigurationUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationCssTemplateConfiguration */
export type SystemNotificationCssTemplateConfiguration_ConfiguredByUnionDto = {
  __typename?: 'SystemNotificationCssTemplateConfiguration_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationCssTemplateConfiguration */
export type SystemNotificationCssTemplateConfiguration_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Notification/Event' */
export type SystemNotificationEventDto = {
  __typename?: 'SystemNotificationEvent';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemNotificationEvent_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  level: SystemNotificationEventLevelsDto;
  message?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  source: SystemNotificationEventSourcesDto;
};


/** Runtime entities of construction kit type 'System.Notification/Event' */
export type SystemNotificationEventAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemNotificationEvent`. */
export type SystemNotificationEventConnectionDto = {
  __typename?: 'SystemNotificationEventConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemNotificationEventEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemNotificationEventDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemNotificationEvent`. */
export type SystemNotificationEventEdgeDto = {
  __typename?: 'SystemNotificationEventEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemNotificationEventDto>;
};

export type SystemNotificationEventInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  level?: InputMaybe<SystemNotificationEventLevelsDto>;
  message?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<SystemNotificationEventSourcesDto>;
};

export type SystemNotificationEventInputUpdateDto = {
  /** Item to update */
  item: SystemNotificationEventInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Notification/EventLevels' */
export enum SystemNotificationEventLevelsDto {
  /** Critical */
  CriticalDto = 'CRITICAL',
  /** Debug */
  DebugDto = 'DEBUG',
  /** Error */
  ErrorDto = 'ERROR',
  /** Information */
  InformationDto = 'INFORMATION',
  /** Warning */
  WarningDto = 'WARNING'
}

export type SystemNotificationEventMutationsDto = {
  __typename?: 'SystemNotificationEventMutations';
  /** Creates new entities of type 'SystemNotificationEvent'. */
  create?: Maybe<Array<Maybe<SystemNotificationEventDto>>>;
  /** Deletes an entity of type 'SystemNotificationEvent'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemNotificationEvent'. */
  update?: Maybe<Array<Maybe<SystemNotificationEventDto>>>;
};


export type SystemNotificationEventMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationEventInputDto>>;
};


export type SystemNotificationEventMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemNotificationEventMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationEventInputUpdateDto>>;
};

/** Runtime entities of construction kit enum 'System.Notification/EventSources' */
export enum SystemNotificationEventSourcesDto {
  /** The event was generated by the Admin Panel. */
  AdminPanelDto = 'ADMIN_PANEL',
  /** The event was generated by the Asset Repository Service. */
  AssetRepositoryServiceDto = 'ASSET_REPOSITORY_SERVICE',
  /** The event was generated by the Bot Service. */
  BotServiceDto = 'BOT_SERVICE',
  /** The event was generated by the Communication Service. */
  CommunicationServiceDto = 'COMMUNICATION_SERVICE',
  /** The event was generated by the Identity Service. */
  IdentityServiceDto = 'IDENTITY_SERVICE',
  /** The event was generated by the Mesh Adapter. */
  MeshAdapterDto = 'MESH_ADAPTER',
  /** No source has been assigned to the event. */
  UndefinedDto = 'UNDEFINED'
}

/** Runtime entities of construction kit enum 'System.Notification/EventStates' */
export enum SystemNotificationEventStatesDto {
  ActiveDto = 'ACTIVE',
  ErrorDto = 'ERROR',
  InactiveDto = 'INACTIVE'
}

export type SystemNotificationEventUpdateDto = {
  __typename?: 'SystemNotificationEventUpdate';
  /** The corresponding item */
  item?: Maybe<SystemNotificationEventDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemNotificationEventUpdateMessageDto = {
  __typename?: 'SystemNotificationEventUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemNotificationEventUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationEvent */
export type SystemNotificationEvent_ConfiguredByUnionDto = {
  __typename?: 'SystemNotificationEvent_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationEvent */
export type SystemNotificationEvent_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.Notification/NotificationTemplate' */
export type SystemNotificationNotificationTemplateDto = {
  __typename?: 'SystemNotificationNotificationTemplate';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  bodyTemplate?: Maybe<Scalars['String']['output']>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemNotificationNotificationTemplate_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  renderingType: SystemNotificationRenderingTypesDto;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  subjectTemplate: Scalars['String']['output'];
  type: SystemNotificationNotificationTypesDto;
};


/** Runtime entities of construction kit type 'System.Notification/NotificationTemplate' */
export type SystemNotificationNotificationTemplateAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  renderingType?: InputMaybe<SystemNotificationRenderingTypesDto>;
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
  PushDto = 'PUSH',
  SmsDto = 'SMS'
}

/** Runtime entities of construction kit enum 'System.Notification/RenderingTypes' */
export enum SystemNotificationRenderingTypesDto {
  HtmlDto = 'HTML',
  PlainDto = 'PLAIN'
}

/** Runtime entities of construction kit type 'System.Notification/StatefulEvent' */
export type SystemNotificationStatefulEventDto = {
  __typename?: 'SystemNotificationStatefulEvent';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemNotificationStatefulEvent_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  level: SystemNotificationEventLevelsDto;
  message?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  source: SystemNotificationEventSourcesDto;
  state: SystemNotificationEventStatesDto;
};


/** Runtime entities of construction kit type 'System.Notification/StatefulEvent' */
export type SystemNotificationStatefulEventAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemNotificationStatefulEvent`. */
export type SystemNotificationStatefulEventConnectionDto = {
  __typename?: 'SystemNotificationStatefulEventConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemNotificationStatefulEventEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemNotificationStatefulEventDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemNotificationStatefulEvent`. */
export type SystemNotificationStatefulEventEdgeDto = {
  __typename?: 'SystemNotificationStatefulEventEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemNotificationStatefulEventDto>;
};

export type SystemNotificationStatefulEventInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  level?: InputMaybe<SystemNotificationEventLevelsDto>;
  message?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<SystemNotificationEventSourcesDto>;
  state?: InputMaybe<SystemNotificationEventStatesDto>;
};

export type SystemNotificationStatefulEventInputUpdateDto = {
  /** Item to update */
  item: SystemNotificationStatefulEventInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationStatefulEventMutationsDto = {
  __typename?: 'SystemNotificationStatefulEventMutations';
  /** Creates new entities of type 'SystemNotificationStatefulEvent'. */
  create?: Maybe<Array<Maybe<SystemNotificationStatefulEventDto>>>;
  /** Deletes an entity of type 'SystemNotificationStatefulEvent'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemNotificationStatefulEvent'. */
  update?: Maybe<Array<Maybe<SystemNotificationStatefulEventDto>>>;
};


export type SystemNotificationStatefulEventMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationStatefulEventInputDto>>;
};


export type SystemNotificationStatefulEventMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemNotificationStatefulEventMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemNotificationStatefulEventInputUpdateDto>>;
};

export type SystemNotificationStatefulEventUpdateDto = {
  __typename?: 'SystemNotificationStatefulEventUpdate';
  /** The corresponding item */
  item?: Maybe<SystemNotificationStatefulEventDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemNotificationStatefulEventUpdateMessageDto = {
  __typename?: 'SystemNotificationStatefulEventUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemNotificationStatefulEventUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationStatefulEvent */
export type SystemNotificationStatefulEvent_ConfiguredByUnionDto = {
  __typename?: 'SystemNotificationStatefulEvent_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemNotificationStatefulEvent */
export type SystemNotificationStatefulEvent_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System/Query' */
export type SystemQueryDto = {
  __typename?: 'SystemQuery';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  attributeSearchFilter?: Maybe<SystemAttributeSearchFilterDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  columns: Array<Scalars['String']['output']>;
  configuredBy?: Maybe<SystemQuery_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  fieldFilter?: Maybe<Array<SystemFieldFilterDto>>;
  name: Scalars['String']['output'];
  queryCkTypeId: Scalars['String']['output'];
  queryType: SystemQueryTypesDto;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  sorting?: Maybe<Array<SystemSortOrderItemDto>>;
  textSearchFilter?: Maybe<SystemTextSearchFilterDto>;
};


/** Runtime entities of construction kit type 'System/Query' */
export type SystemQueryAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  attributeSearchFilter?: InputMaybe<SystemAttributeSearchFilterInputDto>;
  columns?: InputMaybe<Array<Scalars['String']['input']>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInputDto>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  queryType?: InputMaybe<SystemQueryTypesDto>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sorting?: InputMaybe<Array<InputMaybe<SystemSortOrderItemInputDto>>>;
  textSearchFilter?: InputMaybe<SystemTextSearchFilterInputDto>;
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

/** Runtime entities of construction kit enum 'System/QueryTypes' */
export enum SystemQueryTypesDto {
  /** A flat query */
  FlatDto = 'FLAT',
  /** A tree query that returns results from a tree */
  TreeDto = 'TREE'
}

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

/** Runtime entities of construction kit record 'System/SortOrderItem' */
export type SystemSortOrderItemDto = {
  __typename?: 'SystemSortOrderItem';
  attributePath: Scalars['String']['output'];
  constructionKitType?: Maybe<CkTypeDto>;
  sortOrder: SystemSortOrdersDto;
};

export type SystemSortOrderItemInputDto = {
  attributePath?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<SystemSortOrdersDto>;
};

/** Runtime entities of construction kit enum 'System/SortOrders' */
export enum SystemSortOrdersDto {
  /** Ascending order */
  AscendingDto = 'ASCENDING',
  /** Default sorting based on data source type */
  DefaultDto = 'DEFAULT',
  /** Descending order */
  DescendingDto = 'DESCENDING'
}

/** Runtime entities of construction kit type 'System/Tenant' */
export type SystemTenantDto = {
  __typename?: 'SystemTenant';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemTenant_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  databaseName: Scalars['String']['output'];
  parentTenantId?: Maybe<Scalars['String']['output']>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  tenantId: Scalars['String']['output'];
};


/** Runtime entities of construction kit type 'System/Tenant' */
export type SystemTenantAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System/TenantConfiguration' */
export type SystemTenantConfigurationDto = {
  __typename?: 'SystemTenantConfiguration';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configurationValue?: Maybe<Scalars['String']['output']>;
  configuredBy?: Maybe<SystemTenantConfiguration_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'System/TenantConfiguration' */
export type SystemTenantConfigurationAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemTenantConfiguration`. */
export type SystemTenantConfigurationConnectionDto = {
  __typename?: 'SystemTenantConfigurationConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemTenantConfigurationEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemTenantConfigurationDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemTenantConfiguration`. */
export type SystemTenantConfigurationEdgeDto = {
  __typename?: 'SystemTenantConfigurationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemTenantConfigurationDto>;
};

export type SystemTenantConfigurationInputDto = {
  configurationValue?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemTenantConfigurationInputUpdateDto = {
  /** Item to update */
  item: SystemTenantConfigurationInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemTenantConfigurationMutationsDto = {
  __typename?: 'SystemTenantConfigurationMutations';
  /** Creates new entities of type 'SystemTenantConfiguration'. */
  create?: Maybe<Array<Maybe<SystemTenantConfigurationDto>>>;
  /** Deletes an entity of type 'SystemTenantConfiguration'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemTenantConfiguration'. */
  update?: Maybe<Array<Maybe<SystemTenantConfigurationDto>>>;
};


export type SystemTenantConfigurationMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemTenantConfigurationInputDto>>;
};


export type SystemTenantConfigurationMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemTenantConfigurationMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemTenantConfigurationInputUpdateDto>>;
};

export type SystemTenantConfigurationUpdateDto = {
  __typename?: 'SystemTenantConfigurationUpdate';
  /** The corresponding item */
  item?: Maybe<SystemTenantConfigurationDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemTenantConfigurationUpdateMessageDto = {
  __typename?: 'SystemTenantConfigurationUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemTenantConfigurationUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemTenantConfiguration */
export type SystemTenantConfiguration_ConfiguredByUnionDto = {
  __typename?: 'SystemTenantConfiguration_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemTenantConfiguration */
export type SystemTenantConfiguration_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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

/** Runtime entities of construction kit record 'System/TextSearchFilter' */
export type SystemTextSearchFilterDto = {
  __typename?: 'SystemTextSearchFilter';
  constructionKitType?: Maybe<CkTypeDto>;
  searchValue: Scalars['String']['output'];
};

export type SystemTextSearchFilterInputDto = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit type 'System.UI/Page' */
export type SystemUiPageDto = {
  __typename?: 'SystemUIPage';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemUiPage_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  content: Scalars['String']['output'];
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'System.UI/Page' */
export type SystemUiPageAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemUIPage`. */
export type SystemUiPageConnectionDto = {
  __typename?: 'SystemUIPageConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemUiPageEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemUiPageDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemUIPage`. */
export type SystemUiPageEdgeDto = {
  __typename?: 'SystemUIPageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemUiPageDto>;
};

export type SystemUiPageInputDto = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiPageInputUpdateDto = {
  /** Item to update */
  item: SystemUiPageInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiPageMutationsDto = {
  __typename?: 'SystemUIPageMutations';
  /** Creates new entities of type 'SystemUIPage'. */
  create?: Maybe<Array<Maybe<SystemUiPageDto>>>;
  /** Deletes an entity of type 'SystemUIPage'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemUIPage'. */
  update?: Maybe<Array<Maybe<SystemUiPageDto>>>;
};


export type SystemUiPageMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemUiPageInputDto>>;
};


export type SystemUiPageMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemUiPageMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemUiPageInputUpdateDto>>;
};

export type SystemUiPageUpdateDto = {
  __typename?: 'SystemUIPageUpdate';
  /** The corresponding item */
  item?: Maybe<SystemUiPageDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemUiPageUpdateMessageDto = {
  __typename?: 'SystemUIPageUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemUiPageUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemUIPage */
export type SystemUiPage_ConfiguredByUnionDto = {
  __typename?: 'SystemUIPage_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemUIPage */
export type SystemUiPage_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.UI/StudioRoot' */
export type SystemUiStudioRootDto = {
  __typename?: 'SystemUIStudioRoot';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<SystemUiStudioRoot_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemUiStudioRoot_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  targetCkTypeId: Scalars['String']['output'];
  targetRtId: Scalars['String']['output'];
};


/** Runtime entities of construction kit type 'System.UI/StudioRoot' */
export type SystemUiStudioRootAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemUIStudioRoot`. */
export type SystemUiStudioRootConnectionDto = {
  __typename?: 'SystemUIStudioRootConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemUiStudioRootEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemUiStudioRootDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemUIStudioRoot`. */
export type SystemUiStudioRootEdgeDto = {
  __typename?: 'SystemUIStudioRootEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemUiStudioRootDto>;
};

export type SystemUiStudioRootInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  targetCkTypeId?: InputMaybe<Scalars['String']['input']>;
  targetRtId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiStudioRootInputUpdateDto = {
  /** Item to update */
  item: SystemUiStudioRootInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiStudioRootMutationsDto = {
  __typename?: 'SystemUIStudioRootMutations';
  /** Creates new entities of type 'SystemUIStudioRoot'. */
  create?: Maybe<Array<Maybe<SystemUiStudioRootDto>>>;
  /** Deletes an entity of type 'SystemUIStudioRoot'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemUIStudioRoot'. */
  update?: Maybe<Array<Maybe<SystemUiStudioRootDto>>>;
};


export type SystemUiStudioRootMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemUiStudioRootInputDto>>;
};


export type SystemUiStudioRootMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemUiStudioRootMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemUiStudioRootInputUpdateDto>>;
};

export type SystemUiStudioRootUpdateDto = {
  __typename?: 'SystemUIStudioRootUpdate';
  /** The corresponding item */
  item?: Maybe<SystemUiStudioRootDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemUiStudioRootUpdateMessageDto = {
  __typename?: 'SystemUIStudioRootUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemUiStudioRootUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type SystemUIStudioRoot */
export type SystemUiStudioRoot_ChildrenUnionDto = {
  __typename?: 'SystemUIStudioRoot_ChildrenUnion';
  systemUIStudioTreeItem?: Maybe<SystemUiStudioTreeItemConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type SystemUIStudioRoot */
export type SystemUiStudioRoot_ChildrenUnionSystemUiStudioTreeItemArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemUIStudioRoot */
export type SystemUiStudioRoot_ConfiguredByUnionDto = {
  __typename?: 'SystemUIStudioRoot_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemUIStudioRoot */
export type SystemUiStudioRoot_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.UI/StudioTreeItem' */
export type SystemUiStudioTreeItemDto = {
  __typename?: 'SystemUIStudioTreeItem';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  children?: Maybe<SystemUiStudioTreeItem_ChildrenUnionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemUiStudioTreeItem_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  parent?: Maybe<SystemUiStudioTreeItem_ParentUnionDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
  targetCkTypeId: Scalars['String']['output'];
  targetRoleId: Scalars['String']['output'];
};


/** Runtime entities of construction kit type 'System.UI/StudioTreeItem' */
export type SystemUiStudioTreeItemAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemUIStudioTreeItem`. */
export type SystemUiStudioTreeItemConnectionDto = {
  __typename?: 'SystemUIStudioTreeItemConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemUiStudioTreeItemEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemUiStudioTreeItemDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemUIStudioTreeItem`. */
export type SystemUiStudioTreeItemEdgeDto = {
  __typename?: 'SystemUIStudioTreeItemEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemUiStudioTreeItemDto>;
};

export type SystemUiStudioTreeItemInputDto = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInputDto>>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  targetCkTypeId?: InputMaybe<Scalars['String']['input']>;
  targetRoleId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiStudioTreeItemInputUpdateDto = {
  /** Item to update */
  item: SystemUiStudioTreeItemInputDto;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiStudioTreeItemMutationsDto = {
  __typename?: 'SystemUIStudioTreeItemMutations';
  /** Creates new entities of type 'SystemUIStudioTreeItem'. */
  create?: Maybe<Array<Maybe<SystemUiStudioTreeItemDto>>>;
  /** Deletes an entity of type 'SystemUIStudioTreeItem'. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Updates existing entity of type 'SystemUIStudioTreeItem'. */
  update?: Maybe<Array<Maybe<SystemUiStudioTreeItemDto>>>;
};


export type SystemUiStudioTreeItemMutationsCreateArgsDto = {
  entities: Array<InputMaybe<SystemUiStudioTreeItemInputDto>>;
};


export type SystemUiStudioTreeItemMutationsDeleteArgsDto = {
  entities: Array<InputMaybe<Scalars['OctoObjectId']['input']>>;
};


export type SystemUiStudioTreeItemMutationsUpdateArgsDto = {
  entities: Array<InputMaybe<SystemUiStudioTreeItemInputUpdateDto>>;
};

export type SystemUiStudioTreeItemUpdateDto = {
  __typename?: 'SystemUIStudioTreeItemUpdate';
  /** The corresponding item */
  item?: Maybe<SystemUiStudioTreeItemDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemUiStudioTreeItemUpdateMessageDto = {
  __typename?: 'SystemUIStudioTreeItemUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemUiStudioTreeItemUpdateDto>>>;
};

/** Association System/ParentChild (Inbound) of entity type SystemUIStudioTreeItem */
export type SystemUiStudioTreeItem_ChildrenUnionDto = {
  __typename?: 'SystemUIStudioTreeItem_ChildrenUnion';
  systemUIStudioTreeItem?: Maybe<SystemUiStudioTreeItemConnectionDto>;
};


/** Association System/ParentChild (Inbound) of entity type SystemUIStudioTreeItem */
export type SystemUiStudioTreeItem_ChildrenUnionSystemUiStudioTreeItemArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemUIStudioTreeItem */
export type SystemUiStudioTreeItem_ConfiguredByUnionDto = {
  __typename?: 'SystemUIStudioTreeItem_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemUIStudioTreeItem */
export type SystemUiStudioTreeItem_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Association System/ParentChild (Outbound) of entity type SystemUIStudioTreeItem */
export type SystemUiStudioTreeItem_ParentUnionDto = {
  __typename?: 'SystemUIStudioTreeItem_ParentUnion';
  systemUIStudioRoot?: Maybe<SystemUiStudioRootConnectionDto>;
  systemUIStudioTreeItem?: Maybe<SystemUiStudioTreeItemConnectionDto>;
};


/** Association System/ParentChild (Outbound) of entity type SystemUIStudioTreeItem */
export type SystemUiStudioTreeItem_ParentUnionSystemUiStudioRootArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};


/** Association System/ParentChild (Outbound) of entity type SystemUIStudioTreeItem */
export type SystemUiStudioTreeItem_ParentUnionSystemUiStudioTreeItemArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** Runtime entities of construction kit type 'System.UI/UIElement' */
export type SystemUiuiElementDto = {
  __typename?: 'SystemUIUIElement';
  associations?: Maybe<RtEntityGenericDtoConnectionDto>;
  ckTypeId?: Maybe<Scalars['CkTypeId']['output']>;
  configuredBy?: Maybe<SystemUiuiElement_ConfiguredByUnionDto>;
  constructionKitType?: Maybe<CkTypeDto>;
  rtChangedDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtCreationDateTime?: Maybe<Scalars['DateTime']['output']>;
  rtId: Scalars['OctoObjectId']['output'];
  rtVersion?: Maybe<Scalars['ULong']['output']>;
  rtWellKnownName?: Maybe<Scalars['String']['output']>;
};


/** Runtime entities of construction kit type 'System.UI/UIElement' */
export type SystemUiuiElementAssociationsArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  ckId: Scalars['String']['input'];
  direction: GraphDirectionDto;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  includeIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
};

/** A connection to `SystemUIUIElement`. */
export type SystemUiuiElementConnectionDto = {
  __typename?: 'SystemUIUIElementConnection';
  /** Information to aid in pagination. */
  edges?: Maybe<Array<Maybe<SystemUiuiElementEdgeDto>>>;
  /** Result of grouping the items by attributes. */
  groupings?: Maybe<Array<Maybe<GroupingDto>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<SystemUiuiElementDto>>>;
  /** Information to aid in pagination. */
  pageInfo?: Maybe<PageInfoDto>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `SystemUIUIElement`. */
export type SystemUiuiElementEdgeDto = {
  __typename?: 'SystemUIUIElementEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SystemUiuiElementDto>;
};

export type SystemUiuiElementUpdateDto = {
  __typename?: 'SystemUIUIElementUpdate';
  /** The corresponding item */
  item?: Maybe<SystemUiuiElementDto>;
  updateState?: Maybe<UpdateTypeDto>;
};

export type SystemUiuiElementUpdateMessageDto = {
  __typename?: 'SystemUIUIElementUpdateMessage';
  /** The corresponding items */
  items?: Maybe<Array<Maybe<SystemUiuiElementUpdateDto>>>;
};

/** Association System.Bot/Configures (Inbound) of entity type SystemUIUIElement */
export type SystemUiuiElement_ConfiguredByUnionDto = {
  __typename?: 'SystemUIUIElement_ConfiguredByUnion';
  systemBotAttributeAggregateConfiguration?: Maybe<SystemBotAttributeAggregateConfigurationConnectionDto>;
};


/** Association System.Bot/Configures (Inbound) of entity type SystemUIUIElement */
export type SystemUiuiElement_ConfiguredByUnionSystemBotAttributeAggregateConfigurationArgsDto = {
  after?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<FieldFilterDto>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<GroupByDto>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  searchFilter?: InputMaybe<SearchFilterDto>;
  sortOrder?: InputMaybe<Array<InputMaybe<SortDto>>>;
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
  keys: Array<Maybe<Scalars['SimpleScalar']['output']>>;
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
  value?: Maybe<Scalars['SimpleScalar']['output']>;
};
