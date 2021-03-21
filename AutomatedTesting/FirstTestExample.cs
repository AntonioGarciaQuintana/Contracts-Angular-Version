using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;

namespace AutomatedTesting
{
    [TestFixture]
    public class FirstTestExample
    {
        IWebDriver driver;
        ChromeOptions options;
        string urlProject = "";

        [SetUp]
        public void Initialize() {
            options = new ChromeOptions();
            options.AddArguments("start-maximized");
            driver = new ChromeDriver(options);

            //set url project;
            urlProject = "https://localhost:44300/#/dashboard";
        }

        [Test]
        public void TestMethod1()
        {
            //go to dashboard project
            driver.Navigate().GoToUrl(urlProject);
            Thread.Sleep(5000);
            driver.Quit();
            Assert.True(true);

        }
    }
}
