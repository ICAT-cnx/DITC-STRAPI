import type { Schema, Struct } from '@strapi/strapi';

export interface FacilityDetailFacilityDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_facility_detail_facility_descriptions';
  info: {
    displayName: 'facility-description';
  };
  attributes: {
    FacilityDetail: Schema.Attribute.Blocks;
  };
}

export interface FacilityDetailFacilitySubImages
  extends Struct.ComponentSchema {
  collectionName: 'components_facility_detail_facility_sub_images';
  info: {
    displayName: 'facility-sub-images';
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
    displayName: 'news-description';
  };
  attributes: {
    NewsDescription: Schema.Attribute.Blocks;
  };
}

export interface NewsDetailNewsSubImages extends Struct.ComponentSchema {
  collectionName: 'components_news_detail_news_sub_images';
  info: {
    displayName: 'news-sub-images';
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
    displayName: 'project-description';
  };
  attributes: {
    ProjectDescription: Schema.Attribute.Blocks;
  };
}

export interface ProjectDetailProjectSubImages extends Struct.ComponentSchema {
  collectionName: 'components_project_detail_project_sub_images';
  info: {
    displayName: 'project-sub-images';
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
    displayName: 'project-urls';
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
