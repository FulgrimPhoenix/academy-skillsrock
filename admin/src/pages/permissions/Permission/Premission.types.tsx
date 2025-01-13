export interface IPermissionArgs {
  permissionId: string | null;
  handleClose: (arg: { _id: string; name: string; description: string }) => void;
}
