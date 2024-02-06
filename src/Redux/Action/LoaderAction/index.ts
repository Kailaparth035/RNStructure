import * as Type from '../../../Theme/Constant/ReduxTypes';

export const LoaderAction = (loader: any) => ({
    type: Type.LOADER,
    loader,
  });