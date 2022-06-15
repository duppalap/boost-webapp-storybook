import { BoostMapsStrings } from '../@types/boost';

export const cleanSplunkInfo = () => {
  localStorage.removeItem(BoostMapsStrings.splunkInfoDate);
  localStorage.removeItem(BoostMapsStrings.splunkInfo);
};
