$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Verify different methods of Rest API using Rest assured",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#  Below mention scenario depicts the traditional way of BDD Style to validate  API methods"
    },
    {
      "line": 6,
      "value": "#  \u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    },
    {
      "line": 7,
      "value": "#  Scenario Outline: Verify one author of the post"
    },
    {
      "line": 8,
      "value": "#    Given User perform GET operation \"\u003cmethodName\u003e\""
    },
    {
      "line": 9,
      "value": "#    And User perform Get for the following post \"\u003cpostNumber\u003e\""
    },
    {
      "line": 10,
      "value": "#    Examples:"
    },
    {
      "line": 11,
      "value": "#      | methodName | postNumber | expectedAuthorName |"
    },
    {
      "line": 12,
      "value": "#      | /post      | 5          | Kaushlendra        |"
    },
    {
      "line": 15,
      "value": "#  Below mention scenarios depicts modular way of BDD Style to validate API methods"
    },
    {
      "line": 16,
      "value": "#  \u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 19,
  "name": "Verify GET operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User verifies it for the endpoint as \"\u003cendPointName\u003e\" and verifies expected response \"\u003cexpectedParamName\u003e\" \"\u003cexpectedParamVal\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "expectedParamName",
        "expectedParamVal"
      ],
      "line": 22,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "TestCase_Positive_1",
        "posts",
        "title[1]",
        "qui est esse"
      ],
      "line": 23,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    },
    {
      "cells": [
        "TestCase_Positive_2",
        "posts",
        "title[87]",
        "sapiente omnis fugit eos"
      ],
      "line": 24,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;3"
    },
    {
      "cells": [
        "TestCase_Positive_3",
        "users",
        "name[8]",
        "Glenna Reichert"
      ],
      "line": 25,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;4"
    },
    {
      "cells": [
        "TestCase_Positive_4",
        "comments",
        "email[108]",
        "Gideon@amina.name"
      ],
      "line": 26,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;5"
    },
    {
      "cells": [
        "TestCase_Negative_5",
        "comments",
        "null",
        "Gideon@amina.name"
      ],
      "line": 27,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Verify GET operation for test case \"TestCase_Positive_1\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User verifies it for the endpoint as \"posts\" and verifies expected response \"title[1]\" \"qui est esse\"",
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
      "offset": 38
    },
    {
      "val": "title[1]",
      "offset": 77
    },
    {
      "val": "qui est esse",
      "offset": 88
    }
  ],
  "location": "TestStepdefs.userVerifiesItForTheEndpointAsAndVerifiesExpectedResponse(String,String,String)"
});
formatter.result({
  "duration": 11603222500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify GET operation for test case \"TestCase_Positive_2\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User verifies it for the endpoint as \"posts\" and verifies expected response \"title[87]\" \"sapiente omnis fugit eos\"",
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
      "offset": 38
    },
    {
      "val": "title[87]",
      "offset": 77
    },
    {
      "val": "sapiente omnis fugit eos",
      "offset": 89
    }
  ],
  "location": "TestStepdefs.userVerifiesItForTheEndpointAsAndVerifiesExpectedResponse(String,String,String)"
});
formatter.result({
  "duration": 275475600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify GET operation for test case \"TestCase_Positive_3\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User verifies it for the endpoint as \"users\" and verifies expected response \"name[8]\" \"Glenna Reichert\"",
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
      "val": "users",
      "offset": 38
    },
    {
      "val": "name[8]",
      "offset": 77
    },
    {
      "val": "Glenna Reichert",
      "offset": 87
    }
  ],
  "location": "TestStepdefs.userVerifiesItForTheEndpointAsAndVerifiesExpectedResponse(String,String,String)"
});
formatter.result({
  "duration": 217791900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify GET operation for test case \"TestCase_Positive_4\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User verifies it for the endpoint as \"comments\" and verifies expected response \"email[108]\" \"Gideon@amina.name\"",
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
      "offset": 38
    },
    {
      "val": "email[108]",
      "offset": 80
    },
    {
      "val": "Gideon@amina.name",
      "offset": 93
    }
  ],
  "location": "TestStepdefs.userVerifiesItForTheEndpointAsAndVerifiesExpectedResponse(String,String,String)"
});
formatter.result({
  "duration": 572272900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify GET operation for test case \"TestCase_Negative_5\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User verifies it for the endpoint as \"comments\" and verifies expected response \"null\" \"Gideon@amina.name\"",
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
      "offset": 38
    },
    {
      "val": "null",
      "offset": 80
    },
    {
      "val": "Gideon@amina.name",
      "offset": 87
    }
  ],
  "location": "TestStepdefs.userVerifiesItForTheEndpointAsAndVerifiesExpectedResponse(String,String,String)"
});
formatter.result({
  "duration": 493076400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Gideon@amina.name]\u003e but was:\u003c[[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat helper.CommonFunctions.validateAllGetsRequest(CommonFunctions.java:39)\r\n\tat stepsdefinitions.TestStepdefs.userVerifiesItForTheEndpointAsAndVerifiesExpectedResponse(TestStepdefs.java:49)\r\n\tat ✽.Given User verifies it for the endpoint as \"comments\" and verifies expected response \"null\" \"Gideon@amina.name\"(Test.feature:20)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Verify GET operation for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@getrequest"
    },
    {
      "line": 29,
      "name": "@queryparam"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"\u003cendPointName\u003e\" with param \"\u003cparameterName\u003e\" \"\u003cparameterVal\u003e\" and verifies the expected response \"\u003cexpectedParamName\u003e\" \"\u003cexpectedParamVal\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "endPointName",
        "parameterName",
        "parameterVal",
        "expectedParamName",
        "expectedParamVal"
      ],
      "line": 33,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "TestCase_Positive_6",
        "posts",
        "post",
        "2",
        "title",
        "qui est esse"
      ],
      "line": 34,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2"
    },
    {
      "cells": [
        "TestCase_Positive_7",
        "posts",
        "userId",
        "4",
        "title",
        "ullam ut quidem id aut vel consequuntur"
      ],
      "line": 35,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;3"
    },
    {
      "cells": [
        "TestCase_Negative_8",
        "posts",
        "post",
        "47",
        "title",
        "aut deserunt"
      ],
      "line": 36,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;4"
    },
    {
      "cells": [
        "TestCase_Positive_9",
        "comments",
        "postId",
        "1",
        "email",
        "Eliseo@gardner.biz"
      ],
      "line": 37,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;5"
    },
    {
      "cells": [
        "TestCase_Positive_10",
        "comments",
        "id",
        "2",
        "name",
        "quo vero reiciendis velit similique earum"
      ],
      "line": 38,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;6"
    },
    {
      "cells": [
        "TestCase_Negative_11",
        "comments",
        "postId",
        "22",
        "body",
        "quo vero reiciendis velit similique earum"
      ],
      "line": 39,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;7"
    },
    {
      "cells": [
        "TestCase_Positive_12",
        "users",
        "id",
        "1",
        "email",
        "Sincere@april.biz"
      ],
      "line": 40,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;8"
    },
    {
      "cells": [
        "TestCase_Positive_13",
        "users",
        "phone",
        "1-770-736-8031 x56442",
        "website",
        "hildegard.org"
      ],
      "line": 41,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;9"
    },
    {
      "cells": [
        "TestCase_Negative_14",
        "users",
        "name",
        "Leanne Graham",
        "username",
        "quo vero reiciendis velit similique earum"
      ],
      "line": 42,
      "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Verify GET operation for test case \"TestCase_Positive_6\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"posts\" with param \"post\" \"2\" and verifies the expected response \"title\" \"qui est esse\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    },
    {
      "val": "post",
      "offset": 55
    },
    {
      "val": "2",
      "offset": 62
    },
    {
      "val": "title",
      "offset": 101
    },
    {
      "val": "qui est esse",
      "offset": 109
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 1456061600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify GET operation for test case \"TestCase_Positive_7\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"posts\" with param \"userId\" \"4\" and verifies the expected response \"title\" \"ullam ut quidem id aut vel consequuntur\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    },
    {
      "val": "userId",
      "offset": 55
    },
    {
      "val": "4",
      "offset": 64
    },
    {
      "val": "title",
      "offset": 103
    },
    {
      "val": "ullam ut quidem id aut vel consequuntur",
      "offset": 111
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 163965900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify GET operation for test case \"TestCase_Negative_8\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"posts\" with param \"post\" \"47\" and verifies the expected response \"title\" \"aut deserunt\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    },
    {
      "val": "post",
      "offset": 55
    },
    {
      "val": "47",
      "offset": 62
    },
    {
      "val": "title",
      "offset": 102
    },
    {
      "val": "aut deserunt",
      "offset": 110
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 298778100,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path title doesn\u0027t match.\nExpected: a collection containing \"aut deserunt\"\n  Actual: \u003c[sunt aut facere repellat provident occaecati excepturi optio reprehenderit, qui est esse, ea molestias quasi exercitationem repellat qui ipsa sit aut, eum et est occaecati, nesciunt quas odio, dolorem eum magni eos aperiam quia, magnam facilis autem, dolorem dolore est ipsam, nesciunt iure omnis dolorem tempora et accusantium, optio molestias id quia eum, et ea vero quia laudantium autem, in quibusdam tempore odit est dolorem, dolorum ut in voluptas mollitia et saepe quo animi, voluptatem eligendi optio, eveniet quod temporibus, sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio, fugit voluptas sed molestias voluptatem provident, voluptate et itaque vero tempora molestiae, adipisci placeat illum aut reiciendis qui, doloribus ad provident suscipit at, asperiores ea ipsam voluptatibus modi minima quia sint, dolor sint quo a velit explicabo quia nam, maxime id vitae nihil numquam, autem hic labore sunt dolores incidunt, rem alias distinctio quo quis, est et quae odit qui non, quasi id et eos tenetur aut quo autem, delectus ullam et corporis nulla voluptas sequi, iusto eius quod necessitatibus culpa ea, a quo magni similique perferendis, ullam ut quidem id aut vel consequuntur, doloremque illum aliquid sunt, qui explicabo molestiae dolorem, magnam ut rerum iure, id nihil consequatur molestias animi provident, fuga nam accusamus voluptas reiciendis itaque, provident vel ut sit ratione est, explicabo et eos deleniti nostrum ab id repellendus, eos dolorem iste accusantium est eaque quam, enim quo cumque, non est facere, commodi ullam sint et excepturi error explicabo praesentium voluptas, eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis, optio dolor molestias sit, ut numquam possimus omnis eius suscipit laudantium iure, aut quo modi neque nostrum ducimus, quibusdam cumque rem aut deserunt, ut voluptatem illum ea doloribus itaque eos, laborum non sunt aut ut assumenda perspiciatis voluptas, repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem, soluta aliquam aperiam consequatur illo quis voluptas, qui enim et consequuntur quia animi quis voluptate quibusdam, ut quo aut ducimus alias, sit asperiores ipsam eveniet odio non quia, sit vel voluptatem et non libero, qui et at rerum necessitatibus, sed ab est est, voluptatum itaque dolores nisi et quasi, qui commodi dolor at maiores et quis id accusantium, consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere, voluptatem doloribus consectetur est ut ducimus, beatae enim quia vel, voluptas blanditiis repellendus animi ducimus error sapiente et suscipit, et fugit quas eum in in aperiam quod, consequatur id enim sunt et et, repudiandae ea animi iusto, aliquid eos sed fuga est maxime repellendus, odio quis facere architecto reiciendis optio, fugiat quod pariatur odit minima, voluptatem laborum magni, et iusto veniam et illum aut fuga, sint hic doloribus consequatur eos non id, consequuntur deleniti eos quia temporibus ab aliquid at, enim unde ratione doloribus quas enim ut sit sapiente, dignissimos eum dolor ut enim et delectus in, doloremque officiis ad et non perferendis, necessitatibus quasi exercitationem odio, quam voluptatibus rerum veritatis, pariatur consequatur quia magnam autem omnis non amet, labore in ex et explicabo corporis aut quas, tempora rem veritatis voluptas quo dolores vero, laudantium voluptate suscipit sunt enim enim, odit et voluptates doloribus alias odio et, optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut, dolore veritatis porro provident adipisci blanditiis et sunt, placeat quia et porro iste, nostrum quis quasi placeat, sapiente omnis fugit eos, sint soluta et vel magnam aut ut sed qui, ad iusto omnis odit dolor voluptatibus, aut amet sed, ratione ex tenetur perferendis, beatae soluta recusandae, qui qui voluptates illo iste minima, id minus libero illum nam ad officiis, quaerat velit veniam amet cupiditate aut numquam ut sequi, quas fugiat ut perspiciatis vero provident, laboriosam dolor voluptates, temporibus sit alias delectus eligendi possimus magni, at nam consequatur ea labore ea harum]\u003e\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat helper.CommonFunctions.performGetsRequestQueryParam(CommonFunctions.java:53)\r\n\tat stepsdefinitions.TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(TestStepdefs.java:55)\r\n\tat ✽.Given User verifies GET for the endpoint \"posts\" with param \"post\" \"47\" and verifies the expected response \"title\" \"aut deserunt\"(Test.feature:31)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify GET operation for test case \"TestCase_Positive_9\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"comments\" with param \"postId\" \"1\" and verifies the expected response \"email\" \"Eliseo@gardner.biz\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    },
    {
      "val": "postId",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 67
    },
    {
      "val": "email",
      "offset": 106
    },
    {
      "val": "Eliseo@gardner.biz",
      "offset": 114
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 176530800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify GET operation for test case \"TestCase_Positive_10\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"comments\" with param \"id\" \"2\" and verifies the expected response \"name\" \"quo vero reiciendis velit similique earum\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    },
    {
      "val": "id",
      "offset": 58
    },
    {
      "val": "2",
      "offset": 63
    },
    {
      "val": "name",
      "offset": 102
    },
    {
      "val": "quo vero reiciendis velit similique earum",
      "offset": 109
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 163565500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify GET operation for test case \"TestCase_Negative_11\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"comments\" with param \"postId\" \"22\" and verifies the expected response \"body\" \"quo vero reiciendis velit similique earum\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    },
    {
      "val": "postId",
      "offset": 58
    },
    {
      "val": "22",
      "offset": 67
    },
    {
      "val": "body",
      "offset": 107
    },
    {
      "val": "quo vero reiciendis velit similique earum",
      "offset": 114
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 149690400,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path body doesn\u0027t match.\nExpected: a collection containing \"quo vero reiciendis velit similique earum\"\n  Actual: \u003c[dolores debitis voluptatem ab hic\nmagnam alias qui est sunt\net porro velit et repellendus occaecati est\nsequi quia odio deleniti illum, eveniet fugit qui\nporro eaque dolores eos adipisci dolores ut\nfugit perferendis pariatur\nnumquam et repellat occaecati atque ipsum neque, at a vel sequi nostrum\nharum nam nihil\ncumque aut in dolore rerum ipsa hic ratione\nrerum cum ratione provident labore ad quisquam repellendus a, aliquid qui dolorem deserunt aperiam natus corporis eligendi neque\nat et sunt aut qui\nillum repellat qui excepturi laborum facilis aut omnis consequatur\net aut optio ipsa nisi enim, cum sequi in eligendi id eaque\ndolores accusamus dolorem eum est voluptatem quisquam tempore\nin voluptas enim voluptatem asperiores voluptatibus\neius quo quos quasi voluptas earum ut necessitatibus]\u003e\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat helper.CommonFunctions.performGetsRequestQueryParam(CommonFunctions.java:53)\r\n\tat stepsdefinitions.TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(TestStepdefs.java:55)\r\n\tat ✽.Given User verifies GET for the endpoint \"comments\" with param \"postId\" \"22\" and verifies the expected response \"body\" \"quo vero reiciendis velit similique earum\"(Test.feature:31)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify GET operation for test case \"TestCase_Positive_12\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"users\" with param \"id\" \"1\" and verifies the expected response \"email\" \"Sincere@april.biz\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    },
    {
      "val": "id",
      "offset": 55
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "email",
      "offset": 99
    },
    {
      "val": "Sincere@april.biz",
      "offset": 107
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 173375400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify GET operation for test case \"TestCase_Positive_13\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"users\" with param \"phone\" \"1-770-736-8031 x56442\" and verifies the expected response \"website\" \"hildegard.org\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    },
    {
      "val": "phone",
      "offset": 55
    },
    {
      "val": "1-770-736-8031 x56442",
      "offset": 63
    },
    {
      "val": "website",
      "offset": 122
    },
    {
      "val": "hildegard.org",
      "offset": 132
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 156025200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify GET operation for test case \"TestCase_Negative_14\"",
  "description": "",
  "id": ";verify-get-operation-for-test-case-\"\u003ctestcasename\u003e\";;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    },
    {
      "line": 29,
      "name": "@queryparam"
    },
    {
      "line": 29,
      "name": "@getrequest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User verifies GET for the endpoint \"users\" with param \"name\" \"Leanne Graham\" and verifies the expected response \"username\" \"quo vero reiciendis velit similique earum\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    },
    {
      "val": "name",
      "offset": 55
    },
    {
      "val": "Leanne Graham",
      "offset": 62
    },
    {
      "val": "username",
      "offset": 113
    },
    {
      "val": "quo vero reiciendis velit similique earum",
      "offset": 124
    }
  ],
  "location": "TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String,String,String,String,String)"
});
formatter.result({
  "duration": 155762900,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path username doesn\u0027t match.\nExpected: a collection containing \"quo vero reiciendis velit similique earum\"\n  Actual: \u003c[Bret]\u003e\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat helper.CommonFunctions.performGetsRequestQueryParam(CommonFunctions.java:53)\r\n\tat stepsdefinitions.TestStepdefs.userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(TestStepdefs.java:55)\r\n\tat ✽.Given User verifies GET for the endpoint \"users\" with param \"name\" \"Leanne Graham\" and verifies the expected response \"username\" \"quo vero reiciendis velit similique earum\"(Test.feature:31)\r\n",
  "status": "failed"
});
});