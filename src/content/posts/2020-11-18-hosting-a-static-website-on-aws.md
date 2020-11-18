---
template: blog-post
title: Hosting a static website on AWS
slug: /host-on-aws
date: 2020-11-18 17:44
description: Simple instructions on how to host you simple website on AWS,
  rather than on your domain registrar's hosting service.
featuredImage: /assets/aws-blue.png
---
# Domain Set Up

*Sign Up or Sign In to the AWS Management Console*

![AWS Management Console](/assets/screenshot-2020-11-18-at-17.47.42.png "AWS Management Console")

On the Amazon S3 Console, create a Bucket with the exact same name as the Domain you wish to host. You can choose which AWS Region you want your bucket to be based in. It makes sense to choose the region you live in.  

*Note that using S3will only work for static websites - ie those with HTML, CSS and JS.*

On the Overview Tab, upload the site code, creating folders as necessary:

![](/assets/aws-1.png)

You will probably need CSS, Img and JS folders, plus your favicom.ico and index.html
￼
On the Properties Tab, click on Static Website Hosting, and check ‘Use this bucket to host a website.

![](/assets/aws-2.png)

Type in the names of the Index and Error documents, and then Save.
￼
Note the Endpoint.  In this example it is \
http://darkyellow.co.uk.s3-website.eu-west-2.amazonaws.com

You can put this URL into a browser to see if it works. You may need to wait a minute or two.  Make a note of this end point, because it will be needed in a CNAME with your domain registrar in a later step.

On the Permissions Tab, click on the Block Public Access Tab and turn it off. Type in ‘confirm’, then Confirm.
￼
Then on the Bucket Policy tab, enter the policy as below, replacing the url in this example, with your own.  Note that: '*"Version": "2012-10-17"'* is not a date, so don't change it

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::**darkyellow.co.uk**/*"
        }
    ]
}

\##Repeat for the www subdomain

Go back to the beginning and create a new bucket for the www. subdomain.
*This time, there is no need to upload the site files.*

The Static Website Hosting should be set to redirect to the main domain name.
￼
Just like the main domain, the www.subdomain should have public access, and a Bucket Policy set.
￼

\#Create a Hostes Zone on Amazon Route53

Create a Hosted Zone for this domain name:

￼
Then Click on the newly created hosted zone domain name:
￼

Create an A Record by clicking on Create Record, then Simple Routing and Next. Then click on Define simple record.

Leave the subdomain box blank.

Route traffic to ‘Alias to S3 website endpoint
Choose the hosting zone
and then select the S3 bucket that is offered

Leave the record type as A - Routes traffic to an IPv4 address and some AWS resources

Change Evaluate target health from the default to ‘No’.

Then click on the Define Simple Record button.

Repeat the above, but this time enter www in the subdomain box. Everything else is the same.

Don’t forget to click on the final Create Records button.

When the domain has a forwarded email address,  Create an MX Record
and include the domain registrar’s MX records:

10 mx0.123-reg.co.uk
20 mx1.123-reg.co.uk

When the domain has an email account as well, then 

Create an MX Record 
￼

Create a TXT Record 

v=spf1 include:spf.everycloudtech.com Ip4:88.151.128.0/21 -all
￼

Create an SRV Record 

￼

\#At your doamn registrar

Select the Domain on your registrar’s Control Panel

Update the Nameservers to be those specified by AWS Route53

￼

Advanced DNS.  Create a CNAME to point to the AWS S3 Endpoint. No need to include the http://  or the www.

Remove any A Records.
￼

Check propagation progress at whatsmydns.net
￼

Note
Changes generally propagate to all Route 53 servers within 60 seconds. When propagation is done, you can route traffic to your Amazon S3 bucket by using the names of the alias records that you created in this procedure.