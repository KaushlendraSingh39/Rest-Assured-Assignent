$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Verify different methods of Rest API using Rest assured",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Verify POST operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": ";verify-post-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@regression"
    },
    {
      "line": 44,
      "name": "@postrequest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User performs POST request using parameters \"\u003cpostBody\u003e\" on endpoint \"\u003cendPointName\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": ";verify-post-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "postBody"
      ],
      "line": 48,
      "id": ";verify-post-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "TestCase_Positive_15",
        "posts",
        "userId:1111;id:101;title:RestAPI;body:This is a test validation for /posts end point"
      ],
      "line": 49,
      "id": ";verify-post-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    },
    {
      "comments": [
        {
          "line": 50,
          "value": "#      | TestCase_Negative_16 | posts        |                                                                                                               | //This test case should return response code as 422 but due to mock API its not returning"
        }
      ],
      "cells": [
        "TestCase_Positive_17",
        "comments",
        "postId:1113;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point"
      ],
      "line": 51,
      "id": ";verify-post-operation-for-test-case-\"\u003ctestcasename\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Verify POST operation for test case \"TestCase_Positive_15\"",
  "description": "",
  "id": ";verify-post-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@regression"
    },
    {
      "line": 44,
      "name": "@postrequest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User performs POST request using parameters \"userId:1111;id:101;title:RestAPI;body:This is a test validation for /posts end point\" on endpoint \"posts\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "userId:1111;id:101;title:RestAPI;body:This is a test validation for /posts end point",
      "offset": 45
    },
    {
      "val": "posts",
      "offset": 144
    }
  ],
  "location": "TestStepdefs.userPerformsPOSTRequestUsingParametersOnEndpoint(String,String)"
});
formatter.result({
  "duration": 11129376800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 50,
      "value": "#      | TestCase_Negative_16 | posts        |                                                                                                               | //This test case should return response code as 422 but due to mock API its not returning"
    }
  ],
  "line": 51,
  "name": "Verify POST operation for test case \"TestCase_Positive_17\"",
  "description": "",
  "id": ";verify-post-operation-for-test-case-\"\u003ctestcasename\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@regression"
    },
    {
      "line": 44,
      "name": "@postrequest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User performs POST request using parameters \"postId:1113;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point\" on endpoint \"comments\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "postId:1113;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point",
      "offset": 45
    },
    {
      "val": "comments",
      "offset": 169
    }
  ],
  "location": "TestStepdefs.userPerformsPOSTRequestUsingParametersOnEndpoint(String,String)"
});
formatter.result({
  "duration": 191635600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Verify PUT operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": ";verify-put-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@regression"
    },
    {
      "line": 53,
      "name": "@putrequest"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User performs PUT request to update a record \"\u003cparameterVal\u003e\" using parameters \"\u003cputBody\u003e\" on endpoint \"\u003cendPointName\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": ";verify-put-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "parameterVal",
        "putBody"
      ],
      "line": 57,
      "id": ";verify-put-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "TestCase_Positive_19",
        "posts",
        "101",
        "userId:1110;id:101;title:RestAPI;body:This is a test validation for /posts end point"
      ],
      "line": 58,
      "id": ";verify-put-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    },
    {
      "cells": [
        "TestCase_Positive_20",
        "comments",
        "501",
        "postId:1112;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point"
      ],
      "line": 59,
      "id": ";verify-put-operation-for-test-case-\"\u003ctestcasename\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "Verify PUT operation for test case \"TestCase_Positive_19\"",
  "description": "",
  "id": ";verify-put-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@regression"
    },
    {
      "line": 53,
      "name": "@putrequest"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User performs PUT request to update a record \"101\" using parameters \"userId:1110;id:101;title:RestAPI;body:This is a test validation for /posts end point\" on endpoint \"posts\"",
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
      "val": "101",
      "offset": 46
    },
    {
      "val": "userId:1110;id:101;title:RestAPI;body:This is a test validation for /posts end point",
      "offset": 69
    },
    {
      "val": "posts",
      "offset": 168
    }
  ],
  "location": "TestStepdefs.userPerformsPUTRequestToUpdateARecordUsingParametersOnEndpoint(String,String,String)"
});
formatter.result({
  "duration": 300571100,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verify PUT operation for test case \"TestCase_Positive_20\"",
  "description": "",
  "id": ";verify-put-operation-for-test-case-\"\u003ctestcasename\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@regression"
    },
    {
      "line": 53,
      "name": "@putrequest"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User performs PUT request to update a record \"501\" using parameters \"postId:1112;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point\" on endpoint \"comments\"",
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
      "val": "501",
      "offset": 46
    },
    {
      "val": "postId:1112;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point",
      "offset": 69
    },
    {
      "val": "comments",
      "offset": 193
    }
  ],
  "location": "TestStepdefs.userPerformsPUTRequestToUpdateARecordUsingParametersOnEndpoint(String,String,String)"
});
formatter.result({
  "duration": 219270800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "Verify PATCH operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": ";verify-patch-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@regression"
    },
    {
      "line": 61,
      "name": "@patchrequest"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "User performs PATCH request to update a record \"\u003cparameterVal\u003e\" using parameters \"\u003cpatchBody\u003e\" on endpoint \"\u003cendPointName\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": ";verify-patch-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "parameterVal",
        "patchBody"
      ],
      "line": 65,
      "id": ";verify-patch-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "TestCase_Positive_21",
        "posts",
        "101",
        "userId:1002"
      ],
      "line": 66,
      "id": ";verify-patch-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    },
    {
      "cells": [
        "TestCase_Positive_22",
        "comments",
        "501",
        "postId:1002"
      ],
      "line": 67,
      "id": ";verify-patch-operation-for-test-case-\"\u003ctestcasename\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Verify PATCH operation for test case \"TestCase_Positive_21\"",
  "description": "",
  "id": ";verify-patch-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@regression"
    },
    {
      "line": 61,
      "name": "@patchrequest"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "User performs PATCH request to update a record \"101\" using parameters \"userId:1002\" on endpoint \"posts\"",
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
      "val": "101",
      "offset": 48
    },
    {
      "val": "userId:1002",
      "offset": 71
    },
    {
      "val": "posts",
      "offset": 97
    }
  ],
  "location": "TestStepdefs.userPerformsPATCHRequestToUpdateARecordUsingParametersOnEndpoint(String,String,String)"
});
formatter.result({
  "duration": 96284700,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Verify PATCH operation for test case \"TestCase_Positive_22\"",
  "description": "",
  "id": ";verify-patch-operation-for-test-case-\"\u003ctestcasename\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@regression"
    },
    {
      "line": 61,
      "name": "@patchrequest"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "User performs PATCH request to update a record \"501\" using parameters \"postId:1002\" on endpoint \"comments\"",
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
      "val": "501",
      "offset": 48
    },
    {
      "val": "postId:1002",
      "offset": 71
    },
    {
      "val": "comments",
      "offset": 97
    }
  ],
  "location": "TestStepdefs.userPerformsPATCHRequestToUpdateARecordUsingParametersOnEndpoint(String,String,String)"
});
formatter.result({
  "duration": 106244700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 68,
      "value": "#      | TestCase_Positive_23 | users        | 1            | name:Test User |"
    }
  ],
  "line": 71,
  "name": "Verify DELETE operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": ";verify-delete-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@regression"
    },
    {
      "line": 70,
      "name": "@deleterequest"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User performs DELETE request to delete a record \"\u003cparameterVal\u003e\" on endpoint \"\u003cendPointName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "User verifies expected response code \"\u003cexpectedResponseCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": ";verify-delete-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "parameterVal",
        "expectedResponseCode"
      ],
      "line": 75,
      "id": ";verify-delete-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "TestCase_Positive_24",
        "posts",
        "101",
        "200"
      ],
      "line": 76,
      "id": ";verify-delete-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    },
    {
      "cells": [
        "TestCase_Negative_25",
        "posts",
        "101",
        "404"
      ],
      "line": 77,
      "id": ";verify-delete-operation-for-test-case-\"\u003ctestcasename\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 76,
  "name": "Verify DELETE operation for test case \"TestCase_Positive_24\"",
  "description": "",
  "id": ";verify-delete-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@deleterequest"
    },
    {
      "line": 70,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User performs DELETE request to delete a record \"101\" on endpoint \"posts\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "User verifies expected response code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 49
    },
    {
      "val": "posts",
      "offset": 67
    }
  ],
  "location": "TestStepdefs.userPerformsDELETERequestToDeleteARecordOnEndpoint(String,String)"
});
formatter.result({
  "duration": 178926600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "TestStepdefs.userVerifiesExpectedResponseCode(String)"
});
formatter.result({
  "duration": 8958100,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Verify DELETE operation for test case \"TestCase_Negative_25\"",
  "description": "",
  "id": ";verify-delete-operation-for-test-case-\"\u003ctestcasename\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@deleterequest"
    },
    {
      "line": 70,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User performs DELETE request to delete a record \"101\" on endpoint \"posts\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "User verifies expected response code \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 49
    },
    {
      "val": "posts",
      "offset": 67
    }
  ],
  "location": "TestStepdefs.userPerformsDELETERequestToDeleteARecordOnEndpoint(String,String)"
});
formatter.result({
  "duration": 63201700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 38
    }
  ],
  "location": "TestStepdefs.userVerifiesExpectedResponseCode(String)"
});
formatter.result({
  "duration": 1254800,
  "status": "passed"
});
});