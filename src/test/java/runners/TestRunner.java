package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/features"},  //This location has all the BDD scenarios
        tags = {"@pojo"}, //We can specify which BDD tests that we need to execute for example : @smoke or @regression
        glue = {"stepsdefinitions"}, // This steps contains the link between our BDD steps and its defintion
        plugin = {"pretty", "html:src/target/cucumber-html-report", "json:src/target/cucumbertestreport.json"}
        //Specifying pretty as a format option ensure that HTML report will be generated.
        //When we specify html:src/target/ - It will generate the HTML report

        //When we specify json:src/target/cucumbertestreport.json - It will generate the JSON
        //report inside the folder, in the target folder of the maven project and this file will be very helpful when
        // we are planning to interate it with Jenkins tools, with the help of this file we can generate a cucumber
        // test execution summary report file.
)
public class TestRunner {
}
