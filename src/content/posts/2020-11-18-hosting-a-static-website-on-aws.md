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

*Note that using S3 will only work for static websites - ie those with HTML, CSS and JS.*

On the Overview Tab, upload the site code, creating folders as necessary:

![](/assets/aws-1.png)

You will probably need CSS, Img and JS folders, plus your favicon.ico and index.html.
￼
On the Properties Tab, click on Static Website Hosting, and check ‘Use this bucket to host a website.

![](/assets/aws-2.png)

Type in the names of the Index and Error documents, and then Save.  The 'Error' doc can be the same as the 'Index'.
￼
*Note the Endpoint.*  In this example it is \
**http://darkyellow.co.uk.s3-website.eu-west-2.amazonaws.com**

You can put this URL into a browser to see if it works. You may need to wait a minute or two.  Make a note of this end point, because it will be needed in a CNAME with your domain registrar in a later step.

On the Permissions Tab, click on the Block Public Access Tab and turn it off. Type in ‘confirm’, then Confirm.

![](/assets/aws-3.png)

Then on the Bucket Policy tab, enter the policy as below, replacing the url in this example, with your own.  Note that: '*"Version": "2012-10-17"'* is not a date, so don't try to change it.

```
{ 
  "Version": "2012-10-17",
    "Id": "Policy1603792352865",
    "Statement": [
        {
            "Sid": "Stmt1603792351039",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::www.darkyellow.co.uk/*"
        }
    ]
}
```

![](/assets/aws-4.png)

## Repeat for the www subdomain

Go back to the beginning and create a new bucket for the www. subdomain.
*This time, there is no need to upload the site files.*

The Static Website Hosting should be set to *redirect to the main domain name,* not the AWS bucket that you have just set up.

![](/assets/aws-5.png)

Just like the main domain, the www.subdomain should have public access, and a Bucket Policy set.

## Create a Hosted Zone on Amazon Route53

Create a Hosted Zone for your domain name.  You just need one, the www. subdomain will be taken care of by a second A Record.

![](/assets/aws-6.png)

Then Click on the newly created hosted zone domain name:￼

![](/assets/aws-7.png)

**Create an A Record** by clicking on Create Record, then Simple Routing and Next. Then click on Define simple record.

Leave the subdomain box blank.

Route traffic to ‘Alias to S3 website endpoint
Choose the hosting zone
and then select the S3 bucket that is offered

Leave the record type as A - Routes traffic to an IPv4 address and some AWS resources

Change Evaluate target health *from the default to ‘No’.*

Then click on the Define Simple Record button.

*Repeat the above,* but this time enter www in the subdomain box. Everything else is the same.

Don’t forget to click on the final Create Records button.



**Create an MX Record** ￼

When the domain has a forwarded email address, for example, you don't actually have an email account, but instead forward a contact@domainname.com to your own email, then you will need to create an  MX Record, and include the domain registrar’s MX records:

For example:

  10 mx0.myregistrar.co.uk
  20 mx1.myregistrar.co.uk

If this domain does have its own email account with a third-party email provider then you need to create an MX record with *their* MX records, or your email will stop working.

![](/assets/aws-8.png)



When the domain you are moving to AWS has an email account as well, then you will also need to create  TXT and SRV records:

**Create a TXT Record** 

v=spf1 include:spf.everycloudtech.com Ip4:88.151.128.0/21 -all￼

![](/assets/aws-9.png)

**Create an SRV Record** 

![](/assets/aws-10.png)

￼

## At your domain registrar

Select the Domain on your registrar’s Control Panel. Update the Nameservers to be those specified by AWS Route53, as in the graphic below:

![](/assets/aws-11.png)

Go to the Nameserver section in your Domain Registrar (if it is not Amazon Route53, who also provide these services).

![](/assets/aws-11b.png)

**Create a CNAME to point to the AWS S3 Endpoint.** 

Then in your domain registrar's control panel, perhaps under Advanced DNS, create a WWW CNAME to point to the AWS S3 Endpoint. No need to include the http://  or the www.

![](/assets/aws-12.png)

Remove any A Records.￼

**Check propagation progress at whatsmydns.net**￼

![](/assets/aws-13.png)

**Note**
Changes generally propagate to all Route 53 servers within 60 seconds. When propagation is done, you can route traffic to your Amazon S3 bucket by using the names of the alias records that you created in this procedure.

***That's it!***