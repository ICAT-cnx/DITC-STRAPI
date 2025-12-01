export default {
  routes: [
    // {
    //  method: 'GET',
    //  path: '/greencity',
    //  handler: 'greencity.exampleAction',
    //  config: {
    //    policies: [],
    //    middlewares: [],
    //  },
    // },
    {
      method: "GET",
      path: "/jsonprojects",
      handler: "jsonproject.getprojects",
    },
  ],
};
