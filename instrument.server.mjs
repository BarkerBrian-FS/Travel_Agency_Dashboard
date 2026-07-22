import * as Sentry from "@sentry/react-router";
Sentry.init({
  dsn: "https://84ad8d8953e64016d381f95d24fd8b77@o4511757737197569.ingest.us.sentry.io/4511768300355584",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});
