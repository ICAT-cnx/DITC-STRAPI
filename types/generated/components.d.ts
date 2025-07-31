import type { Schema, Struct } from '@strapi/strapi';

export interface UrlItemUrls extends Struct.ComponentSchema {
  collectionName: 'components_url_item_urls';
  info: {
    displayName: 'project-urls';
  };
  attributes: {
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'url-item.urls': UrlItemUrls;
    }
  }
}
