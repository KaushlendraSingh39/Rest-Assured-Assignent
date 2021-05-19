package stepsdefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import helper.CommonFunctions;
import io.restassured.response.Response;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pojo.Comments;
import pojo.Posts;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;


public class TestStepdefs {

    private static Logger log = LoggerFactory.getLogger(TestStepdefs.class.getName());
    private Response response;
     /*

    Below BDD style can also be used to verify request but it will be very tedious and non-modular
    in nature.

     */

//    @Given("^User perform GET operation \"([^\"]*)\"$")
//    public void user_perform_get_operation_something(String endPointName) throws Throwable {
//        given().contentType(ContentType.JSON);
//    }
//
//    @And("^User perform Get for the following post \"([^\"]*)\"$")
//    public void user_perform_get_for_the_following_post_something(String postNumber) throws Throwable {
//        when().get(String.format("https://jsonplaceholder.typicode.com/posts/%s",postNumber)).
//                then().body("title", is("nesciunt quas odio"));
//
//    }

    /*
        Hence i have converted the above steps into ------ "helper" package which has CommonFunctions
        where all the steps are now converted into a single function and can be reused to a large extent.
    */


    @Given("^User verifies it for the endpoint as \"([^\"]*)\" and verifies expected response \"([^\"]*)\" \"([^\"]*)\"$")
    public void userVerifiesItForTheEndpointAsAndVerifiesExpectedResponse(String endPointName, String expectedParamName, String expectedParamVal) throws Throwable {
        // this is a common funtion which is created to validate get request and response code
        CommonFunctions.validateAllGetsRequest(endPointName,expectedParamName,expectedParamVal);
    }

    @Given("^User verifies GET for the endpoint \"([^\"]*)\" with param \"([^\"]*)\" \"([^\"]*)\" and verifies the expected response \"([^\"]*)\" \"([^\"]*)\"$")
    public void userVerifiesGETForTheEndpointWithParamAndVerifiesTheExpectedResponse(String endPointName, String parameterName, String parameterVal, String expectedParamName, String expectedParamVal) throws Throwable {
        //Below function validate query parameter with different parameter for any end point
        CommonFunctions.performGetsRequestQueryParam(endPointName,parameterName,parameterVal,expectedParamName,expectedParamVal);
    }

    @Given("^User performs POST request using parameters \"([^\"]*)\" on endpoint \"([^\"]*)\"$")
    public void userPerformsPOSTRequestUsingParametersOnEndpoint(String postBody, String endPointName) throws Throwable {
        String[] paramValArray = postBody.split(";");
        CommonFunctions.performPostRequest(paramValArray,endPointName);
    }

    @Given("^User performs PUT request to update a record \"([^\"]*)\" using parameters \"([^\"]*)\" on endpoint \"([^\"]*)\"$")
    public void userPerformsPUTRequestToUpdateARecordUsingParametersOnEndpoint(String parameterVal, String putBody, String endPointName) throws Throwable {
        String[] paramValArray = putBody.split(";");
        CommonFunctions.performPutRequest(paramValArray,parameterVal,endPointName);
    }

    @Given("^User performs PATCH request to update a record \"([^\"]*)\" using parameters \"([^\"]*)\" on endpoint \"([^\"]*)\"$")
    public void userPerformsPATCHRequestToUpdateARecordUsingParametersOnEndpoint(String parameterVal, String patchBody, String endPointName) throws Throwable {
        String[] paramValArray = patchBody.split(";");
        CommonFunctions.performPatchRequest(paramValArray,parameterVal,endPointName);
    }

    @Given("^User performs DELETE request to delete a record \"([^\"]*)\" on endpoint \"([^\"]*)\"$")
    public void userPerformsDELETERequestToDeleteARecordOnEndpoint(String parameterVal, String endPointName) throws Throwable {
        response = CommonFunctions.performDeleteRequest(parameterVal,endPointName);
    }

    @Then("^User verifies expected response code \"([^\"]*)\"$")
    public void userVerifiesExpectedResponseCode(String expectedResponseCode) throws Throwable {
        log.info("Response code is :  '"+ response.getStatusCode());
        Assert.assertEquals(Integer.parseInt(expectedResponseCode), response.getStatusCode());
    }

    @Given("^User performs GET request and verifies the json schema \"([^\"]*)\"$")
    public void userPerformsGETRequestAndVerifiesTheJsonSchema(String jsonFileName) throws Throwable {
        CommonFunctions.responseSchemaValidation(jsonFileName);
    }


     /*
        Below approach implements to Deserialize the JSON reponse to POJO, So with the help of this approach
        we will not be using the JSON strings instead we will be making use of strongly typed strings
    */


    @Given("^User verifies GET request for endpoint \"([^\"]*)\" with param \"([^\"]*)\" and verifies the expected response \"([^\"]*)\"$")
    public void userVerifiesGETRequestForEndpointWithParamAndVerifiesTheExpectedResponse(String endPointName, String parameterVal, String expectedParamVal) throws Throwable {
        // Deserialize JSON object to POJO classes
        response = CommonFunctions.desearlizationToPOJOS(endPointName,parameterVal);
        var post = response.getBody().as(Posts.class);
        assertThat(post.getUserId(), equalTo(Integer.parseInt(expectedParamVal)));
    }

    @Given("^User verifies GET request for comments endpoint \"([^\"]*)\" with param \"([^\"]*)\" and verifies the expected response \"([^\"]*)\"$")
    public void userVerifiesGETRequestForCommentsEndpointWithParamAndVerifiesTheExpectedResponse(String endPointName, String parameterVal, String expectedParamVal) throws Throwable {
        // Deserialize JSON object to POJO classes
        response = CommonFunctions.desearlizationToPOJOS(endPointName,parameterVal);
        var comment = response.getBody().as(Comments.class);
        assertThat(comment.getEmail(), equalTo(expectedParamVal));
    }
}
