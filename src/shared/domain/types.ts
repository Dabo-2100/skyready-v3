export interface Aircraft {
  documentId: string;
  tailNo: string;
  serialNo: string;
  customerNo: string;
  aircraft_status: {
    name: string;
  };
}

export interface AppFeature {
  documentId: string;
  user_authorities: [
    {
      canRead: boolean;
      canUpdate: boolean;
      canDelete: boolean;
      canCreate: boolean;
      app_feature: {
        name: string;
        label: string;
        isActive: boolean;
        documentId: string;
      };
    }
  ];
}

export interface UserAuthority {
  documentId: string;
  canUpdate: boolean;
  canRead: boolean;
  canDelete: boolean;
  canCreate: boolean;
  app_feature: {
    documentId: string;
    label: string;
    name: string;
  };
}
