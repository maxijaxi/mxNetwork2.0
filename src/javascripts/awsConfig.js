import AWS from "aws-sdk";

// Parse Amplify Secret (Injected as a JSON string)
const awsCredentials = JSON.parse(process.env.AWS_CREDENTIALS || "{}");

AWS.config.update({
  accessKeyId: awsCredentials.accessKeyId,
  secretAccessKey: awsCredentials.secretAccessKey,
  region: awsCredentials.region,
});

const ses = new AWS.SES();

export { ses };
