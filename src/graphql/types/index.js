import { GraphQLObjectType, GraphQLList } from "graphql";

import { UploadResponseType } from "./upload.type";
import { uploadService } from "../../services";

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    uploads: {
      type: UploadResponseType,
      resolve: async (parent, args, context) => {
        const { data } = await uploadService.getUploads();
        return data;
      },
    },
  },
});

export { RootQuery };
