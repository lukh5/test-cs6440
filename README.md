# Rapilytics (Rap-e-lit-eks)

Research and build a POC psuedonimization technique to allow effective analytics as well as rapid and effective response to epidemic threats. Tools & Technology: Bloom Filters

Healthcare providers want to be able to share patients’ data with researchers, like the CDC, but need to comply with HIPAA and protect the patients privacy. Also when data is shared and if the researchers find something to help or heal the researched patients there would need to be a way to trace back to the patients. This FHIR application will take in a pseudonymization approach, in hopes of complying with HIPAA and be able to propagate life-saving findings back to the patients themselves.

## Team
### Name: [Asclepius](https://www.ancient.eu/Asclepius/)

Members | GT ID | Role | Description
--- | --- | --- | ---
Alex Lipford | alipford3 | QA | Responsible for our code quality and ensuring tests are complete in our application
James Calhoun | jcalhoun31 | Dev | Responsible for implementing the design and ensuring all use-cases are implemented
Katherine Lu | klu43 | Dev | Responsible for implementing the design and ensuring all use-cases are implemented
Robert Smayda | rsmayda3 | PM | Responsible for the successful initiation, planning, design, execution, monitoring, controlling and closure of the project. In charge of defining the requirements of the system and ensuring the team is unblocked

### Command used to build docker image

`docker build -t rapilyticsserviceimage .`

### Command used to run the service

`docker run rapilyticsserviceimage`