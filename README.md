# uide-aws-environment

This repository contains the code to create a test AWS environment with an EC2 instance running MongoDB. The environment is created using a CloudFormation template.

## Prerequisites

- AWS Account
- User with the necessary permissions to create the resources
- AWS CLI installed

## Content

```bash

    ├── assets                 
    │   ├── aws-cloudwatch
    │   │   └── config.json     AWS CloudWatch configuration file
    │   ├── mongodb
    │   │   └── mongod.conf     MongoDB configuration file
    │   └── scripts
    │       ├── countryEC.js    Script to populate the database with countries
    │       ├── initData.js     Script to populate the database with initial data
    │       └── users.js        Script to create the database users
    ├── README.md
    └── template.yaml           CloudFormation template to create the resources 
```

## Resources created by the CloudFormation template:

- IAM Role with the necessary permissions
- AWS Security Group
- EC2InstanceProfile
- EC2 Instance with MongoDB installed
- EC2 Key Pair
- AWS CloudWatch Log Group







