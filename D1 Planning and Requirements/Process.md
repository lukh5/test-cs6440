# Process Description
**Author**: James Calhoun, Alex Lipford, Katherine Lu, Robert Smayda

**Team**: Asclepius

## Work Breakdown Structure
1. Project Management
    1. Project Overview
    1. Gantt Chart
    1. Use-case Descriptions
1. Technical Design
    1. Use-case Model
    1. System Environment
    1. Architectural Design
    1. Component Diagram
    1. Deployment Diagram
    1. User Interface Design
1. Development
    1. Backend
       1. Integration with FIHR data
    1. Web Interface
       1. Integration with backend
1. Testing
    1. Test Plan
    1. Unit tests
    1. Manual regression testing

## Activities
1.1 Project Overview
* Overview of the project including the required research as to why a user would want to use our application
* **Input**: Research
* **Output**: Deliverable 1 & Introduction section

1.2 Gantt Chart
* **Input**: Project overview, use-cases and general technical direction
* **Output**: Excel file showing the progress of our team and product

1.3 Use-case descriptions
* Written description of how users will perform tasks on your website.
* **Input**: Project overview
* **Output**: use-case descriptions

2.1 Use-case model
* Representation of a user's interaction with the system that shows the relationship between the user and the different use cases in which the user is involved
* **Input**: Use-case description
* **Output**: Use-case model

2.2 System environment
* Describe the hardware and software that the system must operate in and interact with
* **Input**: Watch HDAP lecture
* **Output**: System Environment

2.3 Architectural Design
* Provides the high-level design view of a system and provides a basis for more detailed design work
* **Input**: Watch HDAP lecture
* **Output**: Architectural Design

2.4 Component Design
* Diagram that shows the various components and how they are connected. This diagram shows the logical/functional components of the system, where each component represents a cluster of related functionality
* **Input**: Watch HDAP lecture
* **Output**: Component Design

2.5 Deployment Design
* Describe how the different components will be deployed. 
* **Input**: Watch HDAP lecture
* **Output**: Deployment Design

2.6 User Interface Design
* Specific format/layout of the user interface of the system (e.g., in the form of graphical mockups
* **Input**: Watch HDAP lecture
* **Output**: User InterfaceDesign

3.1 Backend implementation
* A server to handle RESTful requests. The two requests is to get pseudonymized FHIR data and to unpseudonymize existing FHIR data.
* **Input**: Technical Design, Use Case Descriptions, FIHR data source
* **Output**: Handle the two request cases with error handling

3.1.1 Integration with FHIR data
* Plug in our back end into the FHIR data stream. 
* **Input**: Technical Design, FIHR data source information
* **Output**: Be able to get raw FHIR data

3.2 Web interface
* Client side code, to include styling, layouts, and visualization of the data from the backend
* **Input**: Technical Design, UI Design
* **Output**: URL link to the front end showing visually how everything will work

3.2.1 Integration with backend
* Send requests to the backend and handle the results or errors
* **Input**: Technical Design, Backend implementation
* **Output**: Be able to send a request to the backend and get the raw result

4.1 Test Plan
* How our team will select our test cases and what techniques we will use
* **Input**: Use-cases and high-level technical direction
* **Output**: Test Plan

4.2 Unit Tests
* Individual units of source code are automatically tested to determine whether they are fit for use.
* **Input**: Test Plan
* **Output**: Unit Tests over the backend source code

4.3 Manual Regression Testing
* Written description of how and what QA will test for in our application.
* **Input**: Test Plan
* **Output**: Unit Tests over the backend source code
