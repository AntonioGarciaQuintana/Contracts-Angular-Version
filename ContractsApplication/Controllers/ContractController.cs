using ContractsApplication.Models;
using ContractsApplication.Service.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContractsApplication.Controllers
{

    public class ContractController : Controller
    {
        private readonly IContractService ContractService;

        JsonSerializerSettings microsoftDateFormatSettings = new JsonSerializerSettings
        {
            DateFormatHandling = DateFormatHandling.MicrosoftDateFormat
        };


        public ContractController(IContractService contractService)
        {
            ContractService = contractService;
        }


        [HttpPost]
        [Route("")]
        public JsonResult SaveContract(Contracts model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(false, JsonRequestBehavior.AllowGet);
                }

                ContractService.SaveOrUpdateContract(model);
                return Json(true, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult GetPage(int page, int size, string sort, string search)
        {
            try
            {
                var result = ContractService.GetPages(page, size, sort, search);
                string microsoftJson = JsonConvert.SerializeObject(result, Formatting.None,new JsonSerializerSettings(){ ReferenceLoopHandling = ReferenceLoopHandling.Ignore});
                return new ContentResult { Content = microsoftJson, ContentType = "application/json" };
            }
            catch (Exception e)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpDelete]
        public ActionResult CancelContract(int id) {
            ContractService.DeleteContract(id);
            return Json(true);

        }

        [HttpGet]
        public ActionResult GetContract(int id) {
            try
            {
                var result = ContractService.GetContractById(id);
                string microsoftJson = JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore });
                return new ContentResult { Content = microsoftJson, ContentType = "application/json" };
            }
            catch (Exception) {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult GetAllContracts()
        {
            try
            {
                var result = ContractService.GetAllContracts();
                string microsoftJson = JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore });
                return new ContentResult { Content = microsoftJson, ContentType = "application/json" };
            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult SaveImageContract(ImageContract imageContract) {
            try
            {
                ContractService.SaveImageContract(imageContract);
                return Json(true);
            }
            catch (Exception e) {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult GetAllImageContracts(int idContract)
        {
            try
            {
                var result = ContractService.GetAllImagesContract(idContract);
                string microsoftJson = JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore });
                return new ContentResult { Content = microsoftJson, ContentType = "application/json" };
            }
            catch (Exception e)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpDelete]
        public ActionResult DeleteImageContract(int idImage)
        {
            ContractService.DeleteImageContract(idImage);
            return Json(true);

        }
        

        // GET: Contract
        public ActionResult Index()
        {
            return View();
        }
    }
}