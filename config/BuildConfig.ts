

const ENVIRONMENT: 'PROD' | 'DEV' = 'DEV'

const BuildConfig = {
   PROD: {
      BASE_URL: "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
   },
   DEV: {
      API_KEY: "AIzaSyDCrPAzhzWxZbJxPYIEURODTvBFVVRNHbY",
      BASE_URL: "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
   }
}

export default BuildConfig[ENVIRONMENT]