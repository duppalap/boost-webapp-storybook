import { ISelectOption } from "components";
import { filter } from "lodash";
import { UserRolesInterface } from "../@types/user";

export function applySortFilter(
  array: any[],
  comparator: (a: any, b: any) => number,
  query: string
) {
  const stabilizedThis = array.map((el, index) => [el, index] as const);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) =>
        _user.boostSerialNumber.toLowerCase().indexOf(query.toLowerCase()) !==
        -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export type Anonymous = Record<string | number, string>;

export function descendingComparator(
  a: Anonymous,
  b: Anonymous,
  orderBy: string
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order: string, orderBy: string) {
  return order === "desc"
    ? (a: Anonymous, b: Anonymous) => descendingComparator(a, b, orderBy)
    : (a: Anonymous, b: Anonymous) => -descendingComparator(a, b, orderBy);
}

export const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export const getFilteredRoles = (
  response: any,
  userRoleId: number | null
): ISelectOption[] => {
  const data: UserRolesInterface[] = response.data;
  if (userRoleId === 3) {
    response.data.splice(0, 3);
  }
  if (userRoleId === 2) {
    response.data.splice(0, 1);
  }
  let roles: ISelectOption[] = [];
  data.forEach((p) => {
    const option: ISelectOption = {
      key: p.userRoleId,
      value: p.userRoleId,
      label: p.role,
    };
    roles = [...roles, option];
  });
  return roles;
};

export function enumToArray(enumme: { [x: string]: any }) {
  const map: { key: string; value: string; label: string }[] = [];

  for (const n in enumme) {
    map.push({ key: <any>enumme[n], value: n, label: n });
  }
  return map;
}
