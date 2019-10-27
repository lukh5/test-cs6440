# Research
**Author**: James Calhoun, Alex Lipford, Katherine Lu, Robert Smayda

**Team**: Asclepius

## Questions
### What is pseudonymization?
Pseudonymization is the processing of personal data in such a way that the data can no longer be attributed to a specific person without the use of additional information. The additional information must be kept separately [3].
### Ways to pseudonymize?
* **Scrambling** involves mixing of letters. The process can be reversible. An example is: “Robert” could become “Tobrer” [2]
* **Encryption** involves turning the a string into something unintelligible with the use of a key. The process cannot be reversed without access to the correct decryption key. The decryption key must be kept separately from the pseudonymized data.[2]
* **Masking** allows an important/unique part of the data to be hidden with random characters or other data. For example for credit cards may look like: “**** **** **** 0227”. [2]
* **Data blurring** uses an approximation of data values to render their meaning obsolete and/or make it impossible to identify individuals. A good example here is bucketing of data, ie take 5 percentile buckets of all blood pressure data and assign a bucket to each patient instead of the raw value. [2]
### Has anyone done this type of work before?
Yes, Al-Zubaidie, et al created PAX [1]. PAX is a modular system that depends on client and server applications [1]. It provides a security solution to the privacy issues and the problem of safe-access decisions for patients’ data [1]. Pax applies random pseudonyms to separate the association between patients’ attributes and data. In PAX, they propose the use of four datasets: 
1. users’ attributes (patients and healthcare providers);
1. applying pseudonyms to users; 
1. users’ policies (on Attribute Server); 
1. patients’ data (on Data Server). 
When they want to add a new healthcare provider or patient, the PAX randomly generates a pseudonym for that user and adds it to the second dataset [1].

Neubauer, T., & Heurix, J have developed a methodology as well [4].

## Resources/Works Cited
[1] Al-Zubaidie, M., Zhang, Z., & Zhang, J. (2019). PAX: Using Pseudonymization and Anonymization to Protect Patients' Identities and Data in the Healthcare System. International journal of environmental research and public health, 16(9), 1490. doi:10.3390/ijerph16091490

[2] Ewerlf, A. (2018, June 21). GDPR pseudonymization techniques. Retrieved October 15, 2019, from https://medium.com/@alexewerlof/gdpr-pseudonymization-techniques-62f7b3b46a56.

[3] Report, G. D. P. R. (2017, November 7). Data masking: Anonymisation or pseudonymisation? Retrieved October 15, 2019, from https://gdpr.report/news/2017/11/07/data-masking-anonymisation-pseudonymisation/.

[4] Neubauer, T., & Heurix, J. (2011). A methodology for the pseudonymization of medical data. International Journal of Medical Informatics, 80(3), 190–204. doi: 10.1016/j.ijmedinf.2010.10.016 
