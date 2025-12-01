/**
 * A set of functions called "actions" for `greencity`
 */

import projectData from "./project.json";

export default {
  getprojects: async (ctx, next) => {
    try {
      ctx.status = 200; // OK
      ctx.body = {
        data: projectData,
        timestamp: Date.now(),
      };
    } catch (err) {
      ctx.status = 500; // Internal Server Error
      ctx.body = err;
    }
  },
};
