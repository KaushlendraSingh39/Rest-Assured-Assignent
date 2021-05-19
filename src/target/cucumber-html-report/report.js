$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "API Tests",
  "description": "This feature includes tests that test the API Methods of RESTFul services",
  "id": "api-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 102,
      "value": "#  Below mention scenarios depicts the Desearlization/POJO\u0027s in BDD Style to validate API methods"
    },
    {
      "line": 103,
      "value": "#  \u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 106,
  "name": "Verify GET operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@pojo"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "User verifies GET request for endpoint \"\u003cendPointName\u003e\" with param \"\u003cparameterVal\u003e\" and verifies the expected response \"\u003cexpectedParamVal\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "parameterVal",
        "expectedParamVal"
      ],
      "line": 109,
      "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "Pojo_TestCase_Positive_1",
        "posts",
        "2",
        "1"
      ],
      "line": 110,
      "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "Verify GET operation for test case \"Pojo_TestCase_Positive_1\"",
  "description": "",
  "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 105,
      "name": "@pojo"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "User verifies GET request for endpoint \"posts\" with param \"2\" and verifies the expected response \"1\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 98
    }
  ],
  "location": "TestStepdefs.userVerifiesGETRequestForEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String)"
});
formatter.result({
  "duration": 11737831800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "Verify GET operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@pojo"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "User verifies GET request for comments endpoint \"\u003cendPointName\u003e\" with param \"\u003cparameterVal\u003e\" and verifies the expected response \"\u003cexpectedParamVal\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "parameterVal",
        "expectedParamVal"
      ],
      "line": 116,
      "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "Pojo_TestCase_Positive_2",
        "comments",
        "2",
        "Jayne_Kuhic@sydney.com"
      ],
      "line": 117,
      "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 117,
  "name": "Verify GET operation for test case \"Pojo_TestCase_Positive_2\"",
  "description": "",
  "id": "api-tests;verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@pojo"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "User verifies GET request for comments endpoint \"comments\" with param \"2\" and verifies the expected response \"Jayne_Kuhic@sydney.com\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 49
    },
    {
      "val": "2",
      "offset": 71
    },
    {
      "val": "Jayne_Kuhic@sydney.com",
      "offset": 110
    }
  ],
  "location": "TestStepdefs.userVerifiesGETRequestForCommentsEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String)"
});
formatter.result({
  "duration": 2424282300,
  "status": "passed"
});
});