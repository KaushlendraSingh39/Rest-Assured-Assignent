package helper;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.apache.commons.lang3.StringUtils;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.CoreMatchers.hasItem;

public class CommonFunctions {

    // Create a Logger with class name CommonFunctions
    private static Logger log = LoggerFactory.getLogger(CommonFunctions.class.getName());

    // Created a private baseURI for the default URL
    private static String baseURI = "https://jsonplaceholder.typicode.com/";

    // I have also setup the Fake JSON server in my local machine, as above mentioned URL was not working
    // as expected for POST,PUT methods
//    private static String baseURI = "http://localhost:3000/";


    /**
     * validateAllGetsRequest to execute the API for GET
     * @param endPointName -
     * @param expectedParamName
     * @param expectedParamVal
     */
    public static void validateAllGetsRequest(String endPointName, String expectedParamName, String expectedParamVal){
        try {
                Response response = given()
                        .contentType(ContentType.JSON)
                        .when()
                        .get(baseURI + endPointName)
                        .then()
                        .extract().response();

                if (response.getStatusCode() == 200)
                    log.info("Test Case passed with status code '"+ response.getStatusCode() + "'. ");
                else
                    log.error("Test Case failed with status code '" + response.getStatusCode() + "'. ");
        
                Assert.assertEquals(200, response.getStatusCode());
                Assert.assertEquals("HTTP/1.1 200 OK", response.getStatusLine());
                Assert.assertEquals(expectedParamVal, response.jsonPath().getString(expectedParamName));                
        }catch (Exception exception){
            exception.getMessage();
        }
    }

    /**
     * Executing API with query params being passed as the input of it
     * @param endPointName
     * @param parameterName
     * @param parameterVal
     * @param expectedParamName
     * @param expectedParamVal
     */
    public static void performGetsRequestQueryParam(String endPointName, String parameterName, String parameterVal, String expectedParamName, String expectedParamVal){
        try {
            given()
                    .contentType(ContentType.JSON)
                    .queryParam(parameterName, parameterVal).
                    when()
                    .get(baseURI + endPointName).
                    then()
                    .body(expectedParamName, hasItem(expectedParamVal));
        }catch (Exception exception){
            exception.getMessage();
        }
    }

    /**
     * performPostRequest to execute the API for POST and it also validates the response body and response code
     * @param paramValArray
     * @param endPointName
     */
    public static void performPostRequest(String[] paramValArray, String endPointName) {
        HashMap<String, String> postContent = new HashMap<>();
        for (String items : paramValArray) {
            String postBodyData[] = items.split(":");
            String postBodyKey = postBodyData[0].trim();
            String postBodyVal = postBodyData[1].trim();

            if (StringUtils.isNumeric(postBodyVal)) {
                int intPostBodyVal = Integer.parseInt(postBodyVal);
                postContent.put(postBodyKey, postBodyVal);
            } else
                postContent.put(postBodyKey, postBodyVal);
        }

        Response response = given()
                .header("Content-type", "application/json")
                .and()
                .body(postContent)
                .when()
                .post(baseURI + endPointName)
                .then()
                .extract().response();

        if (response.getStatusCode() == 201)
            log.info("Test Case passed with status code '" + response.getStatusCode() + "'. ");
        else
            log.error("Test Case failed with status code '" + response.getStatusCode() + "'. ");

        Assert.assertEquals(201, response.statusCode());
        Assert.assertEquals("HTTP/1.1 201 Created", response.getStatusLine());

        for (Map.Entry<String, String> field : postContent.entrySet()) {
            if (StringUtils.isNumeric(field.getValue())) {
                Assert.assertEquals(Integer.parseInt(field.getValue()), response.jsonPath().getInt(field.getKey()));
            } else
                Assert.assertEquals(field.getValue(), response.jsonPath().getString(field.getKey()));
        }
    }

    /**
     * performPutRequest to execute the API for PUT and it also validates the response body and response code
     * @param paramValArray
     * @param parameterVal
     * @param endPointName
     */
    public static void performPutRequest(String[] paramValArray, String parameterVal, String endPointName) {
        try {
            HashMap<String, String> putContent = new HashMap<>();
            for (String items : paramValArray) {
                String putBodyData[] = items.split(":");
                String putBodyKey = putBodyData[0].trim();
                String putBodyVal = putBodyData[1].trim();

                putContent.put(putBodyKey, putBodyVal);
            }
            Response response = given()
                    .header("Content-type", "application/json")
                    .and()
                    .body(putContent)
                    .when()
                    .put(baseURI + endPointName + "/" + parameterVal)
                    .then()
                    .extract().response();

            if (response.getStatusCode() == 200)
                log.info("Test Case passed with status code '" + response.getStatusCode() + "'. ");
            else
                log.error("Test Case failed with status code '" + response.getStatusCode() + "'. ");

            Assert.assertEquals(200, response.statusCode());
            Assert.assertEquals("HTTP/1.1 200 OK", response.getStatusLine());

            for (Map.Entry<String, String> field : putContent.entrySet()) {
                if (StringUtils.isNumeric(field.getValue())) {
                    Assert.assertEquals(Integer.parseInt(field.getValue()), response.jsonPath().getInt(field.getKey()));
                } else
                    Assert.assertEquals(field.getValue(), response.jsonPath().getString(field.getKey()));
            }
        }catch (Exception exception){
            exception.getMessage();
        }

    }

    /**
     * performPatchRequest to execute the API for PATCH and it also validates the response body and response code
     * @param paramValArray
     * @param parameterVal
     * @param endPointName
     */
    public static void performPatchRequest(String[] paramValArray, String parameterVal, String endPointName) {
        try {
            HashMap<String, String> patchContent = new HashMap<>();
            for (String items : paramValArray) {
                String patchBodyData[] = items.split(":");
                String patchBodyKey = patchBodyData[0].trim();
                String patchBodyVal = patchBodyData[1].trim();

                patchContent.put(patchBodyKey, patchBodyVal);
            }
            Response response = given()
                    .header("Content-type", "application/json")
                    .and()
                    .body(patchContent)
                    .when()
                    .patch(baseURI + endPointName + "/" + parameterVal)
                    .then()
                    .extract().response();

            if (response.getStatusCode() == 200)
                log.info("Test Case passed with status code '" + response.getStatusCode() + "'. ");
            else
                log.error("Test Case failed with status code '" + response.getStatusCode() + "'. ");

            Assert.assertEquals(200, response.statusCode());
            Assert.assertEquals("HTTP/1.1 200 OK", response.getStatusLine());

            for (Map.Entry<String, String> field : patchContent.entrySet()) {
                if (StringUtils.isNumeric(field.getValue())) {
                    Assert.assertEquals(Integer.parseInt(field.getValue()), response.jsonPath().getInt(field.getKey()));
                } else
                    Assert.assertEquals(field.getValue(), response.jsonPath().getString(field.getKey()));
            }
        }catch (Exception exception){
            exception.getMessage();
        }

    }

    /**
     * performDeleteRequest to execute the API for DELETE
     * @param parameterVal
     * @param endPointName
     * @return Response response
     */
    public static Response performDeleteRequest(String parameterVal, String endPointName) {
        Response response = given()
                    .header("Content-type", "application/json")
                    .when()
                    .delete(baseURI + endPointName + "/" + parameterVal)
                    .then()
                    .extract().response();
        return response;
    }

    /** responseSchemaValidation - This Rest Assured JSON Schema Validator is to validate the Response Schema Validation
     * validateAgainstJsonFile
     * @param jsonFileName
     */


    public static void responseSchemaValidation(String jsonFileName) {
        given()
                .contentType(ContentType.JSON)
                .when()
                .get(baseURI+"posts/1")
                .then()
                .assertThat()
                .body(matchesJsonSchemaInClasspath(jsonFileName));
    }

    /**
     * desearlizationToPOJOS is to initializae the POJO Classes via tests
     * @param endPointName
     * @param parameterVal
     * @return Response response
     */

    public static Response desearlizationToPOJOS(String endPointName, String parameterVal){
        Response response = given()
                .contentType(ContentType.JSON)
                .when()
                .get(baseURI + endPointName + "/" + parameterVal)
                .then()
                .extract().response();
        return response;

    }
    
}




