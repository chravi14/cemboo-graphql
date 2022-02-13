import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";

const BasicDetailsType = new GraphQLObjectType({
  name: "BasicInfo",
  fields: () => {
    return {
      title: {
        type: GraphQLString,
      },
      description: {
        type: GraphQLString,
      },
      directors: {
        type: new GraphQLList(GraphQLString),
      },
      productionYear: {
        type: GraphQLInt,
      },
      audience: {
        type: GraphQLString,
      },
      producers: {
        type: new GraphQLList(GraphQLString),
      },
      genres: {
        type: new GraphQLList(GraphQLString),
      },
      imdbLink: {
        type: GraphQLString,
      },
    };
  },
});

const ThumbnailImagesType = new GraphQLObjectType({
  name: "ThumbnailInfo",
  fields: () => {
    return {
      imagePath: {
        type: GraphQLString,
      },
    };
  },
});

const MediaDetailsType = new GraphQLObjectType({
  name: "MediaInfo",
  fields: () => {
    return {
      thumbnailImages: {
        type: new GraphQLList(ThumbnailImagesType),
      },
      videoFilePath: {
        type: GraphQLString,
      },
    };
  },
});

const SubtitleType = new GraphQLObjectType({
  name: "SubtitleInfo",
  fields: () => {
    return {
      subtitleFilePath: {
        type: GraphQLString,
      },
      subtitleLanguage: {
        type: GraphQLString,
      },
    };
  },
});

const LanguageDetailsType = new GraphQLObjectType({
  name: "LanguageInfo",
  fields: () => {
    return {
      videoLanguage: {
        type: GraphQLString,
      },
      subtitle: {
        type: new GraphQLList(SubtitleType),
      },
    };
  },
});

const CastType = new GraphQLObjectType({
  name: "Cast",
  fields: () => {
    return {
      name: { type: GraphQLString },
      actorImage: { type: GraphQLString },
      roleName: { type: GraphQLString },
    };
  },
});

const CastDetailsType = new GraphQLObjectType({
  name: "CastInfo",
  fields: () => {
    return {
      useIMDBData: {
        type: GraphQLBoolean,
      },
      cast: {
        type: new GraphQLList(CastType),
      },
    };
  },
});

const SponsorType = new GraphQLObjectType({
  name: "Sponsor",
  fields: () => {
    return {
      name: { type: GraphQLString },
      sponsorImagePath: { type: GraphQLString },
    };
  },
});

const UploadType = new GraphQLObjectType({
  name: "UploadInfo",
  fields: () => {
    return {
      basic: {
        type: BasicDetailsType,
      },
      media: {
        type: MediaDetailsType,
      },
      langauge: {
        type: LanguageDetailsType,
      },
      cast: {
        type: CastDetailsType,
      },
      sponsors: {
        type: new GraphQLList(SponsorType),
      },
      status: { type: GraphQLString },
    };
  },
});

export const UploadResponseType = new GraphQLObjectType({
  name: "UploadResponse",
  fields: () => {
    return {
      status: {
        type: GraphQLInt,
      },
      data: {
        type: new GraphQLList(UploadType),
      },
    };
  },
});

export { UploadType };
