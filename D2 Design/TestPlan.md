# Test Plan

**Author**: James Calhoun, Alex Lipford, Katherine Lu, Robert Smayda

**Team**: Asclepius

## 1 Testing Strategy

### 1.1 Overall strategy

The internal business logic of Rapilytics will be tested using a unit testing paradigm. To accomplish this, we will use the JUnit Testing Framework for our unit tests. 

Integration between our application and the public FHIR database will use a hybrid implementation of unit tests in JUnit and automated scripts using the Postman application. The JUnit unit tests will test our application's ability to repeatedly form accurate REST queries. Those known REST queries will be formulated through manual use of the Postman application and will be assembled into an automated test script upon formation. The automated Postman testing script will verify that, in the event that our application begins failing, we have a way to verify the working state of the public API in response to known good queries. 

System level testing will be performed manually using a documented test procedure involving manually interacting with the user interface and manually verifying that the correct data was received. 

Regression testing will be performed by the QA role at each delivery milestone and will consist of executing the entire suite of existing unit, integration, and system level tests.

### 1.2 Test Selection

The testing techniques employed by our team will vary depending on the type of tests being performed. Unit tests will be written primarily using a white-box methodology where the internal implementation of the code is known to the tester. This will allow us to thoroughly test our internal business logic to ensure that it is sound. Employing white-box style testing is particularly important at this stage because it is crucial that our application accurately meet the requirement of pseudonymization of patient data.

Black-box style testing will be used for our overall system level testing. The system level test procedure will be written from the perspective of a user or test developer rather than from the perspective of a software developer. This will ensure that the flow of using our application not only meets the overall requirements, but is also straightforward for a standard user to navigate and use.

### 1.3 Adequacy Criterion

At a minimum, every public method in our application will have at least one corresponding unit test. Integration tests will be written to cover every type of call that our application will potentially make to the FHIR database.

On a system level, there will be a minimum 1-to-1 mapping of test cases/procedures to requirements with more than one test case/procedure potentially being used to satisfy more complex requirements.

### 1.4 Bug Tracking

Asclepius will use the GitHub Issue Tracker provider with our team repository to track bugs and improvements. That issue tracker is located at https://github.gatech.edu/gt-cs6440-hit-fall2019/Rapilytics-Rap-e-lit-eks-/issues 

### 1.5 Technology

Our automated unit tests will be built using the JUnit framework. Integration will use a combination of JUnit unit tests and an automated Postman testing script.

## 2 Test Cases

This table is a living test plan and will grow as the application design and requirements mature.

| Test Case                       | Test Purpose                                                              | Test Steps                   | Expected Result                                     | Actual Result | Pass/Fail | Notes |
|---------------------------------|---------------------------------------------------------------------------|------------------------------|-----------------------------------------------------|---------------|-----------|-------|
| pseudonymizePatientName         | Verify pseudonymization of the patient name                               | Execute unit test            | Patient name is pseudonymized                       |               |           |       |
| depseudonymizePatientName       | Verify de-pseudonymization of the patient name                            | Execute unit test            | Patient name is de-pseudonymized                    |               |           |       |
| pseudonymizePatientAddress      | Verify pseudonymization of the patient address                            | Execute unit test            | Patient address is pseudonymized                    |               |           |       |
| depseudonymizePatientAddress    | Verify de-pseudonymization of the patient address                         | Execute unit test            | Patient address is de-pseudonymized                 |               |           |       |
| pseudonymizPatientAge           | Verify pseudonymization of the patient age                                | Execute unit test            | Patient age is pseudonymized                        |               |           |       |
| depseudonymizPatientAge         | Verify de-pseudonymization of the patient age                             | Execute unit test            | Patient age is de-pseudonymized                     |               |           |       |
| pseudonymizPatientHeight        | Verify pseudonymization of the patient height                             | Execute unit test            | Patient height is pseudonymized                     |               |           |       |
| depseudonymizPatientHeight      | Verify de-pseudonymization of the patient height                          | Execute unit test            | Patient height is de-pseudonymized                  |               |           |       |
| pseudonymizPatientWeight        | Verigy pseudonymization of the patient weight                             | Execute unit test            | Patient weight is pseudonymized                     |               |           |       |
| depseudonymizPatientWeight      | Verify de-pseudonymization of the patient weight                          | Execute unit test            | Patient eight is de-pseudonymized                   |               |           |       |
| getPatientDataUnitTest          | Form a valid query for retrieving patient data from the FHIR database     | Execute unit test            | Valid request query is created                      |               |           |       |
| getPatientDataQuery             | Retrieve patient data from the FHIR database                              | Run command in Postman       | Patient data is returned                            |               |           |       |
| RequestPseudonymizedPatientData | Verify the application can display pseudonymized patient data to the user | Follow manual test procedure | Pseudonymized patient data is displated to the user |               |           |       |
| inferenceAttack | Verify you cannot obtain personally identifiable information from data mining the results of pseudonymized patient | Follow manual test procedure | After querying multiple times, still not able to find PII information |               |           |       |