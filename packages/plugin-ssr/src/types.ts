export interface IEntryPluginOptions {
  api: any;

  entries: any;
  documentPath: string;

  assetsProcessor?: string;
}

export interface IPageConfig {
  path?: string;
  window?: any;
  [key: string]: any;
}

export interface IFormattedLoaderQuery extends ILoaderQuery {
  needInjectStyle?: boolean;
  pageConfig?: IPageConfig;
  updateDataInClient: boolean;
}

export interface ILoaderQuery {
  documentPath?: string;
  entryName?: string;
  needInjectStyle?: boolean | string;
  publicPath?: string;
  tempPath: string;
  injectedHTML?: any;
  assetsProcessor?: string;
  pageConfig?: IPageConfig | string;
  doctype?: string;
  updateDataInClient: boolean | string;
  runAppPath?: string;
}
