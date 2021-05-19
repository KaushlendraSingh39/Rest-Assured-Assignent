# Rest API automation using Rest Assured and Cucumber

This automation suite is designed to test the RESTFul services and its mainly consists of below parameter.

1. Rest Assured is being used here as it provides a DSL to quickly create component and integration tests.
2. Cucumber will provide us a not only creating readable and maintainable code , but also being able communicate the requirements across various stakeholders in a human readable language.
3. Gherkin language is being used by Cucumber to define the automated tests.

# Tech Stack -
1. Rest Assured - Provides the service client APIs using the powerful DSL for creating maintainable tests
2. Rest Assured JSON Schema Validator - Response Schema Validation
3. Hamcrest - Assertions
4. Cucumber - BDD based Tests
5. Java 1.8+ installed - It can run it on JDK 11 as well
6. Maven Installed - version - 3.6.3
7. Intellij IDE 
9. IDE need to be installed with Cucumber and Gherkin plugins 
10. Lombok plugin - version - 1.18.20 : This plugin is mainly being used to reduce Java verbosity and covering boilerplate stuff under the hood
  
# Tests -
The project has 31 scenarios that that can be located within the feature file:

1. src/test/features/Test.feature: This features folder provides the BDD test scenarios
2. src/test/java/stepsdefinitions/TestStepsdefs.java : It consists of steps provides the glue code or test steps (bound to the features)

Gherkin test scenario step types 
  1. Basic parameterized Tests 
  2. Scenario Outline - Data Driven Test template 
  3. JSON Response validation 
  4. POJO Class initialization via tests

# Test Cases Execution -
src/test/java/runners/TestRunner.java : This is a runner which basically execute the automated test cases

Right click on the TestRunner.java file to execute the test cases from feature file.

Note: Automated Scenarios need to have tag @regression or @REQUEST_NAME in order to be included in test executions.

# Test Results Report -

31 Test Scenarios will be executed. Report file can be found 'src/target/' 
  1. Report - E2E_Test_Cases folder : This report contains results of E2E test cases 
  2. Report - Get_Request folder : results of GET request test cases 
  3. Report - Json_Schema_Validation : results of Schema validation test cases 
  4. Report - POJO_Approach_TestCases : results of POJO - GET request test cases 
  5. Report - Post_Put_Patch_Delete_Requests folder : results of POST/PUT/PATCH/DELETE request test cases

7 of the 31 test scenarios within the Test feature file will fail. The test is coded correctly, this is a legitimate failure.

