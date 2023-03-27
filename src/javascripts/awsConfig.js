import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIA5XVMW33J3CQATU6A",
  secretAccessKey: "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",
  region: "eu-central-1",
});

const ses = new AWS.SES();

export { ses };
