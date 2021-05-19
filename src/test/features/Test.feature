Feature: API Tests
  This feature includes tests that test the API Methods of RESTFul services


#  Below mention scenario depicts the traditional way of BDD Style to validate  API methods
#  ==============================================================================================
#  Scenario Outline: Verify one author of the post
#    Given User perform GET operation "<methodName>"
#    And User perform Get for the following post "<postNumber>"
#    Examples:
#      | methodName | postNumber | expectedAuthorName |
#      | /post      | 5          | Kaushlendra        |


#  Below mention scenarios depicts modular way of BDD Style to validate API methods
#  ==================================================================================

  @getrequest
  Scenario Outline: Verify GET operation for test case "<testCaseName>"
    Given User verifies it for the endpoint as "<endPointName>" and verifies expected response "<expectedParamName>" "<expectedParamVal>"
    Examples:
      | testCaseName        | endPointName | expectedParamName | expectedParamVal         |
      | TestCase_Positive_1 | posts        | title[1]          | qui est esse             |
      | TestCase_Positive_2 | posts        | title[87]         | sapiente omnis fugit eos |
      | TestCase_Positive_3 | users        | name[8]           | Glenna Reichert          |
      | TestCase_Positive_4 | comments     | email[108]        | Gideon@amina.name        |
      | TestCase_Negative_5 | comments     | null              | Gideon@amina.name        |

  @getrequest @queryparam
  Scenario Outline: Verify GET operation for test case "<testCaseName>"
    Given User verifies GET for the endpoint "<endPointName>" with param "<parameterName>" "<parameterVal>" and verifies the expected response "<expectedParamName>" "<expectedParamVal>"
    Examples:
      | testCaseName         | endPointName | parameterName | parameterVal          | expectedParamName | expectedParamVal                          |
      | TestCase_Positive_6  | posts        | post          | 2                     | title             | qui est esse                              |
      | TestCase_Positive_7  | posts        | userId        | 4                     | title             | ullam ut quidem id aut vel consequuntur   |
      | TestCase_Negative_8  | posts        | post          | 47                    | title             | aut deserunt                              |
      | TestCase_Positive_9  | comments     | postId        | 1                     | email             | Eliseo@gardner.biz                        |
      | TestCase_Positive_10 | comments     | id            | 2                     | name              | quo vero reiciendis velit similique earum |
      | TestCase_Negative_11 | comments     | postId        | 22                    | body              | quo vero reiciendis velit similique earum |
      | TestCase_Positive_12 | users        | id            | 1                     | email             | Sincere@april.biz                         |
      | TestCase_Positive_13 | users        | phone         | 1-770-736-8031 x56442 | website           | hildegard.org                             |
      | TestCase_Negative_14 | users        | name          | Leanne Graham         | username          | quo vero reiciendis velit similique earum |

  @postrequest
  Scenario Outline: Verify POST operation for test case "<testCaseName>"
    Given User performs POST request using parameters "<postBody>" on endpoint "<endPointName>"
    Examples:
      | testCaseName         | endPointName | postBody                                                                                                      |
      | TestCase_Positive_15 | posts        | userId:1111;id:101;title:RestAPI;body:This is a test validation for /posts end point                          |
#      | TestCase_Negative_16 | posts        |                                                                                                               | //This test case should return response code as 422 but due to mock API its not returning
      | TestCase_Positive_17 | comments     | postId:1113;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point |

  @putrequest
  Scenario Outline: Verify PUT operation for test case "<testCaseName>"
    Given User performs PUT request to update a record "<parameterVal>" using parameters "<putBody>" on endpoint "<endPointName>"
    Examples:
      | testCaseName         | endPointName | parameterVal | putBody                                                                                                       |
      | TestCase_Positive_19 | posts        | 101          | userId:1110;id:101;title:RestAPI;body:This is a test validation for /posts end point                          |
      | TestCase_Positive_20 | comments     | 501          | postId:1112;id:501;name:testuser;email:abc.xyz@jkl.com;body:This is a test validation for /comments end point |

  @patchrequest
  Scenario Outline: Verify PATCH operation for test case "<testCaseName>"
    Given User performs PATCH request to update a record "<parameterVal>" using parameters "<patchBody>" on endpoint "<endPointName>"
    Examples:
      | testCaseName         | endPointName | parameterVal | patchBody      |
      | TestCase_Positive_21 | posts        | 101          | userId:1002    |
      | TestCase_Positive_22 | comments     | 501          | postId:1002    |
#      | TestCase_Positive_23 | users        | 1            | name:Test User |

  @deleterequest
  Scenario Outline: Verify DELETE operation for test case "<testCaseName>"
    Given User performs DELETE request to delete a record "<parameterVal>" on endpoint "<endPointName>"
    Then User verifies expected response code "<expectedResponseCode>"
    Examples:
      | testCaseName         | endPointName | parameterVal | expectedResponseCode |
      | TestCase_Positive_24 | posts        | 101          | 200                  |
      | TestCase_Negative_25 | posts        | 101          | 404                  |

  @jsonschemavalidation
  Scenario Outline: Validate the json schema for the GET request for test case "<testCaseName>"
    Given User performs GET request and verifies the json schema "<jsonFileName>"
    Examples:
      | testCaseName         | jsonFileName             |
      | TestCase_Positive_26 | JsonSchema.json          |
      | TestCase_Negative_27 | IncorrectJsonSchema.json |

  @e2etest
  Scenario Outline: Validate the end to end test cases for all API methods (GET/POST/PUT/PATCH/DELETE)
    Given User performs POST request using parameters "<postBody>" on endpoint "<endPointName>"
    Then  User verifies GET for the endpoint "<endPointName>" with param "<paramName>" "<paramVal>" and verifies the expected response "<expParamName>" "<postParamVal>"
    And   User performs PUT request to update a record "<paramVal>" using parameters "<putBody>" on endpoint "<endPointName>"
    And   User verifies GET for the endpoint "<endPointName>" with param "<paramName>" "<paramVal>" and verifies the expected response "<expParamName>" "<putParamVal>"
    And   User performs PATCH request to update a record "<paramVal>" using parameters "<patchBody>" on endpoint "<endPointName>"
    And   User verifies GET for the endpoint "<endPointName>" with param "<paramName>" "<paramVal>" and verifies the expected response "<expParamName>" "<patchParamVal>"
    And   User performs DELETE request to delete a record "<paramVal>" on endpoint "<endPointName>"
    Examples:
      | testCaseName | endPointName | postBody                                                            | postParamVal | putBody                                                         | expParamName | putParamVal | patchBody | patchParamVal | paramName | paramVal |
      | E2E_TC_28    | posts        | userId:1112;id:101;title:RestAPI;body:Sample body                   | RestAPI      | userId:1112;id:101;title:Rest;body:Sample body                  | title        | Rest        | title:API | API           | post      | 101      |
      | E2E_TC_29    | comments     | postId:1114;id:501;name:testuser;email:abc@jkl.com;body:Sample body | testuser     | postId:1114;id:501;name:test;email:abc@jkl.com;body:Sample body | name         | test        | name:user | user          | id        | 501      |


#  Below mention scenarios depicts the Desearlization/POJO's in BDD Style to validate API methods
#  ====================================================================================================

  @pojo
  Scenario Outline: Verify GET operation for test case "<testCaseName>"
    Given User verifies GET request for endpoint "<endPointName>" with param "<parameterVal>" and verifies the expected response "<expectedParamVal>"
    Examples:
      | testCaseName             | endPointName | parameterVal | expectedParamVal |
      | Pojo_TestCase_Positive_1 | posts        | 2            | 1                |

  @pojo
  Scenario Outline: Verify GET operation for test case "<testCaseName>"
    Given User verifies GET request for comments endpoint "<endPointName>" with param "<parameterVal>" and verifies the expected response "<expectedParamVal>"
    Examples:
      | testCaseName             | endPointName | parameterVal | expectedParamVal       |
      | Pojo_TestCase_Positive_2 | comments     | 2            | Jayne_Kuhic@sydney.com |