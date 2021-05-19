$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Verify different methods of Rest API using Rest assured",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 80,
  "name": "Validate the json schema for the GET request for test case \"\u003ctestCaseName\u003e\"",
  "description": "",
  "id": ";validate-the-json-schema-for-the-get-request-for-test-case-\"\u003ctestcasename\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@jsonschemavalidation"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "User performs GET request and verifies the json schema \"\u003cjsonFileName\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": ";validate-the-json-schema-for-the-get-request-for-test-case-\"\u003ctestcasename\u003e\";",
  "rows": [
    {
      "cells": [
        "testCaseName",
        "jsonFileName"
      ],
      "line": 83,
      "id": ";validate-the-json-schema-for-the-get-request-for-test-case-\"\u003ctestcasename\u003e\";;1"
    },
    {
      "cells": [
        "TestCase_Positive_26",
        "JsonSchema.json"
      ],
      "line": 84,
      "id": ";validate-the-json-schema-for-the-get-request-for-test-case-\"\u003ctestcasename\u003e\";;2"
    },
    {
      "cells": [
        "TestCase_Negative_27",
        "IncorrectJsonSchema.json"
      ],
      "line": 85,
      "id": ";validate-the-json-schema-for-the-get-request-for-test-case-\"\u003ctestcasename\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 84,
  "name": "Validate the json schema for the GET request for test case \"TestCase_Positive_26\"",
  "description": "",
  "id": ";validate-the-json-schema-for-the-get-request-for-test-case-\"\u003ctestcasename\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@jsonschemavalidation"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "User performs GET request and verifies the json schema \"JsonSchema.json\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "JsonSchema.json",
      "offset": 56
    }
  ],
  "location": "TestStepdefs.userPerformsGETRequestAndVerifiesTheJsonSchema(String)"
});
formatter.result({
  "duration": 9327416900,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Validate the json schema for the GET request for test case \"TestCase_Negative_27\"",
  "description": "",
  "id": ";validate-the-json-schema-for-the-get-request-for-test-case-\"\u003ctestcasename\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@jsonschemavalidation"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "User performs GET request and verifies the json schema \"IncorrectJsonSchema.json\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "IncorrectJsonSchema.json",
      "offset": 56
    }
  ],
  "location": "TestStepdefs.userPerformsGETRequestAndVerifiesTheJsonSchema(String)"
});
formatter.result({
  "duration": 299082700,
  "error_message": "io.restassured.module.jsv.JsonSchemaValidationException: com.github.fge.jsonschema.core.exceptions.InvalidSchemaException: fatal: invalid JSON Schema, cannot continue\nSyntax errors:\n[ {\r\n  \"level\" : \"warning\",\r\n  \"schema\" : {\r\n    \"loadingURI\" : \"file:/C:/Users/Asus/IdeaProjects/RestAssuredAssignment/target/test-classes/IncorrectJsonSchema.json#\",\r\n    \"pointer\" : \"\"\r\n  },\r\n  \"domain\" : \"syntax\",\r\n  \"message\" : \"the following keywords are unknown and will be ignored: [body, userId]\",\r\n  \"ignored\" : [ \"body\", \"userId\" ]\r\n}, {\r\n  \"level\" : \"error\",\r\n  \"message\" : \"value has incorrect type (found integer, expected one of [string])\",\r\n  \"domain\" : \"syntax\",\r\n  \"schema\" : {\r\n    \"loadingURI\" : \"file:/C:/Users/Asus/IdeaProjects/RestAssuredAssignment/target/test-classes/IncorrectJsonSchema.json#\",\r\n    \"pointer\" : \"\"\r\n  },\r\n  \"keyword\" : \"id\",\r\n  \"found\" : \"integer\",\r\n  \"expected\" : [ \"string\" ]\r\n} ]\n    level: \"fatal\"\n\r\n\tat io.restassured.module.jsv.JsonSchemaValidator.matchesSafely(JsonSchemaValidator.java:233)\r\n\tat io.restassured.module.jsv.JsonSchemaValidator.matchesSafely(JsonSchemaValidator.java:75)\r\n\tat org.hamcrest.TypeSafeMatcher.matches(TypeSafeMatcher.java:67)\r\n\tat org.hamcrest.Matcher$matches.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcher.validate(BodyMatcher.groovy:76)\r\n\tat io.restassured.assertion.BodyMatcher$validate$0.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcherGroup$_validate_closure2.doCall(BodyMatcherGroup.groovy:47)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:263)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.Closure.call(Closure.java:412)\r\n\tat groovy.lang.Closure.call(Closure.java:428)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3562)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3547)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3647)\r\n\tat org.codehaus.groovy.runtime.dgm$101.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce.invoke(PojoMetaMethodSite.java:247)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite.call(PojoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.assertion.BodyMatcherGroup.validate(BodyMatcherGroup.groovy:47)\r\n\tat io.restassured.assertion.BodyMatcherGroup$validate$3.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:480)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:98)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:238)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:293)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat helper.CommonFunctions.validateAgainstJsonFile(CommonFunctions.java:193)\r\n\tat stepsdefinitions.TestStepdefs.userPerformsGETRequestAndVerifiesTheJsonSchema(TestStepdefs.java:89)\r\n\tat ✽.Given User performs GET request and verifies the json schema \"IncorrectJsonSchema.json\"(Test.feature:81)\r\nCaused by: com.github.fge.jsonschema.core.exceptions.InvalidSchemaException: fatal: invalid JSON Schema, cannot continue\nSyntax errors:\n[ {\r\n  \"level\" : \"warning\",\r\n  \"schema\" : {\r\n    \"loadingURI\" : \"file:/C:/Users/Asus/IdeaProjects/RestAssuredAssignment/target/test-classes/IncorrectJsonSchema.json#\",\r\n    \"pointer\" : \"\"\r\n  },\r\n  \"domain\" : \"syntax\",\r\n  \"message\" : \"the following keywords are unknown and will be ignored: [body, userId]\",\r\n  \"ignored\" : [ \"body\", \"userId\" ]\r\n}, {\r\n  \"level\" : \"error\",\r\n  \"message\" : \"value has incorrect type (found integer, expected one of [string])\",\r\n  \"domain\" : \"syntax\",\r\n  \"schema\" : {\r\n    \"loadingURI\" : \"file:/C:/Users/Asus/IdeaProjects/RestAssuredAssignment/target/test-classes/IncorrectJsonSchema.json#\",\r\n    \"pointer\" : \"\"\r\n  },\r\n  \"keyword\" : \"id\",\r\n  \"found\" : \"integer\",\r\n  \"expected\" : [ \"string\" ]\r\n} ]\n    level: \"fatal\"\n\r\n\tat com.github.fge.jsonschema.processors.validation.InstanceValidator.process(InstanceValidator.java:114)\r\n\tat com.github.fge.jsonschema.processors.validation.ValidationProcessor.process(ValidationProcessor.java:56)\r\n\tat com.github.fge.jsonschema.processors.validation.ValidationProcessor.process(ValidationProcessor.java:34)\r\n\tat com.github.fge.jsonschema.core.processing.ProcessingResult.of(ProcessingResult.java:79)\r\n\tat com.github.fge.jsonschema.main.JsonSchemaImpl.doValidate(JsonSchemaImpl.java:77)\r\n\tat com.github.fge.jsonschema.main.JsonSchemaImpl.validate(JsonSchemaImpl.java:100)\r\n\tat com.github.fge.jsonschema.main.JsonSchemaImpl.validate(JsonSchemaImpl.java:110)\r\n\tat io.restassured.module.jsv.JsonSchemaValidator.matchesSafely(JsonSchemaValidator.java:227)\r\n\tat io.restassured.module.jsv.JsonSchemaValidator.matchesSafely(JsonSchemaValidator.java:75)\r\n\tat org.hamcrest.TypeSafeMatcher.matches(TypeSafeMatcher.java:67)\r\n\tat org.hamcrest.Matcher$matches.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcher.validate(BodyMatcher.groovy:76)\r\n\tat io.restassured.assertion.BodyMatcher$validate$0.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcherGroup$_validate_closure2.doCall(BodyMatcherGroup.groovy:47)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:263)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.Closure.call(Closure.java:412)\r\n\tat groovy.lang.Closure.call(Closure.java:428)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3562)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3547)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3647)\r\n\tat org.codehaus.groovy.runtime.dgm$101.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce.invoke(PojoMetaMethodSite.java:247)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite.call(PojoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.assertion.BodyMatcherGroup.validate(BodyMatcherGroup.groovy:47)\r\n\tat io.restassured.assertion.BodyMatcherGroup$validate$3.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:480)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:98)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:238)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:293)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat helper.CommonFunctions.validateAgainstJsonFile(CommonFunctions.java:193)\r\n\tat stepsdefinitions.TestStepdefs.userPerformsGETRequestAndVerifiesTheJsonSchema(TestStepdefs.java:89)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});