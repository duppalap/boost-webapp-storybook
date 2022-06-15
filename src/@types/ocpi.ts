import { enumToArray } from 'utils/common';

export enum OCPIRegistrationStatus {
  pending = 'PENDING',
  registered = 'REGISTERED'
}

export enum OcpiCredentialStatus {
  active = 'ACTIVE'
}

export enum OcpiCredentialType {
  tokenA = 'CREDENTIALS_TOKEN_A',
  tokenB = 'CREDENTIALS_TOKEN_B'
}

export const DefaultRegistrationStatus = enumToArray(OCPIRegistrationStatus);

export const DefaultCountryCodes = [
  {
    key: 'US',
    value: 'US',
    label: 'US'
  },
  {
    key: 'MX',
    value: 'MX',
    label: 'MX'
  },
  {
    key: 'CA',
    value: 'CA',
    label: 'CA'
  },
  {
    key: 'AR',
    value: 'AR',
    label: 'AR'
  },
  {
    key: 'CR',
    value: 'CR',
    label: 'CR'
  }
];

export interface IOcpiVersion {
  version: string;
  url: URL;
}

export interface IOcpiVersionDetails {
  version: string;
  endpoints: [];
}

export interface IOcpiCredential {
  id?: string;
  token?: string;
  token_type: string;
  token_status: string;
  url?: URL | string;
}
export interface IOcpiRegistration {
  id?: string | null;
  name: string;
  country_code: string;
  party_id: string;
  role: string;
  registration_status: string;
  last_updated: null;
  url: URL | string;
  credentials: IOcpiCredential[];
  versions: any;
  version_details: any;
  associated_emsps: any[];
  associated_cpos: any[];
}

export const DefaultCPORegistration = {
  id: null,
  country_code: '',
  name: '',
  party_id: '',
  role: 'CPO',
  registration_status: OCPIRegistrationStatus.registered,
  last_updated: null,
  url: '',
  credentials: [
    {
      token: '',
      token_type: OcpiCredentialType.tokenA,
      token_status: OcpiCredentialStatus.active
    }
  ],
  versions: '',
  version_details: '',
  associated_emsps: [],
  associated_cpos: []
};

export const DefaultEMSPRegistration = Object.assign(
  {},
  { ...DefaultCPORegistration },
  { role: 'EMSP', registration_status: OCPIRegistrationStatus.pending }
);
