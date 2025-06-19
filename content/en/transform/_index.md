+++
title = "6. Data Transformation"
weight = 6
+++

## Steps to Perform

In this section, we will use Glue ETL to transform data from the S3 bucket `fashion-landing-zone` to the S3 bucket `fashion-clean-zone`. The goal is to prepare the data for analysis and storage.

This section will include the following steps:
- Create a Glue Job to transform data from the S3 bucket `fashion-landing-zone` to the S3 bucket `fashion-clean-zone`
- Create a Glue Trigger to automatically run the Glue Job
- Check the data in the S3 bucket `fashion-clean-zone`
- Create a Glue Crawler to automatically generate a Glue Data Catalog for the data in the S3 bucket `fashion-clean-zone`
