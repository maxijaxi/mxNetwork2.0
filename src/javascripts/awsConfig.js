import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIA5XVMW33JXM254SVR",
  secretAccessKey: "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",
  region: "eu-central-1",
});

const ses = new AWS.SES();

export { ses };
