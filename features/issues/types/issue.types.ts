export enum IssueLevel {
  info = "info",
  warning = "warning",
  error = "error",
}
// type alias
export type Issue = {
  id: string;
  projectId: string;
  name: string;
  message: string;
  stack: string;
  level: IssueLevel;
  numEvents: number;
  numUsers: number;
};
