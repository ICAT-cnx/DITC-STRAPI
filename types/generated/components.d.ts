import type { Schema, Struct } from '@strapi/strapi';

export interface FacilityDetailFacilityDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_facility_detail_facility_descriptions';
  info: {
    displayName: '\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E2A\u0E34\u0E48\u0E07\u0E2D\u0E33\u0E19\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E14\u0E27\u0E01';
  };
  attributes: {
    FacilityDetail: Schema.Attribute.Blocks;
  };
}

export interface FacilityDetailFacilitySubImages
  extends Struct.ComponentSchema {
  collectionName: 'components_facility_detail_facility_sub_images';
  info: {
    displayName: '\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A';
  };
  attributes: {
    FacilitySubImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface NewsDetailNewsDescription extends Struct.ComponentSchema {
  collectionName: 'components_news_detail_news_descriptions';
  info: {
    displayName: '\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23';
  };
  attributes: {
    NewsDescription: Schema.Attribute.Blocks;
  };
}

export interface NewsDetailNewsSubImages extends Struct.ComponentSchema {
  collectionName: 'components_news_detail_news_sub_images';
  info: {
    displayName: '\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A';
  };
  attributes: {
    NewsSubImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ProjectDetailProjectDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_project_detail_project_descriptions';
  info: {
    displayName: '\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23';
  };
  attributes: {
    ProjectDescription: Schema.Attribute.Blocks;
  };
}

export interface ProjectDetailProjectSubImages extends Struct.ComponentSchema {
  collectionName: 'components_project_detail_project_sub_images';
  info: {
    displayName: '\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A';
  };
  attributes: {
    ProjectSubImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface UrlItemUrls extends Struct.ComponentSchema {
  collectionName: 'components_url_item_urls';
  info: {
    displayName: '\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07';
  };
  attributes: {
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'facility-detail.facility-description': FacilityDetailFacilityDescription;
      'facility-detail.facility-sub-images': FacilityDetailFacilitySubImages;
      'news-detail.news-description': NewsDetailNewsDescription;
      'news-detail.news-sub-images': NewsDetailNewsSubImages;
      'project-detail.project-description': ProjectDetailProjectDescription;
      'project-detail.project-sub-images': ProjectDetailProjectSubImages;
      'url-item.urls': UrlItemUrls;
    }
  }
}
