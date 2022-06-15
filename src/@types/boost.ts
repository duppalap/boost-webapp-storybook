import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePickerValue } from 'react-time-picker';
import { SitePOI } from './site';

export interface BoostDeviceInterfaceSplunk {
  reportInfo?: any; // Any from the server.
  chargeEnergy?: any;
  sessionsCount?: any;
  sessionHoursCount?: any;
  boostStatus?: any;
  leftConnector?: string;
  rightConnector?: string;
}

export interface IRespreports {
  rows: any[];
  fields: string[];
  boostGroupId?: number;
}

export interface BoostGroupsInterface {
  boostGroupId: number;
  boostGroupName: string;
  userId: number;
  ownerId: number;
  languageId: number;
  level: number;
  parentId?: null;
  createdAt?: Date;
  updatedAt?: Date;
  mainColorTheme?: string;
  secondaryColorTheme?: string;
  Boost?: BoostDevices;
  boostsCount?: string;
}

export interface SubBoostGroupsInterface {
  boostGroupId: number;
  subBoostGroupId: number;
  boostGroupName: string;
  subBoostGroupName: string;
  userId: number;
  ownerId: number;
  languageId: number;
  createdAt?: Date;
  updatedAt?: Date;
  mainColorTheme?: string;
  secondaryColorTheme?: string;
  Boost?: BoostDevices;
}

export interface BoostDeviceInterface extends BoostDeviceInterfaceSplunk {
  boostSerialNumber: string;
  ownerId?: number;
  boostGroupId?: number;
  BoostGroup?: BoostGroupsInterface;
  subBoostGroupId?: number;
  totalBoostGroups?: number;
  totalBoost?: number;
  geoLocation?: IGeoLocation;
  Address?: {
    street: string;
    zipCode: string;
    state: string;
    country: string;
  };
  addressId?: number;
  boostId?: number;
  boostGroupName: string;
  boostName?: string;
  createdAt?: string;
  networkId?: string;
  networkURL?: string;
  technicalStatus?: boolean;
  updatedAt?: string;
  clientId?: any;
}

export interface BoostDevices {
  boostGroupRelationsId: number;
  boostId: number;
  boostGroupId: number;
  createdAt: Date;
  updatedAt: Date;
  Boost: BoostInterface;
  BoostGroup: BoostGroupsInterface;
  unassigned?: boolean;
  boostName?: string;
  boostSerialNumber?: string;
}

export interface BoostDevicesResponse {
  count: number;
  rows?: BoostDevices[];
}

export interface BoostInterface {
  boostId: number;
  boostName: string;
  boostSerialNumber: string;
  networkURL: string;
  technicalStatus: string;
  createdAt?: Date;
  updatedAt?: Date;
  unassigned?: boolean;
}

export interface IGeoLocation {
  location_type?: string;
  formatted_address?: string;
  lat?: number;
  lng?: number;
}

export interface IGeometry {
  address_components: Array<any>;
  formatted_address: string;
  geometry: { location: { lat: number; lng: number }; location_type: string };
  place_id: string;
  types: Array<string>;
}

export interface IConnectorStatus {
  countLeftAvailable: number;
  countLeftUnavailable: number;
  countLeftOffline: number;
  countLeftCharging: number;
  countRightAvailable: number;
  countRightUnavailable: number;
  countRightOffline: number;
  countRightCharging: number;
}

export enum ConnectorStatus {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
  Offline = 'OFFLINE',
  Charging = 'CHARGING'
}

export interface UtilizationSummaryIcon {
  type: string;
  color: string;
}

export interface UtilizationSummaryItem {
  name: string;
  value: string | number;
  icon: UtilizationSummaryIcon;
}

export const DEFAULT_UTILIZATION_SUMMARY: UtilizationSummaryItem[] = [
  {
    name: 'ChargingSessions_CCS',
    value: 0,
    icon: {
      type: 'mdi:ev-plug-type2',
      color: '#1877F2'
    }
  },
  {
    name: 'ChargingSessions_CHAdeMO',
    value: 0,
    icon: {
      type: 'mdi:ev-plug-chademo',
      color: '#DF3E30'
    }
  },
  {
    name: 'Total_Charging_Sessions',
    value: 0,
    icon: {
      type: 'icon-park-outline:energy-socket',
      color: '#004d40'
    }
  },
  {
    name: 'Total_Energy_Dispensed',
    value: 0,
    icon: {
      type: 'icon-park-outline:energy-socket',
      color: '#004d40'
    }
  },
  {
    name: 'Total_Charging_Duration',
    value: 0,
    icon: {
      type: 'ic:baseline-battery-charging-full',
      color: '#fb8c00'
    }
  },
  {
    name: 'Avg_Energy_Dispensed',
    value: 0,
    icon: {
      type: 'mdi:battery-charging-60',
      color: '#c62828'
    }
  },
  {
    name: 'Avg_Charging_Duration',
    value: 0,
    icon: {
      type: 'ic:baseline-battery-charging-90',
      color: '#4caf50'
    }
  }
];

export enum ReportType {
  connectorStatus = 'AFBReport3_boost_connector_status',
  utilizationSummary = 'AFBReport4_Utilization_Dashboard',
  barChartDays = 'AFBReport5_Utilization_Dashboard_Hr_Date',
  barChartHours = 'AFBReport6_Utilization_Dashboard_Hours'
}

export type SplunkInfo = {
  [key in ReportType]?: any;
};

export enum BoostMapsStrings {
  splunkInfoDate = 'splunkInfoDate',
  splunkInfo = 'splukInfo',
  Kwh = 'Kwh',
  Mins = 'Mins',
  Energy = 'Energy',
  Charging = 'Charging'
}

export const reportTypes: ReportType[] = Object.values(ReportType);

export const sessionsCount = [
  { day: 'Monday', count: 0 },
  { day: 'Tuesday', count: 0 },
  { day: 'Wednesday', count: 0 },
  { day: 'Thursday', count: 0 },
  { day: 'Friday', count: 0 },
  { day: 'Saturday', count: 0 },
  { day: 'Sunday', count: 0 }
];

export interface IBoost {
  addressId?: number;
  boostGroupId?: number;
  boostId: number;
  boostName: string;
  boostSerialNumber: string;
  networkId?: number;
  networkURL?: string;
  ownerId?: number;
  technicalStatus?: boolean;
}

export interface IBoostGroup {
  boostGroupId: number;
  boostGroupName: string;
  level: number;
  subBoostGroupName?: string;
  subBoostGroupId?: string;
  ownerId?: number;
  Owner: {
    ownerId: number;
    ownerName: string;
  };
  userId?: number;
  lowStateOfChargeValue?: number;
  networkURL: string;
  BoostGHrsOps: IBoostHoursOfOperation[];
  Network?: INetwork;
  Pricings: PricingModelInterface[];
  Contact: IContact;
  Image: IImage;
  Logo: IImage;
  logoId?: number;
  imageId?: number;
  TimeZone: ITimesZones;
  cpoCountryCode?: string;
  cpoPartyId?: string;
  autoRechargingSOCLimit?: number;
  Currency?: {
    id: number;
  };
  Address: {
    addressId?: number;
    street: string;
    zipCode: string;
    country: string;
    state: string;
    addressType?: string;
  };
  AmenitiesPointOfInterests: SitePOI[];
  Amenities: any; //Because of the backed.
  PointOfInterests: SitePOI[];
  isSite: boolean;
  timeOfUses: IHoursOfOperation[];
  country: string;
  languageId?: number;
  mainColorTheme?: string;
  secondaryColorTheme?: string;
  publishToEVNetwork: boolean;
  Boosts: IBoost[];
}

export interface IBoostGroupNetwork {
  networkId?: number;
  networkName?: string;
  networkURL?: string;
}

export interface IContact {
  contactId?: number;
  firstName: string;
  lastName: string;
  phone: string;
  region?: string;
}

export interface ICountries {
  countryId: number;
  code: string;
  name: string;
}

export interface ITimesZones {
  id: number;
  name: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICurrencies {
  currencyId: string;
  currencyName: string;
  currencySymbol: string;
}

export interface ILanguages {
  languageId: number;
  languageName: string;
  createdAt: string;
  updatedAt: string;
}

export type INetwork = Pick<IBoostGroupNetwork, 'networkId' | 'networkName'>;

export enum IBoostWeekDays {
  monday = 'Monday',
  tuesday = 'Tuesday',
  wednesday = 'Wednesday',
  thursday = 'Thursday',
  friday = 'Friday',
  saturday = 'Saturday',
  sunday = 'Sunday'
}

export interface IHoursOfOperation {
  dayName?: IBoostWeekDays;
  /** Monday as 0 */
  day: number;
  isActive: boolean;
  openTime?: TimePickerValue;
  closeTime?: TimePickerValue;
  subBoostGroupId?: string;
}

export interface IHoursOfOperationData {
  boostGHrsOp?: IHoursOfOperation[];
  timeOfUSe?: IHoursOfOperation[];
  timeZoneId?: number;
}

export interface IBoostHoursOfOperation {
  boostGHrsOpId: number;
  day: number;
  openTime: string;
  closeTime: string;
}

export interface PricingModelInterface {
  pricingId?: string;
  rate: number;
  pricingName: string;
  pricingTypeId: number;
  preAuthAmount: number;
  minimumPayment: number;
  dischargingTypeId?: number | undefined;
  dischargingLowerLimit?: number | undefined;
  dischargingHigherLimit?: number | undefined;
  status?: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface PricingTypeInterface {
  pricingTypeId: number;
  pricingName: string;
  status?: boolean;
}

export type EncodeImage = string | ArrayBuffer | null | undefined;

export interface IImage {
  imageId?: number;
  siteImagesId?: number;
  logoId?: number;
  image: { data: []; type: string };
  logo: { data: []; type: string };
  imageName: string;
  ownerId: number;
  imageURL?: string;
  logoURL?: string;
  selected?: boolean;
  updatedAt?: string;
  logoName?: string;
}

export interface BoostDeviceListProps {
  boostGroupId?: string | null;
  isSubGroup?: boolean | undefined;
  unassigned?: boolean;
}

export interface SiteConfigurationProps {
  boostGroupConfig: IBoostGroup | undefined;
  subBoostGroupId: string | null;
  onUpdate: any;
  openSnackBar: any;
  ownerId: string | null;
}

export interface BoostGroupDeviceConfigurationProps extends SiteConfigurationProps {
  activePricing: PricingModelInterface | undefined;
  boostDeviceParams: BoostDeviceListProps;
  boostGroupId: string | null | undefined;
  pricings?: PricingModelInterface[];
  roleId: number;
}

export interface ImageDetailsResponseInterface {
  count: number;
  rows: IImage[];
}

export interface IHoursOfOperationResponse {
  count: number;
  rows: IHoursOfOperation[];
}

export interface DischargingType {
  id: number;
  name: string;
  label: string;
  createdAt: string;
  updatedAt: string;
}

export interface BoostAddDeviceInterfaceSplunk {
  reportInfo?: any; // Any from the server.
  chargeEnergy?: any;
  sessionsCount?: any;
  sessionHoursCount?: any;
  boostStatus?: any;
  leftConnector?: string;
  rightConnector?: string;
}

export interface BoostDeviceConnector {
  type: string; //ConnectorTypes CATALOG
  status: string; // EVSEStatus CATALOG
  maxAmperage: number;
  maxVoltage: number;
  format: string; // ConnectorFormats CATALOG
  powerType: string; // ConnectorPowerTypes CATALOG
  cpoConnectorId: string; // values ONE or TWO there is no catalog for this
}
export interface BoostAddDeviceInterface extends BoostAddDeviceInterfaceSplunk {
  boostSerialNumber?: string;
  ownerId?: number;
  boostGroupId?: number;
  BoostGroup?: BoostGroupsInterface;
  subBoostGroupId?: number;
  totalBoostGroups?: number;
  totalBoost?: number;
  geoLocation?: IGeoLocation;
  Address?: {
    street: string;
    zipCode: string;
    state: string;
    country: string;
  };
  connectors?: BoostDeviceConnector[];
  addressId?: number;
  boostId?: number;
  boostGroupName?: string;
  boostName?: string;
  createdAt?: string;
  networkId?: string;
  networkURL?: string;
  technicalStatus?: boolean;
  updatedAt?: string;
  clientId?: any;
}

export interface ISocData {
  time: string;
  soc: number;
}

export interface IDemandChargeData {
  time: string;
  wIn: number;
  wOut: number;
}

export interface IPricingModel {
  pricingId?: string;
  rate?: number;
  pricingName?: string;
  pricingTypeId?: number;
  preAuthAmount?: number;
  minimumPayment?: number;
  dischargingTypeId?: number | undefined;
  dischargingLowerLimit?: number | undefined;
  dischargingHigherLimit?: number | undefined;
  // This turns into a component icon
  status?: any;
  createdAt?: any;
  updatedAt?: any;
}

export const addressFields = [
  {
    label: 'Street',
    name: 'Address.street',
    required: true
  },
  {
    label: 'Zip Code',
    name: 'Address.zipCode',
    required: true
  },
  {
    label: 'State',
    name: 'Address.state',
    required: true
  },
  {
    label: 'Country',
    name: 'Address.country',
    required: true
  },
  {
    label: 'City',
    name: 'Address.city',
    required: true
  }
];

export const boostConnectorFields = [
  {
    label: 'Type',
    name: 'connectorDetails.type'
  },
  {
    label: 'Status',
    name: 'connectorDetails.status'
  },
  {
    label: 'Max Amperage',
    name: 'connectorDetails.maxAmperage'
  },
  {
    label: 'Max Voltage',
    name: 'connectorDetails.maxVoltage'
  },
  {
    label: 'Format',
    name: 'connectorDetails.format'
  }
];

export const splunkDateFormat = 'YYYY-MM-DDTHH:mm:ss';

const selectedRangeChosen = 'MM/DD/YYYY';

const splunkRangeFormats: { [key: string]: any } = {
  Yesterday: {
    startTime: '-1d@d',
    endTime: '@d',
    startTimeEquivalent: dayjs().subtract(1, 'days'),
    endTimeEquivalent: dayjs().subtract(1, 'days')
  },
  'Last 7 Days': {
    startTime: '-7d@d',
    endTime: '@d',
    startTimeEquivalent: dayjs().subtract(6, 'days'),
    endTimeEquivalent: dayjs()
  },
  'Last 30 Days': {
    startTime: '-30d@d',
    endTime: '@d',
    startTimeEquivalent: dayjs().subtract(29, 'days'),
    endTimeEquivalent: dayjs()
  },
  'This Month': {
    startTime: '@mon',
    endTime: '@d',
    startTimeEquivalent: dayjs().startOf('month'),
    endTimeEquivalent: dayjs().endOf('month')
  },
  'Last Month': {
    startTime: '-1mon@mon',
    endTime: '@mon',
    startTimeEquivalent: dayjs().subtract(1, 'month').startOf('month'),
    endTimeEquivalent: dayjs().subtract(1, 'month').endOf('month')
  },
  'Last 3 Month': {
    startTime: '-3mon@mon',
    endTime: '@mon',
    startTimeEquivalent: dayjs().subtract(3, 'month').startOf('month'),
    endTimeEquivalent: dayjs().subtract(1, 'month').endOf('month')
  }
};

export interface IDateRangeFormat {
  chosenLabel: any;
  startDate?: any;
  endDate?: any;
}

export const getSelectedRangeFromSplunkFormats = (
  startTime: string,
  endTime: string
): IDateRangeFormat => {
  // means that the values are probably on splunk's own format and we need to match them with the option we have for display
  dayjs.extend(customParseFormat);
  const startDate = dayjs(startTime, splunkDateFormat);
  const endDate = dayjs(endTime, splunkDateFormat);
  if (startDate.isValid() && endDate.isValid()) {
    // dates are valid so it means custom range
    return {
      chosenLabel: `${startDate.format(selectedRangeChosen)} - ${endDate.format(
        selectedRangeChosen
      )}`,
      startDate: startDate,
      endDate: endDate
    };
  } else {
    for (const property in splunkRangeFormats) {
      if (
        splunkRangeFormats[property].startTime === startTime &&
        splunkRangeFormats[property].endTime === endTime
      ) {
        return {
          chosenLabel: property,
          startDate: splunkRangeFormats[property].startTimeEquivalent,
          endDate: splunkRangeFormats[property].endTimeEquivalent
        };
      }
    }
  }
  return {
    chosenLabel: ''
  };
};

export interface ISocData {
  time: string;
  soc: number;
}

export interface IDemandChargeData {
  time: string;
  wIn: number;
  wOut: number;
}

export interface IPricingModel {
  pricingId?: string;
  rate?: number;
  pricingName?: string;
  pricingTypeId?: number;
  preAuthAmount?: number;
  minimumPayment?: number;
  dischargingTypeId?: number | undefined;
  dischargingLowerLimit?: number | undefined;
  dischargingHigherLimit?: number | undefined;
  // This turns into a component icon
  status?: any;
  createdAt?: any;
  updatedAt?: any;
}

export interface ISiteMangmentAccordians {
  title: string;
  icon: any;
  content: any;
}

export interface IConnectorFormat {
  connectorFormatId: number;
  value: string;
}

export interface IConnectorPowerType {
  connectorPowerTypesId: number;
  value: string;
}

export interface IConnectorType {
  connectorTypesId: number;
  value: string;
}

export interface IEVSEStatus {
  evsesStatusId: number;
  value: string;
}

const CPOConnectorIdKeys = [{ key: 'ONE' }, { key: 'TWO' }];

export const CPOConnectorIds = CPOConnectorIdKeys.map((v) => ({
  key: v.key,
  value: v.key,
  label: v.key
}));

export const DEFAULT_CONNECTOR_STATUS: IConnectorStatus = {
  countLeftAvailable: 0,
  countLeftUnavailable: 0,
  countLeftOffline: 0,
  countLeftCharging: 0,
  countRightAvailable: 0,
  countRightUnavailable: 0,
  countRightOffline: 0,
  countRightCharging: 0
};

export const defaultConnector = (connectorType: string): BoostDeviceConnector => {
  return {
    type: 'CHADEMO', //ConnectorTypes CATALOG
    status: 'AVAILABLE', // EVSEStatus CATALOG
    maxAmperage: 0,
    maxVoltage: 0,
    format: '', // ConnectorFormats CATALOG
    powerType: '', // ConnectorPowerTypes CATALOG
    cpoConnectorId: connectorType == 'Left' ? 'ONE' : 'TWO' // values ONE or TWO there is no catalog for this)
  };
};

export const DEFAULT_SPLUNK_INFO: SplunkInfo = {
  AFBReport3_boost_connector_status: DEFAULT_CONNECTOR_STATUS,
  AFBReport4_Utilization_Dashboard: DEFAULT_UTILIZATION_SUMMARY,
  AFBReport5_Utilization_Dashboard_Hr_Date: [0, 0, 0, 0, 0, 0, 0, 0],
  AFBReport6_Utilization_Dashboard_Hours: [0, 0, 0, 0, 0, 0, 0, 0]
};
