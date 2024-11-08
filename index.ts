import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";


// Create a new SSM Parameter
const parameter = new aws.ssm.Parameter("example-parameter", {
    name: "/my/parameter/path",
    type: "String",
    value: "my-parameter-value",
    description: "Example SSM parameter", // Optional
    tier: "Standard", // Optional: Standard (default) or Advanced
    tags: { // Optional
        Environment: "dev",
        Project: "example"
    },
});


const parameter2 = new aws.ssm.Parameter("example-parameter2", {
    name: "/my/parameter/path2",
    type: "String",
    value: "my-parameter-value2",
    description: "Example SSM parameter2", // Optional
    tier: "Standard", // Optional: Standard (default) or Advanced
    tags: { // Optional
        Environment: "dev",
        Project: "example"
    },
});


// Export the parameter ARN and name for reference
export const parameterArn = parameter.arn;
export const parameterName = parameter.name;

